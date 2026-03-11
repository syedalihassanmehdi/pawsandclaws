"use client";

import Link from "next/link";

const services = [
  {
    title: "Pet Consultation",
    description: "Complete wellness checkups & health plans tailored to your pet's age, breed, and lifestyle.",
    color: "#f57c20", bg: "#fff5ee", border: "#fdd5b0",
    slug: "pet-consultation",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "In-House Diagnostics",
    description: "Blood panels, urinalysis & same-day results using advanced in-house laboratory equipment.",
    color: "#7c6fcd", bg: "rgba(124,111,205,0.08)", border: "rgba(124,111,205,0.22)",
    slug: "in-house-diagnostics",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m4.75-11.396c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 8.25h-11L5 14.5m14 0H5",
  },
  {
    title: "Advanced Imaging",
    description: "Digital X-rays, ultrasound & echocardiography for precise, non-invasive internal diagnostics.",
    color: "#e05c7a", bg: "rgba(224,92,122,0.08)", border: "rgba(224,92,122,0.22)",
    slug: "advanced-imaging",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75",
  },
  {
    title: "Laser Therapy",
    description: "Drug-free pain relief & accelerated healing using cutting-edge therapeutic laser technology.",
    color: "#4caf82", bg: "rgba(76,175,130,0.08)", border: "rgba(76,175,130,0.22)",
    slug: "laser-therapy",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Surgical Services",
    description: "Board-certified surgeons & full OR support for routine to complex surgical procedures.",
    color: "#7c6fcd", bg: "rgba(124,111,205,0.08)", border: "rgba(124,111,205,0.22)",
    slug: "surgical-services",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.047 2.047",
  },
  {
    title: "Vaccination Programs",
    description: "Tailored immunization for every life stage, protecting your pet from preventable diseases.",
    color: "#f57c20", bg: "#fff5ee", border: "#fdd5b0",
    slug: "vaccination-programs",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
];

export default function ServicesSection() {
  return (
    <section style={{ fontFamily:"'Poppins',sans-serif", background:"linear-gradient(135deg,#eeedf8 0%,#e8e7f5 50%,#ece9f7 100%)", padding:"80px 0 100px", position:"relative", overflow:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&display=swap');

        .svc-card {
          background: rgba(255,255,255,0.75); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
          border-radius:18px; padding:28px 24px;
          border:1.5px solid rgba(255,255,255,0.9);
          transition:transform 0.25s ease, box-shadow 0.25s ease;
          cursor:default; position:relative; overflow:hidden; display:flex; flex-direction:column;
        }
        .svc-card:hover { transform:translateY(-6px); box-shadow:0 24px 60px rgba(124,111,205,0.15); }
        .svc-card:hover .svc-icon-wrap { transform:scale(1.08) rotate(-4deg); }
        .svc-icon-wrap { transition:transform 0.25s ease; }

        .svc-learn {
          display:inline-flex; align-items:center; gap:4px;
          font-size:13px; font-weight:600; text-decoration:none;
          font-family:'Poppins',sans-serif; margin-top:auto; padding-top:16px;
          transition:gap 0.2s ease;
        }
        .svc-learn:hover { gap:9px; }

        .svc-view-all {
          display:inline-flex; align-items:center; gap:8px;
          padding:14px 36px; border-radius:10px;
          border:1.5px solid rgba(0,0,0,0.18); background:transparent; color:#1a1a2e;
          font-family:'Poppins',sans-serif; font-weight:700; font-size:12px;
          letter-spacing:0.08em; text-transform:uppercase; text-decoration:none;
          cursor:pointer; transition:background 0.2s, color 0.2s, transform 0.15s, border-color 0.2s;
        }
        .svc-view-all:hover { background:#1a1a2e; color:#fff; border-color:#1a1a2e; transform:translateY(-2px); }

        .svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }

        @media (max-width:1024px) { .svc-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:640px)  { .svc-grid { grid-template-columns:1fr; } .svc-inner { padding:0 20px !important; } }
      `}</style>

      {/* Blobs */}
      <div style={{ position:"absolute", width:500, height:500, background:"#b8b0e8", borderRadius:"50%", filter:"blur(100px)", opacity:0.25, top:-150, right:0, pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:400, height:400, background:"#c9b8f0", borderRadius:"50%", filter:"blur(90px)", opacity:0.2, bottom:-100, right:200, pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:300, height:300, background:"#a8a0e0", borderRadius:"50%", filter:"blur(80px)", opacity:0.15, top:50, left:-100, pointerEvents:"none" }} />

      <div className="svc-inner" style={{ maxWidth:1200, margin:"0 auto", padding:"0 48px", position:"relative", zIndex:1 }}>

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 56px" }}>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:13, fontWeight:600, color:"#f57c20", letterSpacing:"0.12em", textTransform:"uppercase", margin:"0 0 14px", display:"inline-block" }}>
            Our Services
          </p>
          <h2 style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800, fontSize:"clamp(26px,4vw,44px)", lineHeight:1.15, color:"#1a1a2e", margin:"0 0 16px", letterSpacing:"-0.02em" }}>
            Comprehensive Pet Care{" "}
            <span style={{ color:"#f57c20", fontStyle:"italic" }}>Services</span>
          </h2>
          <p style={{ fontSize:15, color:"#555570", lineHeight:1.75, margin:0, fontFamily:"'Poppins',sans-serif", fontWeight:400 }}>
            From routine checkups to emergency care, we provide a full range of veterinary services to keep your pets healthy and happy.
          </p>
        </div>

        {/* Cards grid */}
        <div className="svc-grid">
          {services.map((s) => (
            <div key={s.slug} className="svc-card">
              <div className="svc-icon-wrap" style={{ width:48, height:48, borderRadius:12, background:s.bg, border:`1px solid ${s.border}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16, flexShrink:0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.icon} />
                </svg>
              </div>

              <h3 style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:15.5, color:"#1a1a2e", margin:"0 0 8px", letterSpacing:"-0.01em" }}>
                {s.title}
              </h3>
              <p style={{ fontSize:13.5, color:"#555570", lineHeight:1.7, margin:0, fontFamily:"'Poppins',sans-serif", fontWeight:400 }}>
                {s.description}
              </p>

              <Link href={`/services/${s.slug}`} className="svc-learn" style={{ color:s.color }}>
                Learn more
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign:"center", marginTop:52 }}>
          <Link href="/services" className="svc-view-all">
            View All Services
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}