"use client";

import Link from "next/link";
import { Target, Repeat, TrendingUp } from "lucide-react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Button2 from "@/component/button-blue";
import Invoicefeatureshowcase from "@/component/invoicefeatureshowcase";
import FAQSection from "../sections/faqs";

const FEATURES = [
  {
    icon: Target,
    title: "Set a goal",
    description: "Decide what you're saving for and how much you need — a trip, a gadget, an emergency fund.",
  },
  {
    icon: Repeat,
    title: "Save automatically",
    description: "Set up recurring contributions so your goal grows without you having to think about it.",
  },
  {
    icon: TrendingUp,
    title: "Track your progress",
    description: "Watch your balance grow toward your target, right from your Raenest dashboard.",
  },
];

export default function TargetSavingsPage() {
  return (
    <main>
      <Navbar/>
      <section className="bg-white px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-sm sm:text-2xl font-medium text-gray-400">Target Savings</p>
            <h1 className="text-5xl font-semibold leading-[1.05] text-gray-800 sm:text-6xl font-sans">
              Save toward what matters
            </h1>
            <p className="max-w-md text-base text-gray-600 sm:text-lg font-sans">
              Set a savings goal, automate your contributions, and watch your
              money grow toward the things you're working for.
            </p>
            <div className="pt-2">
              <Button2/>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            {/* Drop your Target Savings screenshot/illustration in here */}
            <img src="/cp.png" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#F6F5FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-neutral-950 sm:text-4xl">
            How it works
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE9FE] text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Invoicefeatureshowcase/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}