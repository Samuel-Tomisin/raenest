"use client";

import Link from "next/link";
import Download from "@/component/download";
import { Apple, PlayCircle } from "lucide-react";
import {
  TZ,
  UG,
  EG,
  CN,
  UA,
  CF,
  US,
  GH,
  GB,
  CA,
  NG,
  KE,
} from "country-flag-icons/react/3x2";
import Button from "@/component/button-white";

/**
 * The EU flag isn't an ISO 3166-1 country code, so it isn't included in
 * country-flag-icons. Hand-rolled here so it still renders in full color.
 */
function EUFlag({ className }: { className?: string }) {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
    const cx = 12 + 7 * Math.cos(angle);
    const cy = 8 + 7 * Math.sin(angle);
    return <circle key={i} cx={cx} cy={cy} r="0.9" fill="#FFCC00" />;
  });
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="24" height="16" fill="#003399" />
      {stars}
    </svg>
  );
}

const MARQUEE_FLAGS: { code: string; name: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { code: "US", name: "United States", Icon: US },
  { code: "GH", name: "Ghana", Icon: GH },
  { code: "GB", name: "United Kingdom", Icon: GB },
  { code: "CA", name: "Canada", Icon: CA },
  { code: "NG", name: "Nigeria", Icon: NG },
  { code: "KE", name: "Kenya", Icon: KE },
  { code: "TZ", name: "Tanzania", Icon: TZ },
  { code: "EU", name: "European Union", Icon: EUFlag },
  { code: "UG", name: "Uganda", Icon: UG },
  { code: "EG", name: "Egypt", Icon: EG },
  { code: "CN", name: "China", Icon: CN },
  { code: "UA", name: "Ukraine", Icon: UA },
  { code: "CF", name: "Central African Republic", Icon: CF },
];

function FlagMarquee() {
  // Render the list twice back-to-back so the CSS animation can loop
  // seamlessly from -50% back to 0 with no visible seam.
  const doubled = [...MARQUEE_FLAGS, ...MARQUEE_FLAGS];

  return (
    <div className="relative w-full max-w-md overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:max-w-lg">
      <div className="flex w-max animate-flag-marquee items-center gap-2">
        {doubled.map(({ code, name, Icon }, i) => (
          <span
            key={`${code}-${i}`}
            title={name}
            className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 sm:h-10 sm:w-10"
          >
            <Icon className="h-full w-full object-cover" />
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes flag-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-flag-marquee {
          animation: flag-marquee 22s linear infinite;
        }
      `}</style>
    </div>
  );
}

type Transaction = {
  name: string;
  amount: string;
  date: string;
  logoBg: string;
  logoLabel: string;
};

const TRANSACTIONS: Transaction[] = [
  {
    name: "Netflix",
    amount: "- $6.25",
    date: "19 Jan, 2025",
    logoBg: "bg-white",
    logoLabel: "N",
  },
  {
    name: "Amazonprime.com",
    amount: "- $4.00",
    date: "18 Jan, 2025",
    logoBg: "bg-[#1F6FE5]",
    logoLabel: "prime",
  },
];

function RecentTransactionsCard() {
  return (
    <div className="absolute inset-x-4 bottom-0 rounded-2xl bg-black/60 px-5 py-4 backdrop-blur-md sm:inset-x-8 lg:-bottom-2 lg:left-8 lg:right-auto lg:w-80">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white">Recent transactions</span>
        <Link href="/transactions" className="text-sm font-medium text-white underline underline-offset-2">
          See all
        </Link>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        {TRANSACTIONS.map((t) => (
          <div key={t.name} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${t.logoBg} ${
                  t.logoBg === "bg-white" ? "!text-red-600" : ""
                }`}
              >
                {t.logoLabel}
              </span>
              <div>
                <p className="text-sm font-medium text-white">{t.name}</p>
                <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                  Success
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">{t.amount}</p>
              <p className="text-[11px] text-white/50">{t.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#5433C9] px-6 py-5 sm:px-10 sm:py-7 lg:px-16 lg:py-20">
      {/* Soft decorative swoosh behind the photo */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-swoosh" x1="30%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5433C9" stopOpacity="0" />
            <stop offset="60%" stopColor="#8f7bf0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#cfc4ff" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <path
          d="M300,700 C 550,560 650,380 780,230 C 900,90 1100,20 1440,0 L1440,700 Z"
          fill="url(#hero-swoosh)"
        />
      </svg>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-8">
        {/* Left: copy */}
        <div className="flex flex-1 flex-col gap-6">
          <FlagMarquee />

          <h1 className="text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Receive and spend
          </h1>
          <h1 className="text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            money globally
          </h1>

          <p className="max-w-md text-base text-white sm:text-lg">
            Get paid from anywhere in global currencies and do more with
            money—spend, earn on savings, and invest.
          </p>

          <div className="flex items-center gap-4">
            <Button/>
            <Download />
          </div>
        </div>

        {/* Right: photo + floating transactions card */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-[3/5] w-full max-w-sm overflow-hidden rounded-t-[160px] rounded-b-[2rem] sm:max-w-md lg:max-w-none">
            {/* Drop your hero photo in here */}
            <img
              src="/girl.png"
              alt="Person checking transactions on their phone"
              className="h-full w-full object-cover"
            />
          </div>

          <RecentTransactionsCard />
        </div>
      </div>
    </section>
  );
}