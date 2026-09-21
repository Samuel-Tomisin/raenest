"use client"

import { Lock, ShieldAlert, ShieldCheck } from "lucide-react";



const TRUST_POINTS = [
  { icon: ShieldCheck, title: "Speed", description: "No long waits. Your earnings arrive fast so you can access your money almost instantly." },
  { icon: Lock, title: "Security", description: "Your funds are handled using industry-standard security and trusted global infrastructure, giving you peace of mind while you get paid faster." },
  { icon: ShieldAlert, title: "Control", description: "Withdraw, convert to local currencies, spend with your USD card, or invest the moment your earnings arrive." },
];

export default function TrustSection() {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Fast payouts, built on trust.</h2>
            <p className="mt-4 max-w-lg text-sm text-white/80 sm:text-base">
              Upwork FastTrack moves your earnings to your Raenest account in under one hour, combining speed with bank-grade security. Get paid quickly, stay in control, and know your money is protected every step of the way.
            </p>
            <img src="/getcard.png" alt="" className="mt-6 w-full rounded-2xl object-cover" />
          </div>

          <div className="flex flex-col gap-8">
            {TRUST_POINTS.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className={index < TRUST_POINTS.length - 1 ? "border-b border-white/20 pb-8" : ""}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
