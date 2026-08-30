"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Apple, PlayCircle } from "lucide-react";
import { US, GB, EU, NG } from "country-flag-icons/react/3x2";

type CurrencyCode = "USD" | "GBP" | "EUR" | "NGN";

const CURRENCIES: Record<
  CurrencyCode,
  { symbol: string; label: string; Flag: React.ComponentType<{ className?: string }> }
> = {
  USD: { symbol: "$", label: "USD", Flag: US },
  GBP: { symbol: "£", label: "GBP", Flag: GB },
  EUR: { symbol: "€", label: "EUR", Flag: EU },
  NGN: { symbol: "₦", label: "NGN", Flag: NG },
};

// Placeholder rates against USD — wire this up to your real FX rate API.
const RATES_TO_USD: Record<CurrencyCode, number> = {
  USD: 1,
  GBP: 1.27,
  EUR: 1.08,
  NGN: 0.00062,
};

function CurrencyPicker({
  value,
  onChange,
}: {
  value: CurrencyCode;
  onChange: (code: CurrencyCode) => void;
}) {
  const { Flag, label } = CURRENCIES[value];
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as CurrencyCode)}
        className="appearance-none rounded-full border border-neutral-200 bg-white py-2 pl-9 pr-8 text-sm font-semibold text-neutral-900 outline-none"
      >
        {Object.keys(CURRENCIES).map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 overflow-hidden rounded-full">
        <Flag className="h-full w-full object-cover" />
      </span>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function SendMoneyHero() {
  const [sendCurrency, setSendCurrency] = useState<CurrencyCode>("EUR");
  const [receiveCurrency, setReceiveCurrency] = useState<CurrencyCode>("GBP");
  const [amount, setAmount] = useState("1000");

  const rate = useMemo(() => {
    const usdAmount = RATES_TO_USD[sendCurrency];
    const receiveRate = RATES_TO_USD[receiveCurrency];
    return usdAmount / receiveRate;
  }, [sendCurrency, receiveCurrency]);

  const receiveAmount = useMemo(() => {
    const parsed = parseFloat(amount) || 0;
    return (parsed * rate).toFixed(2);
  }, [amount, rate]);

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-14 pb-24 sm:px-10 lg:px-16 lg:pt-20">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-neutral-400">Send money</p>

          <h1 className="text-5xl font-semibold leading-[1.05] text-neutral-950 sm:text-6xl lg:text-[64px]">
            Make fast international transfers
          </h1>

          <p className="max-w-md text-base text-neutral-600 sm:text-lg">
            Send money securely into mobile money and bank accounts across
            the world in seconds.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-[#EDE9FE] px-5 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-[#E0D9FC]"
            >
              <Apple className="h-4 w-4" />
              <PlayCircle className="h-4 w-4" />
              Download app
            </button>
          </div>
        </div>

        {/* Right: send money calculator card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="flex flex-col gap-4 rounded-3xl">
            <div className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(84,51,201,0.25)]">
              <p className="text-sm text-neutral-500">How much do you want to send?</p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="text-xl text-neutral-400">{CURRENCIES[sendCurrency].symbol}</span>
                <input
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                  className="w-full bg-transparent text-2xl font-semibold text-neutral-900 outline-none"
                />
                <CurrencyPicker value={sendCurrency} onChange={setSendCurrency} />
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(84,51,201,0.25)]">
              <p className="text-sm text-neutral-500">Your recipient receives</p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="text-xl text-neutral-400">{CURRENCIES[receiveCurrency].symbol}</span>
                <span className="w-full text-2xl font-semibold text-neutral-900">{receiveAmount}</span>
                <CurrencyPicker value={receiveCurrency} onChange={setReceiveCurrency} />
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(84,51,201,0.25)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500">Choose a Transfer type</p>
                  <p className="mt-1 text-sm font-semibold text-[#5433C9]">Bank Account Transfers</p>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full bg-[#EDE9FE] px-3 py-1.5 text-xs font-semibold text-[#5433C9]"
                >
                  Change type
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(84,51,201,0.25)]">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500">Exchange rate</span>
                <span className="text-neutral-500">Our fee</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-medium text-neutral-900">
                  £1 = {CURRENCIES[sendCurrency].symbol}
                  {rate.toFixed(6)}
                </span>
                <span className="font-medium text-neutral-900">0.00</span>
              </div>

              <div className="mt-4 text-sm text-neutral-500">Estimated delivery time</div>
              <p className="mt-1 font-medium text-neutral-900">Should arrive in 9pm, Tomorrow</p>
            </div>

            <button
              type="button"
              className="w-full rounded-2xl bg-[#5433C9] py-4 text-base font-semibold text-white transition-colors hover:bg-[#4527ad]"
            >
              Send money now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}