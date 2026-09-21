"use client";


export default function Download() {
  return (
    <div>
      <a
        href="https://play.google.com/store/apps?"
        type="button"
        className="flex items-center gap-2 rounded-2xl bg-gray-300 px-4 py-1 text-sm font-semibold text-primary transition-colors"
        >
        <img src="/apple-you.svg" alt=""  className="w-8 h-8 hover:gray-100"/>
        Download the app
        </a>
    </div>
  );
}
