const stats = [
  {
    flags: "🇺🇸 🇪🇺 🇬🇧 🇳🇬",
    big: "Over $1 billion",
    label: "in transaction volume processed",
    span: "lg:row-span-2",
  },
  {
    icon: "↗",
    big: "95%",
    label: "of our transfers are instant",
  },
  {
    icon: "🔁",
    big: "10,000+",
    label: "transactions processed daily",
  },
  {
    icon: "💼",
    big: "15% saved",
    label: "On transfer fees and poor exchange rates",
  },
];

export default function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-[#0F0A2E] px-5 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-[#5B4FE5]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">
          Over 11,800 businesses use Raenest
        </p>
        <h2 className="mb-12 text-2xl font-bold text-white sm:text-3xl">
          Our Impact in Numbers
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left sm:row-span-1">
            <p className="mb-2 text-sm">🇺🇸 🇪🇺 🇬🇧 🇳🇬</p>
            <p className="text-3xl font-bold text-white">Over $1 billion</p>
            <p className="mt-1 text-sm text-white/60">
              in transaction volume processed
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left">
            <p className="mb-2 text-xl">↗</p>
            <p className="text-3xl font-bold text-white">95%</p>
            <p className="mt-1 text-sm text-white/60">of our transfers are instant</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left">
            <p className="mb-2 text-xl">🔁</p>
            <p className="text-3xl font-bold text-white">10,000+</p>
            <p className="mt-1 text-sm text-white/60">
              transactions processed daily
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left">
            <p className="mb-2 text-xl">💼</p>
            <p className="text-3xl font-bold text-white">15% saved</p>
            <p className="mt-1 text-sm text-white/60">
              On transfer fees and poor exchange rates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
