"use client";

import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import { useState } from "react";

interface Section {
  id: string;
  label: string;
}

const SECTIONS: Section[] = [
  { id: "terms-of-service", label: "Terms of service" },
  { id: "us-patriot-act-notice", label: "US Patriot Act Notice" },
  { id: "reg-dd", label: "Reg DD (Truth in Savings Act) Disclosure" },
  { id: "reg-cc", label: "Reg CC (Funds Availability) Disclosure" },
  { id: "error-resolution", label: "Error Resolution Disclosure" },
  { id: "e-sign-consent", label: "E-Sign Consent Disclosure" },
  { id: "visa-card-agreement", label: "Visa Card Agreement" },
  { id: "mastercard-agreement", label: "MasterCard Agreement" },
  { id: "ach-authorisation", label: "ACH Authorisation Disclosure Agreement" },
  { id: "banking-partners", label: "Banking Partners Regent" },
  { id: "upwork-fasttrack", label: "Upwork FastTrack Payments" },
  { id: "stablecoins", label: "Stablecoins" },
  { id: "stock-investment", label: "Stock Investment" },
  { id: "e-sign-electronic-notice", label: "E-Sign & Electronic Communications Notice" },
  { id: "visa-card-agreement-business", label: "Visa Card Agreement (Business)" },
];

const COMPANY_NAME = "Securevest";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState<string>("terms-of-service");

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Diagonal purple hero header */}
      <div className="relative overflow-hidden bg-[#F1EFFD] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(115deg, #F1EFFD 40%, #B9AEF5 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 45%, 0% 100%)",
          }}
        />
        <div className="relative mx-auto max-w-300 px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#0E0E12] sm:text-5xl md:text-6xl">
            Terms of service
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-300 px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[260px_1fr]">
          {/* Sidebar navigation */}
          <nav className="md:sticky md:top-24 md:h-fit">
            <ul className="space-y-4">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => setActiveSection(s.id)}
                    className={`text-left text-[14.5px] leading-snug transition-colors ${
                      activeSection === s.id
                        ? "font-semibold text-primary"
                        : "text-[#B5B3BE] hover:text-[#6B6B76]"
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content area */}
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-[#0E0E12]">
              {COMPANY_NAME} Terms of Use
            </h2>
            <p className="mt-3 italic text-[#6B6B76]">Last modified: August 2026</p>

            <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-[#3A3A42]">
              {/* ---------------------------------------------------------------
                  PLACEHOLDER CONTENT ONLY.
                  Replace every paragraph below with your own Terms of Service,
                  drafted or reviewed by a lawyer for your actual entities,
                  licenses, and jurisdictions. Do not reuse another company's
                  legal text — see the note above this file.
              ---------------------------------------------------------------- */}
              <p>
                Please read these Terms of Service (&quot;Terms&quot;), which set
                forth the legally binding terms and conditions between you and {COMPANY_NAME},
                Inc. and its affiliates (collectively &quot;{COMPANY_NAME}&quot;, &quot;we,&quot;
                or &quot;us&quot;). It governs your access to and use of {COMPANY_NAME}&apos;s
                website, mobile application, and the services provided by {COMPANY_NAME}.
              </p>
              <p>
                Our collection and use of your personal information in connection
                with your use of our services are described in our Privacy Policy.
              </p>
              <p>
                Your access to and use of our services is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply to all visitors,
                business owners, and any other person who accesses or uses our services.
              </p>

              <div>
                <p className="font-bold">1. Definitions</p>
                <p className="mt-2">In these Terms,</p>
                <p className="mt-2">
                  <span className="font-bold">&quot;Account&quot;.</span> means a
                  unique account registered with the details of the User and which contains
                  details of the User&apos;s transactions/operations on the Platform (as defined
                  below).
                </p>
                <p className="mt-2">
                  <span className="font-bold">&quot;Applicable Laws&quot;</span>
                  means all applicable regulations, laws, codes, guidelines, policies, rules, and
                  directives of any competent regulatory authority in [your jurisdiction].
                </p>
                <p className="mt-2">
                  <span className="font-bold">&quot;Platform&quot;</span> means
                  collectively Securevest &apos;s website and other related applications
                  provided by Securevest.
                </p>
              </div>

              <div>
                <p className="font-bold">2. Acceptance of Terms</p>
                <p className="mt-2">
                  The Service is offered subject to acceptance of all the terms and
                  conditions contained in these Terms and all other operating rules, policies, and
                  procedures that may be published on the Platform.
                </p>
                <p className="mt-2">
                 Securevest reserves the right, at its sole discretion, to
                  modify or replace these Terms from time to time by posting the updated terms on
                  the Platform.
                </p>
              </div>

              <div>
                <p className="font-bold">3. Eligibility</p>
                <p className="mt-2">
                  Only individuals who are legal residents of US, UK, Canada Ghana, South Africa are eligible to apply for a Securevest account.
                </p>
              </div>

              <div>
                <p className="font-bold">4. Account Requirements</p>
                <p className="mt-2">
                  All information provided to Securevest are current,
                  accurate, and complete.
                </p>
              </div>

              {/* <p className="rounded-xl border border-dashed border-[#C9C4F5] bg-[#F7F6FE] p-4 text-[13.5px] text-[#6B63C7]">
                This entire content block is placeholder copy for layout purposes only. Replace it
                with your actual, legally-reviewed Terms of Service before publishing this page.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}