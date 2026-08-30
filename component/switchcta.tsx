import Link from "next/link";

export default function SwitchCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0F0A2E] px-5 py-24 sm:py-32">
      <img
        src="/images/business/switch-today-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A2E] via-[#0F0A2E]/60 to-transparent" />

      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Make the switch today
        </h2>
        <p className="mt-4 max-w-lg text-white/70">
          We understand the unique challenges African businesses face – from
          navigating complex regulatory environments to dealing with
          fluctuating local currencies.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/register"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#0F0A2E] transition-transform active:scale-95"
          >
            Create an account
          </Link>
          <Link
            href="/contact-us"
            className="rounded-2xl border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Speak to Someone
          </Link>
        </div>

        {/* Floating notification mockup */}
        <div className="mt-16 w-72 rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#5B4FE5] text-xs font-bold text-white">
              R
            </span>
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-[#101828]">Raenest</p>
                <p className="text-xs text-[#98A2B3]">9:42 PM</p>
              </div>
              <p className="mt-0.5 text-xs text-[#475467]">
                Your payment of -$4,000 was successful and receipt sent to
                your email
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}