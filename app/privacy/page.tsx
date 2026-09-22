"use client";

import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import { useState } from "react";

interface Country {
  id: string;
  label: string;
  flag: string;
}

const COUNTRIES: Country[] = [
  { id: "ghana", label: "Ghana", flag: "🇬🇭" },
  { id: "kenya", label: "Kenya", flag: "🇰🇪" },
  { id: "nigeria", label: "Nigeria", flag: "🇳🇬" },
  { id: "united-states", label: "United States", flag: "🇺🇸" },
  { id: "india", label: "India", flag: "🇮🇳" },
  { id: "philippines", label: "Philippines", flag: "🇵🇭" },
  { id: "others", label: "Others", flag: "🌐" },
];

const COMPANY_NAME = "Securevest";
const COMPANY_LEGAL_NAME = "Securevest Technologies Solutions Service Limited";
const COMPANY_DOMAIN = "securevest.com";

export default function PrivacyPolicyPage() {
  const [activeCountry, setActiveCountry] = useState<string>("ghana");
  const current = COUNTRIES.find((c) => c.id === activeCountry) ?? COUNTRIES[0];

  return (
    <div>
     <Navbar/>
     <div className="min-h-screen bg-white">
      {/* Diagonal purple hero header */}
      <div className="relative overflow-hidden bg-gray-100 py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(115deg, #F1EFFD 40%, #B9AEF5 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 45%, 0% 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
          {/* Country selector sidebar */}
          <nav className="md:sticky md:top-24 md:h-fit">
            <ul className="space-y-5">
              {COUNTRIES.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => setActiveCountry(c.id)}
                    className="flex flex-col items-start gap-1 text-left"
                  >
                    <span className="text-xl leading-none">{c.flag}</span>
                    <span
                      className={`text-[13.5px] leading-snug transition-colors ${
                        activeCountry === c.id
                          ? "font-semibold text-primary"
                          : "text-[#B5B3BE] hover:text-[#6B6B76]"
                      }`}
                    >
                      {c.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content area */}
          <div className="max-w-3xl">
            <p className="text-[15.5px] text-gray-800">
              Privacy Policy for Securevest
            </p>

            <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-gray-800">
              {/* ---------------------------------------------------------------
                  PLACEHOLDER CONTENT ONLY.
                  Replace every paragraph below with your own Privacy Policy,
                  drafted or reviewed by a lawyer, describing what YOUR company
                  actually collects, uses, and shares for the "{current.label}"
                  jurisdiction. Do not reuse another company's legal text.
              ---------------------------------------------------------------- */}
              <div>
                <p className="font-bold">Introduction</p>
                <p className="mt-2">
                  {" "}
                  <a href="#" className="text-primary underline">
                    {COMPANY_DOMAIN}
                  </a>{" "}
                  is provided by Securevest (&quot;Securevest&quot;).
                </p>
                <p className="mt-2">
                  At Securevest, we value your privacy, and we are committed to
                  safeguarding your personal information. All personal data that you provide us
                  will be protected and kept confidential among our affiliates, representatives,
                  and privies.
                </p>
                <p className="mt-2">
                  Throughout the website, the terms &quot;we&quot;, &quot;us&quot;
                  and &quot;our&quot; refer to Securevest.
                </p>
                <p className="mt-2">
                  This Privacy Policy is specifically designed for our Users who
                  access the Services we provide in {current.label}. This policy explains how we
                  collect, use, share and protect your personal data in connection with your use
                  of our services as a User or Potential User. You agree to this Privacy Policy by
                  visiting our website and when you use our services.
                </p>
                <p className="mt-2">
                  Your use of our services, and any dispute over privacy, is subject
                  to this Policy and our Terms of Service, including its applicable limitations on
                  damages and the resolution of disputes. Our Terms of Service are incorporated by
                  reference into this Policy.
                </p>
              </div>

              <div>
                <p className="font-bold">Definitions</p>
                <p className="mt-2 font-semibold">&quot;consent&quot;</p>
                <p className="mt-1">
                  means the consent of the data subject which must be a freely
                  given, specific, informed, and unambiguous indication of the data subject&apos;s
                  wishes by which they signify their agreement to the processing of personal data
                  relating to them.
                </p>
                <p className="mt-3 font-semibold">&quot;data subject&quot;</p>
                <p className="mt-1">
                  means a living, identified, or identifiable individual about whom{" "}
                  Securevest holds personal data.
                </p>
                <p className="mt-3 font-semibold">&quot;Data Protection Legislation&quot;</p>
                <p className="mt-1">
                  means all applicable data protection and privacy laws in [your
                  jurisdiction], and any successor legislation.
                </p>
                <p className="mt-3 font-semibold">&quot;personal data&quot;</p>
                <p className="mt-1">
                  means any information relating to a data subject who can be
                  identified, directly or indirectly, in particular by reference to an identifier
                  such as a name, identification number, location data, or an online identifier.
                </p>
                <p className="mt-3 font-semibold">&quot;personal data breach&quot;</p>
                <p className="mt-1">
                  means a breach of security leading to the accidental or unlawful
                  destruction, loss, alteration, or unauthorised disclosure of, or access to,
                  personal data transmitted, stored, or otherwise processed.
                </p>
              </div>

              <div>
                <p className="font-bold">Consent</p>
                <p className="mt-2">
                  Where the processing of your personal data is based on consent, we
                  shall obtain the requisite consent at the time of collection of the personal
                  information. You can withdraw your consent at any time, but such withdrawal will
                  not affect the lawfulness of the processing of your data based on consent given
                  before its withdrawal.
                </p>
              </div>

              <div>
                <p className="font-bold">Age Restriction</p>
                <p className="mt-2">
                  Describe your minimum age requirement and how you handle data from
                  minors here.
                </p>
              </div>

              {/* <p className="rounded-xl border border-dashed border-[#C9C4F5] bg-[#F7F6FE] p-4 text-[13.5px] text-primary">
                This entire content block is placeholder copy for layout purposes only, currently
                showing the &quot;{current.label}&quot; tab. Replace it with your actual,
                legally-reviewed Privacy Policy — ideally a separate, accurate version per
                jurisdiction — before publishing this page.
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