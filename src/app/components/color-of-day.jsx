import { ChevronDown } from "lucide-react";
import { Reveal } from "./luxury-motion";

export default function ColorOfDay() {
  return (
    <section className="px-4 md:px-8 pb-14 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0.15}>
          <div className="max-w-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.06em] text-[#D2962D]">
                  Color of the Day
                </p>
                <p className="text-2xl font-junge text-[#4A433A] mt-2">
                  Taupe, beige, burnt clay and olive green
                </p>
                <div className="flex items-center gap-2 mt-4 flex-wrap">
                  <span className="h-6 w-24 bg-[#8C7A66]" aria-hidden="true" />
                  <span className="h-6 w-24 bg-[#D5BF9D]" aria-hidden="true" />
                  <span className="h-6 w-24 bg-[#A55A3D]" aria-hidden="true" />
                  <span className="h-6 w-24 bg-[#6F7348]" aria-hidden="true" />
                </div>
              </div>
              <button
                type="button"
                aria-label="Toggle color palette details"
                className="text-[#1E1E1E]"
              >
                <ChevronDown className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
