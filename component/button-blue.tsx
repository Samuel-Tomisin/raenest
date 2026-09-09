"use client"

export default function Button() {
    return (
        <div>
            <a
              href="/register"
              className="py-3 px-4 bg-primary text-white rounded-2xl text-[12px] font-semibold transition-colors active:scale-95"
            >
              Create an account
            </a>
        </div>
    );
}