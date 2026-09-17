"use client";

import Link from "next/link";
import { Zap, Smartphone, Tv } from "lucide-react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Buttonbusiness2 from "@/component/button-business2";

const FEATURES = [
  {
    icon: Zap,
    title: "Instant airtime top-up",
    description: "Buy airtime for yourself or someone else in seconds, on any supported network.",
  },
  {
    icon: Smartphone,
    title: "Data bundles",
    description: "Grab a data plan without leaving the app — pick a bundle and you're connected.",
  },
  {
    icon: Tv,
    title: "Pay utility & subscription bills",
    description: "Settle electricity, TV, and other recurring bills directly from your wallet.",
  },
];

export default function Billsvtu() {
  return (
    <main>
    <Navbar/>
      <section className="bg-white px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-sm sm:text-2xl font-medium text-neutral-400">Bills & VTU</p>
            <h1 className="text-5xl font-semibold leading-[1.05] text-gray-900 sm:text-6xl">
              Airtime, data, and bills — sorted
            </h1>
            <p className="max-w-md text-base text-neutral-600 sm:text-lg">
              Top up airtime, buy data, and pay your bills instantly, all
              from your Raenest wallet.
            </p>
            <div className="pt-2">
              <Buttonbusiness2/>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            {/* Drop your Bills & VTU screenshot/illustration in here */}
            <div className="aspect-[4/3] w-full rounded-[32px] bg-neutral-100" />
          </div>
        </div>
      </section>

      <section className="bg-[#F6F5FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-neutral-950 sm:text-4xl">
            What you can pay for
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#5433C9]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#5433C9]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}