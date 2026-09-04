"use client";

import { useState } from "react";
import Link from "next/link";
import { Apple, PlayCircle, Plus, ArrowLeftRight, Landmark, ShieldCheck } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Section 1: Hero                                                    */
/* ------------------------------------------------------------------ */

function RewardsHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-neutral-400">Rewards</p>

          <h1 className="text-5xl font-semibold leading-[1.05] text-neutral-950 sm:text-6xl lg:text-[64px]">
            Earn while you spend
          </h1>

          <p className="max-w-md text-base text-neutral-600 sm:text-lg">
            Turn your everyday transactions into rewards, automatically. Keep
            $100 in your USD wallet, use your account actively, and watch
            your rewards grow monthly. No sign-ups needed, no extra steps
            required with Raenest.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/register"
              className="rounded-2xl bg-[#5433C9] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4527ad]"
            >
              Create an account
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-[#EDE9FE] px-5 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-[#E0D9FC]"
            >
              <Apple className="h-4 w-4" />
              <PlayCircle className="h-4 w-4" />
              Download app
            </button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {/* Drop your QR code image in here */}
            <div className="h-16 w-16 shrink-0 rounded-lg bg-neutral-100" />
            <p className="text-xs text-neutral-500">
              Scan the QR code below to download the app
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
          <div className="h-16 w-40 rounded-t-full bg-[#C97A5A] sm:h-20 sm:w-48" />
          <div className="-mt-2 aspect-square w-full overflow-hidden rounded-t-full bg-[#C97A5A]">
            {/* Drop your rewards hero photo in here */}
            <img
              src="/rewards-hero.jpg"
              alt="Person smiling while checking their phone"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: Eligibility Criteria                                    */
/* ------------------------------------------------------------------ */

const CRITERIA = [
  {
    icon: ArrowLeftRight,
    title: "Active Balance",
    description:
      "Keep an average of $100 in your USD wallet throughout the month. This balance is where we calculate Rewards, so your card balance doesn't count here.",
  },
  {
    icon: Landmark,
    title: "Account Activity",
    description:
      "Receive money, make purchases with your USD card, and convert funds. All these activities add up to increase your Rewards potential.",
  },
  {
    icon: ShieldCheck,
    title: "Account Standing",
    description:
      "Just make sure your account is in good standing (no restrictions or investigations).",
  },
];

function EligibilityCriteria() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl">
          Eligibility Criteria
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 sm:text-base">
          If you're an active raenest user, you're already halfway there!
          Rewards are automatic. You don't have to opt-in or jump through
          hoops to qualify. To be eligible for rewards, these are the
          criteria we check for
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
        {CRITERIA.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#5433C9]">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#5433C9]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3: How to enjoy Rewards                                     */
/* ------------------------------------------------------------------ */

const WAYS_TO_EARN = [
  {
    title: "Receive Payments Directly",
    description:
      "Payments you receive directly to your USD wallet count toward Rewards, so keep those projects coming.",
  },
  {
    title: "Spend with Your USD Card",
    description:
      "Tap into your Rewards potential every time you make purchases with your USD card. So think of the Raenest virtual dollar card during your next big splurge.",
  },
  {
    title: "Convert Currency",
    description:
      "Switching funds from USD to other currencies? Each conversion contributes, so use Raenest to handle all your currency conversion needs.",
  },
];

function HowToEnjoyRewards() {
  return (
    <section className="bg-[#F6F5FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-neutral-950 sm:text-4xl">
          How to enjoy Rewards
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {WAYS_TO_EARN.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#5433C9]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {description}
              </p>
              {/* Drop your photo in here */}
              <div className="mt-6 aspect-[4/3] w-full rounded-t-[100px] bg-neutral-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4: FAQ                                                      */
/* ------------------------------------------------------------------ */

type FaqItem = { question: string; answer: string };

const REWARDS_FAQS: FaqItem[] = [
  {
    question: "What are Raenest Rewards?",
    answer:
      "Raenest Rewards is an automatic rewards program that gives back to active users. You earn rewards based on your account activity, including receiving payments, making purchases with your USD card, and converting currencies, with no additional sign-up required. If you're ready to get started, log in to your Raenest account, and tap the rewards button in the top right to find your unique referral link. Share it however you like, through WhatsApp, X, Facebook, LinkedIn, Instagram, TikTok, Telegram, email, or even the old-fashioned way \u2014 chatting with friends.",
  },
  {
    question: "How do I qualify for Rewards?",
    answer:
      "To qualify, you need to maintain an average balance of $100 in your USD wallet throughout the month, stay active through transactions (receiving money, card purchases, and currency conversions), and keep your account in good standing with no restrictions.",
  },
  {
    question: "When and how can I claim my Rewards?",
    answer:
      "Rewards are calculated monthly and credited by the 10th of the following month. Once your reward balance reaches $2, you can claim it through the Rewards page in your app, and it will be transferred directly to your USD Wallet.",
  },
  {
    question: "Do I need to sign up for the Rewards program?",
    answer:
      "No, there's no sign-up required. The program is completely automatic \u2013 all you need is an active Raenest account that meets the eligibility criteria, you'll start earning rewards automatically just by using your account normally.",
  },
  {
    question: "What activities count toward earning Rewards?",
    answer:
      "Three main activities count toward earning rewards: receiving direct payments to your USD wallet, making purchases with your USD card, and converting currencies. The more active you are with these transactions, the higher your reward potential.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
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
            isOpen ? "bg-neutral-300" : "bg-[#4B2E83]"
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

function RewardsFAQSection() {
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
            Can't find what you're looking for? Reach out to our support team
            any time.
          </p>
        </div>

        <div className="max-h-[640px] overflow-y-auto pr-2 [scrollbar-width:thin] lg:pr-6">
          {REWARDS_FAQS.map((item, index) => (
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
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function RewardsPage() {
  return (
    <main>
      <RewardsHero />
      <EligibilityCriteria />
      <HowToEnjoyRewards />
      <RewardsFAQSection />
    </main>
  );
}