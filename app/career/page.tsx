"use client";

import { Monitor, Users } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

type JobOpening = {
  title: string;
  department: string;
  location: string;
  locationDetail: string;
  team: string;
  employmentType: string;
  href: string;
};

// Add more roles here — each renders as another row in the list.
const OPENINGS: JobOpening[] = [
  {
    title: "Growth & Partnerships Lead- Philippines",
    department: "Growth and Expansion",
    location: "Remote",
    locationDetail: "Philippines (Remote)",
    team: "Growth and Expansion",
    employmentType: "Contractor",
    href: "/careers/growth-partnerships-lead-philippines",
  },
];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-[#F2F1EC] px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-8">
          <div className="flex items-center gap-1.5">
            <img src="/raenest.svg" alt="raenest logo" className="h-30 w-30" />
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/raenest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-colors hover:bg-neutral-50"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/raenest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-colors hover:bg-neutral-50"
              aria-label="X (Twitter)"
            >
              <FaTwitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/raenest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-colors hover:bg-neutral-50"
              aria-label="Facebook"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Openings card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-primary">Current Openings</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Thanks for checking out our job openings. See something that
            interests you? Apply here.
          </p>

          <hr className="mt-5 border-neutral-200" />

          <ul className="divide-y divide-neutral-200">
            {OPENINGS.map((job) => (
              <li key={job.href} className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-3 sm:gap-6">
                <div>
                  <a
                    href={job.href}
                    className="font-medium text-primary hover:underline"
                  >
                    {job.title}
                  </a>
                  <p className="mt-0.5 text-sm text-neutral-500">{job.department}</p>
                </div>

                <div className="flex items-start gap-2">
                  <Monitor className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                  <div>
                    <p className="text-sm text-neutral-900">{job.location}</p>
                    <p className="text-sm text-neutral-500">{job.locationDetail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                  <div>
                    <p className="text-sm text-neutral-900">{job.team}</p>
                    <p className="text-sm text-neutral-500">{job.employmentType}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start justify-between gap-6 pt-16 sm:flex-row sm:items-center sm:pt-24">
          <p className="flex flex-wrap items-center gap-x-2 text-sm text-neutral-600">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <span>•</span>
            <span>© BambooHR All rights reserved.</span>
          </p>

          <span className="text-lg font-medium text-neutral-300">bambooHR</span>
        </div>
      </div>
    </div>
  );
}