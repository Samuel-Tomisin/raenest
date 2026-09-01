import FeatureShowcase, { type ShowcaseOption } from "./featureshowcase";
import { Check, Download } from "lucide-react";

const transactionOptions: ShowcaseOption[] = [
  {
    key: "send",
    toggleLabel: "Send money",
    title: "Send money",
    description:
      "Send money to over 70 countries with fast delivery and competitive fees. Enjoy secure and reliable transactions.",
    ctaHref: "/business/make-payments",
  },
  {
    key: "receive",
    toggleLabel: "Receive Payment",
    title: "Invoices & Payment Links",
    description:
      "Receive payments through invoices and payment links. We support bank transfers and card payments.",
    ctaHref: "/business/receive-payments",
  },
];

function TransactionVisual() {
  return (
    <div className="rounded-2xl bg-[#F5F5F7] p-6 sm:p-8">
      <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#12B76A]">
          <Check size={22} className="text-white" strokeWidth={3} />
        </div>

        <div className="mb-3 flex items-center justify-center gap-2 text-sm text-[#667085]">
          <span>🇺🇸 USD</span>
          <span>→</span>
          <span>🇳🇬 NGN</span>
        </div>

        <p className="text-lg font-semibold text-[#101828]">
          You&apos;ve sent 350.00 USD to Oluwafemi Fashikun
        </p>
        <p className="mt-1 text-sm text-[#667085]">
          The money should arrive within minutes
        </p>

        <button className="mx-auto mt-4 flex items-center gap-2 text-sm font-semibold text-[#5B4FE5]">
          <Download size={14} />
          Download Receipt
        </button>

        <button className="mt-5 w-full rounded-xl bg-[#5B4FE5] py-3 text-sm font-semibold text-white transition-transform active:scale-95">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default function TransactionsSection() {
  return (
    <FeatureShowcase
      heading="Global Multi-currency Transactions"
      options={transactionOptions}
      renderVisual={TransactionVisual}
    />
  );
}
