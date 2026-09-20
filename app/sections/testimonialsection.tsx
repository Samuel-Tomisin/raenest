"use client";

import { useId, useState } from "react";
import type { JSX } from "react";
import { Play } from "lucide-react";

/**
 * Flag badges — small inline SVGs so we don't depend on an external
 * flag-icon package. Add more countries here as needed.
 */
type CountryCode = "gh" | "ng" | "ke";

function FlagBadge({ country }: { country: CountryCode }) {
  const uid = useId();

  const flags: Record<CountryCode, JSX.Element> = {
    gh: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded-full" aria-label="Ghana">
        <clipPath id={`gh-clip-${uid}`}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
        <g clipPath={`url(#gh-clip-${uid})`}>
          <rect width="24" height="8" y="0" fill="#CE1126" />
          <rect width="24" height="8" y="8" fill="#FCD116" />
          <rect width="24" height="8" y="16" fill="#006B3F" />
          <path d="M12 9.5 13.2 13h3.5l-2.8 2 1 3.3L12 16.3l-2.9 2 1-3.3-2.8-2h3.5z" fill="#000" />
        </g>
      </svg>
    ),
    ng: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded-full" aria-label="Nigeria">
        <clipPath id={`ng-clip-${uid}`}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
        <g clipPath={`url(#ng-clip-${uid})`}>
          <rect width="8" height="24" x="0" fill="#008751" />
          <rect width="8" height="24" x="8" fill="#FFFFFF" />
          <rect width="8" height="24" x="16" fill="#008751" />
        </g>
      </svg>
    ),
    ke: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded-full" aria-label="Kenya">
        <clipPath id={`ke-clip-${uid}`}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
        <g clipPath={`url(#ke-clip-${uid})`}>
          <rect width="24" height="8" y="0" fill="#000000" />
          <rect width="24" height="8" y="8" fill="#FFFFFF" />
          <rect width="24" height="8" y="16" fill="#BB0000" />
          <rect width="24" height="2" y="7" fill="#BB0000" />
          <rect width="24" height="2" y="15" fill="#BB0000" />
        </g>
      </svg>
    ),
  };

  return flags[country];
}

interface Testimonial {
  title: string;
  quote: string;
  name: string;
  country: CountryCode;
}

const leftTestimonials: Testimonial[] = [
  {
    title: "Unimaginably excellent",
    quote:
      "I couldn't imagine how great Securevest works until I signed up. Honestly, this is my first time reviewing any website, but I'm happy to write about how excellent they operate.",
    name: "Kevin",
    country: "gh",
  },
  {
    title: "Best in class support",
    quote: "Securevest is a great company with one of the best support teams I've ever seen.",
    name: "Theresa",
    country: "ng",
  },
];

const rightTestimonials: Testimonial[] = [
  {
    title: "Best exchange rates",
    quote:
      "The platform is intuitive, seamless and easy to use. It's also the fintech platform with the best exchange rates for sending money.",
    name: "Banji",
    country: "ng",
  },
  {
    title: "Seamless for transfers",
    quote:
      "Securevest has been helping me since last year that I found it, I don't have to stress about transfers anymore as it comes quickly and very fast.",
    name: "Blessing",
    country: "ke",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-neutral-100 p-6 h-full">
      <div>
        <h3 className="font-semibold text-neutral-900 mb-3">{testimonial.title}</h3>
        <p className="text-sm text-neutral-600 leading-relaxed">{testimonial.quote}</p>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <FlagBadge country={testimonial.country} />
        <span className="text-sm font-medium text-neutral-900">{testimonial.name}</span>
      </div>
    </div>
  );
}

function VideoTestimonialCard({
  youtubeId,
  posterSrc,
  name,
  country,
}: {
  /** The YouTube video ID, e.g. "g3D_YGKjyms" from youtu.be/g3D_YGKjyms */
  youtubeId: string;
  /** The "front picture" shown before play is pressed */
  posterSrc: string;
  name: string;
  country: CountryCode;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="rounded-2xl bg-neutral-100 p-3 h-full flex flex-col">
      <div className="relative flex-1 min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] rounded-xl overflow-hidden">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={`${name}'s testimonial video`}
            allow="accelerate-compute; encrypted-media; picture-in-picture; autoplay"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 h-full w-full group cursor-pointer"
            aria-label={`Play ${name}'s testimonial video`}
          >
            <img
              src={posterSrc}
              alt={`${name}'s testimonial`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm group-hover:scale-105 transition-transform">
                <Play className="h-5 w-5 sm:h-6 sm:w-6 text-gray-100 fill-gray-100 ml-0.5" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex items-center gap-2 pt-3 px-2">
        <FlagBadge country={country} />
        <span className="text-sm font-medium text-neutral-900">{name}</span>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Capped container so nothing stretches edge-to-edge on large/ultra-wide screens */}
      <div className="mx-auto max-w-7xl">
        <div>
          <h1 className="py-8 text-center text-xs sm:text-sm tracking-wide text-gray-800">
            BACKED AND TRUSTED BY THE BEST IN FINTECH AND VENTURE CAPITAL
          </h1>
        </div>

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 pb-8 sm:justify-between sm:gap-x-6 sm:px-8 lg:px-12">
          <img src="/qed.png" alt="QED Logo" className="max-h-6 sm:max-h-7" />
          <img src="/google.png" alt="Google Logo" className="max-h-6 sm:max-h-7" />
          <img src="/ventures.png" alt="Ventures Logo" className="max-h-6 sm:max-h-7" />
          <img src="/techstars.png" alt="Techstars Logo" className="max-h-6 sm:max-h-7" />
          <img src="/seedstars.png" alt="Seedstars Logo" className="max-h-8 sm:max-h-10" />
          <img src="/norrsken.png" alt="Norrsken Logo" className="max-h-8 sm:max-h-10" />
        </div>

        <div className="px-4">
          <h1 className="pt-16 sm:pt-20 md:pt-28 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[47px] font-semibold leading-tight text-gray-800">
            About 1,000,000 people
          </h1>
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[47px] font-semibold leading-tight text-gray-800">
            love us. You will too.
          </h1>
          <h2 className="pb-12 pt-5 text-center text-lg sm:text-xl md:text-2xl lg:text-[28px] text-gray-800">
            Hear some of them yourself.
          </h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Left column */}
            <div className="flex flex-col gap-5">
              {leftTestimonials.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </div>

            {/* Center video */}
            <div className="md:row-span-1 hidden md:block lg:block">
              <VideoTestimonialCard
                youtubeId="g3D_YGKjyms"
                posterSrc="/testimonials/moyinoluwa-thumbnail.jpg"
                name="Moyinoluwa"
                country="ng"
              />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5">
              {rightTestimonials.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 flex w-full max-w-81 items-center justify-center gap-2 rounded-2xl bg-black px-3 py-2 cursor-pointer">
          <img src="/rating.png" alt="Star Rating" className="max-h-4 shrink-0" />
          <h2 className="text-center text-[13px] sm:text-[15px] font-semibold text-gray-200">
            4.6 Apple store, Play store
          </h2>
        </div>
      </div>
    </section>
  );
}