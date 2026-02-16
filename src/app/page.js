"use client"

import { useEffect } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import WeddingDetails from "./components/wedding-details";
import RSVPForm from "./components/rsvp-form";
import Footer from "./components/footer";
import { HeroFloat, Reveal, ScrollCue } from "./components/luxury-motion";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const timer = window.setTimeout(async () => {
      const { default: confetti } = await import("canvas-confetti");
      if (cancelled) return;

      const burst = {
        particleCount: 34,
        spread: 56,
        startVelocity: 20,
        gravity: 1.05,
        scalar: 0.86,
        ticks: 220,
        zIndex: 80,
      };

      confetti({
        ...burst,
        angle: 58,
        origin: { x: 0.03, y: 0.72 },
      });

      confetti({
        ...burst,
        angle: 122,
        origin: { x: 0.97, y: 0.72 },
      });
    }, 1700);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  const handleScrollDown = () => {
    const detailsSection = document.getElementById("wedding-details");
    if (!detailsSection) return;

    const useReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    detailsSection.scrollIntoView({ behavior: useReducedMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#F8F6F1]">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image.png"
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-top md:object-[center_-150px]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <Reveal className="absolute inset-x-4 inset-y-2 md:inset-7 md:inset-y-6 border border-primary z-10 flex items-center justify-center">

          <div className="relative h-full text-center px-6 max-w-2xl mx-auto  flex flex-col justify-between py-2.5 md:py-6 ">
            {/* Top Text */}
            <Reveal delay={0.15} className="mb-12">
              <p className="text-sm md:text-base tracking-wide md:tracking-[0.35em] text-white uppercase  font-light">
                Together with their families
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mb-10">
              {/* Main Heading */}
              <div className="mb-8">
                <HeroFloat>
                  <h1 className="text-6xl md:text-7xl lg:text-9xl text-white font-light italic mb-2 font-inspo">
                    Praise & Victor
                  </h1>
                </HeroFloat>
                <p className="text-sm md:text-base lg:text-lg tracking-[0.15em] text-white uppercase ">
                  Request the pleasure of your company
                </p>
              </div>

              {/* Date and Location */}
              <Reveal delay={0.35} className="space-y-1 mt-28">
                <p
                  className="text-sm md:text-3xl font-light text-primary font-junge">
                  June 26th, 2026
                </p>
                <p className="text-sm md:text-lg text-white tracking-widest uppercase font-light">
                  Lagos, Nigeria
                </p>
              </Reveal>
            </Reveal>
          </div>
        </Reveal>

        {/* Scroll Indicator */}
        <ScrollCue className="absolute -bottom-2 md:bottom-1 cursor-pointer left-1/2 transform -translate-x-1/2 z-20 border border-white shadow-2xl rounded-4xl py-4 px-2">
          <button
            type="button"
            onClick={handleScrollDown}
            aria-label="Scroll to wedding details"
            className="cursor-pointer"
          >
            <ArrowDown className=" text-white" />
          </button>
        </ScrollCue>
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
