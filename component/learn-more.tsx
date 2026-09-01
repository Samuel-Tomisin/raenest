"use client";

import { ArrowRight } from "lucide-react";


export default function LearnMore() {
    return (
        <div className="flex items-center justify-center gap-2 cursor-pointer">
            <h1 className="text-[14px] font-semibold text-white">Learn More</h1>
            <ArrowRight className="text-[#E6FF00]" />
        </div>
    );
}
