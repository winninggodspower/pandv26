import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./luxury-motion";

export default function WeddingDetails() {
  return (
    <section id="wedding-details" className="py-14 md:py-24 px-0 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal className="text-center mb-16 px-4">
          <div className="flex justify-center mb-2">
            <img src={'/solar-heart-shine.svg'} />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray mb-5 font-junge">
            Wedding Details
          </h2>
          <div className="flex justify-center">
            <img src="/solar-line.svg" alt="" />
          </div>
        </Reveal>

        {/* Events Grid */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-11 w-fit mx-auto">
          {/* Ceremony Card */}
          <motion.div
            className="card px-7 py-11 max-w-[460px] h-fit"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: "0px 16px 30px rgba(0, 0, 0, 0.14)" }}
          >
            <div className="absolute -top-3 flex items-center gap-3 mb-4">
              <span className="inline-block bg-primary text-white w-28 text-center py-1 text-xs uppercase">
                Our Ceremony
              </span>
            </div>

            <div className="mb-6 text-gray">

              <div className="flex items-end gap-3 mb-5">
                <span className="p-1 border border-primary">
                  <img className="size-5" src="/ring.svg" alt="" />
                </span>
                <div>
                  <h3 className="font-junge text-xs font-semibold">The Vows</h3>
                  <p className="text-xs">Exchange of promises</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-start gap-3">
                  <Calendar className="size-3 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Saturday, June 20th, 2026</p>
                </div>

                <div className="flex items-start gap-3 mb-8">
                  <Clock className="size-3 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">12:00 PM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-black font-extralight italic leading-relaxed">
              "Join us as we exchange our vows and begin our journey together as one"
            </p>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            className="card px-7 py-11 max-w-[460px] mt-10"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.35, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: "0px 16px 30px rgba(0, 0, 0, 0.14)" }}
          >
            <div className="absolute -top-3 flex items-center gap-3 mb-4">
              <span className="inline-block bg-secondary text-white w-28 text-center py-1 text-xs uppercase">RECEPTION</span>
            </div>

            <div className="space-y-3 mb-6 text-gray">
              <div className="flex items-end gap-3 mb-5">
                <span className="p-1 border border-secondary">
                  <img className="size-5" src="/confetti.svg" alt="" />
                </span>
                <div>
                  <h3 className="font-junge text-xs font-semibold">The Celebration</h3>
                  <p className="text-xs">Exchange of promises</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-start gap-3">
                  <Calendar className="size-3 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Saturday, June 20th, 2026</p>
                </div>

                <div className="flex items-start gap-3 mb-8">
                  <Clock className="size-3 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">3:00 PM - Till mama calls</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-black font-extralight italic leading-relaxed">
              "Join us as we exchange our vows and begin our journey together as one"
            </p>
          </motion.div>
        </div>

        {/* Venue Section */}
        <Reveal delay={0.1} className="mt-12 px-4">
          <div className="bg-white card">

            <div className="pt-7 px-6 pb-9 md:px-8 md:pt-16 md:pb-12">
              {/* Venue Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-6 md:mb-12">
                <div className="size-16 border border-[#CE927E] flex items-center justify-center">
                  <MapPin className="size-6 text-primary" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-base text-center md:text-start font-semibold text-primary uppercase mb-6 md:mb-1.5">Venue</div>
                  {/* Venue Details */}
                  <h3 className="text-2xl md:text-3xl font-junge">
                    Dbayways Events Centre
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-center md:text-start">
                    Plot 14 Folashade Ave St,
                    Lekki Phase 1,<br />
                    Lekki 106104, Lagos, Nigeria
                  </p>
                </div>
              </div>


              <div className="flex flex-col items-center sm:flex-row gap-3 mb-8">

                {/* Get Directions */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Plot+14+Folashade+Ave+Lekki+Phase+1+Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-3.5 py-3.5 rounded-[2px] w-52 border border-primary text-[15px] font-semibold hover:bg-amber-50 transition flex gap-3"
                >
                  <MapPin className="size-5 text-primary" />
                  Get Directions
                </a>

                {/* Google Calendar */}
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Praise+%26+Victor+Wedding&dates=20260620T090000/20260620T170000&details=Join+us+at+Plot+14+Folashade+Ave+Lekki+Phase+1+Lagos+Nigeria&location=Plot+14+Folashade+Ave+Lekki+Phase+1+Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 rounded-[2px] w-52 bg-primary text-white text-[15px] font-semibold hover:bg-amber-600 transition flex items-center justify-center gap-3"
                >
                  <Calendar className="size-4" /> Google Calendar
                </a>

              </div>


            </div>

            {/* Map */}
            <div className="rounded overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.308!2d3.4724278!3d6.4273334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5ba87d1afaf%3A0x8bdf0b7bd3e0863b!2sPlot%2014%20Folashade%20Ave%2C%20Lekki%20Phase%201%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1707898560000"
                width="100%"
                height="410"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
