"use client"

import { useMemo, useState } from "react"
import AdminSearchInput from "../_components/admin-search-input"

function formatDateTime(value) {
  if (!value) return "N/A"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "N/A"
  return date.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

export default function CashGiftDashboard({ cashGifts = [] }) {
  const [search, setSearch] = useState("")

  const filteredCashGifts = useMemo(() => {
    if (!search.trim()) return cashGifts

    const term = search.toLowerCase()
    return cashGifts.filter((item) =>
      [item.fullName, item.cashGiftAmount, formatDateTime(item.createdAt)].join(" ").toLowerCase().includes(term),
    )
  }, [cashGifts, search])

  const downloadCsv = () => {
    const headers = ["Name", "Amount", "Date/Time"]
    const rows = filteredCashGifts.map((item) =>
      [item.fullName, item.cashGiftAmount, formatDateTime(item.createdAt)]
        .map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`)
        .join(","),
    )

    const blob = new Blob([[headers.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")

    link.href = url
    link.download = "cash-gifts.csv"
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <main className="flex-1 px-6 py-8 md:px-10">
      <AdminSearchInput value={search} onChange={(event) => setSearch(event.target.value)} />

      <div className="overflow-hidden rounded bg-white">
        <div className="overflow-x-auto p-4">
          <table className="w-full min-w-[700px] border-separate border-spacing-y-3 text-left text-xs text-[#222]">
            <thead>
              <tr className="text-xs uppercase text-black">
                <th className="px-4 font-medium">Name</th>
                <th className="px-4 font-medium">Amount</th>
                <th className="px-4 font-medium">Date / Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredCashGifts.length === 0 ? (
                <tr>
                  <td colSpan={3} className="rounded bg-[#efefef] px-4 py-4 text-center text-sm text-[#555]">
                    No cash gift records found.
                  </td>
                </tr>
              ) : (
                filteredCashGifts.map((item) => (
                  <tr key={item.id} className="rounded bg-[#D6D6D6]">
                    <td className="px-4 py-4">{item.fullName || "N/A"}</td>
                    <td className="px-4 py-4">{item.cashGiftAmount || "N/A"}</td>
                    <td className="px-4 py-4">{formatDateTime(item.createdAt)}</td>
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
