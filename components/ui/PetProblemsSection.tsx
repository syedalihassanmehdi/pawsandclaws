"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const problems = [
  {
    label: "Skin Issues",
    href: "/services/skin-issues",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-1 2-3 3-3 6s2 4 3 4 3-1 3-4-2-4-3-6z"/>
        <path d="M6 12c-2 1-3 3-2 5s3 3 5 2"/>
        <path d="M18 12c2 1 3 3 2 5s-3 3-5 2"/>
        <path d="M9 20c0 1.1.9 2 2 2h2a2 2 0 0 0 0-4h-2a2 2 0 0 0-2 2z"/>
      </svg>
    ),
  },
  {
    label: "Dental Issues",
    href: "/services/dental-issues",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5.5 2 1 4 1 6 0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0-2 .5-4 1-6 .5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z"/>
      </svg>
    ),
  },
  {
    label: "Trauma",
    href: "/services/trauma",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12m0 0L8 8m4 4 4-4M6 20l2-4m8 4-2-4"/>
        <circle cx="12" cy="6" r="2"/>
      </svg>
    ),
  },
  {
    label: "Parasites",
    href: "/services/parasites",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>
      </svg>
    ),
  },
  {
    label: "Ear Issues",
    href: "/services/ear-issues",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 4-3 6-3 9a2 2 0 0 1-4 0"/>
        <path d="M10 13a2 2 0 0 0 4 0"/>
      </svg>
    ),
  },
  {
    label: "Eye Problems",
    href: "/services/eye-problems",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    label: "Digestive",
    href: "/services/digestive",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 3-2 5-2 8a3 3 0 0 1-6 0c0-3-2-5-2-8a5 5 0 0 1 5-5z"/>
      </svg>
    ),
  },
  {
    label: "Vaccination",
    href: "/services/vaccination",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 2 4 4-14 14H4v-4Z"/>
        <path d="m14.5 5.5 4 4"/>
        <path d="M3 22l3-3"/>
      </svg>
    ),
  },
];

export default function PetProblemsSection() {
  return (
    <section className="bg-white py-16" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');`}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">

          {/* Header */}
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em", color: "#1a1a2e", margin: 0 }}>
                What's bothering your pet?
              </h2>
              <p style={{ fontSize: 14, color: "#aaa", marginTop: 8, marginBottom: 0, maxWidth: 320, lineHeight: 1.6 }}>
                Choose a problem and our AI assistant will select the best doctor for you
              </p>
            </div>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#eeedf8] shadow-none" />
              <CarouselNext className="static translate-x-0 translate-y-0 w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#eeedf8] shadow-none" />
            </div>
          </div>

          {/* Cards */}
          <CarouselContent className="-ml-4">
            {problems.map((p) => (
              <CarouselItem key={p.label} className="pl-4 basis-[200px] lg:basis-[210px]">
                <div className="group flex flex-col justify-between bg-[#eeedf8] rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:bg-[#e5e3f5] hover:shadow-md"
                  style={{ height: 160 }}>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center group-hover:bg-white transition-all">
                    {p.icon}
                  </div>

                  {/* Label + link button */}
                  <div className="flex items-center justify-between gap-2">
                    <span style={{ fontWeight: 700, fontSize: 13, color: "#1a1a2e" }}>{p.label}</span>
                    <Link
                      href={p.href}
                      className="w-7 h-7 rounded-lg border border-[#c5c2e8] bg-white flex items-center justify-center hover:bg-[#f57c20] hover:border-[#f57c20] transition-all flex-shrink-0 group/btn"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="group-hover/btn:stroke-white transition-all">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </Link>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </div>
    </section>
  );
}