import mongoose from "mongoose"

const rsvpSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, default: "" },
    isAttending: { type: Boolean, required: true },
    relationship: { type: String, default: "" },
    bringingPlusOne: { type: Boolean, default: false },
    plusOneName: { type: String },
    plusOneEmail: { type: String },
    bringingChildren: { type: Boolean, default: false },
    childrenCount: { type: Number, default: 0 },
    sendCashGift: { type: Boolean, default: false },
    cashGiftAmount: { type: String },
  },
  { timestamps: true }
)

const RSVP = mongoose.models.RSVP || mongoose.model("RSVP", rsvpSchema)

export default RSVP
