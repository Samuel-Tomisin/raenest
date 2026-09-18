"use client";

import LearnMore from "@/component/learn-more";
import { ArrowRight } from "lucide-react";

export default function ThirdSection() {
  return (
    <section className="bg-[url('/india-guy.png')] bg-cover bg-center bg-no-repeat min-h-screen w-full pt-10 sm:pt-14 lg:pt-18 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="w-full">
          <h2 className="text-gray-100 text-xl sm:text-2xl lg:text-[28px] font-semibold px-1 sm:px-5">
            Receive Money
          </h2>
        </div>

        <div className="flex flex-col  justify-center gap-8 pt-24 sm:flex-row sm:gap-12 sm:pt-32 lg:gap-20 lg:pt-40">
          <img
            src="/raenestpay.svg"
            alt="Raenest Pay"
            className="w-40 sm:w-48 lg:w-56 h-auto shrink-0"
          />

          <div className="flex flex-col items-center gap-2 px-5 text-center sm:items-start sm:text-start sm:max-w-sm lg:max-w-md">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-tight text-gray-100">
              The reliable way to get paid
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-100">
              Get paid on time, every time, with accounts in USD, GBP, or EUR,
              plus easy invoicing and payment links.
            </p>
            <div className="flex gap-2 cursor-pointer">
            <a href="/products/receivemoney"
            className="text-gray-100 font-semibold">Learn More</a>
            <ArrowRight/>
            </div>
            {/* <LearnMore /> */}
          </div>
        </div>
      </div>
    </section>
  );
}