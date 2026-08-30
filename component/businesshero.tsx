"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const trustLogos = [
  { name: "QED Investors", src: "/images/business/logos/qed.png" },
  { name: "Google", src: "/images/business/logos/google.png" },
  { name: "Ventures Platform", src: "/images/business/logos/ventures-platform.png" },
  { name: "Techstars", src: "/images/business/logos/techstars.png" },
  { name: "Seedstars", src: "/images/business/logos/seedstars.png" },
  { name: "Ajim Capital", src: "/images/business/logos/ajim.png" },
  { name: "1789 Capital", src: "/images/business/logos/1p.png" },
];

export default function BusinessHero() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#160F3D]">
      {/* Ambient glow / globe backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-320px] h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#4B3FA0]/60 via-[#2C1F70]/40 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10" />
      </div>

      {/* Transparent overlay navbar */}
      <div className="relative z-20 px-5 pt-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-10">
            <Link href="/" className="flex items-center gap-2 text-white">
              <span className="text-lg font-bold">raenest</span>
            </Link>

            <div className="hidden items-center gap-1 rounded-full bg-white p-1 text-sm font-semibold md:flex">
              <Link href="/" className="rounded-full px-4 py-1.5 text-black">
                Personal
              </Link>
              <Link
                href="/business/home"
                className="rounded-full bg-[#F2F0FF] px-4 py-1.5 text-black"
              >
                Business
              </Link>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white lg:flex">
            <button className="flex items-center gap-1 hover:text-white/80">
              Products <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-1 hover:text-white/80">
              Earn <ChevronDown size={14} />
            </button>
            <Link href="/blog" className="hover:text-white/80">
              News &amp; Blog
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="rounded-2xl border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#160F3D] transition-transform active:scale-95"
            >
              Create an account
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-5 pb-24 pt-16 sm:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90">
            Over 11,800 businesses in 13 countries use Raenest
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Multi-currency transactions at the speed of business
          </h1>

          <p className="mt-6 max-w-xl text-sm text-white/70 sm:text-base">
            Manage global currencies, make fast international payments, earn
            competitive interest, and control expenses with a flexible
            business card. Get set up in minutes.
          </p>

          <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your business email address"
              className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#160F3D] transition-transform active:scale-95"
            >
              Get started
            </button>
          </form>
        </div>
      </div>

      {/* Trust logos strip */}
      <div className="relative z-10 border-t border-white/10 bg-white px-5 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-[#667085]">
            Backed and trusted by the best in fintech and venture capital
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 grayscale opacity-80">
            {trustLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-6 w-auto object-contain sm:h-7"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}