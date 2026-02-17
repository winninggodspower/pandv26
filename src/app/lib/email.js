import nodemailer from "nodemailer"
import { buildRsvpEmailHtml, buildRsvpEmailText } from "./rsvp-email-template"

function getZeptoConfig() {
  const host = process.env.ZEPTO_SMTP_HOST || "smtp.zeptomail.com"
  const port = Number(process.env.ZEPTO_SMTP_PORT || 587)
  const user = process.env.ZEPTO_SMTP_USER
  const pass = process.env.ZEPTO_SMTP_PASS
  const from = process.env.ZEPTO_FROM

  if (!user || !pass || !from) {
    throw new Error("ZeptoMail is not configured. Set ZEPTO_SMTP_USER, ZEPTO_SMTP_PASS, and ZEPTO_FROM.")
  }

  return { host, port, user, pass, from }
}

export async function sendRsvpConfirmationEmail({ toEmail, recipientName, recipientStatus = "Invitee", childrenCount, ticketNumber }) {
  if (!toEmail) return

  const { host, port, user, pass, from } = getZeptoConfig()
  const html = buildRsvpEmailHtml({ recipientName, recipientStatus, childrenCount, ticketNumber })
  const text = buildRsvpEmailText({ recipientName, recipientStatus, childrenCount, ticketNumber })

  const transporter = nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass,
    },
  })

  await transporter.sendMail({
    from,
    to: toEmail,
    subject: "Your RSVP Confirmation - Praise & Victor",
    html,
    text,
  })
}
