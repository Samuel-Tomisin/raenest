"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Globe,
  ChevronDown,
  ChevronRight,
  Users,
  Briefcase,
  Landmark,
  FolderOpen,
  ClipboardCheck,
  Zap,
  TrendingUp,
  CreditCard,
  CircleDollarSign,
  TrendingDown,
  Lock,
  Calculator,
  Tag,
  Gift,
  Banknote,
  Coins,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

type Category = {
  slug: string;
  title: string;
  description: string;
  articleCount: number;
  Icon: LucideIcon;
};

// Add a new help category by dropping another entry into this array —
// the grid and search both read from it.
const CATEGORIES: Category[] = [
  {
    slug: "onboarding-and-sign-up",
    title: "Onboarding and Sign up",
    description: "Getting started with account and completing your KYC verification.",
    articleCount: 12,
    Icon: Users,
  },
  {
    slug: "us-bank-account-for-us-residents",
    title: "US Bank Account for US Residents",
    description: "US Bank Account for US Residents",
    articleCount: 3,
    Icon: Briefcase,
  },
  {
    slug: "bank-accounts",
    title: "Bank Accounts",
    description: "Details about creating a virtual bank accounts and receiving payments with them.",
    articleCount: 11,
    Icon: Landmark,
  },
  {
    slug: "employment-details",
    title: "Employment Details",
    description: "What to fill as employment information",
    articleCount: 23,
    Icon: FolderOpen,
  },
  {
    slug: "invoicing-and-employer-billing",
    title: "Invoicing and Employer Billing",
    description: "Details about automating your employer billing and sending invoice",
    articleCount: 1,
    Icon: ClipboardCheck,
  },
  {
    slug: "raenest-fast-track",
    title: "Raenest Fast Track",
    description: "Fast Track for Upwork Transactions",
    articleCount: 2,
    Icon: Zap,
  },
  {
    slug: "transfer-and-withdraw-fund",
    title: "Transfer and Withdraw Fund",
    description: "Details about transferring to local and foreign bank accounts",
    articleCount: 2,
    Icon: TrendingUp,
  },
  {
    slug: "virtual-cards",
    title: "Virtual cards",
    description: "Details about Raenest virtual cards",
    articleCount: 9,
    Icon: CreditCard,
  },
  {
    slug: "wallets-and-currencies",
    title: "Wallets & Currencies",
    description: "How to manage your Raenest multi-currency wallets",
    articleCount: 4,
    Icon: CircleDollarSign,
  },
  {
    slug: "funding-your-wallet",
    title: "Funding Your Wallet",
    description: "How to fund your wallets on Raenest for your transactions",
    articleCount: 2,
    Icon: TrendingDown,
  },
  {
    slug: "securing-your-account",
    title: "Securing your Account",
    description: "Details about how you can secure your account",
    articleCount: 3,
    Icon: Lock,
  },
  {
    slug: "fees-and-charges",
    title: "Fees and Charges",
    description: "Details about deposit, withdrawal and other transactions fees",
    articleCount: 22,
    Icon: Calculator,
  },
  {
    slug: "bill-payments",
    title: "Bill Payments",
    description: "Details about Bill Payments",
    articleCount: 1,
    Icon: Tag,
  },
  {
    slug: "raenest-perks",
    title: "Raenest Perks",
    description: "Raenest Perks is an extension of how we strive to continuously provide you with ease to live life..",
    articleCount: 2,
    Icon: Gift,
  },
  {
    slug: "add-money",
    title: "Add Money",
    description: "Everything you Need to Know About the Add Money Feature",
    articleCount: 3,
    Icon: Banknote,
  },
  {
    slug: "stablecoins-on-raenest",
    title: "Stablecoins on Raenest",
    description: "Everything You Need to Know About Stablecoins on Raenest",
    articleCount: 1,
    Icon: Coins,
  },
  {
    slug: "us-stocks",
    title: "U.S. Stocks",
    description: "A Beginner's Guide to Stock Investing",
    articleCount: 5,
    Icon: ShoppingCart,
  },
];

const POPULAR_ARTICLES = [
  {
    title: "How to link your Raenest (Formerly Geegpay) USD account with Upwork",
    href: "/articles/link-usd-account-upwork",
  },
  {
    title: "How to link your Raenest (Formerly Geegpay) USD account with Fiverr",
    href: "/articles/link-usd-account-fiverr",
  },
  {
    title: "Possible Reasons for Card Transaction Failure",
    href: "/articles/card-transaction-failure",
  },
  {
    title: "Verifying Your Raenest (Formerly Geegpay) Account: Step-by-Step Guide",
    href: "/articles/verifying-your-account",
  },
  {
    title: "Raenest (Formerly Geegpay) Personal Account",
    href: "/articles/personal-account",
  },
];

const LANGUAGES = ["English", "French", "Portuguese"];

export default function HelpCenterPage() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("English");
  const [languageOpen, setLanguageOpen] = useState(false);

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES.filter(
      (c) =>
        c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header + search, on a purple-to-white gradient */}
      <div className="bg-gradient-to-b from-[#5433C9] via-[#5433C9]/95 to-white px-4 pb-40 pt-8 sm:px-8 sm:pb-48 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl text-white">◔</span>
              <span className="text-xl font-bold text-white">raenest</span>
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen((prev) => !prev)}
                aria-expanded={languageOpen}
                className="flex items-center gap-1.5 text-sm font-medium text-white"
              >
                <Globe className="h-4 w-4" />
                {language}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 rounded-xl bg-white p-1.5 shadow-lg">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setLanguage(lang);
                        setLanguageOpen(false);
                      }}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-neutral-800 hover:bg-neutral-100"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <h1 className="mt-10 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            Answers from the Raenest (formerly Geegpay) team
          </h1>

          <div className="relative mt-6 max-w-2xl">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for articles..."
              className="w-full rounded-full bg-white/20 py-4 pl-12 pr-5 text-white placeholder:text-white/70 outline-none backdrop-blur-sm focus:bg-white/25"
            />
          </div>
        </div>
      </div>

      {/* Category grid, pulled up over the gradient */}
      <div className="mx-auto -mt-32 max-w-6xl px-4 pb-20 sm:-mt-36 sm:px-8 lg:-mt-40 lg:px-16">
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map(({ slug, title, description, articleCount, Icon }) => (
              <Link
                key={slug}
                href={`/help/${slug}`}
                className="flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-32 items-center justify-center bg-neutral-100">
                  <Icon className="h-9 w-9 text-[#5433C9]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="font-semibold text-neutral-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {description}
                  </p>
                  <p className="mt-4 text-sm text-[#5433C9]">
                    {articleCount} {articleCount === 1 ? "article" : "articles"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-neutral-500">
            No articles matched “{query}”. Try a different search term.
          </p>
        )}

        {/* Popular articles */}
        <div className="mt-14 rounded-2xl border border-neutral-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {POPULAR_ARTICLES.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex items-center justify-between gap-4 text-sm font-medium text-[#5433C9] hover:underline"
              >
                <span>{article.title}</span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer logo */}
        <div className="mt-20 flex justify-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl text-[#5433C9]">◔</span>
            <img src="/raenest.svg" alt="Raenest Logo" className="" />
            {/* <span className="text-2xl font-bold text-[#5433C9]">raenest</span> */}
          </Link>
        </div>
      </div>
    </div>
  );
}