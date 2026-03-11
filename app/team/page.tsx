"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────────────── */
const departments = ["All", "Veterinarians", "Medical Dept", "Reception", "Grooming", "Accounts"];

const cardColors = ["#f57c20", "#7c6fcd", "#2a9d8f", "#e05c7a", "#f5c842", "#4caf82"];

const teamData = {
  "al-ain": [
    // Veterinarians
    {
      name: "Dr. Zaib Mahel", title: "Chief Head Surgeon", dept: "Veterinarians",
      years: "19+", color: "#f57c20", initials: "ZM",
      specs: ["Surgery", "Endoscopy", "Falcon Medicine"],
      bio: "Dr. Zaib Mahel leads our surgical team with over 19 years of veterinary experience. She specializes in soft tissue surgery, advanced endoscopy procedures, and falcon medicine, bringing world-class expertise to the UAE.",
    },
    {
      name: "Dr. Mirza Salman", title: "Senior Veterinarian", dept: "Veterinarians",
      years: "16+", color: "#7c6fcd", initials: "MS",
      specs: ["Small Animals", "Wild Primates"],
      bio: "With 16+ years dedicated to small animal and wild primate medicine, Dr. Salman provides comprehensive veterinary services with a focus on preventive medicine and complex internal cases.",
    },
    {
      name: "Dr. Asif Iqbal", title: "Veterinarian", dept: "Veterinarians",
      years: "14", color: "#2a9d8f", initials: "AI",
      specs: ["Falcon Medicine", "Endoscopy"],
      bio: "Dr. Asif brings 14 years of specialized experience in falcon medicine and endoscopy. His expertise in avian care makes him a sought-after specialist for exotic bird health in the region.",
    },
    {
      name: "Dr. Kiran", title: "Veterinarian", dept: "Veterinarians",
      years: "8+", color: "#e05c7a", initials: "KR",
      specs: ["Small Animals", "Diagnostics"],
      bio: "Dr. Kiran provides compassionate care for cats, dogs, and other small animals. Her gentle approach and thorough diagnostic skills ensure the best outcomes for every patient.",
    },
    {
      name: "Dr. Amira", title: "Veterinarian", dept: "Veterinarians",
      years: "6+", color: "#4caf82", initials: "AM",
      specs: ["General Practice", "Preventive Care"],
      bio: "Dr. Amira is passionate about preventive care and building lasting relationships with pet families, ensuring long-term health and wellbeing for every animal in her care.",
    },
    // Medical Dept
    {
      name: "Christian", title: "Veterinary Assistant", dept: "Medical Dept",
      years: "", color: "#7c6fcd", initials: "CH",
      specs: [],
      bio: "Christian provides essential support during surgical procedures and ensures all medical equipment is properly maintained and sterilized.",
    },
    {
      name: "Roger", title: "Veterinary Assistant", dept: "Medical Dept",
      years: "", color: "#2a9d8f", initials: "RO",
      specs: [],
      bio: "Roger assists with patient care, laboratory work, and ensuring smooth daily operations in our medical department.",
    },
    {
      name: "Taeib", title: "Veterinary Assistant", dept: "Medical Dept",
      years: "", color: "#f57c20", initials: "TA",
      specs: [],
      bio: "Taeib provides dedicated support in patient handling, medication administration, and post-operative care.",
    },
    // Reception
    {
      name: "Rizza", title: "Receptionist", dept: "Reception",
      years: "", color: "#e05c7a", initials: "RI",
      specs: [],
      bio: "Rizza is the welcoming face of our clinic, managing appointments and ensuring every pet parent feels at home.",
    },
    {
      name: "Veron", title: "Receptionist", dept: "Reception",
      years: "", color: "#4caf82", initials: "VE",
      specs: [],
      bio: "Veron handles client communications with care, ensuring seamless scheduling and follow-up coordination.",
    },
    // Grooming
    {
      name: "Bayzid", title: "Professional Groomer", dept: "Grooming",
      years: "", color: "#f5c842", initials: "BA",
      specs: [],
      bio: "Bayzid is an expert groomer with years of experience handling all breeds, ensuring every pet leaves looking and feeling their best.",
    },
    {
      name: "Mark", title: "Professional Groomer", dept: "Grooming",
      years: "", color: "#7c6fcd", initials: "MK",
      specs: [],
      bio: "Mark specializes in breed-specific styling and therapeutic grooming treatments for sensitive pets.",
    },
    // Accounts
    {
      name: "Insha", title: "Accounts Manager", dept: "Accounts",
      years: "", color: "#2a9d8f", initials: "IN",
      specs: [],
      bio: "Insha manages our financial operations with precision, ensuring transparent billing and smooth payment processes for all clients.",
    },
  ],
  "dubai": [
    // Veterinarians
    {
      name: "Dr. Zaib Mahel", title: "Chief Head Surgeon", dept: "Veterinarians",
      years: "19+", color: "#f57c20", initials: "ZM",
      specs: ["Surgery", "Endoscopy", "Falcon Medicine"],
      bio: "Dr. Zaib Mahel leads our surgical team with over 19 years of veterinary experience. She specializes in soft tissue surgery, advanced endoscopy procedures, and falcon medicine, bringing world-class expertise to the UAE.",
    },
    {
      name: "Dr. Saada", title: "Senior Veterinarian", dept: "Veterinarians",
      years: "10+", color: "#7c6fcd", initials: "SA",
      specs: ["Small Animals", "Internal Medicine"],
      bio: "Dr. Saada brings extensive experience in small animal medicine to our Dubai branch, providing exceptional care for the JVC community.",
    },
    {
      name: "Dr. Mehmood", title: "Veterinarian", dept: "Veterinarians",
      years: "8+", color: "#2a9d8f", initials: "ME",
      specs: ["General Practice", "Dermatology"],
      bio: "Dr. Mehmood offers comprehensive veterinary services with a focus on preventive care, wellness programs, and dermatological conditions.",
    },
    {
      name: "Dr. Sarwat", title: "Veterinarian", dept: "Veterinarians",
      years: "7+", color: "#e05c7a", initials: "SW",
      specs: ["Emergency Care", "Critical Care"],
      bio: "Dr. Sarwat specializes in emergency medicine, providing rapid and effective care when your pets need it most.",
    },
    // Medical Dept
    {
      name: "Ahmad", title: "Veterinary Assistant", dept: "Medical Dept",
      years: "", color: "#4caf82", initials: "AH",
      specs: [],
      bio: "Ahmad provides essential clinical support at our Dubai branch, assisting with procedures and patient care.",
    },
    // Reception
    {
      name: "Sara", title: "Receptionist", dept: "Reception",
      years: "", color: "#f57c20", initials: "SR",
      specs: [],
      bio: "Sara warmly welcomes all visitors to our Dubai clinic and manages daily scheduling with efficiency.",
    },
    // Grooming
    {
      name: "Ali", title: "Professional Groomer", dept: "Grooming",
      years: "", color: "#7c6fcd", initials: "AL",
      specs: [],
      bio: "Ali delivers premium grooming services with attention to detail and genuine care for every pet.",
    },
  ],
};

type Branch = "al-ain" | "dubai";

export default function TeamPage() {
  const [branch, setBranch]   = useState<Branch>("al-ain");
  const [dept, setDept]       = useState("All");

  const members = teamData[branch].filter((m) => dept === "All" || m.dept === dept);
  const branchLabel = branch === "al-ain" ? "Al Ain" : "Dubai (JVC)";
  const deptLabel   = dept === "All" ? "Team" : dept;

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#eeedf8 0%,#e8e7f5 50%,#ece9f7 100%)", fontFamily: "'Poppins',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        /* blobs */
        .tp-blob1 { position:fixed; width:500px; height:500px; border-radius:50%; background:#b8b0e8; filter:blur(100px); opacity:0.18; top:-100px; right:-100px; pointer-events:none; z-index:0; }
        .tp-blob2 { position:fixed; width:400px; height:400px; border-radius:50%; background:#c9b8f0; filter:blur(90px); opacity:0.13; bottom:-80px; left:-60px; pointer-events:none; z-index:0; }

        .tp-wrap { position:relative; z-index:1; max-width:1100px; margin:0 auto; padding:72px 24px 100px; }

        /* ── Hero heading ── */
        .tp-hero { text-align:center; margin-bottom:48px; }
        .tp-hero-eyebrow {
          display:inline-block; font-size:13px; font-weight:600; letter-spacing:0.12em;
          text-transform:uppercase; color:#f57c20;;
          
        }
        .tp-hero h1 { font-size:clamp(32px,5vw,54px); font-weight:800; color:#1a1a2e; margin:0 0 14px; letter-spacing:-0.025em; line-height:1.12; }
        .tp-hero h1 em { color:#f57c20; font-style:italic; }
        .tp-hero p  { font-size:15px; color:#555570; margin:0 auto; max-width:520px; line-height:1.75; }

        /* ── Branch tabs ── */
        .tp-branches { display:flex; justify-content:center; gap:8px; margin-bottom:24px; flex-wrap:wrap; }
        .tp-branch-btn {
          display:flex; align-items:center; gap:7px; padding:10px 22px; border-radius:30px;
          font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; cursor:pointer;
          border:2px solid transparent; transition:all 0.2s;
        }
        .tp-branch-btn.inactive { background:rgba(255,255,255,0.7); color:#555570; border-color:rgba(180,174,230,0.3); }
        .tp-branch-btn.inactive:hover { border-color:rgba(245,124,32,0.3); color:#1a1a2e; }
        .tp-branch-btn.active { background:#f57c20; color:#fff; border-color:#f57c20; box-shadow:0 4px 16px rgba(245,124,32,0.3); }

        /* ── Dept filter pills ── */
        .tp-filters { display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:48px; }
        .tp-filter-pill {
          padding:7px 18px; border-radius:20px; cursor:pointer;
          font-family:'Poppins',sans-serif; font-size:12.5px; font-weight:600;
          border:1.5px solid transparent; transition:all 0.18s;
        }
        .tp-filter-pill.inactive { background:rgba(255,255,255,0.65); color:#555570; border-color:rgba(180,174,230,0.25); }
        .tp-filter-pill.inactive:hover { background:rgba(255,255,255,0.9); border-color:rgba(124,111,205,0.3); color:#1a1a2e; }
        .tp-filter-pill.active { background:#1a1a2e; color:#fff; border-color:#1a1a2e; }

        /* ── Section heading ── */
        .tp-section-title {
          font-size:20px; font-weight:700; color:#1a1a2e; margin:0 0 28px;
          display:flex; align-items:center; gap:10px;
        }
        .tp-section-title::after {
          content:''; flex:1; height:1px; background:rgba(180,174,230,0.3);
        }

        /* ── Grid ── */
        .tp-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }

        /* ── Card ── */
        .tp-card { display:flex; flex-direction:column; gap:0; }
        .tp-card-top {
          border-radius:20px 20px 0 0; padding:32px 22px 26px; position:relative;
          min-height:260px; display:flex; flex-direction:column; justify-content:flex-end;
          overflow:hidden;
        }
        .tp-card-watermark {
          position:absolute; top:50%; left:50%; transform:translate(-50%,-60%);
          font-size:110px; font-weight:900; color:rgba(255,255,255,0.18);
          letter-spacing:-4px; pointer-events:none; user-select:none; line-height:1;
          font-family:'Poppins',sans-serif;
        }
        .tp-years-badge {
          position:absolute; top:14px; right:14px;
          background:#f57c20; color:#fff; font-family:'Poppins',sans-serif;
          font-size:11px; font-weight:700; padding:4px 10px; border-radius:20px;
          letter-spacing:0.04em;
        }
        .tp-card-info {
          background:rgba(255,255,255,0.92); backdrop-filter:blur(8px);
          border-radius:12px; padding:12px 14px; position:relative; z-index:1;
        }
        .tp-card-name  { font-size:14px; font-weight:700; color:#1a1a2e; margin:0 0 2px; }
        .tp-card-title { font-size:12px; font-weight:600; margin:0 0 8px; }
        .tp-card-specs { display:flex; flex-wrap:wrap; gap:5px; }
        .tp-spec-pill {
          font-family:'Poppins',sans-serif; font-size:10.5px; font-weight:500; color:#555570;
          background:rgba(85,85,112,0.07); border:1px solid rgba(85,85,112,0.12);
          padding:3px 9px; border-radius:20px; display:flex; align-items:center; gap:4px;
        }
        .tp-card-bottom {
          background:rgba(255,255,255,0.78); backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.9); border-top:none;
          border-radius:0 0 18px 18px; padding:14px 18px;
        }
        .tp-card-bio { font-size:11.5px; color:#555570; line-height:1.65; margin:0; font-weight:400; }

        /* ── Empty state ── */
        .tp-empty {
          grid-column:1 / -1; text-align:center; padding:60px 20px;
          color:#9090b0; font-size:14px;
        }

        /* ── CTA section ── */
        .tp-cta {
          text-align:center; margin-top:80px; padding:56px 32px;
          background:rgba(255,255,255,0.6); backdrop-filter:blur(12px);
          border:1.5px solid rgba(255,255,255,0.9); border-radius:28px;
          box-shadow:0 4px 28px rgba(90,80,160,0.08);
        }
        .tp-cta-dot { width:40px; height:4px; border-radius:2px; background:#f57c20; margin:0 auto 24px; }
        .tp-cta h2 { font-size:clamp(22px,3.5vw,32px); font-weight:800; color:#1a1a2e; margin:0 0 12px; letter-spacing:-0.02em; }
        .tp-cta p  { font-size:14px; color:#555570; margin:0 auto 28px; max-width:480px; line-height:1.75; }
        .tp-cta-btn {
          display:inline-flex; align-items:center; gap:9px;
          background:#1a1a2e; color:#fff; text-decoration:none;
          font-family:'Poppins',sans-serif; font-weight:700; font-size:13.5px;
          padding:14px 28px; border-radius:12px;
          transition:background 0.18s, transform 0.15s;
          box-shadow:0 4px 18px rgba(26,26,46,0.2);
        }
        .tp-cta-btn:hover { background:#f57c20; transform:translateY(-2px); box-shadow:0 6px 22px rgba(245,124,32,0.3); }

        /* ── Responsive ── */
        @media (max-width:900px)  { .tp-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:540px)  { .tp-grid { grid-template-columns:1fr; } .tp-wrap { padding:48px 16px 72px; } }
      `}</style>

      <div className="tp-blob1" /><div className="tp-blob2" />

      <div className="tp-wrap">

        {/* ── Hero ── */}
        <div className="tp-hero">
          <span className="tp-hero-eyebrow">Our Experts</span>
          <h1>Meet Our {dept === "All" ? "Lead" : "Lead"}<br />
            <em>{deptLabel}</em>
          </h1>
          <p>A dedicated team of specialists committed to providing the highest quality care for your beloved pets across our UAE clinics.</p>
        </div>

        {/* ── Branch tabs ── */}
        <div className="tp-branches">
          {[
            { id: "al-ain" as Branch, label: "Al Ain Branch" },
            { id: "dubai"  as Branch, label: "Dubai (JVC)" },
          ].map((b) => (
            <button
              key={b.id}
              className={`tp-branch-btn ${branch === b.id ? "active" : "inactive"}`}
              onClick={() => { setBranch(b.id); setDept("All"); }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {b.label}
            </button>
          ))}
        </div>

        {/* ── Dept filters ── */}
        <div className="tp-filters">
          {departments.map((d) => (
            <button key={d} className={`tp-filter-pill ${dept === d ? "active" : "inactive"}`} onClick={() => setDept(d)}>
              {d}
            </button>
          ))}
        </div>

        {/* ── Section heading ── */}
        <p className="tp-section-title">
          {branchLabel} — {deptLabel}
          <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:12, fontWeight:600, color:"#9090b0", background:"rgba(255,255,255,0.7)", border:"1.5px solid rgba(180,174,230,0.25)", borderRadius:20, padding:"3px 12px", marginLeft:4 }}>
            {members.length} member{members.length !== 1 ? "s" : ""}
          </span>
        </p>

        {/* ── Grid ── */}
        <div className="tp-grid">
          {members.length === 0 ? (
            <div className="tp-empty">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9c2e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom:12 }}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <p style={{ margin:0, fontFamily:"'Poppins',sans-serif", fontSize:14, color:"#9090b0", fontWeight:500 }}>No team members in this department yet.</p>
            </div>
          ) : members.map((m, i) => (
            <div key={`${m.name}-${i}`} className="tp-card">
              <div className="tp-card-top" style={{ background: m.color }}>
                <span className="tp-card-watermark">{m.initials}</span>
                {m.years && <span className="tp-years-badge">{m.years} Years</span>}
                <div className="tp-card-info">
                  <p className="tp-card-name">{m.name}</p>
                  <p className="tp-card-title" style={{ color: m.color }}>{m.title}</p>
                  {m.specs.length > 0 && (
                  <div className="tp-card-specs">
                    {m.specs.map((s) => (
                      <span key={s} className="tp-spec-pill">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {s}
                      </span>
                    ))}
                  </div>
                  )}
                </div>
              </div>
              <div className="tp-card-bottom">
                <p className="tp-card-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Join CTA ── */}
        <div className="tp-cta">
          <div className="tp-cta-dot" />
          <h2>Join Our Team</h2>
          <p>We're always looking for passionate veterinary professionals to join our growing family. If you share our commitment to ethical, compassionate care, we'd love to hear from you.</p>
          <a href="mailto:careers@pawsandclaws.ae" className="tp-cta-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            careers@pawsandclaws.ae
          </a>
        </div>

      </div>
    </div>
  );
}