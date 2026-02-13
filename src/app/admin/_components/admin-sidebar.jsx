"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Database", href: "/admin" },
  { label: "Cash Gift", href: "/admin/cash-gift" },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[270px] shrink-0 bg-[#38332E] text-white">
      <div className="py-6">
        <div className="mb-4 flex flex-col items-center px-4">
          <div className="mb-4 rounded-full border-4 border-primary p-3">
            <Image src="/hero-image.png" alt="Couple" width={200} height={200} className="h-[140px] w-[140px] rounded-full object-cover" />
          </div>
          <h2 className="font-inspo text-4xl text-primary">Praise & Victor</h2>
        </div>

        <nav className="mt-8 space-y-2 pe-4 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-center ${isActive ? "bg-[#5f4b2e] text-white" : "text-[#d9d4cb]"}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
