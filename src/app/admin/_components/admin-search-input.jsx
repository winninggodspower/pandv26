"use client"

import { Search } from "lucide-react"

export default function AdminSearchInput({ value, onChange, placeholder = "Search", className = "" }) {
  return (
    <div className={`mb-10 flex w-full items-center gap-3 rounded bg-white p-3 ps-4 ${className}`.trim()}>
      <Search className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <input
        className="w-full bg-transparent text-sm text-[#333] outline-none"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
