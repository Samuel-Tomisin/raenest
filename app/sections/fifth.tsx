"use client";

import Buttonbusiness from "@/component/button-business";

export default function FifthSection() {
    return (
        <div className="bg-white px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-15">
            <div className="mx-auto max-w-7xl">
                <div className="bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat min-h-90 sm:min-h-105 lg:h-125 rounded-4xl">
                    <div className="flex flex-col items-center justify-center h-full px-4 py-10 text-center sm:px-8">
                        <h2 className="text-2xl sm:text-4xl lg:text-[50px] text-gray-100 font-semibold leading-tight">
                            Securevest is trusted by thousands of users
                        </h2>
                        <p className="mt-3 max-w-xl text-sm sm:text-base lg:text-[18px] text-gray-100 font-semibold leading-relaxed pb-8 sm:pb-12 lg:pb-15">
                            Join over hundreds of thousands of individuals and businesses who trust securevest with their finances. 
                            Our platform is designed to help you manage your finances with ease and confidence.
                        </p>
                        <Buttonbusiness />
                    </div>
                </div>
            </div>
        </div>
    );
}