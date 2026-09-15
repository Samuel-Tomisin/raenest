"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { US, GB, PH } from "country-flag-icons/react/3x2";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";

const CATEGORIES = [
  "All",
  "Remote work",
  "Raenest Diaries",
  "Stocks",
  "Global accounts",
  "Living abroad",
  "Unsolicited opinions",
  "People of Raenest",
  "Updates",
  "Freelancing",
  "Travel",
  "Business",
  "Personal Finance",
  "Versus",
  "Guides",
  "Cards",
] as const;

type Category = (typeof CATEGORIES)[number];

type FeaturedSlide = {
  id: string;
  eyebrow?: string;
  title: string;
  href: string;
  bg: string;
};

// The site's featured carousel had 4 dots — only two slides were visible in
// the screenshots, so the last two below are reasonable placeholders. Swap
// them for the real featured posts.
const FEATURED_SLIDES: FeaturedSlide[] = [
  {
    id: "us-banking-guide",
    eyebrow: "A Free Guide for Africans",
    title: "How the US Banking System Works",
    href: "/blog/how-the-us-banking-system-works",
    bg: "bg-[#F3EEE1]",
  },
  {
    id: "new-usd-account",
    title: "Everything You Need to Know About Your New Raenest USD Account",
    href: "/blog/everything-you-need-to-know-about-your-new-raenest-usd-account",
    bg: "bg-[#5433C9]",
  },
  {
    id: "raenest-card-upgrade",
    title: "The Raenest Card Just Got Upgraded",
    href: "/blog/the-raenest-card-just-got-upgraded",
    bg: "bg-[#3D2C99]",
  },
  {
    id: "startup-funding-stages",
    title: "Startup Funding Stages Explained: From Pre-Seed to Exit",
    href: "/blog/startup-funding-stages-explained",
    bg: "bg-[#F3EEE1]",
  },
];

type Article = {
  id: string;
  eyebrow?: string;
  title: string;
  linkText: string;
  category: Category;
  href: string;
  visual:
    | { type: "color"; bg: string; textColor?: string }
    | { type: "photo"; alt: string };
  flags?: Array<React.ComponentType<{ className?: string }>>;
};

// Add a new post by dropping another entry into this array — the grid,
// search, and category pills all read from it.
const ARTICLES: Article[] = [
  {
    id: "receive-us-philippines",
    title: "How to Receive Payments From the US in the Philippines",
    linkText: "How to Receive Payments From the US in the Philippines",
    category: "Global accounts",
    href: "/blog/how-to-receive-payments-from-the-us-in-the-philippines",
    visual: { type: "color", bg: "bg-[#3D2299]" },
    flags: [PH, US],
  },
  {
    id: "receive-uk-philippines",
    title: "How to receive money in the Philippines from the UK",
    linkText: "How to Receive Payments From the UK in the Philippines",
    category: "Global accounts",
    href: "/blog/how-to-receive-payments-from-the-uk-in-the-philippines",
    visual: { type: "color", bg: "bg-[#5433C9]" },
    flags: [PH, GB],
  },
  {
    id: "startup-funding-stages",
    title: "Startup Funding Stages Explained",
    linkText: "Startup Funding Stages Explained: From Pre-Seed to Exit",
    category: "Business",
    href: "/blog/startup-funding-stages-explained",
    visual: { type: "photo", alt: "Two people looking at a laptop discussing startup funding" },
  },
  {
    id: "virtual-dollar-card-reasons",
    eyebrow: undefined,
    title: "6 Reasons why you need the new Raenest Virtual Dollar Card",
    linkText: "6 Reasons Why You Need a Raenest Virtual Dollar Card",
    category: "Cards",
    href: "/blog/6-reasons-why-you-need-a-raenest-virtual-dollar-card",
    visual: { type: "color", bg: "bg-[#3D2299]" },
  },
  {
    id: "new-raenest-card",
    eyebrow: "The Visa Dollar card for global spenders",
    title: "New Raenest Card for you",
    linkText: "The Raenest Card Just Got Upgraded",
    category: "Cards",
    href: "/blog/the-raenest-card-just-got-upgraded",
    visual: { type: "color", bg: "bg-[#5433C9]" },
  },
  {
    id: "monthly-roundup-july-2026",
    eyebrow: "July 2026",
    title: "Raenest Monthly Roundup",
    linkText: "Raenest's July 2026 Roundup",
    category: "Updates",
    href: "/blog/raenest-july-2026-roundup",
    visual: { type: "color", bg: "bg-[#0B0B0F]" },
  },
  {
    id: "ai-training-jobs-usd",
    title: "Best AI Training Jobs That Pay in USD",
    linkText: "Best AI Training Jobs That Pay in USD",
    category: "Remote work",
    href: "/blog/best-ai-training-jobs-that-pay-in-usd",
    visual: { type: "photo", alt: "Person working on a laptop, AI training job" },
  },
  {
    id: "outlier-vs-handshake",
    title: "Outlier AI vs Handshake AI Which AI Work Platform Is Right for You?",
    linkText: "Outlier AI vs Handshake AI: Pay, Eligibility, and How You Get Paid (2026)",
    category: "Versus",
    href: "/blog/outlier-ai-vs-handshake-ai",
    visual: { type: "color", bg: "bg-[#FF4F32]", textColor: "text-white" },
  },
  {
    id: "stablecoins-kenya-hedge",
    title: "How Stablecoins Help Kenyans Hedge Against Currency Fluctuations",
    linkText: "How Stablecoins Help Kenyans Hedge Against Currency Fluctuations",
    category: "Personal Finance",
    href: "/blog/how-stablecoins-help-kenyans-hedge-against-currency-fluctuations",
    visual: { type: "photo", alt: "Women in Kenya using their phones" },
  },
  {
    id: "pay-saas-kenyan-creator",
    title: "How to Pay for Canva, Adobe, and Other SaaS Tools as a Kenyan Creator",
    linkText: "How to Pay for Canva, Adobe, and Other SaaS Tools as a Kenyan Creator",
    category: "Guides",
    href: "/blog/how-to-pay-for-canva-adobe-saas-tools-as-a-kenyan-creator",
    visual: { type: "color", bg: "bg-[#F3EEE1]" },
  },
  {
    id: "raenest-diaries-ore-badmus",
    eyebrow: "Season 2: Episode 3",
    title: "Raenest Diaries",
    linkText: "Raenest Diaries: How Visibility Took Ore Badmus from Teaching to a Global Talent Visa",
    category: "Raenest Diaries",
    href: "/blog/raenest-diaries-ore-badmus",
    visual: { type: "photo", alt: "Ore Badmus, guest on Raenest Diaries Season 2 Episode 3" },
  },
  {
    id: "business-visibility-ai-search",
    title: "10 Practical Ways to Increase Your Business's Visibility in AI Search",
    linkText: "10 Practical Ways to Increase Your Business's Visibility in AI Search",
    category: "Business",
    href: "/blog/10-practical-ways-to-increase-your-businesss-visibility-in-ai-search",
    visual: { type: "photo", alt: "Two women working on a laptop together" },
  },
  {
    id: "receive-fiverr-ghana",
    title: "How to receive payments from Fiverr in Ghana",
    linkText: "How To Receive Payments From Fiverr in Ghana",
    category: "Freelancing",
    href: "/blog/how-to-receive-payments-from-fiverr-in-ghana",
    visual: { type: "color", bg: "bg-[#FF4F32]", textColor: "text-white" },
  },
  {
    id: "send-kes-mpesa",
    title: "How to send KES to Mpesa in Kenya with Raenest",
    linkText: "How to Send KES to M-PESA in Kenya Through Raenest From Nigeria",
    category: "Guides",
    href: "/blog/how-to-send-kes-to-mpesa-in-kenya-through-raenest",
    visual: { type: "color", bg: "bg-[#5433C9]", textColor: "text-white" },
  },
  {
    id: "convert-stablecoins-no-p2p",
    title: "How to convert Stablecoins without P2P",
    linkText: "How to Convert Stablecoins (USDT and USDC) Without P2P",
    category: "Guides",
    href: "/blog/how-to-convert-stablecoins-without-p2p",
    visual: { type: "color", bg: "bg-[#F3EEE1]" },
  },
];

const PAGE_SIZE = 9;

function FlagBadge({ Flag }: { Flag: React.ComponentType<{ className?: string }> }) {
  return (
    <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white/80">
      <Flag className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2" />
    </span>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const textColor =
    article.visual.type === "color" ? article.visual.textColor ?? "text-white" : "text-white";

  return (
    <div>
      <Link
        href={article.href}
        className="relative flex h-64 flex-col justify-center overflow-hidden rounded-3xl p-8"
        style={
          article.visual.type === "color" ? undefined : undefined
        }
      >
        {article.visual.type === "photo" ? (
          <>
            {/* Placeholder — drop your real photo in here */}
            <div className="absolute inset-0 bg-neutral-200" aria-hidden="true" />
            <img
              src=""
              alt={article.visual.alt}
              className="absolute inset-0 h-full w-full object-cover opacity-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </>
        ) : (
          <div className={`absolute inset-0 ${article.visual.bg}`} aria-hidden="true" />
        )}

        {article.flags && (
          <div className="relative z-10 mb-4 flex -space-x-2">
            {article.flags.map((Flag, i) => (
              <FlagBadge key={i} Flag={Flag} />
            ))}
          </div>
        )}

        <div className="relative z-10 max-w-[75%]">
          {article.eyebrow && (
            <p className={`mb-1 text-xs font-medium uppercase tracking-wide ${textColor} opacity-80`}>
              {article.eyebrow}
            </p>
          )}
          <p className={`text-lg font-semibold leading-snug ${textColor}`}>{article.title}</p>
        </div>
      </Link>

      <div className="mt-3 flex items-center justify-between gap-4">
        <Link href={article.href} className="text-sm font-medium cursor-pointer text-neutral-900 hover:underline">
          {article.linkText}
        </Link>
        <Link
          href={article.href}
          aria-label={`Read: ${article.linkText}`}
          className="flex h-9 w-9 shrink-0 items-center cursor-pointer justify-center rounded-full bg-[#5433C9] text-white transition-colors hover:bg-[#4527ad]"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [slideIndex, setSlideIndex] = useState(0);

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const matchesCategory = activeCategory === "All" || a.category === activeCategory;
      const matchesQuery =
        !q || a.title.toLowerCase().includes(q) || a.linkText.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const goToSlide = (index: number) => {
    setSlideIndex((index + FEATURED_SLIDES.length) % FEATURED_SLIDES.length);
  };

  const activeSlide = FEATURED_SLIDES[slideIndex];

  return (
    <div className="bg-white">
        <Navbar/>
      {/* Hero: heading, search, category pills */}
      <section className="relative overflow-hidden px-4 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-[#EDE9FE] via-white to-white"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl leading-tight text-neutral-950 sm:text-5xl">
            The Latest From Raenest: <br /> Tips, News and Updates!
          </h1>

          <div className="relative mx-auto mt-8 max-w-xl">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Search for a blog or article"
              className="w-full cursor-pointer rounded-3xl border border-neutral-200 bg-white py-3.5 pl-11 pr-5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#5433C9]"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(PAGE_SIZE);
                }}
                className={`rounded-full px-4 py-2 cursor-pointer text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-neutral-950 text-white"
                    : "border border-neutral-200 text-neutral-800 hover:border-neutral-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured articles carousel */}
      <section className="bg-neutral-50 px-4 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-lg font-semibold text-neutral-900">Featured articles</h2>

          <Link
            href={activeSlide.href}
            className={`mt-6 flex h-64 flex-col justify-between cursor-pointer overflow-hidden rounded-3xl p-8 transition-colors sm:h-72 ${activeSlide.bg}`}
          >
            <div />
            <div className="flex items-end justify-between gap-4">
              <div className="max-w-2xl">
                {activeSlide.eyebrow && (
                  <p
                    className={`mb-1 text-sm font-medium ${
                      activeSlide.bg.includes("F3EEE1") ? "text-primary" : "text-white/80"
                    }`}
                  >
                    {activeSlide.eyebrow}
                  </p>
                )}
                <p
                  className={`text-2xl font-bold leading-snug sm:text-3xl ${
                    activeSlide.bg.includes("F3EEE1") ? "text-neutral-900" : "text-white"
                  }`}
                >
                  {activeSlide.title}
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center cursor-pointer justify-center rounded-full bg-[#5433C9] text-white">
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          </Link>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goToSlide(slideIndex - 1)}
                aria-label="Previous featured article"
                className="flex h-9 w-9 items-center justify-center cursor-pointer rounded-full bg-[#EDE9FE] text-primary transition-colors hover:bg-[#E0D9FC]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goToSlide(slideIndex + 1)}
                aria-label="Next featured article"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EDE9FE] text-[#5433C9] transition-colors hover:bg-[#E0D9FC]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              {FEATURED_SLIDES.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full cursor-pointer transition-all ${
                    index === slideIndex ? "w-6 bg-neutral-900" : "w-2 bg-neutral-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All articles */}
      <section className="px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-lg font-semibold text-neutral-900">All articles</h2>

          {visibleArticles.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {visibleArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-neutral-500">
              No articles matched your search. Try a different term or category.
            </p>
          )}

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="rounded-full border border-[#5433C9] px-6 py-2.5 text-sm font-semibold text-[#5433C9] transition-colors cursor-pointer hover:bg-[#EDE9FE]"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer/>
    </div>
  );
}