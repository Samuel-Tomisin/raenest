"use client";

import { useEffect, useRef, useState, useId } from "react";
import type { JSX } from "react";
import Link from "next/link";
import { Users, Plus, Play } from "lucide-react";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Download from "@/component/download";

/* ------------------------------------------------------------------ */
/*  Shared: flag badges (SVG, no external flag-icon package needed)   */
/* ------------------------------------------------------------------ */

type CountryCode = "gh" | "ng" | "ke";

function FlagBadge({ country }: { country: CountryCode }) {
  const uid = useId();

  const flags: Record<CountryCode, JSX.Element> = {
    gh: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded-full" aria-label="Ghana">
        <clipPath id={`gh-clip-${uid}`}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
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
        <clipPath id={`ng-clip-${uid}`}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
        <g clipPath={`url(#ng-clip-${uid})`}>
          <rect width="8" height="24" x="0" fill="#008751" />
          <rect width="8" height="24" x="8" fill="#FFFFFF" />
          <rect width="8" height="24" x="16" fill="#008751" />
        </g>
      </svg>
    ),
    ke: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded-full" aria-label="Kenya">
        <clipPath id={`ke-clip-${uid}`}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
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
  return flags[country];
}

/* ------------------------------------------------------------------ */
/*  Section 1: Hero                                                   */
/* ------------------------------------------------------------------ */

function CardsHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-14 sm:px-10 lg:px-16 lg:pt-4">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm sm:text-2xl font-bold text-gray-400">Cards</p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-gray-800 sm:text-6xl lg:text-[64px]">
            Dollar cards for everyday use
          </h1>
          <p className="max-w-md text-base text-gray-800 sm:text-lg">
            Get Raenest virtual USD cards for online and offline transactions
            with transparent and competitive fees.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="hidden lg:block">
            <Link
              href="/register"
              className="rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-gray-100 transition-colors"
            >
              Request a card
            </Link>
            </div>
            <Download />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="mx-auto max-w-7xl">
          {/* Drop your card photo/render in here */}
          <img src="/visahand.png" alt="" />
          </div>
          {/* <div className="aspect-[4/5] w-full rounded-[32px] bg-gradient-to-br from-[#5433C9] via-[#6a4ce0] to-[#d6ff3f]">
          </div> */}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: Travel banner (decorative)                             */
/* ------------------------------------------------------------------ */

function CardTravelBanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Drop your travel photo (e.g. Arc de Triomphe with card in hand) in here */}
        <img src="/visahand.png" alt="" />
        <div className="h-65 w-full rounded-4xl bg-linear-to-br from-primary to-[#8fb8ff] sm:h-80" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3: Feature carousel (Contactless Pay / Easy Funding /     */
/*  Card Control)                                                     */
/* ------------------------------------------------------------------ */

type FeatureSlide = {
  key: string;
  pillLabel: string;
  heading: string;
  description: string;
  image: string;
};

const FEATURE_SLIDES: FeatureSlide[] = [
  {
    key: "contactless-pay",
    pillLabel: "Contactless Pay",
    heading: "The smarter way to pay",
    description:
      "Simply bring your device near the payment terminal to pay in seconds. Works with Google pay and Apple pay.",
    image: "/card2.webp",
  },
  {
    key: "easy-funding",
    pillLabel: "Easy Funding",
    heading: "Access your money anywhere",
    description:
      "Fund with NGN (Naira), USD, GBP, EUR, USDT or USDC at competitive rates in the market.",
    image: "/womanphone.webp",
  },
  {
    key: "card-control",
    pillLabel: "Card Control",
    heading: "Cards you fully control",
    description:
      "Set spending limits on a daily, weekly, or monthly basis. Freeze or terminate your cards at any time.",
    image: "/card.png",
  },
];

const CAROUSEL_AUTOPLAY_MS = 6000;

function CardFeaturesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURE_SLIDES.length);
    }, CAROUSEL_AUTOPLAY_MS);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);

  const active = FEATURE_SLIDES[activeIndex];

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative h-120 overflow-hidden bg-neutral-900 bg-cover bg-center bg-no-repeat transition-[background-image] duration-500 sm:h-130"
          style={{ backgroundImage: `url('${active.image}')` }}
        >
          <img src="/money.webp" alt="" className="w-70 h-35 text-center"/>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-6 px-6 pb-10 text-center sm:px-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-100 sm:text-4xl">{active.heading}</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-gray-100 sm:text-base">
                {active.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/30 p-1.5">
              {FEATURE_SLIDES.map((slide, index) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-4 py-2 text-sm cursor-pointer hidden lg:block font-semibold transition-colors ${
                    index === activeIndex
                      ? "bg-primary text-gray-100"
                      : "bg-gray-100 text-neutral-900 hover:bg-white/90"
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

/* ------------------------------------------------------------------ */
/*  Section 4: Fund your card                                         */
/* ------------------------------------------------------------------ */

function FundCardSection() {
  return (
    <section className="bg-linear-to-br px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="bg-[url('/phonecard2.png')] bg-cover bg-no-repeat bg-center bg-2/3 ">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        {/* <div className="flex flex-col gap-6">
          <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full ring-2 ring-white/20">
            <span className="h-full w-1/2 bg-emerald-500" />
            <span className="h-full w-1/2 bg-black" />
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Fund your card with Naira, Stablecoins (USDT &amp; USDC), USD, GBP
            &amp; EUR.
          </h2>
        </div> */}

        <div className="relative mx-auto w-full max-w-sm">
          {/* Drop your card render/phone mockup photo in here */}
          {/* <img src="/phonecard.webp" alt="" /> */}
          <div className="aspect-4/5 w-full rounded-4xl" />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <h3 className="max-w-xl text-2xl font-bold leading-tight text-gray-100 sm:text-3xl">
          Accepted at over 150 million merchants where Visa is accepted.
        </h3>
      </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5: Request a card — 3 steps                                */
/* ------------------------------------------------------------------ */

const REQUEST_STEPS = [
  {
    number: 1,
    image: "/create.webp",
    title: "Go to cards in your Raenest app",
    description: "Log in to your account.",
  },
  {
    number: 2,
    image: "/virtualcard.png",
    title: "Choose a card type",
    description: "You get a virtual USD card.",
  },
  {
    number: 3,
    image: "/raenestcard.png",
    title: "Customize your card",
    description:
      "You can give your card a name, different colours, etc. Voila! Your card is ready",
  },
];

function RequestCardSteps() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 pb-10 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Request for a card today
          </h2>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            <Users className="h-4 w-4" />
            Watch this demo video
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REQUEST_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-b from-[#5433C9] to-[#3D2299] px-8 py-15"
            >
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-gray-100">
                {step.number}
              </span>
              {/* Drop your app screenshot / mockup image in here */}
              {/* <div className="mb-6 h-48 w-full rounded-2xl bg-white" /> */}
              <img src={step.image} alt="" className="mb-6 h-full w-full rounded-2xl text-[12px]" />
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/75">
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
/*  Section 6: Security                                               */
/* ------------------------------------------------------------------ */

const SECURITY_POINTS = [
  {
    image: "/shieldcheck.png",
    title: "Compliant Transactions",
    description: "Backed by local and international financial regulations.",
  },
  {
    title: "Two-Factor Authentication",
    description: "Support for enhanced transaction security",
  },
  {
    title: "Anti-Fraud Measures",
    description: "Proactive monitoring to secure your money.",
  },
];

function SecuritySection() {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
          Security you can rely on
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-100 sm:text-base">
          We uphold industry-standard security across all our services,
          ensuring your transactions and funds are protected 24/7 so you can
          focus on what matters.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SECURITY_POINTS.map(({ title, description }) => (
            <div key={title} className="rounded-3xl bg-white/10 p-8 text-left">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-gray-100">
                <Users className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-gray-100">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 7: Testimonials                                           */
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
      "I could not imagine how great Raenest works until I signed up with them. Honestly, this is my first time reviewing about any website but I must say that I'm happy to write how excellent they operate.",
    name: "Kevin",
    country: "gh",
  },
  {
    title: "Contactless Payments",
    quote:
      "Whether I'm booking flights, paying for hotels, or grabbing coffee abroad, my Raenest USD card just works. It's perfect for anyone who moves globally.",
    name: "Steven Nduwku",
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
      <div className="relative flex-1 min-h-55 sm:min-h-65 lg:min-h-70 rounded-xl overflow-hidden">
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
            <img
              src={posterSrc}
              alt={`${name}'s testimonial`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm group-hover:scale-105 transition-transform">
                <Play className="h-5 w-5 sm:h-6 sm:w-6 text-gray-100 fill-white ml-0.5" />
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
          <h1 className="pt-16 sm:pt-20 md:pt-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[47px] font-semibold leading-tight text-gray-800">
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

        <div className="mx-auto mt-6 flex w-full max-w-81 items-center justify-center gap-2 rounded-2xl bg-black px-3 py-2 cursor-pointer">
          <img src="/rating.png" alt="Star Rating" className="max-h-4 shrink-0" />
          <h2 className="text-center text-[13px] sm:text-[15px] font-semibold text-gray-100">
            4.6 Apple store, Play store
          </h2>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 8: FAQ                                                    */
/* ------------------------------------------------------------------ */

const CARDS_FAQS = [
  {
    question: "Is Raenest a bank?",
    answer:
      "Raenest is a financial technology company and not a bank. Banking services are provided by Geegpay's payment partners & banks who are authorised by the CBN, FCA, FDIC, and other regulatory bodies. Card services are provided by Raenest's technology partners, authorized by Visa and Mastercard to issue cards operating over their networks. Raenest might refuse to open an account, verify or maintain an account that violates applicable laws and the Terms of Service.",
  },
  {
    question: "What is the Raenest USD Visa Card and how is it related to Raenest?",
    answer:
      "The Raenest USD Visa Card is a standalone payment card issued by Rain, a Visa Principal Member, and powered by Visa Inc. Raenest provides the platform interface through which users can access and manage the card. The card itself is a separate product from the broader Raenest platform \u2014 services such as global accounts, stablecoins, currency conversion, money transfers, and investments are not features of the Rain-issued card but are independent offerings available within the Raenest platform.",
  },
  {
    question: "How quickly can I start using my card?",
    answer:
      "You can create your virtual card instantly from your Raenest app and start spending immediately. Your physical card will be delivered to you after your request is processed.",
  },
  {
    question: "Who can create a Raenest USD Card?",
    answer:
      "Anyone with a verified Raenest account can create a USD card within minutes directly from the Raenest app.",
  },
  {
    question: "What else can I do with Raenest besides using the USD card?",
    answer:
      "With Raenest, you can also receive payments globally, send money worldwide, convert currencies at competitive rates, and manage your global finances in one place.",
  },
  {
    question: "Where can I use my Raenest USD Card?",
    answer:
      "You can use your Raenest USD Card wherever Visa is accepted \u2014 global websites, travel platforms, subscription services, restaurants, stores, and contactless terminals worldwide. In supported countries, you can also add it to Apple Pay or Google Pay for seamless in-store payments while traveling.",
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
              isOpen ? "rotate-45 text-neutral-700" : "text-gray-100"
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
          {/* <p className="mt-4 max-w-xs text-sm text-neutral-500">
            Can't find what you're looking for? Reach out to our support team
            any time.
          </p> */}
        </div>

        <div className="max-h-160 overflow-y-auto pr-2 scrollbar-thin lg:pr-6">
          {CARDS_FAQS.map((item, index) => (
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
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CardsPage() {
  return (
    <main>
      <Navbar />
      <CardsHero />
      {/* <CardTravelBanner /> */}
      <CardFeaturesCarousel />
      {/* <FundCardSection /> */}
      <RequestCardSteps />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}