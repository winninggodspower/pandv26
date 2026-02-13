'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#403F3F] text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center space-y-6">
          {/* Names with Heart */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <span className="text-4xl md:text-6xl font-light font-inspo">P</span>
            <Heart className="w-6 h-6 md:w-8 md:h-8 fill-primary text-primary" />
            <span className="text-4xl md:text-6xl font-light font-inspo">V</span>
          </div>

          {/* Date and Location */}
          <p className="text-sm md:text-base font-light tracking-wide">
            June 20th, 2026, Lagos, Nigeria
          </p>

          {/* Divider */}
          <div className="h-px bg-white/20 my-6 md:my-8 mx-auto max-w-md"></div>

          {/* Contact Section */}
          <div className="space-y-2">
            <p className="text-xs md:text-sm tracking-widest uppercase font-light">
              Questions? Contact us at
            </p>
            <p className="text-sm md:text-base font-light">
              P&V2026.com
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 my-6 md:my-8 mx-auto max-w-md"></div>

          {/* Footer Message */}
          <p className="text-xs md:text-sm font-light tracking-wide">
            Made with love for praise and Victor's special day
          </p>
        </div>
      </div>
    </footer>
  )
}
