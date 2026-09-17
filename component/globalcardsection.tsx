import FeatureShowcase, { type ShowcaseOption } from "./featureshowcase";

const cardOptions: ShowcaseOption[] = [
  {
    key: "virtual",
    toggleLabel: "Virtual USD cards",
    title: "Virtual cards",
    description:
      "Our cards work for all payments including Gpay and Apple Pay, allows you to assign cards to team members and set spending limits.",
    ctaHref: "/business/cards",
  },
  {
    key: "physical",
    toggleLabel: "Physical USD cards",
    title: "Physical cards",
    description:
      "Our cards work for all payments and allows you to receive funding via supported currencies",
    ctaHref: "/business/cards",
  },
];

function CardVisual() {
  return (
    <div className="rounded-2xl bg-[#F5F5F7] p-6 sm:p-8">
      <div className="rounded-2xl bg-white p-5 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#101828]">Cards</span>
            <span className="rounded-full bg-[#F2F0FF] px-2.5 py-1 text-xs font-medium text-[#5B4FE5]">
              Cashback: $0.00
            </span>
          </div>
          <span className="text-xs font-semibold text-[#5B4FE5]">View All Cards</span>
        </div>

        <div className="relative flex h-44 items-center overflow-hidden rounded-2xl">
          <div className="absolute left-0 h-full w-8 rounded-l-2xl bg-[#160F3D]" />
          <div className="relative ml-8 flex h-full flex-1 flex-col justify-between overflow-hidden rounded-r-2xl bg-gradient-to-br from-[#FFD9CE] to-[#FFB199] p-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#12B76A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#12B76A]" />
                Active
              </span>
              <span className="text-sm font-bold text-[#160F3D]">raenest</span>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-[#101828]">$50,000.00</p>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#475467]">Business Debit</p>
                  <p className="text-sm font-semibold text-[#101828]">**** **** **** 2451</p>
                </div>
                <div className="flex -space-x-2">
                  <span className="h-5 w-5 rounded-full bg-[#EB001B]/80" />
                  <span className="h-5 w-5 rounded-full bg-[#F79E1B]/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GlobalCardSection() {
  return (
    <FeatureShowcase
      heading="Your Global Business Card"
      options={cardOptions}
      renderVisual={CardVisual}
      reverse
    />
  );
}