"use client";

import { useState } from "react";

export default function Sixthsection() {
  const [isStackHovered, setIsStackHovered] = useState(false);

  return (
    <div className="bg-gray-100 px-5 md:px-12 py-10 md:py-15">
      {/* <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 pb-16 md:pb-25">
        <div className="flex flex-col items-center lg:items-start justify-center gap-4 text-center lg:text-left">
          <div className="text-black font-semibold">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] leading-tight">
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
        <div className="w-full max-w-75 lg:max-w-none lg:w-auto">
          <img src="/phone.webp" alt="Phone" className="h-auto lg:h-[500px] w-full object-contain flex justify-end" />
        </div>
      </div> */}

      <div className="py-10 md:py-16 lg:py-25 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-14 h-auto md:h-81">
        {/* Left logo block */}
        <div className="hidden sm:flex items-center gap-6 lg:gap-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:gap-14 h-55 lg:h-65">
            <img src="/peopleperhour.png" alt="PeoplePerHour" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
            <img src="/ali.png" alt="AliExpress" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
            <img src="/upwork.png" alt="Upwork" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
          </div>
          <div className="flex flex-col items-center justify-between gap-8 lg:gap-14 h-55 lg:h-65">
            <img src="/tiktok.png" alt="TikTok" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
            <img src="/meta.png" alt="Meta" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
            <img src="/amazon.png" alt="Amazon" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
          </div>
        </div>

        {/* Center stacked image cards — all three sit exactly on top of one
            another (same position + size) so only the first one shows at
            rest; hovering rotates the top and bottom cards away to reveal
            the stack. Height matches the logo columns on either side
            (h-55 / lg:h-65). */}
        <div
          className="relative w-40 sm:w-45 h-55 lg:h-65 shrink-0 perspective-distant"
          onMouseEnter={() => setIsStackHovered(true)}
          onMouseLeave={() => setIsStackHovered(false)}
        >
          {/* Red card - bottom of stack - rotates horizontally to the right on hover */}
          <div
            className="absolute inset-0 rounded-2xl border-[3px] border-[#FF3B30] overflow-hidden shadow-xl bg-white transition-transform duration-500 ease-out [transform-style:preserve-3d]"
            style={{
              transform: isStackHovered ? "rotateY(90deg)" : "rotateY(0deg)",
              zIndex: 1,
            }}
          >
            <img src="/headset.webp" alt="Lady with Headset" className="w-full h-full object-cover" />
          </div>

          {/* Yellow-green card - middle - stays the same on hover */}
          <div
            className="absolute inset-0 rounded-2xl border-[3px] border-[#D6FF3F] overflow-hidden shadow-lg bg-white"
            style={{ zIndex: 2 }}
          >
            <img src="/guy.webp" alt="Guy on Laptop" className="w-full h-full object-cover" />
          </div>

          {/* Blue card - top of stack, visible at rest - rotates horizontally to the left on hover */}
          <div
            className="absolute inset-0 rounded-2xl border-[3px] border-[#2E2EFF] overflow-hidden shadow-lg bg-white transition-transform duration-500 ease-out transform-3d"
            style={{
              transform: isStackHovered ? "rotateY(-90deg)" : "rotateY(0deg)",
              zIndex: 3,
            }}
          >
            <img src="/ride-girl.webp" alt="Ride Girl" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right logo block */}
        <div className="hidden sm:flex items-center gap-6 lg:gap-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:gap-14 h-55 lg:h-65">
            <img src="/google.png" alt="Google Ads" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
            <img src="/fiverr.png" alt="Fiverr" className="w-35 sm:w-35 lg:w-42.5 h-12 object-contain" />
            <img src="/freelancer.png" alt="Freelancer" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
          </div>
          <div className="flex flex-col items-center justify-between gap-8 lg:gap-14 h-55 lg:h-65">
            <img src="/youtube.png" alt="YouTube" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
            <img src="/toptal.png" alt="Toptal" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
            <img src="/paypal.png" alt="PayPal" className="w-35 sm:w-42.5 lg:w-45 h-12 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}