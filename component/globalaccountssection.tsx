"use client"

import FeatureShowcase, { type ShowcaseOption } from "../featureshowcase";

const accountOptions: ShowcaseOption[] = [
  {
    key: "USD",
    toggleLabel: "USD",
    title: "USD Accounts",
    description:
      "Get a business checking account to receive ACH, domestic wire and SWIFT",
    ctaHref: "/business/global-accounts",
  },
  {
    key: "GBP",
    toggleLabel: "GBP",
    title: "GBP Accounts",
    description:
      "Get an international bank account number to receive CHAPS and instant deposits faster",
    ctaHref: "/business/global-accounts",
  },
  {
    key: "EUR",
    toggleLabel: "EUR",
    title: "EUR Accounts",
    description:
      "Get an international bank account number to receive SEPA instant and SEPA deposits faster",
    ctaHref: "/business/global-accounts",
  },
  {
    key: "NGN",
    toggleLabel: "NGN",
    title: "NGN Accounts",
    description: "Get a bank account to receive NGN deposits faster.",
    ctaHref: "/business/global-accounts",
  },
];

const accountCards: Record<
  string,
  { flag: string; currency: string; balance: string; number: string }
> = {
  USD: { flag: "🇺🇸", currency: "US Dollar", balance: "$12,400.99", number: "1048392756" },
  GBP: { flag: "🇬🇧", currency: "British Pound", balance: "£70,990.00", number: "83947215" },
  EUR: { flag: "🇪🇺", currency: "Euro", balance: "€9,204.50", number: "77102384" },
  NGN: { flag: "🇳🇬", currency: "Naira", balance: "₦4,820,000.00", number: "0192837465" },
};

function AccountsVisual(activeKey: string) {
  const primary = accountCards[activeKey];
  const secondaryKey = Object.keys(accountCards).find((k) => k !== activeKey)!;
  const secondary = accountCards[secondaryKey];

  return (
    <div className="relative rounded-2xl bg-[#F5F5F7] p-8 sm:p-10">
      <div className="relative flex items-center">
        <div className="z-10 w-64 rounded-2xl border border-[#EAECF0] bg-white p-5 shadow-lg">
          <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#101828]">
            <span className="text-xl">{primary.flag}</span>
            {primary.currency}
          </div>
          <p className="mb-4 text-2xl font-bold text-[#101828]">{primary.balance}</p>
          <p className="text-xs text-[#667085]">Account number</p>
          <p className="text-sm font-semibold text-[#101828]">{primary.number}</p>
        </div>

        <div className="-ml-10 w-64 translate-x-4 rounded-2xl border border-[#EAECF0] bg-white p-5 opacity-90 shadow-lg">
          <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#101828]">
            <span className="text-xl">{secondary.flag}</span>
            {secondary.currency}
          </div>
          <p className="mb-4 text-2xl font-bold text-[#101828]">{secondary.balance}</p>
          <p className="text-xs text-[#667085]">Account nu...</p>
          <p className="text-sm font-semibold text-[#101828]">{secondary.number}</p>
        </div>
      </div>
    </div>
  );
}

export default function GlobalAccountsSection() {
  return (
    <FeatureShowcase
      heading="Global Business Bank Accounts"
      options={accountOptions}
      renderVisual={AccountsVisual}
    />
  );
}