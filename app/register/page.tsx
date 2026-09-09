"use client";

import Link from "next/link";

interface AccountOption {
  key: string;
  title: string;
  description: string;
  href: string;
}

const ACCOUNT_OPTIONS: AccountOption[] = [
  {
    key: "personal",
    title: "Personal account",
    description: "Receive, spend, and send money globally with ease.",
    href: "/register/personal",
  },
  {
    key: "business",
    title: "Business account",
    description:
      "Move money globally. Your company must be legally registered to open an account.",
    href: "/register/business",
  },
];

function AccountOptionIcon({ optionKey }: { optionKey: string }) {
  if (optionKey === "personal") {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect
          x="6"
          y="12"
          width="36"
          height="24"
          rx="4"
          fill="url(#personal-gradient)"
        />
        <circle cx="16" cy="22" r="3" fill="white" fillOpacity="0.9" />
        <rect x="22" y="19" width="14" height="2" rx="1" fill="white" fillOpacity="0.9" />
        <rect x="22" y="24" width="14" height="2" rx="1" fill="white" fillOpacity="0.7" />
        <rect x="13" y="29" width="10" height="2" rx="1" fill="white" fillOpacity="0.7" />
        <defs>
          <linearGradient id="personal-gradient" x1="6" y1="12" x2="42" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C6FE8" />
            <stop offset="1" stopColor="#3D2299" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="10" y="14" width="28" height="24" rx="3" fill="url(#business-gradient)" />
      <rect x="14" y="18" width="4" height="16" fill="white" fillOpacity="0.85" />
      <rect x="22" y="18" width="4" height="16" fill="white" fillOpacity="0.85" />
      <rect x="30" y="18" width="4" height="16" fill="white" fillOpacity="0.85" />
      <path d="M8 14 24 6 40 14" stroke="url(#business-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <defs>
        <linearGradient id="business-gradient" x1="8" y1="6" x2="40" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5433C9" />
          <stop offset="1" stopColor="#1D1B4E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function RegisterAccountTypePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* ── Header ── */}
      <header className="flex items-center justify-between border-b border-neutral-100 bg-white px-6 py-5 sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          {/* PLACEHOLDER: drop your Raenest logo mark (the "O" icon) here */}
          {/* <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#5433C9]">
            <span className="sr-only">Raenest</span>
          </div> */}
          <img src="/raenest.svg" alt="Raenest Logo" className="h-10 w-50" pl-40 />
        </Link>

        <Link
          href="/login"
          className="text-sm font-semibold text-[#5433C9] hover:text-[#4527ad]"
        >
          Log in
        </Link>
      </header>

      {/* ── Account type selector ── */}
      <main className="flex flex-col items-center px-6 pt-16 sm:pt-24">
        <h1 className="text-center text-2xl font-bold text-neutral-950 sm:text-3xl">
          How would you like to use Raenest?
        </h1>
        <p className="mt-2 text-center text-sm font-medium text-[#5433C9]">
          Please select an option below
        </p>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {ACCOUNT_OPTIONS.map((option) => (
            <Link
              key={option.key}
              href={option.href}
              className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-gradient-to-b from-[#F8F7FF] to-white px-8 py-10 text-center transition-colors hover:border-[#5433C9]"
            >
              <AccountOptionIcon optionKey={option.key} />
              <h2 className="mt-5 text-lg font-bold text-neutral-950">{option.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {option.description}
              </p>
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-2xl pb-16 text-center text-xs leading-relaxed text-neutral-500">
          Raenest is a financial technology company, not a bank. Banking services are provided
          by Regent Bank, Member FDIC. FDIC insurance only covers failure of insured depository
          institutions. Certain conditions must be satisfied for pass-through FDIC deposit
          insurance to apply.
        </p>
      </main>
    </div>
  );
}