"use client";

import { ArrowRight } from "lucide-react";


export default function LearnMore2() {
    return (
        <div className="flex items-center justify-start gap-2 cursor-pointer">
            <h1 className="text-[14px] font-semibold text-[#28206C]">Learn More</h1>
            <ArrowRight className="text-[#4F3FD7]" />
        </div>
    );
}