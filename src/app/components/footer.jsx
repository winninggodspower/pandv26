'use client'


export default function Footer() {
  return (
    <footer className="bg-[#38332E] text-white pt-20 pb-14 md:pt-10 md:pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="text-center">
          {/* Names with Heart */}
          <div className="flex items-center justify-center gap-4 md:gap-8 font-junge">
            <span className="text-4xl md:text-6xl">P</span>
             <img className='h-11' src={'/solar-heart-shine.svg'} />
            <span className="text-4xl md:text-6xl">V</span>
          </div>

          {/* Date and Location */}
          <p className="text-sm md:text-base">
            June 20th, 2026. Lagos, Nigeria
          </p>


          {/* Contact Section */}
          <div className="space-y-1 mt-9 md:mt-10">
            <p className="text-sm md:text-base uppercase font-medium">
              Questions? Contact us at
            </p>
            <p className="text-sm md:text-base">
              P&V2026.com
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 my-6 md:my-8 mx-auto md:max-w-7xl"></div>

          {/* Footer Message */}
          <p className="text-xs md:text-sm tracking-wide px-2">
            Made with love for praise and Victor's special day
          </p>
        </div>
      </div>
    </footer>
  )
}
