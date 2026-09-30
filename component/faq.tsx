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
    question: "Is Securevest a bank or a financial technology platform?",
    answer:
      "Securevest is a financial technology platform, not a traditional bank. We provide digital savings, investment, payment, and other financial solutions designed to help you manage and grow your money. Where applicable, our financial services are provided in partnership with licensed financial institutions and regulated service providers in accordance with applicable Nigerian regulations.",
  },
  {
    question: "How long does it take to get my account?",
    answer:
      "Your Securevest account can typically be set up within a few minutes after completing the registration and verification process. If additional information or verification is required, processing may take longer. We’ll keep you informed throughout the process.",
  },
  {
    question: "Does Securevest charge a fee for receiving money?",
    answer:
      "Receiving money into your Securevest account is free, with no additional receiving fee charged by Securevest. However, fees may apply depending on the sender’s bank or the payment channel used.",
  },
  {
    question: "What is the Securevest Visa Card and how does it work?",
    answer:
      "The Securevest Visa Card is a secure payment card designed to give you convenient access to funds in your Securevest account. Depending on the card type available, you can use it for online and in-store payments at supported merchants. Card services are provided through authorized financial and payment service partners.",
  },
  {
    question: "Can I receive earnings from marketplaces and digital platforms into my Securevest account?",
    answer:
      "You can receive earnings from supported marketplaces and digital platforms directly into your Securevest account, provided the platform supports payments to Nigerian bank accounts or supported local payment channels. Once received, you can manage your funds through Securevest’s savings and investment solutions.",
  },
  {
    question: "How can I fund my Securevest account?",
    answer:
      "You can fund your Securevest account through supported Nigerian bank transfers and other available local payment channels. Once your funds are credited, you can use your balance to save, invest, or manage your money within the Securevest platform.",
  },
  {
    question: "Is my money safe with Securevest?",
    answer:
      "We take the security of your money and personal information seriously. Securevest uses industry-standard security measures, encryption, transaction monitoring, and other safeguards to help protect your account and funds. Where applicable, financial services are provided through licensed and regulated partners in line with applicable Nigerian regulations.",
  },
  {
    question: "Are Securevest's services available in Nigeria?",
    answer:
      "Securevest is currently focused on providing savings, investment, payment, and other financial services for users in Nigeria. Some features may only be available within Nigeria and through supported local payment channels. Availability may vary depending on the specific service and applicable regulations.",
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
            isOpen ? "bg-neutral-300" : "bg-primary-hover"
          }`}
        >
          <Plus
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen ? "rotate-45 text-neutral-700" : "text-gray"
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
        <div className="overflow-hidden text-tertiary">
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
    <section className="w-full bg-gray px-5 py-14 sm:py-16 md:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        {/* Left: heading, sticky on desktop only */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-2xl text-tertiary sm:text-3xl font-bold leading-[1.1]">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* Right: accordion list - scroll container only kicks in on desktop */}
        <div className="lg:max-h-160 pr-0 lg:pr-6 scrollbar-thin">
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
