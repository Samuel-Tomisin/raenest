"use client"

import { useState } from "react";


type InvoiceFeature = {
  key: string;
  pillLabel: string;
  heading: string;
  description: string;
  image: string;
};

const INVOICE_FEATURES: InvoiceFeature[] = [
  {
    key: "Set a goal",
    pillLabel: "Set a goal",
    heading: "Flexible saving options",
    description:
      "Decide what you're saving for and how much you need — a trip, a gadget, an emergency fund.",
    image: "/invoicestab1.webp",
  },
  {
    key: "Save automatically",
    pillLabel: "Save automatically",
    heading: "Automate the boring stuff",
    description:
      "Set up recurring contributions so your goal grows without you having to think about it.",
    image: "/invoicestab2.webp",
  },
  {
    key: "Track your progress",
    pillLabel: "Track your progress",
    heading: "Ready for global",
    description:
      "Watch your balance grow toward your target, right from your Securevest dashboard.",
    image: "/invoicestab3.webp",
  },
];

export default function InvoiceFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = INVOICE_FEATURES[activeIndex];

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative h-130 overflow-hidden bg-neutral-900 bg-cover bg-center bg-no-repeat transition-[background-image] duration-500 sm:h-130"
          style={{ backgroundImage: `url('${active.image}')` }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-6 pb-10 text-center sm:px-10">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-4xl">{active.heading}</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/85 sm:text-base">
                {active.description}
              </p>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/30 p-1.5">
              {INVOICE_FEATURES.map((feature, index) => (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-4 py-2 text-sm cursor-pointer font-semibold transition-colors ${
                    index === activeIndex
                      ? "bg-primary text-white"
                      : "bg-white text-neutral-900 hover:bg-white/90"
                  }`}
                >
                  {feature.pillLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
