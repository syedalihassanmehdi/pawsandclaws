"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Conditions mapped to the 10 services
const problems = [
  {
    label: "Infections & Fever",
    sub: "Pet Consultation",
    href: "/services/pet-consultation",
    color: "#f57c20",
    bg: "#fff5ee",
    border: "rgba(245,124,32,0.2)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 2-.8 3.5-1.5 5C14.5 14 14 16 14 18a2 2 0 0 1-4 0c0-2-.5-4-1.5-6C7.8 10.5 7 9 7 7a5 5 0 0 1 5-5z"/>
        <path d="M9 12h6"/>
      </svg>
    ),
  },
  {
    label: "Blood Disorders",
    sub: "In-House Diagnostics",
    href: "/services/in-house-diagnostics",
    color: "#7c6fcd",
    bg: "rgba(124,111,205,0.08)",
    border: "rgba(124,111,205,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c6fcd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    label: "Viral Diseases",
    sub: "PCR Testing",
    href: "/services/pcr-testing",
    color: "#2a9d8f",
    bg: "rgba(42,157,143,0.08)",
    border: "rgba(42,157,143,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>
      </svg>
    ),
  },
  {
    label: "Internal Tumors",
    sub: "Advanced Imaging",
    href: "/services/advanced-imaging",
    color: "#e05c7a",
    bg: "rgba(224,92,122,0.08)",
    border: "rgba(224,92,122,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e05c7a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    label: "Critical Trauma",
    sub: "Intensive Care (ICU)",
    href: "/services/intensive-care",
    color: "#e05c7a",
    bg: "rgba(224,92,122,0.08)",
    border: "rgba(224,92,122,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e05c7a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    label: "Dental Disease",
    sub: "Dental Care",
    href: "/services/dental-care",
    color: "#f5a623",
    bg: "rgba(245,166,35,0.08)",
    border: "rgba(245,166,35,0.25)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5.5 2 1 4 1 6 0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0-2 .5-4 1-6 .5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z"/>
      </svg>
    ),
  },
  {
    label: "Joint & Nerve Pain",
    sub: "Laser Therapy",
    href: "/services/laser-therapy",
    color: "#4caf82",
    bg: "rgba(76,175,130,0.08)",
    border: "rgba(76,175,130,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4caf82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    label: "Parvovirus & Rabies",
    sub: "Vaccination Programs",
    href: "/services/vaccination-programs",
    color: "#f57c20",
    bg: "#fff5ee",
    border: "rgba(245,124,32,0.2)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 2 4 4-14 14H4v-4Z"/>
        <path d="m14.5 5.5 4 4"/>
        <path d="M3 22l3-3"/>
      </svg>
    ),
  },
  {
    label: "Fractures & Masses",
    sub: "Surgical Services",
    href: "/services/surgical-services",
    color: "#7c6fcd",
    bg: "rgba(124,111,205,0.08)",
    border: "rgba(124,111,205,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c6fcd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2.5c0 1.5-1.5 5-1.5 5h-2S9.5 4 9.5 2.5a2.5 2.5 0 0 1 5 0z"/>
        <path d="M9 7.5h6l1 12H8L9 7.5z"/>
        <path d="M10 12h4"/>
      </svg>
    ),
  },

];

export default function PetProblemsSection() {
  return (
    <section style={{ background:"linear-gradient(135deg,#eeedf8 0%,#e8e7f5 50%,#ece9f7 100%)", fontFamily:"'Poppins',sans-serif", padding:"80px 0 90px", position:"relative", overflow:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .pp-blob-1 { position:absolute; width:500px; height:500px; background:#b8b0e8; border-radius:50%; filter:blur(100px); opacity:0.22; top:-150px; right:0; pointer-events:none; }
        .pp-blob-2 { position:absolute; width:400px; height:400px; background:#c9b8f0; border-radius:50%; filter:blur(90px); opacity:0.18; bottom:-100px; right:200px; pointer-events:none; }
        .pp-blob-3 { position:absolute; width:300px; height:300px; background:#a8a0e0; border-radius:50%; filter:blur(80px); opacity:0.13; top:50px; left:-100px; pointer-events:none; }

        .pp-inner { max-width:1200px; margin:0 auto; padding:0 48px; position:relative; z-index:1; }

        .pp-header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:40px; gap:16px; flex-wrap:wrap; }

        .pp-card {
          background:rgba(255,255,255,0.72); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
          border:1.5px solid rgba(255,255,255,0.95); border-radius:20px; padding:22px 18px 18px;
          cursor:pointer; transition:transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
          height:172px; display:flex; flex-direction:column; justify-content:space-between;
        }
        .pp-card:hover { transform:translateY(-5px); box-shadow:0 20px 50px rgba(124,111,205,0.15); background:rgba(255,255,255,0.92); }
        .pp-card:hover .pp-icon-wrap { transform:scale(1.08) rotate(-5deg); }

        .pp-icon-wrap {
          width:46px; height:46px; border-radius:12px;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
          transition:transform 0.22s ease;
        }

        .pp-bottom { display:flex; align-items:flex-end; justify-content:space-between; gap:8px; }

        .pp-arrow-btn {
          width:28px; height:28px; border-radius:8px; flex-shrink:0;
          border:1.5px solid rgba(0,0,0,0.1); background:white;
          display:flex; align-items:center; justify-content:center;
          transition:background 0.2s, border-color 0.2s; text-decoration:none;
        }
        .pp-arrow-btn:hover { background:#f57c20; border-color:#f57c20; }
        .pp-arrow-btn:hover svg { stroke:white !important; }

        [data-slot="carousel-previous"],
        [data-slot="carousel-next"] {
          position:static !important; transform:none !important;
          width:40px !important; height:40px !important; border-radius:12px !important;
          border:1.5px solid rgba(255,255,255,0.9) !important;
          background:rgba(255,255,255,0.7) !important; backdrop-filter:blur(8px) !important;
          box-shadow:none !important; transition:background 0.2s, box-shadow 0.2s !important;
        }
        [data-slot="carousel-previous"]:hover,
        [data-slot="carousel-next"]:hover { background:white !important; box-shadow:0 4px 16px rgba(124,111,205,0.15) !important; }

        @media (max-width:768px) { .pp-inner { padding:0 20px; } .pp-header { flex-direction:column; align-items:flex-start; } }
        @media (max-width:480px) { .pp-inner { padding:0 16px; } }
      `}</style>

      <div className="pp-blob-1" /><div className="pp-blob-2" /><div className="pp-blob-3" />

      <div className="pp-inner">
        <Carousel opts={{ align:"start", dragFree:true }} className="w-full">

          {/* Header */}
          <div className="pp-header">
            <div>
              <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:12, fontWeight:700, color:"#f57c20", letterSpacing:"0.12em", textTransform:"uppercase", margin:"0 0 12px", display:"inline-block", background:"rgba(245,124,32,0.08)", border:"1px solid rgba(245,124,32,0.2)", borderRadius:20, padding:"5px 14px" }}>
                Pet Health
              </p>
              <h2 style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800, fontSize:"clamp(22px,3vw,38px)", letterSpacing:"-0.02em", color:"#1a1a2e", margin:"0 0 10px", lineHeight:1.15 }}>
                What's bothering{" "}
                <span style={{ color:"#f57c20", fontStyle:"italic" }}>your pet?</span>
              </h2>
              <p style={{ fontSize:14, color:"#555570", margin:0, maxWidth:360, lineHeight:1.7, fontWeight:400 }}>
                Select a condition — our specialists are ready to help with the right treatment.
              </p>
            </div>

            <div style={{ display:"flex", gap:8, flexShrink:0 }}>
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>

          {/* Cards */}
          <CarouselContent className="-ml-4">
            {problems.map((p) => (
              <CarouselItem key={p.label} className="pl-4" style={{ flexBasis:"clamp(155px,18vw,210px)" }}>
                <div className="pp-card">

                  {/* Icon */}
                  <div className="pp-icon-wrap" style={{ background:p.bg, border:`1px solid ${p.border}` }}>
                    {p.icon}
                  </div>

                  {/* Bottom row */}
                  <div className="pp-bottom">
                    <div>
                      <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:13, color:"#1a1a2e", margin:"0 0 3px", lineHeight:1.3 }}>
                        {p.label}
                      </p>
                      <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:10.5, color:"#9090b0", margin:0, fontWeight:500 }}>
                        {p.sub}
                      </p>
                    </div>
                    <Link href={p.href} className="pp-arrow-btn">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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