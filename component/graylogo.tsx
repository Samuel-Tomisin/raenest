"use client"

import Link from "next/link";

export default function Graylogo(){
    return(
        <div>
            <Link href="/" className="flex items-center gap-1">
                          <span className="text-5xl text-tertiary hover:text-[#44474e]">◔</span>
                          <span className="text-3xl font-bold text-tertiary hover:text-[#44474e]">Securevest</span>
                        </Link>
        </div>
    );
}