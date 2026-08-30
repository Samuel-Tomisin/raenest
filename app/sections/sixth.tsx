"use client";

export default function Sixthsection() {
    return(
    <div className="bg-gray-100 px-5 md:px-12 py-10 md:py-15">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 pb-16 md:pb-25">
        <div className="flex flex-col items-center lg:items-start justify-center gap-4 text-center lg:text-left">
        <div className="text-black font-semibold">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight">
                Your Money, <br className="hidden md:block" />
                wherever You Need It
            </h1>
            <h2 className="text-base md:text-[16px] mt-4 lg:mt-2">
                Send and withdraw funds to bank accounts and mobile
                <br className="hidden lg:block" /> money using your Raenest account, seamlessly
                <br className="hidden lg:block" /> connecting with PayPal, Payoneer, Wise, Mastercard,
                <br className="hidden lg:block" /> Revolut and many more.
            </h2>
        </div>
        </div>
        <div className="w-full max-w-[300px] lg:max-w-none lg:w-auto">
            <img src="/phone.webp" alt="Phone" className="h-auto lg:h-[500px] w-full object-contain"/>
        </div>
        </div>

    <div className="py-10 md:py-16 lg:py-25 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-14 h-auto md:h-[324px]">
      {/* Left logo block */}
      <div className="hidden sm:flex items-center gap-6 lg:gap-10">
        <div className="flex flex-col items-center justify-between gap-8 lg:gap-14 h-[220px] lg:h-[260px]">
          <img src="/peopleperhour.png" alt="PeoplePerHour" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
          <img src="/ali.png" alt="AliExpress" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
          <img src="/upwork.png" alt="Upwork" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
        </div>
        <div className="flex flex-col items-center justify-between gap-8 lg:gap-14 h-[220px] lg:h-[260px]">
          <img src="/tiktok.png" alt="TikTok" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
          <img src="/meta.png" alt="Meta" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
          <img src="/amazon.png" alt="Amazon" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
        </div>
      </div>

      {/* Center stacked image cards */}
      <div className="relative w-[220px] h-[280px] sm:w-[260px] sm:h-[320px] shrink-0">
        {/* Blue card - back */}
        <div
          className="absolute top-2 left-0 w-[150px] h-[190px] sm:w-[175px] sm:h-[220px] rounded-2xl border-[3px] border-[#2E2EFF] overflow-hidden shadow-lg bg-white"
          style={{ transform: "rotate(-12deg)", zIndex: 1 }}
        >
          <img src="/ride-girl.webp" alt="Ride Girl" className="w-full h-full object-cover" />
        </div>

        {/* Yellow-green card - middle */}
        <div
          className="absolute top-0 left-8 sm:left-10 w-[150px] h-[190px] sm:w-[175px] sm:h-[220px] rounded-2xl border-[3px] border-[#D6FF3F] overflow-hidden shadow-lg bg-white"
          style={{ transform: "rotate(8deg)", zIndex: 2 }}
        >
          <img src="/guy.webp" alt="Guy on Laptop" className="w-full h-full object-cover" />
        </div>

        {/* Red card - front */}
        <div
          className="absolute bottom-0 left-4 sm:left-5 w-[165px] h-[210px] sm:w-[195px] sm:h-[245px] rounded-2xl border-[3px] border-[#FF3B30] overflow-hidden shadow-xl bg-white"
          style={{ transform: "rotate(-4deg)", zIndex: 3 }}
        >
          <img src="/headset.webp" alt="Lady with Headset" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right logo block */}
      <div className="hidden sm:flex items-center gap-6 lg:gap-10">
        <div className="flex flex-col items-center justify-between gap-8 lg:gap-14 h-[220px] lg:h-[260px]">
          <img src="/google.png" alt="Google Ads" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
          <img src="/fiverr.png" alt="Fiverr" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
          <img src="/freelancer.png" alt="Freelancer" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
        </div>
        <div className="flex flex-col items-center justify-between gap-8 lg:gap-14 h-[220px] lg:h-[260px]">
          <img src="/youtube.png" alt="YouTube" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
          <img src="/toptal.png" alt="Toptal" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
          <img src="/paypal.png" alt="PayPal" className="w-[120px] sm:w-[150px] lg:w-[177px] h-8 object-contain" />
        </div>
      </div>
    </div>

    </div>
    );
}