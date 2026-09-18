"use client";

import Link from "next/link";
import { useState } from "react";
import Button2 from "./button-blue";
// import Button from "../ui/button";

type AccountType = "personal" | "business";

interface DropdownLink {
  label: string;
  href: string;
  description: string;
}

const productItems: Record<AccountType, DropdownLink[]> = {
  personal: [
    { label: "Cards", href: "/cards", description: "Virtual and physical cards for you" },
    { label: "Target Savings", href: "/targetsavings", description: "Save toward a goal, automatically." },
    { label: "Locked Savings", href: "/lockedsavings", description: "Lock funds away and earn more." },
    { label: "Virtual & Physical Cards", href: "/virtualphysicalcards", description: "Get a card for every kind of spend." },
    { label: "Bills & VTU", href: "/billsvtu", description: "Pay bills and buy airtime instantly." },
    { label: "Wallet & Transfer", href: "/wallettransfer", description: "Hold funds and move money with ease." },

    // { label: "Send Money", href: "/sendmoney", description: "Global money transfers." },
    { label: "Receive Money", href: "/products/receivemoney", description: "Receive money from over 190 countries" },
    // { label: "Global Accounts", href: "/products/global-accounts", description: "Multi-currency accounts easily accessible" },
    // { label: "Invoices", href: "/products/invoices", description: "Smart invoicing for professionals" },
    // { label: "US Stocks", href: "/products/us-stocks", description: "Buy U.S. stocks on Raenest with ease" },
    // { label: "Upwork", href: "/products/upwork", description: "Upwork earnings to Raenest in under one hour" },
    // { label: "Stablecoins", href: "/products/stablecoins", description: "Receive USDC and USDT on Raenest." },
  ],
  business: [
    { label: "Make Payments", href: "/business/make-payments", description: "Pay vendors and teams around the world." },
    { label: "Cards", href: "/business/cards", description: "Issue cards for team spending and control." },
    { label: "Receive Payments", href: "/business/receive-payments", description: "Accept payments from clients globally." },
    { label: "Global Accounts", href: "/business/global-accounts", description: "Hold multiple currencies for your business." },
    { label: "Invoices", href: "/business/invoices", description: "Send professional invoices and get paid faster." },
  ],
};

const earnItems: Record<AccountType, DropdownLink[]> = {
  personal: [
    { label: "Referral", href: "/earn/referral", description: "Share Raenest and Earn." },
    // { label: "Creator Club", href: "/earn/creator-club", description: "Get paid to promote Raenest" },
    { label: "Rewards", href: "/earn/rewards", description: "Earn while you spend" },
  ],
  business: [
    { label: "Referral", href: "/business/referral", description: "Invite other businesses and earn rewards." },
    { label: "Rewards", href: "/business/rewards", description: "Earn perks as your business grows." },
  ],
};

// ── Dropdown item icons (used in both mobile accordion AND desktop dropdown) ──

function ItemIcon({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <span
      className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
      style={{ background: bg }}
    >
      {children}
    </span>
  );
}

const dropdownIcons: Record<string, React.ReactNode> = {
  // "Send Money": (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  //     </svg>
  //   </ItemIcon>
  // ),
  "Target Savings": (
    <ItemIcon bg="#F8F9FF">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    </ItemIcon>
  ),
  "Locked Savings": (
    <ItemIcon bg="#F8F9FF">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    </ItemIcon>
  ),
  // "Make Payments": (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  //     </svg>
  //   </ItemIcon>
  // ),
  Cards: (
    <ItemIcon bg="#F8F9FF">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    </ItemIcon>
  ),
  "Virtual & Physical Cards": (
    <ItemIcon bg="#F8F9FF">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    </ItemIcon>
  ),
  "Bills & VTU": (
    <ItemIcon bg="#F8F9FF">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    </ItemIcon>
  ),
  "Wallet & Transfer": (
    <ItemIcon bg="#F8F9FF">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12V7H5a2 2 0 010-4h14v4" /><path d="M3 5v14a2 2 0 002 2h16v-5" /><path d="M18 12a2 2 0 000 4h4v-4z" />
      </svg>
    </ItemIcon>
  ),
  "Receive Money": (
    <ItemIcon bg="#F8F9FF">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 19 19 12" />
      </svg>
    </ItemIcon>
  ),
  // "Receive Payments": (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 19 19 12" />
  //     </svg>
  //   </ItemIcon>
  // ),
  // "Global Accounts": (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
  //       <path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z" />
  //     </svg>
  //   </ItemIcon>
  // ),
  // Invoices: (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
  //       <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" />
  //     </svg>
  //   </ItemIcon>
  // ),
  // "US Stocks": (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  //     </svg>
  //   </ItemIcon>
  // ),
  // "Upwork": (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  //     </svg>
  //   </ItemIcon>
  // ),
  // "Stablecoins": (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <circle cx="12" cy="12" r="10" /><line x1="12" y1="6" x2="12" y2="18" /><path d="M15 9.5c0-1.4-1.34-2.5-3-2.5s-3 1.1-3 2.5 1.34 2.5 3 2.5 3 1.1 3 2.5-1.34 2.5-3 2.5-3-1.1-3-2.5" />
  //     </svg>
  //   </ItemIcon>
  // ),
  // Referral: (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
  //     </svg>
  //   </ItemIcon>
  // ),
  // "Creator Club": (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <circle cx="9" cy="7" r="4" /><path d="M17 11a4 4 0 100-8 4 4 0 000 8z" />
  //       <path d="M1 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
  //     </svg>
  //   </ItemIcon>
  // ),
  // Rewards: (
  //   <ItemIcon bg="#F8F9FF">
  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4F3FD7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  //       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  //     </svg>
  //   </ItemIcon>
  // ),
};

interface DropdownProps {
  label: string;
  items: DropdownLink[];
  isMobile?: boolean;
  onNavigate?: () => void;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : "rotate-0"}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function DropdownRow({ item }: { item: DropdownLink }) {
  return (
    <>
      {dropdownIcons[item.label] ?? null}
      <span className="flex flex-col min-w-0">
        <span className="text-[13px] font-semibold text-gray-800 leading-tight">
          {item.label}
        </span>
        <span className="text-[12px] text-gray-500 leading-snug">
          {item.description}
        </span>
      </span>
    </>
  );
}

function Dropdown({ label, items, isMobile = false, onNavigate }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const twoColumn = items.length > 4;

  /* ── Mobile accordion ── */
  if (isMobile) {
    return (
      <div className="border-b border-gray-100 last:border-0">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full py-3 font-semibold text-[14px] text-gray-800 hover:text-[#44474e] transition-colors"
        >
          {label}
          <ChevronIcon open={open} />
        </button>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? `${items.length * 68}px` : "0px" }}
        >
          <div className="pl-2 pb-2 flex flex-col gap-1 border-l-2 border-blue-100 ml-1">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className="flex items-start gap-3 py-2 text-gray-800 hover:text-[#44474e] transition-colors"
              >
                <DropdownRow item={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Desktop hover dropdown ── */
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 cursor-pointer font-semibold text-[14px] text-gray-800 hover:text-[#44474e] transition-colors">
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:rotate-180"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-gray-100 rounded-xl shadow-xl shadow-blue-100/40 py-3 px-2 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ${
          twoColumn ? "w-110" : "w-64"
        }`}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
        <div className={twoColumn ? "grid grid-cols-2 gap-x-2 gap-y-1" : "flex flex-col"}>
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-start gap-3 px-2 py-2 rounded-lg text-gray-800 hover:bg-blue-50 hover:text-[#44474e] transition-colors"
            >
              <DropdownRow item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M3 6 L21 6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: open ? "translateY(6px) rotate(45deg)" : "none",
          transformOrigin: "center",
          transition: "transform 0.3s",
        }}
      />
      <path
        d="M3 12 L21 12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: open ? 0 : 1, transition: "opacity 0.2s" }}
      />
      <path
        d="M3 18 L21 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
          transformOrigin: "center",
          transition: "transform 0.3s",
        }}
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<AccountType>("personal");

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm shadow-blue-50">
      {/* ── Top bar ── */}
      <div className="w-full px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between  items-center py-3">
          {/* Logo + Personal/Business toggle */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <img
                src="/raenest.svg"
                alt="Raenest Logo"
                className="h-6 sm:h-7 cursor-pointer object-contain"
              />
            </Link>

            {/* <div className="hidden md:flex items-center gap-1 bg-gray-50 p-1 rounded-full text-[13px] font-semibold">
              <Link
                href="/personal"
                onClick={() => setActiveTab("personal")}
                className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeTab === "personal"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Personal
              </Link>
              <Link
                href="/business"
                onClick={() => setActiveTab("business")}
                className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeTab === "business"
                    ? "bg-white text-black shadow-sm"
                    : "text-black hover:text-black"
                }`}
              >
                Business
              </Link>
            </div> */}
          </div>

          {/* Desktop links — hidden below lg */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 font-semibold text-[14px]">
            <Dropdown label="Products" items={productItems[activeTab]} />
            <Link href="/contact-us" className="cursor-pointer hover:text-[#44474e] text-gray-800 transition-colors">
            Contact Us
            </Link>
            <Link href="/news-&-blog" className="cursor-pointer hover:text-[#44474e] text-gray-800 transition-colors">
              News & Blog
            </Link>
          </div>

          {/* Desktop auth actions */}
          <div className="hidden lg:flex items-center gap-2 ml-4 xl:ml-7">
            <Button2 />
          </div>

          {/* Hamburger button — visible below lg */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-blue-50 active:bg-blue-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden w-full bg-white border-t border-gray-100 shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-225 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col">
          {/* <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full text-[13px] font-semibold w-fit my-2">
            <Link
              href="/personal"
              onClick={() => setActiveTab("personal")}
              className={`px-4 py-1.5 rounded-full cursor-pointer ${
                activeTab === "personal" ? "bg-black text-white shadow-sm" : "text-gray-500"
              }`}
            >
              Personal
            </Link>
            <Link
              href="/business"
              onClick={() => setActiveTab("business")}
              className={`px-4 py-1.5 rounded-full cursor-pointer ${
                activeTab === "business" ? "bg-black text-white shadow-sm" : "text-black"
              }`}
            >
              Business
            </Link>
          </div> */}

          <Dropdown
            label="Products"
            items={productItems[activeTab]}
            isMobile
            onNavigate={() => setMobileOpen(false)}
          />

          {/* <Dropdown
            label="Earn"
            items={earnItems[activeTab]}
            isMobile
            onNavigate={() => setMobileOpen(false)}
          /> */}

          <Link
            href="/news-&-blog"
            onClick={() => setMobileOpen(false)}
            className="py-3 font-semibold text-[14px] text-gray-800 border-b border-gray-100 hover:text-[#44474e] transition-colors"
          >
            News & Blog
          </Link>

          <Button2/>

          {/* <div className="py-4 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-4 border border-blue-900 text-blue-900 rounded-2xl text-[13px] font-semibold text-center"
            >
              Login
            </Link>
            <Button2/>
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 bg-primary text-white rounded-2xl text-[12px] font-semibold text-center"
            >
              Create an account
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
}