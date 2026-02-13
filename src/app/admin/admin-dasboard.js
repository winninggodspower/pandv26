"use client"

import { useMemo, useState } from "react"
import Image from "next/image"

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
    <div className="min-h-screen bg-[#ece9e3] p-2 md:p-4">
      <div className="mx-auto flex max-w-[1400px] overflow-hidden border border-[#ded8ce] bg-[#f1efe9]">
        <aside className="w-[190px] shrink-0 bg-[#2f2926] px-4 py-6 text-white">
          <div className="mb-4 flex flex-col items-center">
            <div className="mb-4 rounded-full border-4 border-[#D2962D] p-1">
              <Image src="/hero-image.png" alt="Couple" width={140} height={140} className="h-[140px] w-[140px] rounded-full object-cover" />
            </div>
            <h2 className="font-[var(--font-inspiration)] text-4xl text-[#D2962D]">Praise & Victor</h2>
          </div>

          <nav className="mt-8 space-y-2 text-sm">
            <div className="bg-[#5f4b2e] px-4 py-3 text-center">Database</div>
            <div className="px-4 py-3 text-center text-[#d9d4cb]">Cash Gift</div>
          </nav>
        </aside>

        <main className="flex-1 px-6 py-8 md:px-10">
          <div className="mb-8 w-full rounded bg-[#f8f8f8] p-3">
            <input
              className="w-full bg-transparent text-sm text-[#333] outline-none"
              type="search"
              placeholder="🔎  Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="overflow-hidden border border-[#e2e2e2] bg-white">
            <div className="overflow-x-auto p-4">
              <table className="w-full min-w-[900px] border-separate border-spacing-y-3 text-left text-xs text-[#222]">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-[#343434]">
                    <th className="px-4">Name</th>
                    <th className="px-4">Email</th>
                    <th className="px-4">Plus One Name</th>
                    <th className="px-4">Plus Email</th>
                    <th className="px-4">Relationship With Couple</th>
                    <th className="px-4">Children</th>
                    <th className="px-4">Ticket ID</th>
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
                      <tr key={guest.id} className="rounded bg-[#efefef]">
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
                className="rounded bg-[#D6AE63] px-8 py-2 text-xs font-semibold text-white hover:opacity-90"
              >
                EXPORT
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
