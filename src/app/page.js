"use client"

import { ArrowDown } from "lucide-react";
import WeddingDetails from "./components/wedding-details";
import RSVPForm from "./components/rsvp-form";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFBF8]">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-image.png')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="absolute inset-x-4 inset-y-2 md:inset-7 md:inset-y-6 border border-primary z-10 flex items-center justify-center">

          <div className="relative h-full text-center px-6 max-w-2xl mx-auto  flex flex-col justify-between py-2.5 md:py-6 ">
            {/* Top Text */}
            <div className="mb-12">
              <p className="text-sm md:text-base tracking-wide md:tracking-[0.35em] text-white uppercase  font-light">
                Together with their families
              </p>
            </div>

            <div className="mb-10">
              {/* Main Heading */}
              <div className="mb-8">
                <h1
                  className="text-6xl md:text-7xl lg:text-9xl text-white font-light italic mb-2 font-inspo"
                >
                  Praise & Victor
                </h1>
                <p className="text-sm md:text-base lg:text-lg tracking-[0.15em] text-white uppercase ">
                  Request the pleasure of your company
                </p>
              </div>

              {/* Date and Location */}
              <div className="space-y-1 mt-28">
                <p
                  className="text-sm md:text-3xl font-light text-primary font-junge">
                  June 26th, 2026
                </p>
                <p className="text-sm md:text-lg text-white tracking-widest uppercase font-light">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-2 md:bottom-1 cursor-pointer left-1/2 transform -translate-x-1/2 z-20 border border-white shadow-2xl rounded-4xl py-4 px-2 animate-bounce">
          <ArrowDown className=" text-white" />
        </div>
      </section>

      {/* Wedding Details Section */}
      <WeddingDetails />

      {/* RSVP Form Section */}
      <RSVPForm />

      {/* Footer */}
      <Footer />

    </main>
  )
}
