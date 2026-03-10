"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services-data";

export default function ServicesPage() {
  return (
    <div style={{ background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)" }}>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </div>
  );
}

function ServicesHero() {
  return (
    <section style={{ fontFamily: "'Poppins', sans-serif", padding: "100px 0 110px", position: "relative", overflow: "hidden", textAlign: "center" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');`}</style>
      <div style={{ position: "absolute", width: 500, height: 500, background: "#b8b0e8", borderRadius: "50%", filter: "blur(100px)", opacity: 0.25, top: -150, right: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, background: "#c9b8f0", borderRadius: "50%", filter: "blur(90px)", opacity: 0.2, bottom: -100, right: 200, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, background: "#a8a0e0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15, top: 50, left: -100, pointerEvents: "none" }} />
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "#f57c20", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 14px" }}>Our Services</p>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, color: "#1a1a2e", margin: "0 0 20px", letterSpacing: "-0.025em" }}>
          Everything Your Pet <span style={{ color: "#f57c20", fontStyle: "italic" }}>Needs</span>
        </h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: "#555570", lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
          Comprehensive pet care services designed to keep your furry friends healthy, happy, and thriving at every stage of life.
        </p>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/services/${service.slug}`)}
      style={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1.5px solid rgba(255,255,255,0.95)",
        borderRadius: 22,
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(124,111,205,0.18)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div style={{ height: 180, position: "relative", overflow: "hidden", background: service.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src={service.image}
          alt={service.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div style={{ position: "absolute", top: 14, left: 14, width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={service.icon} />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "22px 22px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <div>
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: "#1a1a2e", margin: "0 0 6px" }}>{service.title}</h3>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#555570", lineHeight: 1.7, margin: 0, fontWeight: 400 }}>{service.description}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, margin: "4px 0" }}>
          {service.features.slice(0, 3).map((f) => (
            <div key={f.title} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Poppins', sans-serif", fontSize: 12.5, color: "#555570", fontWeight: 400 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f.title}
            </div>
          ))}
        </div>
        {/* span instead of Link to avoid nested <a> */}
        <span
          role="button"
          onClick={(e) => { e.stopPropagation(); router.push(`/services/${service.slug}`); }}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: "#f57c20", color: "#fff",
            fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12,
            letterSpacing: "0.06em", textTransform: "uppercase",
            padding: "12px 20px", borderRadius: 10, marginTop: "auto",
            cursor: "pointer", boxShadow: "0 4px 16px rgba(245,124,32,0.25)",
            userSelect: "none",
          }}
        >
          Learn More
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function ServicesGrid() {
  return (
    <section style={{ padding: "0 0 100px" }}>
      <style>{`
        .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        @media (max-width: 1024px) { .svc-grid { grid-template-columns: repeat(2, 1fr); padding: 0 32px; } }
        @media (max-width: 640px)  { .svc-grid { grid-template-columns: 1fr; padding: 0 20px; } }
      `}</style>
      <div className="svc-grid">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section style={{ padding: "0 48px 80px" }}>
      <style>{`
        @media (max-width: 768px) { .scta-wrap { padding: 56px 32px !important; border-radius: 20px !important; } }
        @media (max-width: 580px) { .scta-wrap { padding: 44px 24px !important; } }
      `}</style>
      <div className="scta-wrap" style={{ position: "relative", overflow: "hidden", borderRadius: 28, background: "#f57c20", maxWidth: 1200, margin: "0 auto", padding: "72px 80px", textAlign: "center" }}>
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", border: "56px solid rgba(255,255,255,0.08)", top: -160, left: -100, pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", border: "36px solid rgba(255,255,255,0.06)", bottom: -100, right: 80, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 580, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 44px)", color: "#fff", margin: "0 0 16px", lineHeight: 1.15 }}>
            Ready to Book a Service?
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.88)", lineHeight: 1.75, margin: "0 0 36px", fontWeight: 400 }}>
            Schedule an appointment today and give your pet the exceptional care they deserve.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/locations" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#f57c20", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "15px 32px", borderRadius: 10, textDecoration: "none", boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}>
              Book Appointment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "15px 32px", borderRadius: 10, textDecoration: "none", border: "2px solid rgba(255,255,255,0.6)" }}>
              Contact Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}