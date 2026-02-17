"use server"
import { object, string, number, boolean } from "yup"
import mongoose from "mongoose"
import dbConnect from "./lib/mongoose"
import RSVP from "./models/rsvp"
import { sendRsvpConfirmationEmail } from "./lib/email"

const rsvpSchema = object({
  fullName: string().trim().required("Full name is required"),
  email: string().trim().email("Valid email is required").when("isAttending", {
    is: true,
    then: (schema) => schema.required("Email is required"),
    otherwise: (schema) => schema.nullable(),
  }),
  isAttending: boolean().required("Please select attendance"),
  relationship: string().trim().when("isAttending", {
    is: true,
    then: (schema) => schema.required("Relationship is required"),
    otherwise: (schema) => schema.nullable(),
  }),
  bringingPlusOne: boolean(),
  plusOneName: string().when(['bringingPlusOne', 'isAttending'], {
    is: (bringingPlusOne, isAttending) => Boolean(bringingPlusOne && isAttending),
    then: (schema) => schema.trim().required("Plus one name is required"),
    otherwise: (schema) => schema.trim().nullable()
  }),
  plusOneEmail: string().when(['bringingPlusOne', 'isAttending'], {
    is: (bringingPlusOne, isAttending) => Boolean(bringingPlusOne && isAttending),
    then: (schema) => schema.trim().email("Valid email is required").required("Plus one email is required"),
    otherwise: (schema) => schema.trim().nullable()
  }),
  bringingChildren: boolean(),
  childrenCount: number().when(['bringingChildren', 'isAttending'], {
    is: (bringingChildren, isAttending) => Boolean(bringingChildren && isAttending),
    then: (schema) => schema.required("Number of children is required").min(1, "Must bring at least 1 child"),
    otherwise: (schema) => schema.nullable()
  }),
  sendCashGift: boolean(),
  cashGiftAmount: string().when('sendCashGift', {
    is: true,
    then: (schema) => schema.trim().required("Cash gift amount is required"),
    otherwise: (schema) => schema.trim().nullable()
  }),
})

async function sendRsvpEmailsInBackground({ validatedData, ticketNumber }) {
  const sentEmails = new Set()
  const childrenCount = Number(validatedData.childrenCount ?? 0)

  const sendEmailToRecipient = async (toEmail, recipientName, recipientStatus) => {
    if (!toEmail) return

    const normalizedEmail = toEmail.trim().toLowerCase()
    if (!normalizedEmail || sentEmails.has(normalizedEmail)) return

    sentEmails.add(normalizedEmail)

    try {
      await sendRsvpConfirmationEmail({
        toEmail,
        recipientName,
        recipientStatus,
        childrenCount,
        ticketNumber,
      })
    } catch (emailError) {
      console.error(`RSVP email send failed for ${toEmail}:`, emailError)
    }
  }

  await sendEmailToRecipient(validatedData.email, validatedData.fullName, "Invitee")
  await sendEmailToRecipient(validatedData.plusOneEmail, validatedData.plusOneName, "Plus One")
}

export async function submitRSVP(formDataObj) {
  try {
    const validatedData = await rsvpSchema.validate(formDataObj, { abortEarly: false })
    console.log("RSVP Validation successful:", validatedData)

    // Connect to MongoDB
    await dbConnect()

    console.log("Connected to database:", mongoose.connection.name)

    // Save to database
    const rsvp = new RSVP(validatedData)
    const savedDoc = await rsvp.save()

    console.log("Saved document:", savedDoc)

    const ticketNumber = `PV${savedDoc._id.toString().slice(-5).toUpperCase()}`

    void sendRsvpEmailsInBackground({ validatedData, ticketNumber })

    return { success: true, message: "RSVP submitted successfully!" }
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Array.isArray(error.inner) && error.inner.length > 0
        ? error.inner.map((err) => err.message)
        : [error.message]
      console.error("Validation errors:", errors)
      return { success: false, errors }
    }
    // Handle other types of errors (e.g., database errors)
    console.error("Server action error:", error)
    return { success: false, errors: ["An unexpected error occurred."] }
  }
}
