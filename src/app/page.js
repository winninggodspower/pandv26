"use client"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5Av09OWbd6vw0wBzmDX8H6BPXpr1Ps.png)',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          {/* Top Text */}
          <div className="mb-12">
            <p className="text-sm md:text-base tracking-widest text-white uppercase letter-spacing font-light">
              Together with their families
            </p>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl text-white font-light italic mb-4"
              style={{
                fontFamily: 'Georgia, serif',
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              Praise & Victor
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-sm md:text-base tracking-widest text-white uppercase font-light letter-spacing">
              Request the pleasure of your company
            </p>
          </div>

          {/* Date and Location */}
          <div className="space-y-2">
            <p
              className="text-2xl md:text-3xl font-light"
              style={{
                color: '#D4AF37',
                textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
              }}
            >
              June 26th, 2026
            </p>
            <p className="text-sm md:text-base text-white tracking-widest uppercase font-light">
              Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  )
}
