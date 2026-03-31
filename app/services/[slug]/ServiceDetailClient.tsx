"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Service, getRelatedServices } from "@/data/services-data";
import { surgicalSubServices } from "@/data/surgical-subservices-data";   // ← update path if different
import AboutCTA from "@/components/about/Aboutcta";
import { ServiceHeroo } from "@/components/servicehero";
import CrossLinksSection from "@/components/CrossLinksSection";


export default function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <div style={{ background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)", fontFamily: "'Poppins', sans-serif" }}>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');`}</style>
      <ServiceHeroo service={service} />
      
      <ServiceBody service={service} />
      <CrossLinksSection  service={service}/>
      <RelatedServices service={service} />
      
      <AboutCTA />
    </div>
  );
}




/* ─── Body ─────────────────────────────────────────────────────── */
function ServiceBody({ service }: { service: Service }) {
  return (
    <section style={{ padding: "0 0 80px" }}>
      <style>{`
        .sd-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }

        /* Features grid - only for non-surgical services */
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

        /* Benefits grid */
        .sd-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 64px;
        }
        .sd-benefit-card {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.95);
          border-radius: 18px;
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
          transition: transform 0.22s, box-shadow 0.22s;
          border-top: 3px solid transparent;
        }
        .sd-benefit-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(124,111,205,0.13);
          border-top-color: var(--svc-color);
        }

        /* FAQ accordion */
        .sd-faq-item {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.95);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 10px;
          transition: box-shadow 0.22s;
        }
        .sd-faq-item:hover {
          box-shadow: 0 8px 28px rgba(124,111,205,0.10);
        }
        .sd-faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          text-align: left;
        }
        .sd-faq-answer {
          padding: 0 24px 20px;
          font-size: 13.5px;
          color: #555570;
          line-height: 1.75;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
        }
        .sd-faq-chevron {
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .sd-faq-chevron.open {
          transform: rotate(180deg);
        }

        @media (max-width: 1024px) { 
          .sd-inner { padding: 0 32px; } 
          .sd-features-grid { grid-template-columns: 1fr; }
          .sd-benefits-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px)  { 
          .sd-inner { padding: 0 20px; } 
        }
      `}</style>
      <style>{`:root { --svc-color: ${service.color}; }`}</style>

      <div className="sd-inner">

        {/* === FEATURES GRID - Hide only for Surgical Services === */}
        {service.slug !== "surgical-services" && (
          <>
            <div style={{ marginBottom: 28, paddingTop: "10px" }}>
              <p style={{ 
                fontFamily: "'Poppins', sans-serif", 
                fontSize: 13, 
                fontWeight: 600, 
                color: "#f57c20", 
                letterSpacing: "0.08em", 
                textTransform: "uppercase", 
                margin: "0 0 10px" 
              }}>WHAT'S INCLUDED</p>
              <h2 style={{ 
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: 800, 
                fontSize: "clamp(22px, 2.5vw, 36px)", 
                color: "#1a1a2e", 
                margin: 0, 
                letterSpacing: "-0.02em", 
                lineHeight: 1.2 
              }}>
                Everything in <span style={{ color: "#f57c20", fontStyle: "italic" }}>this Service</span>
              </h2>
            </div>

            <div className="sd-features-grid">
              {service.features.map((f, i) => (
                <div key={i} className="sd-feature-card">
                  <div style={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: 10, 
                    background: "#fff5ee", 
                    border: `1px solid ${service.color}33`, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    flexShrink: 0 
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e", margin: "0 0 6px" }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: "#555570", lineHeight: 1.75, margin: 0, fontWeight: 400 }}>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ===================== SURGICAL SUB-SERVICES CARDS ===================== */}
        {service.slug === "surgical-services" && (
          <div style={{ marginBottom: "60px", paddingTop: "10px"  }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#f57c20",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 10px"
            }}>
              OUR SURGICAL PROCEDURES
            </p>

            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(22px, 2.5vw, 36px)",
              color: "#1a1a2e",
              marginBottom: 32,
              letterSpacing: "-0.02em"
            }}>
              Specialized <span style={{ color: "#f57c20" }}>Surgeries</span>
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "20px"
            }}>
              {surgicalSubServices.map((sub) => (
                <div
                  key={sub.slug}
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #f0f0f5",
                    borderRadius: "16px",
                    padding: "28px 26px",
                    transition: "all 0.25s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = service.color;
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = `0 20px 45px ${service.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#f0f0f5";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ display: "flex", gap: "16px", flex: 1, marginBottom: "24px" }}>
                    <div style={{
                      minWidth: 38,
                      height: 38,
                      borderRadius: "10px",
                      background: `${service.color}12`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <div>
                      <h3 style={{
                        fontWeight: 700,
                        fontSize: 17,
                        color: "#1a1a2e",
                        marginBottom: "10px"
                      }}>
                        {sub.title}
                      </h3>
                      <p style={{
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: "#555570",
                        margin: 0
                      }}>
                        {sub.description}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <Link
                      href={`/services/surgical-services/${sub.slug}`}
                      style={{
                        flex: 1,
                        background: "#f57c20",
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: 13.5,
                        padding: "13px 16px",
                        borderRadius: "10px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      LEARN MORE 
                      <span style={{ fontSize: 15 }}>→</span>
                    </Link>

                    <a
                      href={`https://wa.me/971521511465?text=${encodeURIComponent(`Hello! I would like more information about ${sub.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        width: 52,
                        height: 52,
                        background: "#25d366",
                        color: "#ffffff",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      title="Chat on WhatsApp"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>

                    <a
                      href="tel:+971521511465"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        width: 52,
                        height: 52,
                        background: "#f1f1f3",
                        color: "#333",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      title="Call Now"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== BENEFITS ===================== */}
        {service.benefits && service.benefits.length > 0 && (
          <>
            <div style={{ marginBottom: 28 }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#f57c20",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 10px"
              }}>WHY CHOOSE US</p>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(22px, 2.5vw, 36px)",
                color: "#1a1a2e",
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.2
              }}>
                Key <span style={{ color: "#f57c20", fontStyle: "italic" }}>Benefits</span>
              </h2>
            </div>

            <div className="sd-benefits-grid">
              {service.benefits.map((b, i) => (
                <div key={i} className="sd-benefit-card">
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#fff5ee",
                    border: `1px solid ${service.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e", margin: "0 0 6px" }}>{b.title}</p>
                    <p style={{ fontSize: 13, color: "#555570", lineHeight: 1.75, margin: 0, fontWeight: 400 }}>{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ===================== FAQ ===================== */}
        {service.faqs && service.faqs.length > 0 && (
          <>
            <div style={{ marginBottom: 28 }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#f57c20",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 10px"
              }}>GOT QUESTIONS?</p>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(22px, 2.5vw, 36px)",
                color: "#1a1a2e",
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.2
              }}>
                Frequently Asked <span style={{ color: "#f57c20", fontStyle: "italic" }}>Questions</span>
              </h2>
            </div>

            <FaqAccordion faqs={service.faqs} color={service.color} />
          </>
        )}

      </div>
    </section>
  );
}

/* ─── FAQ Accordion (isolated state) ───────────────────────────── */
function FaqAccordion({ faqs, color }: { faqs: { question: string; answer: string }[]; color: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ marginBottom: 20 }}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="sd-faq-item">
            <button
              className="sd-faq-question"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: isOpen ? color : "#1a1a2e",
                transition: "color 0.2s",
                lineHeight: 1.5
              }}>
                {faq.question}
              </span>
              <svg
                className={`sd-faq-chevron${isOpen ? " open" : ""}`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isOpen ? color : "#888"}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {isOpen && (
              <p className="sd-faq-answer">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
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