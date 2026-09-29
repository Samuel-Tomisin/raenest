"use client";


export default function Button() {
return (
  <div>
    <a
      href="https://www.apple.com/store"
      className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-1 text-sm font-semibold text-primary-hover transition-colors"
      >
      <img src="/apple.png" alt=""  className="w-7 h-7 hover:gray"/>
      iOS Download
    </a>
  </div>
);
}
