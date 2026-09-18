"use client";

import Link from "next/link";
import { Lock, CalendarClock, TrendingUp } from "lucide-react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Testimonialsection from "../sections/testimonialsection";
import FAQSection from "@/component/faq";

const FEATURES = [
  {
    icon: Lock,
    title: "Lock your funds",
    description: "Choose an amount and a lock period, so you're not tempted to spend it before your goal is met.",
  },
  {
    icon: CalendarClock,
    title: "Pick your duration",
    description: "Lock funds for as short or as long as fits your plans — from a few weeks to several months.",
  },
  {
    icon: TrendingUp,
    title: "Earn more for locking in",
    description: "Locked savings earn a better rate than a regular wallet balance, rewarding your discipline.",
  },
];

export default function LockedSavingsPage() {
  return (
    <main>
    <Navbar/>
      <section className="bg-white px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium text-neutral-400">Locked Savings</p>
            <h1 className="text-5xl font-semibold leading-[1.05] text-neutral-950 sm:text-6xl">
              Lock it in, earn more
            </h1>
            <p className="max-w-md text-base text-neutral-600 sm:text-lg">
              Set money aside for a fixed period and earn a better rate than
              your regular wallet — perfect for savings goals you don't want
              to touch too soon.
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
            {/* Drop your Locked Savings screenshot/illustration in here */}
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
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE9FE] text-primary">
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
      <Testimonialsection/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}