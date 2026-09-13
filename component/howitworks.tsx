"use client";

const STEPS = [
  {
    step: "Step 1",
    title: "Apply to Join",
    description:
      "Fill out a simple application form with your details and content creation style. We welcome creators of all types - from tech community leaders to travel content creators.",
      image: "/c1.webp",
  },
  {
    step: "Step 2",
    title: "Create & Share",
    description:
      "Post engaging content about your Raenest experience across your social platforms. We'll provide you with exclusive product updates and guides to help you create impactful content.",
      image: "/c2.webp",
  },
  {
    step: "Step 3",
    title: "Earn Rewards",
    description:
      "Get $ stipends. Unlock exclusive merch, subscriptions, and premium perks based on your creator rank and posting consistency.",
      image: "/c3.webp",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-[#F6F5DC] to-[#E9E7FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-neutral-950 sm:text-4xl">
          How it works
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map(({ step, title, description }) => (
            <div
              key={step}
              className="flex flex-col overflow-hidden rounded-3xl bg-white/70 p-6"
            >
              <p className="text-xs font-medium text-neutral-500">{step}</p>
              <h3 className="mt-1 text-lg font-bold text-[#5433C9]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {description}
              </p>

              {/* Drop your step photo in here */}
              {/* <img src={STEPS[1].image} alt="" />
              <img src={STEPS[2].image} alt="" /> */}
              {/* <div className="mt-6 aspect-[4/3] w-full rounded-3xl bg-neutral-200" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}