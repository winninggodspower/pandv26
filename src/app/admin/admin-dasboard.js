"use client"

import { useMemo, useState } from "react"
import AdminSearchInput from "./_components/admin-search-input"

export default function AdminDashboard({ rsvps = [] }) {
  const [search, setSearch] = useState("")

  const filteredRsvps = useMemo(() => {
    if (!search.trim()) return rsvps

    const term = search.toLowerCase()
    return rsvps.filter((guest) =>
      [
        guest.fullName,
        guest.email,
        guest.plusOneName,
        guest.plusOneEmail,
        guest.relationship,
        guest.ticketId,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term),
    )
  }, [rsvps, search])

  const downloadCsv = () => {
    const headers = ["Name", "Email", "Plus One Name", "Plus One Email", "Relationship", "Children", "Ticket ID"]
    const rows = filteredRsvps.map((guest) =>
      [
        guest.fullName,
        guest.email,
        guest.plusOneName,
        guest.plusOneEmail,
        guest.relationship,
        guest.childrenCount,
        guest.ticketId,
      ]
        .map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`)
        .join(","),
    )

    const blob = new Blob([[headers.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")

    link.href = url
    link.download = "rsvp-database.csv"
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <main className="flex-1 px-6 py-8 md:px-10">
      <AdminSearchInput value={search} onChange={(event) => setSearch(event.target.value)} />

      <div className="overflow-hidden rounded bg-white">
        <div className="overflow-x-auto p-4">
          <table className="w-full min-w-[900px] border-separate border-spacing-y-3 text-left text-xs text-[#222]">
            <thead>
              <tr className="text-xs uppercase text-black">
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Email</th>
                <th className="px-4 font-medium">Plus One Name</th>
                <th className="px-4 font-medium">Plus Email</th>
                <th className="px-4 font-medium">Relationship With Couple</th>
                <th className="px-4 font-medium">Children</th>
                <th className="px-4 font-medium">Ticket ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredRsvps.length === 0 ? (
                <tr>
                  <td colSpan={7} className="rounded bg-[#efefef] px-4 py-4 text-center text-sm text-[#555]">
                    No RSVP records found.
                  </td>
                </tr>
              ) : (
                filteredRsvps.map((guest) => (
                  <tr key={guest.id} className="rounded bg-[#D6D6D6]">
                    <td className="px-4 py-4">{guest.fullName}</td>
                    <td className="px-4 py-4">{guest.email}</td>
                    <td className="px-4 py-4">{guest.plusOneName || "None"}</td>
                    <td className="px-4 py-4">{guest.plusOneEmail || "None"}</td>
                    <td className="px-4 py-4">{guest.relationship || "N/A"}</td>
                    <td className="px-4 py-4">{guest.childrenCount}</td>
                    <td className="px-4 py-4">PV{guest.ticketId}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end px-4 pb-4">
          <button
            onClick={downloadCsv}
            className="rounded bg-primary px-8 py-2 text-xs font-semibold text-white hover:opacity-90"
          >
            EXPORT
          </button>
        </div>
      </div>
    </main>
  )
}
