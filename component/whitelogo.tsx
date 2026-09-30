"use client"

import Link from "next/link";

export default function Whitelogo(){
    return(
        <div>
            <Link href="/" className="flex items-center gap-1">
                          <span className="text-5xl text-white hover:text-gray-200">◔</span>
                          <span className="text-3xl font-bold text-white hover:text-gray-200">Securevest</span>
                        </Link>
        </div>
    );
}