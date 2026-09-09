"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { Apple, PlayCircle, Users, Plus, ShieldCheck, Landmark, ShieldAlert, Play } from "lucide-react";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Download from "@/component/download";
import Button from "@/component/button-white";
import Download2 from "@/component/download2";
import Button2 from "@/component/button-blue";

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

function InvoicesHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm sm:text-2xl font-medium text-neutral-400">Invoices</p>

          <h1 className="text-5xl font-normal leading-[1.05] text-neutral-950 sm:text-6xl lg:text-[80px]">
            Smart <br /> Invoicing for <br /> professionals
          </h1>

          <p className="max-w-md text-base text-neutral-600 sm:text-lg">
            Create professional invoices for one-time and recurring payments in minutes.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button2 />
            <Download />
          </div>

          <div className="flex items-center gap-3 pt-2">
            {/* PLACEHOLDER: drop your QR code image here */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[9px] font-medium text-neutral-400">
              <img src="/qrcode.png" alt="" />
            </div>
            <p className="text-xs text-neutral-500">
              Scan the QR code below to download the app
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
          {/* PLACEHOLDER: drop your invoices hero image here (open folder/wallet illustration) */}
          <div className="aspect-square w-full overflow-hidden rounded-4xl">
            <img
              src="/hero.webp"
              alt="Illustration of an open invoice folder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: Tabbed feature showcase                                */
/*  (Flexible / Automation / Global)                                  */
/* ------------------------------------------------------------------ */

type InvoiceFeature = {
  key: string;
  pillLabel: string;
  heading: string;
  description: string;
  image: string;
};

const INVOICE_FEATURES: InvoiceFeature[] = [
  {
    key: "flexible",
    pillLabel: "Flexible",
    heading: "Flexible payment options",
    description:
      "Choose how you get paid, every time. Select your preferred currency, payment method and even decide who bears the transaction fees.",
    image: "/invoicestab1.webp",
  },
  {
    key: "automation",
    pillLabel: "Automation",
    heading: "Automate the boring stuff",
    description:
      "Save hours of work with built-in intelligence. Our system calculates VAT, reconciles payments with outstanding invoices, all done for you.",
    image: "/invoicestab2.webp",
  },
  {
    key: "global",
    pillLabel: "Global",
    heading: "Ready for global",
    description:
      "Overcome currency barriers, and maintain top class professional financial operations as an African freelancer or solo-preneur locally.",
    image: "/invoicestab3.webp",
  },
];

function InvoiceFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = INVOICE_FEATURES[activeIndex];

  return (
    <section className="bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative h-[520px] overflow-hidden rounded-[32px] bg-neutral-900 bg-cover bg-center bg-no-repeat transition-[background-image] duration-500 sm:h-[520px]"
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
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    index === activeIndex
                      ? "bg-[#1D1B4E] text-white"
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

/* ------------------------------------------------------------------ */
/*  Section 3: Get Paid Globally in 3 Easy Steps                      */
/* ------------------------------------------------------------------ */

const INVOICE_STEPS = [
  {
    number: 1,
    imagescr: "/step1.svg",
    title: "Create Your Invoice",
    description: "Log into the Raenest app and create new invoice",
  },
  {
    number: 2,
    imagescr: "/step2.svg",
    title: "Add Invoice Details",
    description:
      "List the products or services, client details and payment method as needed.",
  },
  {
    number: 3,
    imagescr: "/step3.svg",
    title: "Review & Send",
    description: "Double-check the details for accuracy, then hit Send.",
  },
];

function GetPaidSteps() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 pb-10 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl">
            Get Paid Globally in 3 Easy Steps
          </h2>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            <Users className="h-4 w-4" />
            Watch this demo video
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {INVOICE_STEPS.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-primary to-[#3D2299] px-8 py-45">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                  {step.number}
                  <img src={step.imagescr} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </span>
              </div>
              <h3 className="mt-4 text-center text-lg font-bold text-primary">{step.title}</h3>
              <p className="mt-2 text-center sm:text-[18px] text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4: Security                                               */
/*  (icons differ from other pages — "Your Account" instead of 2FA)   */
/* ------------------------------------------------------------------ */

const SECURITY_POINTS = [
  { icon: ShieldCheck, title: "Compliant Transactions", description: "Backed by local and international financial regulations." },
  { icon: Landmark, title: "Your Account", description: "Receive payments securely with an account registered in your name" },
  { icon: ShieldAlert, title: "Anti-Fraud Measures", description: "Proactive monitoring to secure your money." },
];

function SecuritySection() {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Security you can rely on</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/80 sm:text-base">
          We uphold industry-standard security across all our services, ensuring your transactions and funds are protected 24/7 so you can focus on what matters.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SECURITY_POINTS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-3xl bg-white/10 p-8 text-left">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5: Testimonials (incl. video testimonial)                 */
/* ------------------------------------------------------------------ */

interface Testimonial {
  title: string;
  quote: string;
  name: string;
  country: CountryCode;
}

const leftTestimonials: Testimonial[] = [
  {
    title: "Unimaginably Excellent",
    quote:
      "I could not imagine how great Raenest works until I signed up with them. Honestly, this is my first time reviewing about any website but I must say that I'm happy to write how excellent this Online bank operates",
    name: "Kevin",
    country: "gh",
  },
  {
    title: "Best exchange rates",
    quote:
      "The platform is intuitive, seamless and easy to use. It is also the Fintech platform with the best exchange rates for sending money.",
    name: "Banji",
    country: "ng",
  },
];

const rightTestimonials: Testimonial[] = [
  {
    title: "Best in Class Support",
    quote: "Raenest is a great company with one of the best supports I've ever seen.",
    name: "Theresa",
    country: "ng",
  },
  {
    title: "Seamless for Transfers",
    quote:
      "Raenest has been helping me since last year that I found it, I don't have to stress about transfer anymore as it comes quickly and very fast.",
    name: "Blessing",
    country: "ke",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-neutral-100 p-6 h-full">
      <div>
        <h3 className="font-semibold text-neutral-900 mb-3">{testimonial.title}</h3>
        <p className="text-sm text-neutral-600 leading-relaxed">{testimonial.quote}</p>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <FlagBadge country={testimonial.country} />
        <span className="text-sm font-medium text-neutral-900">{testimonial.name}</span>
      </div>
    </div>
  );
}

function VideoTestimonialCard({
  youtubeId,
  posterSrc,
  name,
  country,
}: {
  youtubeId: string;
  posterSrc: string;
  name: string;
  country: CountryCode;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="rounded-2xl bg-neutral-100 p-3 h-full flex flex-col">
      <div className="relative flex-1 min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] rounded-xl overflow-hidden">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={`${name}'s testimonial video`}
            allow="accelerate-compute; encrypted-media; picture-in-picture; autoplay"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 h-full w-full group cursor-pointer"
            aria-label={`Play ${name}'s testimonial video`}
          >
            {/* PLACEHOLDER: drop your video poster image here */}
            <img
              src={posterSrc}
              alt={`${name}'s testimonial`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm group-hover:scale-105 transition-transform">
                <Play className="h-5 w-5 sm:h-6 sm:w-6 text-white fill-white ml-0.5" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex items-center gap-2 pt-3 px-2">
        <FlagBadge country={country} />
        <span className="text-sm font-medium text-neutral-900">{name}</span>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="px-4">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[47px] font-semibold leading-tight text-gray-800">
            Over 1,000,000 people
          </h1>
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[47px] font-semibold leading-tight text-gray-800">
            love us. You will too.
          </h1>
          <h2 className="pb-12 pt-5 text-center text-lg sm:text-xl md:text-2xl lg:text-[28px] text-gray-800">
            Hear some of them yourself.
          </h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col gap-5">
              {leftTestimonials.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </div>

            <div className="md:row-span-1">
              <VideoTestimonialCard
                youtubeId="g3D_YGKjyms"
                posterSrc="/testimonials/moyinoluwa-thumbnail.jpg"
                name="Moyinoluwa"
                country="ng"
              />
            </div>

            <div className="flex flex-col gap-5">
              {rightTestimonials.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 flex w-full max-w-[324px] items-center justify-center gap-2 rounded-2xl bg-black px-3 py-2 cursor-pointer">
          <img src="/rating.png" alt="Star Rating" className="max-h-4 shrink-0" />
          <h2 className="text-center text-[13px] sm:text-[15px] font-semibold text-gray-500">
            4.6 Apple store, Play store
          </h2>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6: FAQ                                                    */
/* ------------------------------------------------------------------ */

const INVOICES_FAQS = [
  {
    question: "Is Raenest a bank?",
    answer:
      "Raenest is a financial technology company and not a bank. Banking services are provided by Raenest's payment partners & banks who are authorised by the CBN, FCA, FDIC, and other regulatory bodies. Debit Card Services are issued by Raenest's technology partners who are authorised by VISA and Mastercard to carry out card services. Raenest might refuse to open an account, verify or maintain an account that violates applicable laws and the Terms of Service.",
  },
  {
    question: "How long does it take to get my bank account?",
    answer:
      "You'll receive instant access to your account once you've submitted all required information and completed verification.",
  },
  {
    question: "What's the fee for receiving in my bank account?",
    answer:
      "The fees for incoming transfers are determined on a case-by-case basis. For a detailed breakdown of charges, please consult our full fee schedule.",
  },
  {
    question: "What's the fee for converting with in currency?",
    answer:
      "We don't charge any conversion fees. You can view current exchange rates for major currencies free of charge on Raenest.",
  },
  {
    question: "Can I use my USD account on Upwork, Deel, Fiverr, or Payoneer?",
    answer:
      "Yes, you can use your USD account to receive payments from any platform that supports USD bank deposits.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span
          className={`text-base sm:text-lg font-semibold transition-colors ${
            isOpen ? "text-neutral-950" : "text-neutral-800"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? "bg-neutral-300" : "bg-primary"
          }`}
        >
          <Plus
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen ? "rotate-45 text-neutral-700" : "text-white"
            }`}
            strokeWidth={2.5}
          />
        </span>
      </button>

      <div
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-12 text-sm sm:text-base leading-relaxed text-neutral-500">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white px-6 py-16 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] text-neutral-950">
            Frequently
            <br />
            asked
            <br />
            questions
          </h2>
          <p className="mt-4 max-w-xs text-sm text-neutral-500">
            Can't find what you're looking for? Reach out to our support team any time.
          </p>
        </div>

        <div className="max-h-[640px] overflow-y-auto pr-2 [scrollbar-width:thin] lg:pr-6">
          {INVOICES_FAQS.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function InvoicesPage() {
  return (
    <main>
      <Navbar />
      <InvoicesHero />
      <InvoiceFeatureShowcase />
      <GetPaidSteps />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}