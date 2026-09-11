"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { Apple, PlayCircle, Users, Plus, ShieldCheck, Lock, ShieldAlert, Play } from "lucide-react";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Button2 from "@/component/button-blue";
import Download from "@/component/download";

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

function StablecoinsHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-14 sm:px-10 lg:px-16 lg:pt-2">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm sm:text-2xl font-semibold text-neutral-400">Stablecoins on Raenest</p>

          <h1 className="text-5xl font-normal leading-[1.05] text-neutral-950 sm:text-6xl lg:text-[70px]">
            USDT &amp; USDC. Settled in USD.
          </h1>

          <p className="max-w-md text-base text-neutral-600 sm:text-lg">
            Receive stablecoins globally and access your money instantly with guaranteed 1:1 USD conversion.
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
          {/* PLACEHOLDER: drop your stablecoins hero photo (people + USDT/USDC coin graphics) here */}
          <div className="relative aspect-square w-full">
            <img
              src="/stablecoin.png"
              alt="People smiling, with USDT and USDC coin graphics overlaid"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: "Use Your Money, Your Way" — tabbed image feature       */
/* ------------------------------------------------------------------ */

type MoneyFeature = {
  key: string;
  pillLabel: string;
  heading: string;
  description: string;
  image: string;
};

const MONEY_FEATURES: MoneyFeature[] = [
  {
    key: "flexibility",
    pillLabel: "Flexibility",
    heading: "Use Your Money, Your Way",
    description:
      "Withdraw to local currency, spend globally with your Raenest card, or hold your USD balance—all from one account.",
    image: "/receivemoney.png",
  },
  {
    key: "certainty",
    pillLabel: "Certainty",
    heading: "Guaranteed 1:1 USD Conversion",
    description:
      "Every stablecoin you receive is automatically converted to real USD at a true 1:1 rate. No volatility. No hidden spreads.",
    image: "/receivemoney2.png",
  },
  {
    key: "speed",
    pillLabel: "Speed",
    heading: "Get Paid in Minutes, Not Days",
    description:
      "Receive USDT or USDC from anywhere in the world and access your money almost instantly—no bank delays, no cut-off times.",
    image: "/receivemoney3.png",
  },
];

function MoneyFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = MONEY_FEATURES[activeIndex];

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative h-[420px]  rounded-[32px] bg-neutral-900 bg-cover bg-center bg-no-repeat transition-[background-image] duration-500 sm:h-[480px]"
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
              {MONEY_FEATURES.map((feature, index) => (
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
/*  Section 3: Receiving Stablecoins on Raenest — 3 steps              */
/* ------------------------------------------------------------------ */

const STABLECOIN_STEPS = [
  {
    number: 1,
    imagesrc: "/aaa.png",
    title: "Open the Raenest app.",
    description: "Log into your account.",
  },
  {
    number: 2,
    imagesrc: "/moreoption.png",
    title: "Go to Accounts in the app.",
    description:
      "Select 'Create Stablecoin account from the USD drop-down. Fill a short questionnaire.",
  },
  {
    number: 3,
    imagesrc: "/account.png",
    title: "Once approved.",
    description: "Your USDC and USDT wallet addresses will be created.",
  },
];

function ReceivingStablecoinsSteps() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 pb-10 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl">
            Receiving Stablecoins on Raenest
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
          {STABLECOIN_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-primary to-[#3D2299] px-8 py-10"
            >
              <span className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                {step.number}
              </span>
              <img src={step.imagesrc} alt="" className="mb-6 h-75 w-full object-contain" />
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
/*  Section 4: Security                                               */
/* ------------------------------------------------------------------ */

const SECURITY_POINTS = [
  { icon: ShieldCheck, title: "Compliant Transactions", description: "Backed by local and international financial regulations." },
  { icon: Lock, title: "Two-Factor Authentication", description: "Added layers of protection for every account." },
  { icon: ShieldAlert, title: "Anti-Fraud Measures", description: "Proactive monitoring transactions to secure your money." },
];

function SecuritySection() {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Security you can rely on</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/80 sm:text-base">
          Spend, withdraw, or save anytime, knowing your money is protected at every step.
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
    title: "No Complications",
    quote:
      "I got my first $1000 in stablecoins through Raenest. In 2023/2024, getting paid for gigs was one of the hardest parts of the work. We were taking on gigs, delivering properly, but payments were often delayed or complicated. Raenest didn't overcomplicate anything. It simply worked and that made all the difference.",
    name: "Choice",
    country: "ng",
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
                youtubeId="tEPPFkOOtrk"
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

const STABLECOIN_FAQS = [
  {
    question: "What stablecoins can I receive on Raenest?",
    answer:
      "You can receive USDT and USDC on Raenest across multiple blockchain networks. Once received, they're automatically converted to USD.",
  },
  {
    question: "Which blockchain networks are supported?",
    answer:
      "Raenest supports stablecoin deposits on: Ethereum, Binance (BNB Smart Chain), Polygon, Tron, and Solana. This gives you flexibility to use the network that works best for you in terms of speed and fees.",
  },
  {
    question: "How does the stablecoin conversion work?",
    answer:
      "Every USDT or USDC you receive is automatically converted to real USD at a guaranteed 1:1 rate. No volatility, no hidden spreads, and no surprises.",
  },
  {
    question: "Are there any fees to receive stablecoins?",
    answer:
      "No. There are zero deposit fees on Raenest for receiving USDT or USDC. What you send is what you get, fully converted to USD.",
  },
  {
    question: "Is my money safe when using stablecoins on Raenest?",
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
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
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
          <h2 className="text-2xl sm:text-3xl font-bold leading-[1.1] text-neutral-950">
            Frequently asked
            <br />
            questions
          </h2>
          <p className="mt-4 max-w-xs text-sm text-neutral-500">
            Can't find what you're looking for? Reach out to our support team any time.
          </p>
        </div>

        <div className="max-h-[640px] overflow-y-auto pr-2 [scrollbar-width:thin] ">
          {STABLECOIN_FAQS.map((item, index) => (
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

export default function StablecoinsPage() {
  return (
    <main>
      <Navbar />
      <StablecoinsHero />
      <MoneyFeatureShowcase />
      <ReceivingStablecoinsSteps />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}