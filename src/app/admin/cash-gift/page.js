import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/api/auth/[...nextauth]/route"
import { getCashGiftRsvps } from "../actions"
import CashGiftDashboard from "./cash-gift-dashboard"

export default async function CashGiftPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const cashGifts = await getCashGiftRsvps()

  return <CashGiftDashboard cashGifts={cashGifts} />
}
