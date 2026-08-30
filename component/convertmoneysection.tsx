import { ChevronDown } from "lucide-react";

export default function ConvertMoneySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#241857] via-[#3B2A8C] to-[#241857] px-5 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#6C5CE7]/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Form mockup */}
        <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
          <div>
            <p className="mb-1.5 text-xs text-[#667085]">How much do you want to send?</p>
            <div className="flex items-center justify-between rounded-xl border border-[#EAECF0] px-4 py-3">
              <span className="text-lg font-semibold text-[#101828]">€</span>
              <span className="flex items-center gap-1 text-sm font-semibold text-[#101828]">
                EUR <ChevronDown size={14} />
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-1.5 text-xs text-[#667085]">Your recipient receives</p>
            <div className="flex items-center justify-between rounded-xl border border-[#EAECF0] px-4 py-3">
              <span className="text-lg font-semibold text-[#101828]">£</span>
              <span className="flex items-center gap-1 text-sm font-semibold text-[#101828]">
                GBP <ChevronDown size={14} />
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-[#EAECF0] px-4 py-3">
            <p className="text-xs text-[#667085]">Choose a Transfer type</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#101828]">Bank Account Transfers</span>
              <span className="text-xs font-semibold text-[#5B4FE5]">Change type</span>
            </div>
          </div>

          <div className="mt-4 space-y-2 rounded-xl bg-[#F9FAFB] p-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[#667085]">Exchange rate</span>
              <span className="font-semibold text-[#101828]">£1 = €1.199660</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#667085]">Our fee</span>
              <span className="font-semibold text-[#101828]">0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#667085]">Estimated delivery time</span>
              <span className="font-semibold text-[#101828]">9pm, Tomorrow</span>
            </div>
          </div>

          <button className="mt-5 w-full rounded-xl bg-[#5B4FE5] py-3 text-sm font-semibold text-white transition-transform active:scale-95">
            Send money now
          </button>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Convert money across multiple currencies
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Raenest offers international transactions at market-competitive
            rates.
          </p>
        </div>
      </div>
    </section>
  );
}