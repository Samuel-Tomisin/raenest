"use client";

import Link from "next/link";
import { Smartphone, CreditCard, ShieldCheck } from "lucide-react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

const FEATURES = [
  {
    icon: Smartphone,
    title: "Virtual cards, instantly",
    description: "Create a virtual card in seconds for online spending, subscriptions, and quick purchases.",
  },
  {
    icon: CreditCard,
    title: "Physical cards, delivered",
    description: "Request a physical card for everyday spending in-store, wherever Visa is accepted.",
  },
  {
    icon: ShieldCheck,
    title: "Full control, either way",
    description: "Freeze, top up, or set limits on either card type, right from your dashboard.",
  },
];

export default function VirtualPhysicalCardsPage() {
  return (
    <main>
      <Navbar/>
      <section className="bg-white px-6 pt-14 pb-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium text-neutral-400">Virtual & Physical Cards</p>
            <h1 className="text-5xl font-semibold leading-[1.05] text-neutral-950 sm:text-6xl">
              A card for every kind of spend
            </h1>
            <p className="max-w-md text-base text-neutral-600 sm:text-lg">
              Get a virtual card for online purchases in minutes, or request
              a physical card for spending wherever you are — both linked to
              the same balance.
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
            {/* Drop your Virtual & Physical Cards screenshot/illustration in here */}
            <div className="aspect-[4/3] w-full rounded-[32px] bg-neutral-100" />
          </div>
        </div>
      </section>

      <section className="bg-[#F6F5FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-neutral-950 sm:text-4xl">
            Why get both
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