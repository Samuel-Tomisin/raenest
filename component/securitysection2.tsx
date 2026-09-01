"use client";

import { Shield, Lock, ShieldCheck } from "lucide-react";

const SECURITY_POINTS = [
  {
    icon: Shield,
    title: "Compliant Transactions",
    description: "Backed by local and international financial regulations.",
  },
  {
    icon: Lock,
    title: "Two-Factor Authentication",
    description: "Support for enhanced transaction security",
  },
  {
    icon: ShieldCheck,
    title: "Anti-Fraud Measures",
    description: "Proactive monitoring to secure your money.",
  },
];

export default function Securitysection2() {
  return (
    <section className="bg-[#40339E] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Security you can rely on
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/80 sm:text-base">
          International transfers made easy. Whether you're sending to
          Africa, the US, Europe, or the UK, we've got you covered.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SECURITY_POINTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl bg-white/10 p-8 text-left"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
