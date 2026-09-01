import { ShieldCheck, Lock, ShieldAlert } from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Compliant Transactions",
    description: "Backed by local and international financial regulations.",
  },
  {
    icon: Lock,
    title: "Two-Factor Authentication",
    description: "Support for enhanced transaction security",
  },
  {
    icon: ShieldAlert,
    title: "Anti-Fraud Measures",
    description: "Proactive monitoring to secure your money.",
  },
];

export default function SecuritySection() {
  return (
    <section className="bg-[#160F3D] px-5 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Security you can rely on
          </h2>
          <p className="mt-4 max-w-lg text-white/70">
            We uphold industry-standard security across all our services,
            ensuring your transactions and funds are protected 24/7 so you
            can focus on what matters.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}>
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <img
            src="/images/business/lock-illustration.png"
            alt="Security lock illustration"
            className="w-64"
          />
        </div>
      </div>
    </section>
  );
}
