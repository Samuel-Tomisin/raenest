"use client";

import { useState } from "react";

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus",
  "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
  "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
  "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Monaco", "Mongolia", "Montenegro",
  "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
  "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe",
];

const CONTENT_TYPES = [
  { label: "Short-form video", emoji: "📱" },
  { label: "Long-form video", emoji: "📹" },
  { label: "Written", emoji: "📄" },
  { label: "Photo/Design", emoji: "🧑🏽‍🎨" },
  { label: "Webinar/Podcast", emoji: "🎙️" },
  { label: "Travel & lifestyle", emoji: "🏖️" },
  { label: "Community/Tech event", emoji: "🎤" },
  { label: "Others (tell us more below)", emoji: "😀" },
];

type FormState = {
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  raenestTag: string;
  phoneNumber: string;
  country: string;
  contentTypes: string[];
  otherContentType: string;
  socialHandles: string;
  whyJoin: string;
};

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  nickname: "",
  email: "",
  raenestTag: "",
  phoneNumber: "",
  country: "",
  contentTypes: [],
  otherContentType: "",
  socialHandles: "",
  whyJoin: "",
};

export default function CreatorApplicationForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const showOtherField = form.contentTypes.includes("Others (tell us more below)");

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleContentType = (label: string) => {
    setForm((prev) => ({
      ...prev,
      contentTypes: prev.contentTypes.includes(label)
        ? prev.contentTypes.filter((t) => t !== label)
        : [...prev.contentTypes, label],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Wire this up to your real endpoint (Webflow form action, API route, etc).
      // await fetch("/api/creator-applications", { method: "POST", body: JSON.stringify(form) });
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#12103A] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          {/* Drop your 3D illustration/graphic in here */}
          <img src="/cp.png" alt="Creator Club Hero" className="rounded-[48px] w-[240px] h-[240px]" />

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Join the Raenest Creator Program
          </h2>
          <p className="text-sm leading-relaxed text-white/70 sm:text-base">
            Welcome to the club! If you're a creator who loves telling
            stories, sharing tips, or showing off how you use Raenest, then we
            want you on board.
          </p>
          <p className="text-sm leading-relaxed text-white/70 sm:text-base">
            We're building a global community, so you can apply from
            anywhere. Fill the form for a chance to join the program, and
            just maybe, this will be the beginning of something.
          </p>
          </div>
        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl bg-white/10 p-4 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              type="text"
              placeholder="First Name*"
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
            />
            <input
              required
              type="text"
              placeholder="Last Name*"
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
            />
          </div>

          <input
            required
            type="text"
            placeholder="Nickname*"
            value={form.nickname}
            onChange={(e) => updateField("nickname", e.target.value)}
            className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
          />

          <input
            required
            type="email"
            placeholder="Email (The one used to sign up on Raenest) *"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
          />

          <input
            required
            type="text"
            placeholder="Raenest Tag *"
            value={form.raenestTag}
            onChange={(e) => updateField("raenestTag", e.target.value)}
            className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={(e) => updateField("phoneNumber", e.target.value)}
            className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
          />

          <select
            required
            value={form.country}
            onChange={(e) => updateField("country", e.target.value)}
            className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none"
          >
            <option value="" disabled>
              Country of Residence*
            </option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <div>
            <p className="mb-3 text-sm font-medium text-white">
              What type of content do you create? Pick all that apply: *
            </p>
            <div className="flex flex-wrap gap-2">
              {CONTENT_TYPES.map(({ label, emoji }) => {
                const isSelected = form.contentTypes.includes(label);
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => toggleContentType(label)}
                    aria-pressed={isSelected}
                    className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                      isSelected
                        ? "border-[#5433C9] bg-[#5433C9] text-white"
                        : "border-transparent bg-white text-neutral-900 hover:bg-neutral-100"
                    }`}
                  >
                    {emoji} {label}
                  </button>
                );
              })}
            </div>
          </div>

          {showOtherField && (
            <textarea
              placeholder="Enter other type of content"
              value={form.otherContentType}
              onChange={(e) => updateField("otherContentType", e.target.value)}
              rows={3}
              className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
            />
          )}

          <textarea
            required
            placeholder="Add your social handles (with links) *"
            value={form.socialHandles}
            onChange={(e) => updateField("socialHandles", e.target.value)}
            rows={3}
            className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
          />

          <textarea
            required
            placeholder="Why do you want to join the Raenest Creator Program? *"
            value={form.whyJoin}
            onChange={(e) => updateField("whyJoin", e.target.value)}
            rows={4}
            className="rounded-xl bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 w-full rounded-full bg-[#5433C9] py-4 text-base font-semibold text-white transition-colors hover:bg-[#4527ad] disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm font-medium text-emerald-400">
              Thank you! Your submission has been received!
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm font-medium text-red-400">
              Oops! Something went wrong while submitting the form.
            </p>
          )}
        </form>
        </div>
      </section>
  );
}