"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Service, getRelatedServices } from "@/data/services-data";

export default function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <div style={{ background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)", fontFamily: "'Poppins', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');`}</style>
      <ServiceHero service={service} />
      <ServiceBody service={service} />
      <RelatedServices service={service} />
      <ServiceCTA service={service} />
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */
function ServiceHero({ service }: { service: Service }) {
  return (
    <section style={{ padding: "90px 0 100px", position: "relative", overflow: "hidden", textAlign: "center" }}>
      <div style={{ position: "absolute", width: 500, height: 500, background: "#b8b0e8", borderRadius: "50%", filter: "blur(100px)", opacity: 0.25, top: -150, right: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, background: "#c9b8f0", borderRadius: "50%", filter: "blur(90px)", opacity: 0.2, bottom: -100, right: 200, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, background: "#a8a0e0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15, top: 50, left: -100, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 24 }}>
          <Link href="/services" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#888", textDecoration: "none", fontWeight: 500 }}>Services</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#f57c20", fontWeight: 600 }}>{service.title}</span>
        </div>

        {/* Icon */}
        <div style={{ width: 72, height: 72, borderRadius: 20, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)", border: "1.5px solid rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", boxShadow: "0 8px 28px rgba(124,111,205,0.14)" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d={service.icon} />
          </svg>
        </div>

        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "#f57c20", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 12px" }}>{service.tagline}</p>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 5vw, 54px)", lineHeight: 1.1, color: "#1a1a2e", margin: "0 0 20px", letterSpacing: "-0.025em" }}>
          {service.title}
        </h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: "#555570", lineHeight: 1.75, margin: "0 auto 36px", maxWidth: 600, fontWeight: 400 }}>
          {service.longDescription}
        </p>

        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
         

          {/* WhatsApp */}
          <a
            href={`https://wa.me/971581289605?text=${encodeURIComponent(`Hello! I would like to inquire about your *${service.title}* service. Could you please share more details and available appointment slots?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              background: "#25d366", color: "#fff",
              fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.05em", textTransform: "uppercase",
              padding: "15px 24px", borderRadius: 10, textDecoration: "none",
              boxShadow: "0 6px 20px rgba(37,211,102,0.3)",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+971581289605"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              background: "rgba(255,255,255,0.75)", color: "#1a1a2e",
              backdropFilter: "blur(8px)",
              fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.05em", textTransform: "uppercase",
              padding: "15px 24px", borderRadius: 10, textDecoration: "none",
              border: "1.5px solid rgba(0,0,0,0.12)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now
          </a>

         
        </div>
      </div>
    </section>
  );
}

/* ─── Body ─────────────────────────────────────────────────────── */
function ServiceBody({ service }: { service: Service }) {
  return (
    <section style={{ padding: "0 0 80px" }}>
      <style>{`
        .sd-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }

        /* Features grid - 2 col cards */
        .sd-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 64px;
        }
        .sd-feature-card {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.95);
          border-radius: 18px;
          padding: 24px 22px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: transform 0.22s, box-shadow 0.22s;
          border-left: 3px solid transparent;
        }
        .sd-feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(124,111,205,0.13);
          border-left-color: var(--svc-color);
        }

        .sd-benefits-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-bottom: 64px; }
        .sd-benefit-card { background: rgba(255,255,255,0.78); backdrop-filter: blur(12px); border: 1.5px solid rgba(255,255,255,0.95); border-radius: 18px; padding: 26px 22px; transition: transform 0.22s, box-shadow 0.22s; }
        .sd-benefit-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(124,111,205,0.14); }

        .sd-faq-item { background: rgba(255,255,255,0.78); backdrop-filter: blur(12px); border: 1.5px solid rgba(255,255,255,0.95); border-radius: 16px; padding: 24px 26px; margin-bottom: 14px; }

        @media (max-width: 1024px) { .sd-inner { padding: 0 32px; } .sd-features-grid { grid-template-columns: 1fr; } .sd-benefits-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px)  { .sd-inner { padding: 0 20px; } .sd-benefits-grid { grid-template-columns: 1fr; } .sd-features-grid { grid-template-columns: 1fr; } }
        @media (max-width: 480px)  { .sd-inner { padding: 0 16px; } }
      `}</style>
      <style>{`:root { --svc-color: ${service.color}; }`}</style>

      <div className="sd-inner">

        {/* What's Included heading */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "#f57c20", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>What's Included</p>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.5vw, 36px)", color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Everything in <span style={{ color: "#f57c20", fontStyle: "italic" }}>this Service</span>
          </h2>
        </div>

        {/* Detailed feature cards */}
        <div className="sd-features-grid">
          {service.features.map((f, i) => (
            <div key={i} className="sd-feature-card">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff5ee", border: `1px solid ${service.color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, color: "#1a1a2e", margin: "0 0 6px" }}>{f.title}</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#555570", lineHeight: 1.75, margin: 0, fontWeight: 400 }}>{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "#f57c20", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>Key Benefits</p>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.5vw, 36px)", color: "#1a1a2e", margin: "0 0 28px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          Why Choose This <span style={{ color: "#f57c20", fontStyle: "italic" }}>Service</span>
        </h2>
        <div className="sd-benefits-grid">
          {service.benefits.map((b, i) => (
            <div key={b.title} className="sd-benefit-card">
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#fff5ee", border: "1px solid #fdd5b0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                  {i === 1 && <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />}
                  {i === 2 && <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />}
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: "#1a1a2e", margin: "0 0 8px" }}>{b.title}</h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#555570", lineHeight: 1.7, margin: 0, fontWeight: 400 }}>{b.description}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "#f57c20", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>FAQ</p>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.5vw, 36px)", color: "#1a1a2e", margin: "0 0 28px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          Common <span style={{ color: "#f57c20", fontStyle: "italic" }}>Questions</span>
        </h2>
        <div>
          {service.faqs.map((faq) => (
            <div key={faq.question} className="sd-faq-item">
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#fff5ee", border: "1px solid #fdd5b0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, color: "#1a1a2e", margin: "0 0 8px" }}>{faq.question}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13.5, color: "#555570", lineHeight: 1.75, margin: 0, fontWeight: 400 }}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── Related Services ──────────────────────────────────────────── */
function RelatedServices({ service }: { service: Service }) {
  const router = useRouter();
  const related = getRelatedServices(service);
  if (!related.length) return null;

  return (
    <section style={{ padding: "0 0 80px" }}>
      <style>{`
        .rel-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .rel-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .rel-card {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.95);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .rel-card:hover { transform: translateY(-6px); box-shadow: 0 20px 56px rgba(124,111,205,0.18); }
        .rel-card-top { height: 120px; display: flex; align-items: center; justify-content: center; position: relative; }
        .rel-card-body { padding: 18px 20px 20px; flex: 1; display: flex; flex-direction: column; gap: 8px; }
        .rel-arrow-btn {
          display: inline-flex; align-items: center; gap: 6px;
          color: #f57c20; font-family: 'Poppins', sans-serif;
          font-weight: 700; font-size: 12px; letter-spacing: 0.05em;
          text-transform: uppercase; margin-top: auto; padding-top: 4px;
          background: none; border: none; cursor: pointer;
        }
        @media (max-width: 768px) { .rel-grid { grid-template-columns: 1fr; } .rel-inner { padding: 0 32px; } }
        @media (max-width: 480px) { .rel-inner { padding: 0 16px; } }
      `}</style>

      <div className="rel-inner">
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "#f57c20", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>Keep Exploring</p>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.5vw, 36px)", color: "#1a1a2e", margin: "0 0 32px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          Related <span style={{ color: "#f57c20", fontStyle: "italic" }}>Services</span>
        </h2>

        <div className="rel-grid">
          {related.map((s) => (
            <div key={s.slug} className="rel-card" onClick={() => router.push(`/services/${s.slug}`)}>
              {/* Colored top band */}
              <div className="rel-card-top" style={{ background: `${s.color}18` }}>
                {/* Big faint icon bg */}
                <svg style={{ position: "absolute", opacity: 0.08 }} width="100" height="100" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.icon} />
                </svg>
                {/* Centered icon chip */}
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "#fff", border: `1.5px solid ${s.color}33`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 6px 20px ${s.color}22`, position: "relative", zIndex: 1 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>
                {/* Color accent bar */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${s.color}, ${s.color}88)` }} />
              </div>

              <div className="rel-card-body">
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: "#1a1a2e", margin: 0 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12.5, color: "#555570", lineHeight: 1.7, margin: 0, fontWeight: 400 }}>{s.description}</p>

                {/* Mini feature pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "4px 0" }}>
                  {s.features.slice(0, 2).map((f) => (
                    <span key={f.title} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10.5, fontWeight: 600, color: s.color, background: `${s.color}12`, border: `1px solid ${s.color}30`, borderRadius: 6, padding: "3px 8px" }}>
                      {f.title}
                    </span>
                  ))}
                </div>

                <span className="rel-arrow-btn">
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────── */
function ServiceCTA({ service }: { service: Service }) {
  return (
    <section style={{ padding: "0 48px 80px" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 28, background: "#f57c20", maxWidth: 1200, margin: "0 auto", padding: "64px 80px", textAlign: "center" }}>
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", border: "56px solid rgba(255,255,255,0.08)", top: -160, left: -100, pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", border: "36px solid rgba(255,255,255,0.06)", bottom: -100, right: 80, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 40px)", color: "#fff", margin: "0 0 14px", lineHeight: 1.15 }}>
            Book {service.title} Today
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.88)", lineHeight: 1.75, margin: "0 0 32px", fontWeight: 400 }}>
            Give your pet the expert care they deserve. Schedule an appointment now.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/locations" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#f57c20", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "15px 32px", borderRadius: 10, textDecoration: "none", boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}>
              Book Appointment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "15px 32px", borderRadius: 10, textDecoration: "none", border: "2px solid rgba(255,255,255,0.6)" }}>
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}