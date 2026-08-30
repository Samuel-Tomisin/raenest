"use client";

import { Users, Plus, Send, Repeat, MoreHorizontal, Check } from "lucide-react";
import { US, GB, NG } from "country-flag-icons/react/3x2";

const STEPS = [
  {
    number: 1,
    title: "Start Your Transfer",
    description: "Log in to your Raenest account. Enter the amount to send and the recipient's details.",
  },
  {
    number: 2,
    title: "Seamless Payment Process",
    description: "Pay via bank transfer, debit, or credit card.",
  },
  {
    number: 3,
    title: "Fast, Reliable Delivery",
    description: "Funds are securely sent to the recipient's account.",
  },
];

function FlagBadge({
  Flag,
  size = "h-5 w-5",
}: {
  Flag: React.ComponentType<{ className?: string }>;
  size?: string;
}) {
  return (
    <span className={`relative shrink-0 overflow-hidden rounded-full ${size}`}>
      <Flag className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2" />
    </span>
  );
}

function MockupCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border-4 border-[#5433C9] bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}

function SendAmountMockup() {
  return (
    <MockupCard>
      <p className="text-sm text-neutral-500">You send</p>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2.5">
        <FlagBadge Flag={US} />
        <span className="text-sm font-semibold text-neutral-900">1,000.00</span>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-neutral-500">Available balance</span>
        <span className="font-medium text-neutral-900">$ 1,000,000.00</span>
      </div>

      <div className="mt-4 space-y-3 border-t border-neutral-100 pt-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-neutral-500">Rate</span>
          <span className="font-medium text-neutral-900">1 USD = 11.50 GHS</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-500">Fees</span>
          <span className="font-medium text-neutral-900">$ 0.50</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-500">Estimated time</span>
          <span className="font-medium text-neutral-900">Instant</span>
        </div>
      </div>

      <p className="mt-4 text-sm text-neutral-500">Recipient gets</p>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2.5">
        <span className="text-sm font-semibold text-neutral-900">1150.00</span>
      </div>
    </MockupCard>
  );
}

function BalanceMockup() {
  const actions = [
    { icon: Plus, label: "Add Money" },
    { icon: Send, label: "Send Money" },
    { icon: Repeat, label: "Convert" },
    { icon: MoreHorizontal, label: "More" },
  ];

  return (
    <MockupCard>
      <p className="text-sm text-neutral-400">Total Balance</p>
      <p className="mt-1 text-3xl font-bold text-neutral-900">$57,168.05</p>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-[#1D1B4E] p-3 text-white">
          <FlagBadge Flag={NG} size="h-5 w-5" />
          <p className="mt-4 text-sm font-semibold">₦123,552.29</p>
        </div>
        <div className="rounded-xl bg-[#1D1B4E] p-3 text-white">
          <FlagBadge Flag={US} size="h-5 w-5" />
          <p className="mt-4 text-sm font-semibold">$1,568.72</p>
        </div>
        <div className="rounded-xl bg-[#1D1B4E] p-3 text-white">
          <FlagBadge Flag={GB} size="h-5 w-5" />
          <p className="mt-4 text-sm font-semibold">£1,204.10</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2">
        {actions.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE9FE] text-[#5433C9]">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-center text-[11px] text-neutral-500">{label}</span>
          </div>
        ))}
      </div>
    </MockupCard>
  );
}

function ConfirmationMockup() {
  return (
    <MockupCard>
      <div className="flex flex-col items-center py-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="h-7 w-7" />
        </span>
        <p className="mt-6 text-xl font-semibold text-neutral-900">
          You've sent £400.00
          <br />
          to Victor Alade
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          The money should arrive within minutes
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl bg-neutral-50 px-3 py-2.5 text-sm text-neutral-500">
        <FlagBadge Flag={US} />
        USD
        <span>→</span>
        <FlagBadge Flag={NG} />
        NGN
      </div>
    </MockupCard>
  );
}

export default function FirstTransferSteps() {
  return (
    <section className="bg-[#F6F5FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 pb-10 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl">
            Make your first transfer
          </h2>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            <Users className="h-4 w-4" />
            Watch this demo video
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <SendAmountMockup />
          <BalanceMockup />
          <ConfirmationMockup />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-[#5433C9]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}