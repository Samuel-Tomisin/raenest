"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Raenest has been a super useful platform for us. We started to use them to pay staff and vendors right after they launched and it hasn't failed us one bit.",
    name: "Seun Alley",
    role: "Chief Executive Officer",
    company: "Fez",
    photo: "/images/business/testimonials/seun-alley.jpg",
  },
  {
    quote:
      "Raenest has been a key part of our people stack! They unlock access to contractors in other African countries by facilitating seamless payments.",
    name: "Fola Folowosere",
    role: "Chief Executive Officer",
    company: "FanBants",
    photo: "/images/business/testimonials/fola-folowosere.jpg",
  },
  {
    quote:
      "Tunga has been using Raenest to offer its employment services for our Nigerian team. We're delighted with the ease of use of the platform.",
    name: "Reinier van Scherpenzeel",
    role: "Chief Operating Officer",
    company: "Tunga",
    photo: "/images/business/testimonials/reinier.jpg",
  },
  {
    quote:
      "Raenest makes it easy to ensure our team and partners get paid, no matter the region of the world they work in. That's very important for a company like ours that's completely remote.",
    name: "Mo",
    role: "Chief Executive Officer",
    company: "Loomo",
    photo: "/images/business/testimonials/mo.jpg",
  },
];

export default function SuccessStories() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const goTo = (i: number) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#160F3D] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl">
          Our Success Stories
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="mx-auto h-64 w-52 overflow-hidden rounded-2xl bg-white/10 sm:h-72 sm:w-60">
            <img
              src={active.photo}
              alt={active.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
              {active.quote}
            </p>
            <p className="mt-6 text-white">
              <span className="font-semibold">{active.name}</span>
              <span className="text-white/60">, {active.role}</span>
            </p>
            <p className="mt-2 text-sm font-bold text-white/70">{active.company}</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous story"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next story"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Go to story ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}