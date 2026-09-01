"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ShowcaseOption {
  key: string;
  toggleLabel: string;
  title: string;
  description: string;
  ctaHref: string;
}

interface FeatureShowcaseProps {
  heading: string;
  options: ShowcaseOption[];
  renderVisual: (activeKey: string) => ReactNode;
  reverse?: boolean;
}

export default function FeatureShowcase({
  heading,
  options,
  renderVisual,
  reverse = false,
}: FeatureShowcaseProps) {
  const [active, setActive] = useState(options[0].key);
  const activeOption = options.find((o) => o.key === active) ?? options[0];

  return (
    <section className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-2xl font-bold text-[#101828] sm:text-3xl">
          {heading}
        </h2>

        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[direction:rtl]" : ""
          }`}
        >
          <div className={reverse ? "lg:[direction:ltr]" : ""}>
            <div className="mb-6 inline-flex items-center gap-1 rounded-full bg-[#F2F0FF] p-1 text-sm font-semibold">
              {options.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setActive(option.key)}
                  className={`rounded-full px-4 py-2 transition-colors ${
                    active === option.key
                      ? "bg-[#160F3D] text-white"
                      : "text-[#160F3D]/70 hover:text-[#160F3D]"
                  }`}
                >
                  {option.toggleLabel}
                </button>
              ))}
            </div>

            <p className="mb-2 text-sm font-semibold text-[#5B4FE5]">
              {activeOption.title}
            </p>
            <p className="mb-5 max-w-md whitespace-pre-line text-lg leading-relaxed text-[#344054]">
              {activeOption.description}
            </p>

            <Link
              href={activeOption.ctaHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B4FE5] hover:gap-3 transition-all"
            >
              Learn more
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={reverse ? "lg:[direction:ltr]" : ""}>
            {renderVisual(active)}
          </div>
        </div>
      </div>
    </section>
  );
}
