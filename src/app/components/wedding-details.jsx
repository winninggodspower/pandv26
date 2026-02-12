import { Calendar, Clock, MapPin } from "lucide-react";

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
      </div>
    </section>
  );
}
