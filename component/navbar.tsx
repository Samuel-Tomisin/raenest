"use client";

import Link from "next/link";
import { useState } from "react";
import Button2 from "./button-blue";

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

    { label: "Receive Money", href: "/products/receivemoney", description: "Receive money from over 190 countries" },
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
      className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
      style={{ background: bg }}
    >
      {children}
    </span>
  );
}

const dropdownIcons: Record<string, React.ReactNode> = {
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
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-gray-200 borde rounded-xl shadow-xl shadow-blue-100/40 py-3 px-2 z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ${
          twoColumn ? "w-110" : "w-64"
        }`}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-200 border-l border-t rotate-45" />
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
    <nav className="bg-secondary sticky top-0 z-50 border-b shadow-sm shadow-blue-50">
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

          </div>

          {/* Desktop links — hidden below lg */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 font-semibold text-[14px]">
            <Dropdown label="Products" items={productItems[activeTab]} />
            <Link href="/news-&-blog" className="cursor-pointer hover:text-[#44474e] text-gray-800 transition-colors">
              News & Blog
            </Link>
            <Link href="/contact-us" className="cursor-pointer hover:text-[#44474e] text-gray-800 transition-colors">
            Contact Us
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
            className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-primary-hover active:bg-blue-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden w-full bg-positive border-t shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-225 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col">

          <Dropdown
            label="Products"
            items={productItems[activeTab]}
            isMobile
            onNavigate={() => setMobileOpen(false)}
          />

          <Link
            href="/news-&-blog"
            onClick={() => setMobileOpen(false)}
            className="py-3 font-semibold text-[14px] text-gray-800 border-b hover:text-[#44474e] transition-colors"
          >
            News & Blog
          </Link>

          <Button2/>

        </div>
      </div>
    </nav>
  );
}