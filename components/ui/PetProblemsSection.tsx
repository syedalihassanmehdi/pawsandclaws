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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5.5 2 1 4 1 6 0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0-2 .5-4 1-6 .5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z"/>
      </svg>
    ),
  },
  {
    label: "Trauma",
    href: "/services/trauma",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12m0 0L8 8m4 4 4-4M6 20l2-4m8 4-2-4"/>
        <circle cx="12" cy="6" r="2"/>
      </svg>
    ),
  },
  {
    label: "Parasites",
    href: "/services/parasites",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>
      </svg>
    ),
  },
  {
    label: "Ear Issues",
    href: "/services/ear-issues",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 4-3 6-3 9a2 2 0 0 1-4 0"/>
        <path d="M10 13a2 2 0 0 0 4 0"/>
      </svg>
    ),
  },
  {
    label: "Eye Problems",
    href: "/services/eye-problems",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    label: "Digestive",
    href: "/services/digestive",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 3-2 5-2 8a3 3 0 0 1-6 0c0-3-2-5-2-8a5 5 0 0 1 5-5z"/>
      </svg>
    ),
  },
  {
    label: "Vaccination",
    href: "/services/vaccination",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 2 4 4-14 14H4v-4Z"/>
        <path d="m14.5 5.5 4 4"/>
        <path d="M3 22l3-3"/>
      </svg>
    ),
  },
];

export default function PetProblemsSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)",
        fontFamily: "'Poppins', sans-serif",
        padding: "80px 0 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        /* Background blobs */
        .pp-blob-1 { position:absolute; width:500px; height:500px; background:#b8b0e8; border-radius:50%; filter:blur(100px); opacity:0.22; top:-150px; right:0; pointer-events:none; }
        .pp-blob-2 { position:absolute; width:400px; height:400px; background:#c9b8f0; border-radius:50%; filter:blur(90px); opacity:0.18; bottom:-100px; right:200px; pointer-events:none; }
        .pp-blob-3 { position:absolute; width:300px; height:300px; background:#a8a0e0; border-radius:50%; filter:blur(80px); opacity:0.13; top:50px; left:-100px; pointer-events:none; }

        .pp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 1;
        }

        .pp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
          gap: 16px;
        }

        .pp-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255,255,255,0.95);
          border-radius: 20px;
          padding: 22px 20px 18px;
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
          height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .pp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(124,111,205,0.15);
          background: rgba(255,255,255,0.92);
        }
        .pp-card:hover .pp-icon-wrap {
          background: #fff5ee;
          border-color: #fdd5b0;
          transform: scale(1.08) rotate(-5deg);
        }

        .pp-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 13px;
          background: rgba(245,124,32,0.08);
          border: 1px solid rgba(245,124,32,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
          flex-shrink: 0;
        }

        .pp-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .pp-arrow-btn {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          border: 1.5px solid rgba(245,124,32,0.25);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
          text-decoration: none;
        }
        .pp-arrow-btn:hover {
          background: #f57c20;
          border-color: #f57c20;
        }
        .pp-arrow-btn:hover svg { stroke: white; }

        .pp-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: 1.5px solid rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .pp-nav-btn:hover {
          background: white;
          box-shadow: 0 4px 16px rgba(124,111,205,0.15);
        }

        /* Carousel overrides */
        [data-slot="carousel-previous"],
        [data-slot="carousel-next"] {
          position: static !important;
          transform: none !important;
          width: 40px !important;
          height: 40px !important;
          border-radius: 12px !important;
          border: 1.5px solid rgba(255,255,255,0.9) !important;
          background: rgba(255,255,255,0.7) !important;
          backdrop-filter: blur(8px) !important;
          box-shadow: none !important;
          transition: background 0.2s, box-shadow 0.2s !important;
        }
        [data-slot="carousel-previous"]:hover,
        [data-slot="carousel-next"]:hover {
          background: white !important;
          box-shadow: 0 4px 16px rgba(124,111,205,0.15) !important;
        }

        @media (max-width: 768px) {
          .pp-inner { padding: 0 20px; }
          .pp-header { flex-direction: column; align-items: flex-start; gap: 16px; }
          .pp-nav-row { display: flex; gap: 8px; }
        }

        @media (max-width: 480px) {
          .pp-inner { padding: 0 16px; }
        }
      `}</style>

      <div className="pp-blob-1" />
      <div className="pp-blob-2" />
      <div className="pp-blob-3" />

      <div className="pp-inner">
        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">

          {/* Header */}
          <div className="pp-header">
            <div>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#f57c20",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 8px",
              }}>
                Pet Health
              </p>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(22px, 3vw, 36px)",
                letterSpacing: "-0.02em",
                color: "#1a1a2e",
                margin: "0 0 8px",
                lineHeight: 1.2,
              }}>
                What's bothering{" "}
                <span style={{ color: "#f57c20", fontStyle: "italic" }}>your pet?</span>
              </h2>
              <p style={{
                fontSize: 14,
                color: "#555570",
                margin: 0,
                maxWidth: 340,
                lineHeight: 1.65,
                fontWeight: 400,
              }}>
                Choose a problem and our team will match you with the best specialist.
              </p>
            </div>

            {/* Nav buttons */}
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>

          {/* Cards */}
          <CarouselContent className="-ml-4">
            {problems.map((p) => (
              <CarouselItem
                key={p.label}
                className="pl-4"
                style={{ flexBasis: "clamp(150px, 18vw, 210px)" }}
              >
                <div className="pp-card">
                  {/* Icon */}
                  <div className="pp-icon-wrap">
                    {p.icon}
                  </div>

                  {/* Label + arrow */}
                  <div className="pp-label-row">
                    <span style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#1a1a2e",
                      lineHeight: 1.3,
                    }}>
                      {p.label}
                    </span>
                    <Link href={p.href} className="pp-arrow-btn">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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