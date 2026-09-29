"use client";

import Link from "next/link";
import Image from "next/image";
import Download from "@/component/download";
import Button from "@/component/button-white";
import Download2 from "@/component/download2";

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
        <span className="text-sm font-medium text-gray">Recent transactions</span>
        <Link href="/transactions" className="text-sm font-medium text-gray underline underline-offset-2">
          See all
        </Link>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        {TRANSACTIONS.map((t) => (
          <div key={t.name} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-gray ${t.logoBg} ${
                  t.logoBg === "bg-gray" ? "text-red-600!" : ""
                }`}
              >
                {t.logoLabel}
              </span>
              <div>
                <p className="text-sm font-medium text-gray">{t.name}</p>
                <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-medium text-positive">
                  Success
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray">{t.amount}</p>
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
    <section className="relative w-full bg-primary-hover px-4 sm:px-10 sm:pt-7 lg:px-16 lg:pt-7">
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-12 lg:flex-row lg:items-center lg:gap-8">
        {/* Left: copy */}
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <h1 className="text-3xl leading-[1.1] text-gray sm:text-5xl lg:text-6xl font-serif">
            Save with discipline.
          </h1>
          <h1 className="text-3xl leading-[1.1] text-gray sm:text-5xl lg:text-6xl font-serif">
            Spend with ease.
          </h1>

          <p className="max-w-md text-base text-gray sm:text-lg font-sans">
            Lock savings for up to 12% p.a., set goals that stick, and still have
            instant transfers, cards, and bill payments in the same app.
          </p>

          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className="">
              <Button />
            </div>
            <Download />
          </div>
        </div>

        {/* Right: photo + floating transactions card */}
        <div className="relative min-w-0 flex-1">
          <div className="relative mx-auto aspect-5/5 w-full max-w-sm rounded-t-[160px] rounded-b-4xl sm:max-w-md lg:max-w-none overflow-hidden">
            <Image
              src="/girl.png"
              alt="Person checking transactions on their phone"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </div>
          <div className="hidden lg:block">
            <RecentTransactionsCard />
          </div>
        </div>
      </div>
    </section>
  );
}