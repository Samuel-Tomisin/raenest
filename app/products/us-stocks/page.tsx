"use client";

import { useState, useId } from "react";
import {Users, Plus, ShieldCheck, Lock, ShieldAlert } from "lucide-react";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Button2 from "@/component/button-blue";
import Download from "@/component/download";
import TestimonialSection from "@/app/sections/testimonialsection";

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

function StocksHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm sm:text-2xl font-medium text-neutral-400">U.S Stocks on Raenest</p>

          <h1 className="text-6xl font-normal leading-[1.05] text-neutral-950 sm:text-7xl lg:text-[64px]">
            Own the <br /> World&apos;s Biggest Companies
          </h1>

          <p className="max-w-md text-base text-neutral-600 sm:text-lg">
            From Apple, Tesla, Google to ETFs, Raenest lets you invest in U.S. stocks easily, right from the app you already use.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button2/>
            <Download/>
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
          {/* PLACEHOLDER: drop your us-stocks hero photo here (man in teal sweater + stock-jar 3D graphic) */}
          <div className="aspect-square w-full overflow-hidden rounded-4xl">
            <img
              src="/heroguy.png"
              alt="Person smiling while checking phone, with a 3D jar graphic showing stock logos"
              className="h-full w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: Tabbed feature showcase                                */
/*  (Access / Simplicity / Advantage)                                 */
/* ------------------------------------------------------------------ */

type StockFeature = {
  key: string;
  pillLabel: string;
  heading: string;
  description: string;
  image: string;
};

const STOCK_FEATURES: StockFeature[] = [
  {
    key: "access",
    pillLabel: "Access",
    heading: "Global Stocks, Real Ownership.",
    description:
      "Buy U.S. stocks and ETFs from companies shaping the global economy. From tech to healthcare, own a piece of the brands you already believe in.",
    image: "/receivemoney.png",
  },
  {
    key: "simplicity",
    pillLabel: "Simplicity",
    heading: "No Complicated Funding.",
    description:
      "Invest directly from your Raenest USD balance. No moving money around, no third-party brokers, just simple, seamless investing in one place.",
    image: "/receivemoney2.png",
  },
  {
    key: "advantage",
    pillLabel: "Advantage",
    heading: "Start Small. Invest Smarter.",
    description:
      "Buy fractional shares and enjoy one commission-free stock purchase every month. Build your portfolio gradually, at your own pace.",
    image: "/receivemoney3.png",
  },
];

function StockFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = STOCK_FEATURES[activeIndex];

  return (
    <section className="bg-black px-4  lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative h-105 overflow-hidden rounded-4xl bg-neutral-900 bg-cover bg-center bg-no-repeat transition-[background-image] duration-500 sm:h-120"
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
              {STOCK_FEATURES.map((feature, index) => (
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

/* ------------------------------------------------------------------ */
/*  Section 3: Company logos marquee strip                            */
/* ------------------------------------------------------------------ */

const COMPANY_LOGOS = [
  "Cisco",
  "Airbus",
  "Deloitte",
  "Amazon",
  "Disney",
  "Microsoft",
  "Accenture",
  "EY",
  "Toyota",
  "Apple",
];

function CompanyLogosStrip() {
  return (
    <section className="bg-[#F8F7FC] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Access stocks of over 4000 of the world&apos;s top companies
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70 grayscale">
          {COMPANY_LOGOS.map((name) => (
            <span key={name} className="text-lg font-bold text-neutral-700">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4: Buying your first U.S. stock — 3 steps                 */
/* ------------------------------------------------------------------ */

const BUYING_STEPS = [
  {
    number: 1,
    image: "/account.png",
    title: "Fund Your Account.",
    description:
      "Add money to your Trading Wallet via Raenest balance from USD, NGN, GBP, or EUR.",
  },
  {
    number: 2,
    image: "/account2.png",
    title: "Pick a Stock.",
    description:
      "Choose from top U.S. stocks and ETFs. Learn about the stock with AI. Start from $2.",
  },
  {
    number: 3,
    image: "/account3.png",
    title: "Invest & Grow",
    description: "Buy your first stock and track performance in-app.",
  },
];

function BuyingFirstStockSteps() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 pb-10 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl">
            Buying your first U.S. stock
          </h2>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            <Users className="h-4 w-4" />
            Watch this how-to video
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BUYING_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-b from-primary to-[#3D2299] px-8 py-10"
            >
              <span className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                {step.number}
              </span>
               {<img src={step.image} alt="" className="h-full w-full pb-6" />}
    
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/75">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5: From income to ownership                               */
/* ------------------------------------------------------------------ */

const OWNERSHIP_POINTS = [
  { icon: ShieldCheck, title: "Turn Earnings into Assets", description: "Put your earnings to work instead of letting it sit idle." },
  { icon: Lock, title: "Secure. Regulated. Transparent.", description: "Clear pricing, transparent execution, and trusted partners." },
  { icon: ShieldAlert, title: "Grow on Your Own Terms", description: "No minimums. No pressure. Just steady investing, month after month." },
];

function OwnershipSection() {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">From income to ownership.</h2>
            <p className="mt-4 max-w-lg text-sm text-white/80 sm:text-base">
              Your money shouldn&apos;t stop at earning. Raenest helps you move beyond just earning, to owning parts of the companies shaping the world.
            </p>
            <img src="/getcard.png" alt=""  className="pt-10"/>
          </div>

          <div className="flex flex-col gap-8">
            {OWNERSHIP_POINTS.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className={index < OWNERSHIP_POINTS.length - 1 ? "border-b border-white/20 pb-8" : ""}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6: Testimonials                                           */
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
    title: "Best in Class Support",
    quote: "Raenest is a great company with one of the best supports I've ever seen.",
    name: "Theresa",
    country: "ng",
  },
];

const rightTestimonials: Testimonial[] = [
  {
    title: "Best exchange rates",
    quote:
      "The platform is intuitive, seamless and easy to use. It is also the Fintech platform with the best exchange rates for sending money.",
    name: "Banji",
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

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leftTestimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
          {rightTestimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        <div className="mx-auto mt-6 flex w-full max-w-81 items-center justify-center gap-2 rounded-2xl bg-black px-3 py-2 cursor-pointer">
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
/*  Section 7: FAQ                                                    */
/* ------------------------------------------------------------------ */

const STOCKS_FAQS = [
  {
    question: "Do I need a large amount of money to start investing?",
    answer:
      "No. Raenest supports fractional investing, so you can start with small amounts and gradually build your portfolio over time.",
  },
  {
    question: "Is my money and investment safe on Raenest?",
    answer:
      "Yes. Your U.S. stock investments are held with Alpaca Securities LLC, a U.S.-licensed broker-dealer regulated by the SEC and FINRA. Your assets are custodied under strict regulatory and security standards, and you retain full visibility into your holdings and performance at all times. This investment feature is offered in partnership with City Investment Capital Limited, a firm licensed by the Securities and Exchange Commission of Nigeria.",
  },
  {
    question: "Can I fund with Naira (NGN)?",
    answer:
      "Yes. You can fund your Raenest account with NGN, convert it to USD within the app, and use your USD balance to invest in U.S. stocks. The entire process happens seamlessly on Raenest.",
  },
  {
    question: "What fees do I pay when buying U.S. stocks?",
    answer:
      "Every Raenest user gets one commission-free stock purchase each month. Any applicable fees are shown clearly before you confirm a trade—no hidden charges.",
  },
  {
    question: "Can I sell my stocks and withdraw my money?",
    answer:
      "Yes. You can sell your stocks anytime during market hours. Once sold, funds return to your USD balance and can be withdrawn, converted to local currency, or reinvested.",
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
          <h2 className="text-3xl sm:text-4xl font-bold leading-[1.1] text-neutral-950">
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

        <div className="max-h-160 overflow-y-auto pr-2 scrollbar-thin lg:pr-6">
          {STOCKS_FAQS.map((item, index) => (
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

export default function UsStocksPage() {
  return (
    <main>
      <Navbar />
      <StocksHero />
      <StockFeatureShowcase />
      <CompanyLogosStrip />
      <BuyingFirstStockSteps />
      <OwnershipSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </main>
  );
}