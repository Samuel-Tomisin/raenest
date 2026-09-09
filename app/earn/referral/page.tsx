"use client";

import { useState } from "react";
import Link from "next/link";
import { Apple, PlayCircle, Plus } from "lucide-react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

/* ------------------------------------------------------------------ */
/*  Section 1: Hero                                                    */
/* ------------------------------------------------------------------ */

function ReferralHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-neutral-400 sm:text-2xl">Referrals</p>

          <h1 className="text-5xl font-semibold leading-[1.05] text-neutral-950 sm:text-6xl lg:text-[64px]">
            Share Raenest, Earn $5
          </h1>

          <p className="max-w-md text-base text-neutral-600 sm:text-lg">
            Good things are meant to be shared. Invite friends to Raenest and
            earn $5 for every successful referral, while they get $2. Start
            sharing and earning today.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/referral-link"
              className="rounded-2xl bg-[#5433C9] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4527ad]"
            >
              Get your referral link
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

        <div className="relative mx-auto w-full max-w-lg">
          {/* Drop your referral hero photo in here */}
          <img src="/homehero.webp" alt="" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: How it works                                            */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    step: "Step 1",
    title: "Get your link",
    description:
      "Log in to the Raenest app, tap the reward button in the top right of the dashboard to copy your referral link.",
    imageSrc: "/howitworks1.webp",
  },
  {
    step: "Step 2",
    title: "Share your link",
    description:
      "Share your code. Get up to $4 when your friends use your code in line with the the referral requirements listed below.",
    imageSrc: "/howitworks2.webp",
  },
  {
    step: "Step 3",
    title: "Get paid",
    description:
      "Go to your account, tap Rewards, then Claim Reward to send it to your USD wallet. Your friend also gets $2.",
    imageSrc: "/howitworks3.webp",
  },
];

function ReferralHowItWorks() {
  return (
    <section className="bg-[#F3F2FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-neutral-950 sm:text-4xl">
          How it works
        </h2>

        <div className="mt-12 grid grid-col-1 gap-8 sm:grid-cols-3  ">
          <div className="bg-white rounded-3xl p-6 sm:p-8">
          {STEPS.map(({ step, title, description, imageSrc }) => (
            <div key={step} className="flex flex-col">
              <p className="text-xs font-medium text-neutral-500">{step}</p>
              <h3 className="mt-1 text-lg font-bold text-[#5433C9]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {description}
              </p>
              {/* Drop your step photo in here */}
              {/* <div className="mt-6 aspect-[4/3] w-full rounded-[80px] rounded-tr-none bg-neutral-200" /> */}
              <img src={imageSrc} alt="" className="mt-6 w-full rounded-[80px] rounded-tr-none" />
            </div>
          ))}
        </div>
        </div>

        
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3: FAQ                                                     */
/* ------------------------------------------------------------------ */

type FaqItem = { question: string; answer: string };

const REFERRAL_FAQS: FaqItem[] = [
  {
    question: "How does the Referral Bonus work?",
    answer:
      "You invite your friends, and once they meet the referral criteria, you both get a reward. You get $4 for each referral, and they get $2. If you're ready to get started, log in to your Raenest account, and tap the rewards button in the top right to find your unique referral link. Share it however you like, through WhatsApp, X, Facebook, LinkedIn, Instagram, TikTok, Telegram, email, or even the old-fashioned way \u2014 chatting with friends.",
  },
  {
    question: "What are Raenest's referral criteria?",
    answer:
      "When your friend (aka your referee) clicks your referral link or code, signs up, and completes their onboarding, all they have to do is make an inflow transaction of a total of $200 (or the equivalent in GBP or EUR) or spend $200 with their Raenest virtual dollar card within the first 45 days (please note that card funding does not qualify as transactions in this case). You can make a single transaction of $200 or multiple transactions of at least $5 totalling $200.",
  },
  {
    question: "How can I track your referrals on Raenest?",
    answer:
      "If you want to know how many friends you've invited or whether they've completed the steps to unlock your bonus, just log in to your Raenest account, tap the Reward button, and click 'See all invites' to view the status of every referral you've made.",
  },
  {
    question: "Conditions that disqualify you from a Raenest referral bonus",
    answer:
      "Like any good program, there are a few things to keep in mind. If your referee doesn't complete the onboarding or meet the transaction requirements, you won't earn the bonus and neither will they. Additionally, if your account has ever been suspended, your rewards won't apply. And finally, Raenest-to-Raenest transactions do not count as inflow in this case. You can check out the terms and conditions in the Referral section of the app to get the full information.",
  },
  {
    question: "How to claim your Raenest referral bonus?",
    answer:
      "Once your friend has met the referral requirements listed above, you'll get your reward. To claim it, go to your Raenest account, tap the reward button, and tap Claim Reward to send your earnings to your USD wallet. Your referred friend also gets their $2 bonus. It's that simple. You share, they join, and everybody earns.",
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

function ReferralFAQSection() {
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
          {REFERRAL_FAQS.map((item, index) => (
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

export default function Referral() {
  return (
    <main>
      <Navbar />
      <ReferralHero />
      <ReferralHowItWorks />
      <ReferralFAQSection />
      <Footer />
    </main>
  );
}