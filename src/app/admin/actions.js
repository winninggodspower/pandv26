"use server"

import dbConnect from "@/lib/mongoose"
import RSVP from "@/models/rsvp"

export async function getAllRsvps() {
  await dbConnect()

  const rsvps = await RSVP.find({}).sort({ createdAt: -1 }).lean()

  return rsvps.map((rsvp) => ({
    id: rsvp._id.toString(),
    fullName: rsvp.fullName ?? "",
    email: rsvp.email ?? "",
    plusOneName: rsvp.plusOneName ?? "None",
    plusOneEmail: rsvp.plusOneEmail ?? "None",
    relationship: rsvp.relationship ?? "",
    childrenCount: Number(rsvp.childrenCount ?? 0),
    ticketId: rsvp._id.toString().slice(-5).toUpperCase(),
    isAttending: Boolean(rsvp.isAttending),
    createdAt: rsvp.createdAt ? new Date(rsvp.createdAt).toISOString() : null,
  }))
}
