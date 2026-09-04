"use client";

export default function CreatorClubHero() {
  return (
    <section className="bg-white px-6 pt-14 pb-10 sm:px-10 lg:px-16 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-neutral-400">Creator Club</p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-neutral-950 sm:text-6xl lg:text-[64px]">
            Get paid to promote Raenest
          </h1>
          <p className="max-w-md text-base text-neutral-600 sm:text-lg">
            Turn your influence into rewards by becoming a Raenest Creator.
            Earn $ stipends, exclusive merch, and premium perks like workspace
            discounts, streaming subscriptions, and travel benefits.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          {/* Drop your hero creator photo in here */}
          <div className="aspect-[4/3] w-full rounded-[48px] bg-neutral-100" />
        </div>
      </div>
    </section>
  );
}