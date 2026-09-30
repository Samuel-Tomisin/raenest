import { ShieldCheck, Lock, ShieldAlert } from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Compliant Transactions",
    description: "All transactions are processed in line with applicable local financial regulations and compliance standards, helping ensure your savings and investments are handled securely and responsibly.",
  },
  {
    icon: Lock,
    title: "Two-Factor Authentication",
    description: "Enhanced security with two-factor authentication to help protect your account and keep every transaction secure.",
  },
  {
    icon: ShieldAlert,
    title: "Anti-Fraud Measures",
    description: "Proactive fraud monitoring and security measures designed to help detect suspicious activity and protect your money.",
  },
];

export default function Securitysection() {
  return (
    <section className="bg-primary-hover px-5 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <h2 className="text-3xl font-bold text-gray sm:text-4xl">
            Security you can rely on
          </h2>
          <p className="mt-4 max-w-lg text-gray">
            Your security is our priority. We use industry-standard 
            security measures to help protect your personal information, 
            transactions, and funds around the clock, giving you confidence as you save and invest.

          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}>
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gray">
                    <Icon size={25} />
                  </span>
                  <h3 className="text-sm font-bold text-gray">{feature.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <img
            src="/key.webp"
            alt="Security lock illustration"
            className="w-64"
          />
        </div>
      </div>
    </section>
  );
}