"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = email.trim().length > 0 && password.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    // TODO: wire up actual auth logic
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* ── Header ── */}
      <header className="border-b border-neutral-100 bg-white px-6 py-5 sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          {/* PLACEHOLDER: drop your Raenest logo mark (the "O" icon) here */}
          {/* <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#5433C9]">
            <span className="sr-only">Raenest</span>
          </div> */}
          <img src="/raenest.svg" alt="Raenest Logo" className="h-10 w-50" pl-40 />
        </Link>
      </header>

      {/* ── Login form ── */}
      <main className="flex justify-center px-6 pt-16 sm:pt-24">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-neutral-950">Log in</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Enter your email address and password
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-800">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                autoComplete="email"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#5433C9] focus:outline-none focus:ring-1 focus:ring-[#5433C9]"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-neutral-800">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3.5 pr-12 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#5433C9] focus:outline-none focus:ring-1 focus:ring-[#5433C9]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Link
              href="/forgot-password"
              className="-mt-2 text-sm font-semibold text-[#5433C9] hover:text-[#4527ad]"
            >
              Forgot password?
            </Link>

            <button
              type="submit"
              disabled={!isFormValid}
              className="mt-4 w-full rounded-2xl bg-[#5433C9] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4527ad] disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400"
            >
              Log in
            </button>

            <Link
              href="/register"
              className="text-center text-sm font-semibold text-[#5433C9] hover:text-[#4527ad] pb-10"
            >
              New to Raenest? Sign up
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}