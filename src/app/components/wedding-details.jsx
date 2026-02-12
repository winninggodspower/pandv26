import { Calendar, Clock, MapPin, Navigation, Calendar as CalendarIcon } from "lucide-react";

export default function WeddingDetails() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <span className="text-3xl">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 font-junge">
            Wedding Details
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-px bg-primary/50 relative top-2"></div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8">
          {/* Ceremony Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white px-3 py-1 text-xs font-bold tracking-wider uppercase">
                Our Ceremony
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">The Vows</h3>
                  <p className="text-sm text-gray-600">Exchange of promises</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">Saturday, June 20th, 2026</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">12:00 PM - 2:00 PM</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 italic leading-relaxed">
              "Join us as we exchange our vows and begin our journey together as one"
            </p>
          </div>

          {/* Reception Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-rose-400 text-white px-3 py-1 text-xs font-bold tracking-wider uppercase">
                Reception
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">The Celebration</h3>
                  <p className="text-sm text-gray-600">Exchange of promises</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">Saturday, June 20th, 2026</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">3:00 PM - Till mama calls</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 italic leading-relaxed">
              "Join us as we exchange our vows and begin our journey together as one"
            </p>
          </div>
        </div>

        {/* Venue Section */}
        <div className="mt-12 md:mt-16">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {/* Venue Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border border-amber-400 rounded flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Venue</span>
            </div>

            {/* Venue Details */}
            <h3 className="text-2xl md:text-3xl font-junge text-foreground mb-2">
              Dbayways Events Centre
            </h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Plot 14 Folashade Ave St,<br />
              Lekki Phase 1,<br />
              Lekki 106104, Lagos,<br />
              Nigeria
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button className="px-6 py-2 border border-amber-600 text-amber-600 text-sm font-semibold rounded hover:bg-amber-50 transition">
                📍 Get Directions
              </button>
              <button className="px-6 py-2 bg-amber-500 text-white text-sm font-semibold rounded hover:bg-amber-600 transition flex items-center justify-center gap-2">
                📅 Google Calendar
              </button>
              <button className="px-6 py-2 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-900 transition flex items-center justify-center gap-2">
                📆 Apple / Outlook
              </button>
            </div>

            {/* Map */}
            <div className="rounded overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2949547869556!2d3.513748!3d6.430394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9d9b9b9b9b9b%3A0x9b9b9b9b9b9b9b9b!2sDbaywater%20Events%20Centre!5e0!3m2!1sen!2sng!4v1623456789"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
