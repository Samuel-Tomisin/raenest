"use client";

import Link from "next/link";
import { Target, Repeat, TrendingUp } from "lucide-react";

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
      <section className="bg-white px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium text-neutral-400">Target Savings</p>
            <h1 className="text-5xl font-semibold leading-[1.05] text-neutral-950 sm:text-6xl">
              Save toward what matters
            </h1>
            <p className="max-w-md text-base text-neutral-600 sm:text-lg">
              Set a savings goal, automate your contributions, and watch your
              money grow toward the things you're working for.
            </p>
            <div className="pt-2">
              <Link
                href="/register"
                className="inline-block rounded-2xl bg-[#5433C9] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4527ad]"
              >
                Create an account
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            {/* Drop your Target Savings screenshot/illustration in here */}
            <div className="aspect-[4/3] w-full rounded-[32px] bg-neutral-100" />
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
    </main>
  );
}