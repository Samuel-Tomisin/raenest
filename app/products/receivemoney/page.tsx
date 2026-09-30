"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { Apple, PlayCircle, Users, Plus, ShieldCheck, Lock, ShieldAlert, } from "lucide-react";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Download from "@/component/download";
import FAQSection from "@/component/faq";
import Testimonialsection from "@/app/sections/testimonialsection";
import Securitysection2 from "@/component/securitysection2";
import Button from "@/component/button-white";

/* ------------------------------------------------------------------ */
/*  Shared: flag badges                                               */
/* ------------------------------------------------------------------ */

type CountryCode = "gh" | "ng" | "ke";

function FlagBadge({ country }: { country: CountryCode }) {
  const uid = useId();
  const flags: Record<CountryCode, React.ReactNode> = {
    gh: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded-full" aria-label="Ghana">
        <clipPath id={`gh-clip-${uid}`}><circle cx="12" cy="12" r="12" /></clipPath>
        <g clipPath={`url(#gh-clip-${uid})`}>
          <rect width="24" height="8" y="0" fill="#CE1126" />
          <rect width="24" height="8" y="8" fill="#FCD116" />
          <rect width="24" height="8" y="16" fill="#006B3F" />
          <path d="M12 9.5 13.2 13h3.5l-2.8 2 1 3.3L12 16.3l-2.9 2 1-3.3-2.8-2h3.5z" fill="#000" />
        </g>
      </svg>
    ),
    ng: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded-full" aria-label="Nigeria">
        <clipPath id={`ng-clip-${uid}`}><circle cx="12" cy="12" r="12" /></clipPath>
        <g clipPath={`url(#ng-clip-${uid})`}>
          <rect width="8" height="24" x="0" fill="#008751" />
          <rect width="8" height="24" x="8" fill="#FFFFFF" />
          <rect width="8" height="24" x="16" fill="#008751" />
        </g>
      </svg>
    ),
    ke: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded-full" aria-label="Kenya">
        <clipPath id={`ke-clip-${uid}`}><circle cx="12" cy="12" r="12" /></clipPath>
        <g clipPath={`url(#ke-clip-${uid})`}>
          <rect width="24" height="8" y="0" fill="#000000" />
          <rect width="24" height="8" y="8" fill="#FFFFFF" />
          <rect width="24" height="8" y="16" fill="#BB0000" />
          <rect width="24" height="2" y="7" fill="#BB0000" />
          <rect width="24" height="2" y="15" fill="#BB0000" />
        </g>
      </svg>
    ),
  };
  return <>{flags[country]}</>;
}

/* ------------------------------------------------------------------ */
/*  Section 1: Hero                                                   */
/* ------------------------------------------------------------------ */

function ReceiveMoneyHero() {
  return (
    <section className="relative overflow-hidden bg-gray px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-6 pt-14">
          <p className="text-sm sm:text-2xl font-bold text-neutral-400">Receive money</p>

          <h1 className="text-7xl font-normal leading-[1.05] text-tertiary sm:text-8xl lg:text-[80px] font-sans">
            Receive money <br /> from any <br /> bank in Nigeria.
          </h1>

          <p className="max-w-md text-base text-tertiary sm:text-lg font-sans">
            Receive payments easily from any bank in Nigeria. Get paid securely and 
            conveniently, with funds sent directly to your account without unnecessary complications.


          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
           <Button />
           <Download />
          </div>

        </div>

        <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
          {/* Drop your receive-money hero photo in here */}
          <div className="aspect-square w-full ">
            <img
              src="/receivemoneyhero.webp"
              alt="Person smiling while checking their phone"
              className="h-123 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: Feature tabs (US Bank Account / Marketplace / Payment  */
/*  Links) — image card with overlay caption + pill switcher below    */
/* ------------------------------------------------------------------ */

type ReceiveFeature = {
  key: string;
  pillLabel: string;
  heading: string;
  description: string;
  image: string;
  caption: string;
};

const RECEIVE_FEATURES: ReceiveFeature[] = [
  {
    key: "local account payments",
    pillLabel: "Local Account",
    heading: "Local Account Payment",
    description:
      "Receive payments directly into your Securevest account without the complexity of international banking. Accept funds from supported banks and payment channels in Nigeria quickly, securely, and transparently.",
    image: "/receivemoney.png",
    caption: "Local Bank Account",
  },
  {
    key: "spend-anywhere",
    pillLabel: "Spend Anywhere",
    heading: "Marketplace Platform Support",
    description:
      "Get paid easily from the marketplaces and platforms you use. Receive your earnings securely and conveniently, with your funds deposited directly into your Securevest account and ready for saving or investing toward your financial goals.",
    image: "/receivemoney2.png",
    caption: "Marketplace Platform Support",
  },
  {
    key: "payment-link-support",
    pillLabel: "Payment Link Support",
    heading: "Payment Links",
    description:
      "Turn opportunities into payments. Create personalized payment links and share them with your customers to receive payments quickly, securely, and conveniently into your Securevest account.",
    image: "/receivemoney3.png",
    caption: "Payment Links",
  },
];

function ReceiveFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = RECEIVE_FEATURES[activeIndex];

  return (
    <section className="px-4 pb-5 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat transition-[background-image] duration-500 sm:h-130"
          style={{ backgroundImage: `url('${active.image}')` }}
      >
      <div className="mx-auto max-w-7xl">
        <div
          className="relative h-130  rounded-2xl">
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="rounded-2xl bg-black/70 p-5 backdrop-blur-sm sm:max-w-sm">
              <h3 className="text-lg font-bold text-gray sm:text-xl">{active.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">{active.description}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-full border border-neutral-200 p-1.5">
          {RECEIVE_FEATURES.map((feature, index) => (
            <button
              key={feature.key}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-sm hidden lg:block font-semibold cursor-pointer transition-colors ${
                index === activeIndex
                  ? "bg-primary-hover text-gray"
                  : "bg-gray text-primary-hover hover:bg-neutral-50"
              }`}
            >
              {feature.pillLabel}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3: Receive your first payment — 3 steps                   */
/* ------------------------------------------------------------------ */

const RECEIVE_STEPS = [
  {
    number: 1,
    imagesrc: "/rrr.svg",
    title: "Get Your Account Details",
    description: "Open your Securevest account and access your dedicated account details for receiving payments.",
  },
  {
    number: 2,
    imagesrc: "/rrr2.svg",
    title: "Share Your Details",
    description:
      "Send your Securevest account details to the person or business making the payment. Payments can be made from any bank in Nigeria.",
  },
  {
    number: 3,
    imagesrc: "/rrr3.svg",
    title: "Receive & Manage Your Funds",
    description: "Once the payment is received, the funds are credited to your account. You can then keep them in your savings plan or allocate them toward your investment goals.",
  },
];

function ReceiveFirstPaymentSteps() {
  return (
    <section className="bg-gray px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 pb-10 pt-20 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold text-tertiary sm:text-4xl">
            Receive your first payment
          </h2>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-gray px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            <Users className="h-4 w-4" />
            Watch this demo video
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {RECEIVE_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-b from-primary-hover to-footer px-8 py-10"
            >
              <span className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-gray-100">
                {step.number}
              </span>
              <img src={step.imagesrc} alt="" className="mb-6 h-75 w-full object-contain" />
              <h3 className="text-lg  font-semibold text-gray">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/75">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ReceiveMoneyPage() {
  return (
    <main>
      <Navbar />
      <ReceiveMoneyHero />
      <ReceiveFeatureShowcase />
      <ReceiveFirstPaymentSteps />
      <Securitysection2 />
      <Testimonialsection />
      <FAQSection />
      <Footer />
    </main>
  );
}