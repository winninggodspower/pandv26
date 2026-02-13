import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/api/auth/[...nextauth]/route"
import AdminDashboard from "./admin-dasboard"
import { getAllRsvps } from "./actions"

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const rsvps = await getAllRsvps()

  return <AdminDashboard rsvps={rsvps} />
}
