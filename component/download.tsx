"use client";


export default function Download() {
  return (
    <div>
      <a
        href="https://play.google.com/store/apps?"
        type="button"
        className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-1 text-sm font-semibold text-primary-hover transition-colors"
        >
        <img src="/android.png" alt=""  className="w-7 h-7 hover:gray"/>
        Android Download
        </a>
    </div>
  );
}
