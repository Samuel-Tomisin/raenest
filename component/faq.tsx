"use client";

import { useState, useRef } from "react";
import { Plus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQItemProps {
  item: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQS: FAQ[] = [
  {
    question: "Is Raenest a bank?",
    answer:
      "Raenest is a Financial Technology (FinTech) Company, not a Bank. Banking services are provided by Regent Bank, Member FDIC. Raenest is not FDIC insured. FDIC deposit insurance covers up to $250,000 per qualified customer account on a \u201cpass-through\u201d basis, for which certain conditions must be satisfied. FDIC insurance only covers the failure of Regent Bank, Member FDIC. Card services are provided by Raenest's technology partners, authorized by Visa and Mastercard to issue cards operating over their networks.",
  },
  {
    question: "How long does it take to get my bank account?",
    answer:
      "Most accounts are ready in minutes once you've verified your identity. In rare cases where extra checks are needed, it can take up to 24 hours \u2014 we'll keep you posted the whole way.",
  },
  {
    question: "What's the fee for receiving in my bank account?",
    answer:
      "Receiving money into your Raenest USD account is completely free, with no limit on how much you can receive. Any fees are charged by the sender's bank, not by Raenest.",
  },
  {
    question: "What is the Raenest USD Visa Card and how is it related to Raenest?",
    answer:
      "The Raenest USD Visa Card is a virtual and physical card linked directly to your Raenest USD balance, issued by our technology partners under license from Visa. You can fund it instantly from your wallet and use it anywhere Visa is accepted.",
  },
  {
    question: "Can I use my USD account on Upwork, Deel, Fiverr, or Payoneer?",
    answer:
      "Yes. Your Raenest USD account comes with real US account details, so you can receive payments directly from Upwork, Deel, Fiverr, Payoneer, and most other platforms that pay out in USD.",
  },
  {
    question: "How do I fund my Raenest wallet?",
    answer:
      "You can fund your wallet via bank transfer, debit card, or by receiving a direct USD payment from clients, employers, or platforms into your account details.",
  },
  {
    question: "Is my money safe with Raenest?",
    answer:
      "Your funds are held in partnership with our regulated banking partners, and we use bank-level encryption and monitoring across every transaction to keep your account secure.",
  },
  {
    question: "Can I use Raenest outside Nigeria?",
    answer:
      "Yes, Raenest is built for a global lifestyle. You can fund, spend, and withdraw from your account wherever you are, as long as you have an internet connection.",
  },
];

function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left"
      >
        <span
          className={`text-sm sm:text-base lg:text-lg font-semibold transition-colors ${
            isOpen ? "text-neutral-950" : "text-neutral-800"
          }`}
        >
          {item.question}
        </span>

        <span
          className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
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
        ref={contentRef}
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-4 sm:pr-8 lg:pr-12 text-sm sm:text-base leading-relaxed text-neutral-500">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white px-5 py-14 sm:py-16 md:px-12 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        {/* Left: heading, sticky on desktop only */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-2xl sm:text-3xl font-bold leading-[1.1] text-neutral-950">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* Right: accordion list - scroll container only kicks in on desktop */}
        <div className="lg:max-h-[640px] lg:overflow-y-auto pr-0 lg:pr-6 [scrollbar-width:thin]">
          {FAQS.map((item, index) => (
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
