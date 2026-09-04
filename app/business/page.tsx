"use client";

import Link from "next/link";
import Footer from "@/component/footer";
import { useState, type ReactNode } from "react";
import {
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Check,
  Download,
  ShieldCheck,
  Lock,
  ShieldAlert,
} from "lucide-react";
import Seventh from "../sections/seventh";
import Eighth from "../sections/eighth";
import Navbar from "@/component/navbar";

/* ────────────────────────────────────────────────────────────────────── */
/*  Shared data                                                          */
/* ────────────────────────────────────────────────────────────────────── */

const trustLogos = [
  { name: "QED Investors", src: "/qed.png" },
  { name: "Google", src: "/google.png" },
  { name: "Ventures Platform", src: "/ventures.png" },
  { name: "Techstars", src: "/techstars.png" },
  { name: "Seedstars", src: "/seedstars.png" },
  { name: "Ajim Capital", src: "/ajim.png" },
  { name: "1789 Capital", src: "/one.png" },
];

interface ShowcaseOption {
  key: string;
  toggleLabel: string;
  title: string;
  description: string;
  ctaHref: string;
}

const accountOptions: ShowcaseOption[] = [
  { key: "USD", toggleLabel: "USD", title: "USD Accounts", description: "Get a business checking account to receive ACH, domestic wire and SWIFT", ctaHref: "/business/global-accounts" },
  { key: "GBP", toggleLabel: "GBP", title: "GBP Accounts", description: "Get an international bank account number to receive CHAPS and instant deposits faster", ctaHref: "/business/global-accounts" },
  { key: "EUR", toggleLabel: "EUR", title: "EUR Accounts", description: "Get an international bank account number to receive SEPA instant and SEPA deposits faster", ctaHref: "/business/global-accounts" },
  { key: "NGN", toggleLabel: "NGN", title: "NGN Accounts", description: "Get a bank account to receive NGN deposits faster.", ctaHref: "/business/global-accounts" },
];

const accountCards: Record<string, { flag: string; currency: string; balance: string; number: string }> = {
  USD: { flag: "🇺🇸", currency: "US Dollar", balance: "$12,400.99", number: "1048392756" },
  GBP: { flag: "🇬🇧", currency: "British Pound", balance: "£70,990.00", number: "83947215" },
  EUR: { flag: "🇪🇺", currency: "Euro", balance: "€9,204.50", number: "77102384" },
  NGN: { flag: "🇳🇬", currency: "Naira", balance: "₦4,820,000.00", number: "0192837465" },
};

const cardOptions: ShowcaseOption[] = [
  { key: "virtual", toggleLabel: "Virtual USD cards", title: "Virtual cards", description: "Our cards work for all payments including Gpay and Apple Pay, allows you to assign cards to team members and set spending limits.", ctaHref: "/business/cards" },
  { key: "physical", toggleLabel: "Physical USD cards", title: "Physical cards", description: "Our cards work for all payments and allows you to receive funding via supported currencies", ctaHref: "/business/cards" },
];

const transactionOptions: ShowcaseOption[] = [
  { key: "send", toggleLabel: "Send money", title: "Send money", description: "Send money to over 70 countries with fast delivery and competitive fees. Enjoy secure and reliable transactions.", ctaHref: "/business/make-payments" },
  { key: "receive", toggleLabel: "Receive Payment", title: "Invoices & Payment Links", description: "Receive payments through invoices and payment links. We support bank transfers and card payments.", ctaHref: "/business/receive-payments" },
];

const partnerLogos = ["Fluna", "SunFi", "RENDA", "Moniepoint", "FanBants", "helium health", "Moniepoint", "Tunga"];

const testimonials = [
  { quote: "Raenest has been a super useful platform for us. We started to use them to pay staff and vendors right after they launched and it hasn't failed us one bit.", name: "Seun Alley", role: "Chief Executive Officer", company: "Fez", photo: "/lady.png"},
  { quote: "Raenest has been a key part of our people stack! They unlock access to contractors in other African countries by facilitating seamless payments.", name: "Fola Folowosere", role: "Chief Executive Officer", company: "FanBants", photo: "/images/business/testimonials/fola-folowosere.jpg" },
  { quote: "Tunga has been using Raenest to offer its employment services for our Nigerian team. We're delighted with the ease of use of the platform.", name: "Reinier van Scherpenzeel", role: "Chief Operating Officer", company: "Tunga", photo: "/images/business/testimonials/reinier.jpg" },
  { quote: "Raenest makes it easy to ensure our team and partners get paid, no matter the region of the world they work in. That's very important for a company like ours that's completely remote.", name: "Mo", role: "Chief Executive Officer", company: "Loomo", photo: "/images/business/testimonials/mo.jpg" },
];

const industries = [
  { key: "fintech", label: "Fintech", description: "Manage international transfers and treasury management efficiently.", image: "/fintech.webp" },
  { key: "logistics", label: "Logistics", description: "Pay global vendors and suppliers at competitive fees and on time.", image: "/logistics.webp" },
  { key: "fmcg", label: "FMCG", description: "Convert local currencies to USD, GBP, EUR to preserve against currency volatility.", image: "/fmcg.webp" },
  { key: "healthcare", label: "Healthcare", description: "Simplify cross-border payments for medical supplies and services", image: "/healthcare.webp" },
  { key: "marketing", label: "Marketing", description: "Pay for marketing tools and ads with our cards, they work everywhere", image: "/marketing.webp" },
];

const securityFeatures = [
  { icon: ShieldCheck, title: "Compliant Transactions", description: "Backed by local and international financial regulations." },
  { icon: Lock, title: "Two-Factor Authentication", description: "Support for enhanced transaction security" },
  { icon: ShieldAlert, title: "Anti-Fraud Measures", description: "Proactive monitoring to secure your money." },
];

/* ────────────────────────────────────────────────────────────────────── */
/*  Reusable pill-toggle showcase block (Accounts / Card / Transactions) */
/* ────────────────────────────────────────────────────────────────────── */

function FeatureShowcase({
  heading,
  options,
  renderVisual,
  reverse = false,
}: {
  heading: string;
  options: ShowcaseOption[];
  renderVisual: (activeKey: string) => ReactNode;
  reverse?: boolean;
}) {
  const [active, setActive] = useState(options[0].key);
  const activeOption = options.find((o) => o.key === active) ?? options[0];

  return (
    <section className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-2xl font-bold text-[#101828] sm:text-3xl">{heading}</h2>

        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[direction:rtl]" : ""}`}>
          <div className={reverse ? "lg:[direction:ltr]" : ""}>
            <div className="mb-6 inline-flex items-center gap-1 rounded-full bg-[#F2F0FF] p-1 text-sm font-semibold">
              {options.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setActive(option.key)}
                  className={`rounded-full px-4 py-2 transition-colors ${
                    active === option.key ? "bg-[#160F3D] text-white" : "text-[#160F3D]/70 hover:text-[#160F3D]"
                  }`}
                >
                  {option.toggleLabel}
                </button>
              ))}
            </div>

            <p className="mb-2 text-sm font-semibold text-[#5B4FE5]">{activeOption.title}</p>
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

          <div className={reverse ? "lg:[direction:ltr]" : ""}>{renderVisual(active)}</div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Visuals for each showcase                                            */
/* ────────────────────────────────────────────────────────────────────── */

function AccountsVisual(activeKey: string) {
  const primary = accountCards[activeKey];
  const secondaryKey = Object.keys(accountCards).find((k) => k !== activeKey)!;
  const secondary = accountCards[secondaryKey];

  return (
    <div className="relative rounded-2xl bg-[#F5F5F7] p-8 sm:p-10">
      <div className="relative flex items-center">
        <div className="z-10 w-64 rounded-2xl border border-[#EAECF0] bg-white p-5 shadow-lg">
          <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#101828]">
            <span className="text-xl">{primary.flag}</span>
            {primary.currency}
          </div>
          <p className="mb-4 text-2xl font-bold text-[#101828]">{primary.balance}</p>
          <p className="text-xs text-[#667085]">Account number</p>
          <p className="text-sm font-semibold text-[#101828]">{primary.number}</p>
        </div>

        <div className="-ml-10 w-64 translate-x-4 rounded-2xl border border-[#EAECF0] bg-white p-5 opacity-90 shadow-lg">
          <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#101828]">
            <span className="text-xl">{secondary.flag}</span>
            {secondary.currency}
          </div>
          <p className="mb-4 text-2xl font-bold text-[#101828]">{secondary.balance}</p>
          <p className="text-xs text-[#667085]">Account nu...</p>
          <p className="text-sm font-semibold text-[#101828]">{secondary.number}</p>
        </div>
      </div>
    </div>
  );
}

function CardVisual() {
  return (
    <div className="rounded-2xl bg-[#F5F5F7] p-6 sm:p-8">
      <div className="rounded-2xl bg-white p-5 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#101828]">Cards</span>
            <span className="rounded-full bg-[#F2F0FF] px-2.5 py-1 text-xs font-medium text-[#5B4FE5]">
              Cashback: $0.00
            </span>
          </div>
          <span className="text-xs font-semibold text-[#5B4FE5]">View All Cards</span>
        </div>

        <div className="relative flex h-44 items-center overflow-hidden rounded-2xl">
          <div className="absolute left-0 h-full w-8 rounded-l-2xl bg-[#160F3D]" />
          <div className="relative ml-8 flex h-full flex-1 flex-col justify-between overflow-hidden rounded-r-2xl bg-gradient-to-br from-[#FFD9CE] to-[#FFB199] p-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#12B76A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#12B76A]" />
                Active
              </span>
              <span className="text-sm font-bold text-[#160F3D]">raenest</span>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-[#101828]">$50,000.00</p>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#475467]">Business Debit</p>
                  <p className="text-sm font-semibold text-[#101828]">**** **** **** 2451</p>
                </div>
                <div className="flex -space-x-2">
                  <span className="h-5 w-5 rounded-full bg-[#EB001B]/80" />
                  <span className="h-5 w-5 rounded-full bg-[#F79E1B]/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransactionVisual() {
  return (
    <div className="rounded-2xl bg-[#F5F5F7] p-6 sm:p-8">
      <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#12B76A]">
          <Check size={22} className="text-white" strokeWidth={3} />
        </div>

        <div className="mb-3 flex items-center justify-center gap-2 text-sm text-[#667085]">
          <span>🇺🇸 USD</span>
          <span>→</span>
          <span>🇳🇬 NGN</span>
        </div>

        <p className="text-lg font-semibold text-[#101828]">
          You&apos;ve sent 350.00 USD to Oluwafemi Fashikun
        </p>
        <p className="mt-1 text-sm text-[#667085]">The money should arrive within minutes</p>

        <button className="mx-auto mt-4 flex items-center gap-2 text-sm font-semibold text-[#5B4FE5]">
          <Download size={14} />
          Download Receipt
        </button>

        <button className="mt-5 w-full rounded-xl bg-[#5B4FE5] py-3 text-sm font-semibold text-white transition-transform active:scale-95">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Full page                                                            */
/* ────────────────────────────────────────────────────────────────────── */

export default function BusinessHomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState("fintech");

  const activeTestimonial = testimonials[testimonialIndex];
  const goToTestimonial = (i: number) =>
    setTestimonialIndex((i + testimonials.length) % testimonials.length);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#160F3D]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-320px] h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#4B3FA0]/60 via-[#2C1F70]/40 to-transparent blur-3xl" />
          <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10" />
        </div>
        <Navbar />

        {/* Hero content */}
        <div className="relative z-10 px-5 pb-24 pt-16 sm:pt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90">
              Over 11,800 businesses in 13 countries use Raenest
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              Multi-currency transactions at the speed of business
            </h1>

            <p className="mt-6 max-w-xl text-sm text-white/70 sm:text-base">
              Manage global currencies, make fast international payments, earn competitive
              interest, and control expenses with a flexible business card. Get set up in
              minutes.
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

      {/* ── Global Business Bank Accounts ── */}
      <FeatureShowcase heading="Global Business Bank Accounts" options={accountOptions} renderVisual={AccountsVisual} />

      {/* ── Your Global Business Card ── */}
      <FeatureShowcase heading="Your Global Business Card" options={cardOptions} renderVisual={CardVisual} reverse />

      {/* ── Global Multi-currency Transactions ── */}
      <FeatureShowcase heading="Global Multi-currency Transactions" options={transactionOptions} renderVisual={TransactionVisual} />

      {/* ── Convert money across multiple currencies (dark form section) ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#241857] via-[#3B2A8C] to-[#241857] px-5 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#6C5CE7]/30 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
            <div>
              <p className="mb-1.5 text-xs text-[#667085]">How much do you want to send?</p>
              <div className="flex items-center justify-between rounded-xl border border-[#EAECF0] px-4 py-3">
                <span className="text-lg font-semibold text-[#101828]">€</span>
                <span className="flex items-center gap-1 text-sm font-semibold text-[#101828]">
                  EUR <ChevronDown size={14} />
                </span>
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-1.5 text-xs text-[#667085]">Your recipient receives</p>
              <div className="flex items-center justify-between rounded-xl border border-[#EAECF0] px-4 py-3">
                <span className="text-lg font-semibold text-[#101828]">£</span>
                <span className="flex items-center gap-1 text-sm font-semibold text-[#101828]">
                  GBP <ChevronDown size={14} />
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[#EAECF0] px-4 py-3">
              <p className="text-xs text-[#667085]">Choose a Transfer type</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#101828]">Bank Account Transfers</span>
                <span className="text-xs font-semibold text-[#5B4FE5]">Change type</span>
              </div>
            </div>

            <div className="mt-4 space-y-2 rounded-xl bg-[#F9FAFB] p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[#667085]">Exchange rate</span>
                <span className="font-semibold text-[#101828]">£1 = €1.199660</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#667085]">Our fee</span>
                <span className="font-semibold text-[#101828]">0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#667085]">Estimated delivery time</span>
                <span className="font-semibold text-[#101828]">9pm, Tomorrow</span>
              </div>
            </div>

            <button className="mt-5 w-full rounded-xl bg-[#5B4FE5] py-3 text-sm font-semibold text-white transition-transform active:scale-95">
              Send money now
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Convert money across multiple currencies
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Raenest offers international transactions at market-competitive rates.
            </p>
          </div>
        </div>
      </section>

      {/* ── Impact stats ── */}
      <section className="relative overflow-hidden bg-[#0F0A2E] px-5 py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-[#5B4FE5]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">
            Over 11,800 businesses use Raenest
          </p>
          <h2 className="mb-12 text-2xl font-bold text-white sm:text-3xl">Our Impact in Numbers</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left">
              <p className="mb-2 text-sm">
                <img src="/countries.png" alt="" className="w-15 h-7"/>
              </p>
              <p className="text-3xl font-bold text-white">Over $1 billion</p>
              <p className="mt-1 text-sm text-white/60">in transaction volume processed</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left">
              <p className="mb-2 text-xl">↗</p>
              <p className="text-3xl font-bold text-white">95%</p>
              <p className="mt-1 text-sm text-white/60">of our transfers are instant</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left">
              <p className="mb-2 text-xl">🔁</p>
              <p className="text-3xl font-bold text-white">10,000+</p>
              <p className="mt-1 text-sm text-white/60">transactions processed daily</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left">
              <p className="mb-2 text-xl">💼</p>
              <p className="text-3xl font-bold text-white">15% saved</p>
              <p className="mt-1 text-sm text-white/60">On transfer fees and poor exchange rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Loved by leaders ── */}
      <section className="bg-[#F9FAFB] px-5 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <h2 className="text-3xl font-bold text-[#101828] sm:text-4xl">Loved by Leaders at</h2>
            <p className="mt-4 max-w-sm text-[#667085]">
              We partner with business leaders to enable their participation in global finance
              with transparent pricing and dedicated support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <img src="/leadersat.png" alt="" />
            <img src="/leadersat2.png" alt="" />
            {partnerLogos.map((image, i) => (
              <div key={`${image}-${i}`} className="flex h-20 items-center justify-center rounded-2xl bg-white px-4 shadow-sm">
                <span className="text-sm font-bold text-[#101828]">{image}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success stories ── */}
      <section className="bg-[#160F3D] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl">
            Our Success Stories
          </h2>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="mx-auto h-64 w-52 overflow-hidden rounded-2xl bg-white/10 sm:h-72 sm:w-60">
             <img src={activeTestimonial.photo} alt={activeTestimonial.name} className="h-full w-full object-cover" />
            </div>

            <div>
              <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
                {activeTestimonial.quote}
              </p>
              <p className="mt-6 text-white">
                <span className="font-semibold">{activeTestimonial.name}</span>
                <span className="text-white/60">, {activeTestimonial.role}</span>
              </p>
              <p className="mt-2 text-sm font-bold text-white/70">{activeTestimonial.company}</p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => goToTestimonial(testimonialIndex - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous story"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => goToTestimonial(testimonialIndex + 1)}
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
                  onClick={() => setTestimonialIndex(i)}
                  aria-label={`Go to story ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === testimonialIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Make the switch today ── */}
      <section className="relative isolate overflow-hidden px-5 py-24 sm:py-32">
        <img
          src="/girlphone.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A2E] via-[#0F0A2E]/60 to-transparent" />

        <div className="relative mx-auto max-w-3xl flex flex-col ">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Make the switch today</h2>
          <p className="mt-4 max-w-lg text-white/70">
            We understand the unique challenges African businesses face – from navigating
            complex regulatory environments to dealing with fluctuating local currencies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#0F0A2E] transition-transform active:scale-95"
            >
              Create an account
            </Link>
            <Link
              href="/contact-us"
              className="rounded-2xl border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Speak to Someone
            </Link>
          </div>

          <div className="mt-16 w-72 rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#5B4FE5] text-xs font-bold text-white">
                R
              </span>
              <div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-[#101828]">Raenest</p>
                  <p className="text-xs text-[#98A2B3]">9:42 PM</p>
                </div>
                <p className="mt-0.5 text-xs text-[#475467]">
                  Your payment of -$4,000 was successful and receipt sent to your email
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries served ── */}
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
                  onClick={() => setActiveIndustry(industry.key)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    activeIndustry === industry.key
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
              .filter((i) => i.key === activeIndustry)
              .map((industry) => (
                <div key={industry.key} className="relative h-72 overflow-hidden rounded-2xl sm:col-span-2">
                  <img src={industry.image} alt={industry.label} className=" w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">{industry.label}</h3>
                    <p className="mt-1 max-w-sm text-sm text-white/80">{industry.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="bg-[#160F3D] px-5 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Security you can rely on</h2>
            <p className="mt-4 max-w-lg text-white/70">
              We uphold industry-standard security across all our services, ensuring your
              transactions and funds are protected 24/7 so you can focus on what matters.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {securityFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title}>
                    <span className="mb-4 flex h-17 w-17 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon size={40} />
                    </span>
                    <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden justify-center lg:flex">
            <img
              src="/key.webp"
              alt="Security lock illustration"
              className="w-94"
            />
          </div>
        </div>
      </section>
      <Seventh/>
      <Eighth/>
      <Footer/>
    </main>
  );
}