"use client";

import { Link } from "lucide-react";


export default function Download() {
  return (
    <div>
      <a
        href="/download-app"
        type="button"
        className="flex items-center gap-2 rounded-2xl bg-[#CAC5F3] px-4 py-1 text-sm font-semibold text-neutral-900 transition-colors "
        >
        <img src="/apple-you.svg" alt=""  className="w-8 h-8 grayscale hover:text-black"/>
        Download app
        </a>
    </div>
  );
}
