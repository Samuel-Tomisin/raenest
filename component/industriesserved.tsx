"use client";

import { useState } from "react";

const industries = [
  {
    key: "fintech",
    label: "Fintech",
    description: "Manage international transfers and treasury management efficiently.",
    image: "/images/business/industries/fintech.jpg",
  },
  {
    key: "logistics",
    label: "Logistics",
    description: "Pay global vendors and suppliers at competitive fees and on time.",
    image: "/images/business/industries/logistics.jpg",
  },
  {
    key: "fmcg",
    label: "FMCG",
    description:
      "Convert local currencies to USD, GBP, EUR to preserve against currency volatility.",
    image: "/images/business/industries/fmcg.jpg",
  },
  {
    key: "healthcare",
    label: "Healthcare",
    description: "Simplify cross-border payments for medical supplies and services",
    image: "/images/business/industries/healthcare.jpg",
  },
  {
    key: "marketing",
    label: "Marketing",
    description: "Pay for marketing tools and ads with our cards, they work everywhere",
    image: "/images/business/industries/marketing.jpg",
  },
];

export default function IndustriesServed() {
  const [active, setActive] = useState("fintech");

  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <h2 className="text-3xl font-bold text-[#101828] sm:text-4xl">
            Industries we currently serve
          </h2>

          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry.key}
                onClick={() => setActive(industry.key)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active === industry.key
                    ? "border-[#160F3D] bg-[#160F3D] text-white"
                    : "border-[#EAECF0] text-[#344054] hover:border-[#160F3D]"
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {industries
            .filter((i) => i.key === active)
            .map((industry) => (
              <div
                key={industry.key}
                className="relative h-72 overflow-hidden rounded-2xl sm:col-span-2"
              >
                <img
                  src={industry.image}
                  alt={industry.label}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-lg font-bold text-white">{industry.label}</h3>
                  <p className="mt-1 max-w-sm text-sm text-white/80">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
