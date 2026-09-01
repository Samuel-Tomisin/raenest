const partnerLogos = [
  "Fluna",
  "SunFi",
  "RENDA",
  "Moniepoint",
  "FanBants",
  "helium health",
  "Moniepoint",
  "Tunga",
];

export default function LovedByLeaders() {
  return (
    <section className="bg-[#F9FAFB] px-5 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <h2 className="text-3xl font-bold text-[#101828] sm:text-4xl">
            Loved by Leaders at
          </h2>
          <p className="mt-4 max-w-sm text-[#667085]">
            We partner with business leaders to enable their participation in
            global finance with transparent pricing and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {partnerLogos.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-20 items-center justify-center rounded-2xl bg-white px-4 shadow-sm"
            >
              <span className="text-sm font-bold text-[#101828]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
