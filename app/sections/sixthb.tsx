"use client"

import { useEffect, useState } from "react";

const ROLES = [
    "Freelancers",
    "Remote Workers",
    "Designers",
    "Developers",
    "Marketers",
    "Creators",
];

const ROTATE_INTERVAL_MS = 2000;

export default function Sixthbsection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROLES.length);
        }, ROTATE_INTERVAL_MS);
        return () => clearInterval(id);
    }, []);

    return (
    <div className="bg-gray-100 px-5 md:px-12 pt-10 md:pt-15 pb-16 md:pb-30">
        <div className="flex flex-col items-center justify-center gap-3">
        <div className="text-gray-800 text-center h-full">
            {/* Fixed-height viewport so the layout doesn't jump between words */}
            <div className="relative h-[60px] sm:h-[72px] md:h-[84px] lg:h-[84px] overflow-hidden">
                {ROLES.map((role, i) => {
                    const offset = i - index;
                    return (
                        <h1
                            key={role}
                            className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-[70px] text-primary font-semibold transition-all duration-700 ease-in-out"
                            style={{
                                transform: `translateY(${offset * 100}%)`,
                                opacity: offset === 0 ? 1 : 0,
                            }}
                            aria-hidden={offset !== 0}
                        >
                            {role}
                        </h1>
                    );
                })}
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-2">use Securevest to receive and manage</h2>
            <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold">their money — save, spend, and invest.</h2>
            <h2 className="text-sm sm:text-base md:text-[18px] mt-4">At Upwork, Andela, Fiver, Toptal, Contra, YouTube, Freelancer,</h2>
            <h2 className="text-sm sm:text-base md:text-[18px]">Peopleperhour, Deel and anywhere you need to get paid.</h2>
        </div>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[47px] text-gray-800 font-semibold text-center py-10 md:py-15">
            <h2>Get Paid Globally in 3 Easy Steps</h2>
        </div>

        <div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5">
                <div className="w-full max-w-100.5 h-auto md:h-125 bg-primary px-6 sm:px-8 pt-8 flex flex-col items-center justify-center gap-3 rounded-3xl">
                <img src="/number1.png" alt="Number 1" className="w-[300px] h-auto"/>
                <div className="w-full h-auto md:h-75 bg-[#28179F] py-3 px-5 rounded-b-3xl">
                <h2 className="text-lg sm:text-[20px] text-gray-100 font-semibold">Quick Sign up</h2>
                <h2 className="text-sm sm:text-[16px] pt-3 text-gray-100">Create your account in minutes—input legal name, strong password, and confirm verification code.</h2>
                </div>
                </div>
                <div className="w-full max-w-100.5 h-auto md:h-125 bg-primary px-6 sm:px-8 pt-8 flex flex-col items-center justify-center gap-3 rounded-3xl">
                <img src="/number3.png" alt="Number 2" className="w-auto h-auto"/>
                <div className="w-full h-auto md:h-75 bg-[#28179F] py-3 px-5 rounded-b-3xl">
                <h2 className="text-lg sm:text-[20px] text-gray-100 font-semibold">Verify Your Identity</h2>
                <h2 className="text-sm sm:text-[16px] pt-3 text-gray-100">A quick and secure verification process. This is important to help you keep your account safe.</h2>
                </div>
                </div>
                <div className="w-full max-w-100.5 h-auto md:h-125 bg-primary px-6 sm:px-8 pt-8 flex flex-col items-center justify-center gap-3 rounded-3xl">
                <img src="/number2.webp" alt="Number 3" className="w-auto h-auto" />
                <div className="w-full h-auto md:h-75 bg-[#28179F] py-3 px-5 rounded-b-3xl">
                <h2 className="text-lg sm:text-[20px] text-gray-100 font-semibold">Get Your Accounts</h2>
                <h2 className="text-sm sm:text-[16px] text-gray-100 pt-3">Start receiving payments, saving in foreign currencies, and spending globally.</h2>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
}