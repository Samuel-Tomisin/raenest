"use client";

import { Link } from "lucide-react";


export default function Buttonbusiness () {
    return(
        <div>
        <Link 
        href="/register"
        className="bg-white text-black px-3 py-3 rounded-2xl text-[14px] font-semibold cursor-pointer">
            <button>Open a business account</button>
            </Link>
        </div>
        
    );
}