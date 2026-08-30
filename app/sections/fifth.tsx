"use client";

import Buttonbusiness from "@/component/button-business";

export default function FifthSection() {
    return (
        <div className="bg-white px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-15">
            <div className="mx-auto max-w-7xl">
                <div className="bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat min-h-[360px] sm:min-h-[420px] lg:h-[500px] rounded-4xl">
                    <div className="flex flex-col items-center justify-center h-full px-4 py-10 text-center sm:px-8">
                        <h2 className="text-3xl sm:text-5xl lg:text-[65px] text-white font-semibold leading-tight">
                            Raenest for business
                        </h2>
                        <p className="mt-3 max-w-xl text-sm sm:text-base lg:text-[18px] text-white font-semibold leading-relaxed pb-8 sm:pb-12 lg:pb-15">
                            Join over 11,000 businesses making international payments and
                            receiving money in 13+ countries on Raenest business.
                        </p>
                        <Buttonbusiness />
                    </div>
                </div>
            </div>
        </div>
    );
}