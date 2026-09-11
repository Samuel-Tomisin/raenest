"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  key: string;
  pillLabel: string;
  heading: string;
  description: string;
  image: string;
  notification?: { badge: string; description: string };
};

// Swap `image` for your final asset paths — left as placeholders for now.
const SLIDES: Slide[] = [
  {
    key: "secure-fast",
    pillLabel: "Safe & Instant",
    heading: "Secure and fast transfers",
    description:
      "Send money anytime you need to any destination instantly on Raenest. Enjoy secure global transfers without hidden fees.",
    image: "/sendmoneyslider.webp",
  },
  {
    key: "save-fees",
    pillLabel: "Low fees",
    heading: "Save on transfer fees",
    description:
      "Whether you're sending money via bank transfers or cards, enjoy the best rates with fees that keep more money in your pocket.",
    image: "/sendmoneyslider2.webp",
  },
  {
    key: "home-abroad",
    pillLabel: "Int'l transfers",
    heading: "Send money home and abroad",
    description:
      "Whether you're sending to friends and family in Africa, the US, Europe, or the UK, we've got you covered.",
    image: "/sendmoneyslider3.webp",
    notification: {
      badge: "$550 sent to Mummy Dearest",
      description: "This is for the movers and the house keeper. I love you mummy.",
    },
  },
];

const AUTOPLAY_MS = 6000;

export default function Sendmoneycarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);

  const active = SLIDES[activeIndex];

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative h-130 overflow-hidden rounded-4xl bg-cover bg-center bg-no-repeat transition-[background-image] duration-500 sm:h-140"
          style={{ backgroundImage: `url('${active.image}')` }}
        >
          {/* Darkening overlay so white text stays legible over any photo */}
          <div className="absolute inset-0 bg-black/45" />

          {active.notification && (
            <div className="absolute left-1/2 top-10 w-[90%] max-w-md -translate-x-1/2 rounded-2xl bg-black/70 p-5 backdrop-blur-md sm:left-16 sm:top-16 sm:translate-x-0">
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                  ✓
                </span>
                <span className="text-sm font-medium text-white">{active.notification.badge}</span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-wide text-white/60">Description</p>
              <p className="mt-1 text-sm text-white">{active.notification.description}</p>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-6 px-6 pb-10 text-center sm:px-10">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-4xl">{active.heading}</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/85 sm:text-base">
                {active.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/30 p-1.5">
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-4 py-2 text-sm cursor-pointer font-semibold transition-colors ${
                    index === activeIndex
                      ? "bg-primary text-white"
                      : "bg-white text-neutral-900 hover:bg-white/90"
                  }`}
                >
                  {slide.pillLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
