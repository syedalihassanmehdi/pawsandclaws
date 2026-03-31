"use client";

import Link from "next/link";
import { Service } from "@/data/services-data";

export function ServiceHeroo({ service }: { service: Service }) {
  return (
      <section style={{
            padding: "90px 0 70px",
            position: "relative",
            overflow: "hidden",
            background: "#EBEAF7",
            display: "flex",
            alignItems: "center",
            minHeight: "100vh"
          }}>

      {/* Background decorative blob */}
      <div style={{
        position: "absolute",
        width: 620,
        height: 620,
        background: "#b8b0e8",
        borderRadius: "50%",
        filter: "blur(120px)",
        opacity: 0.18,
        top: -180,
        right: -100,
        pointerEvents: "none"
      }} />

      <style>{`
        .sh-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
        @media (max-width: 900px) { .sh-grid { grid-template-columns: 1fr; gap: 36px; } }
        @media (max-width: 600px) {
          .sh-section { padding: 70px 0 50px !important; }
          .sh-btn-row { flex-direction: column; }
          .sh-btn-row a { min-width: unset !important; width: 100%; }
        }
      `}</style>

      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 20px",
        position: "relative",
        zIndex: 2,
        width: "100%"
      }}>

        {/* Breadcrumb */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
          fontSize: "14px"
        }}>
          <Link href="/services" style={{ color: "#888", textDecoration: "none", fontWeight: 500 }}>Services</Link>
          <span style={{ color: "#aaa" }}>›</span>
          <span style={{ color: "#f57c20", fontWeight: 600 }}>{service.title}</span>
        </div>

        <div className="sh-grid">

          {/* LEFT - Text */}
          <div>
            <p style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#f57c20",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 12
            }}>
              {service.tagline}
            </p>

            <h1 style={{
              fontWeight: 800,
              fontSize: "clamp(42px, 7.5vw, 58px)",
              lineHeight: 1.05,
              color: "#1a1a2e",
              marginBottom: 24,
              letterSpacing: "-0.03em"
            }}>
              {service.title}
            </h1>

            <p style={{
              fontSize: "17px",
              lineHeight: 1.68,
              color: "#555570",
              marginBottom: 40,
              maxWidth: "520px"
            }}>
              {service.longDescription}
            </p>

            {/* Buttons */}
            <div className="sh-btn-row" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              
             <a   href={`https://wa.me/971521511465?text=${encodeURIComponent(`Hello! I would like to inquire about your *${service.title}* service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: "1 1 auto",
                  minWidth: "160px",
                  background: "#25d366",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "16px 24px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 8px 25px rgba(37,211,102,0.35)"
                }}
              >
                WhatsApp Us
              </a>

              
               <a href="tel:+971521511465"
                style={{
                  flex: "1 1 auto",
                  minWidth: "160px",
                  background: "#fff",
                  color: "#1a1a2e",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "16px 24px",
                  borderRadius: 14,
                  textDecoration: "none",
                  border: "1.5px solid #e5e5ea",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)"
                }}
              >
                Call Now
              </a>
            </div>
          </div>

          {/* RIGHT - Image */}
          <div style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 25px 70px rgba(124,111,205,0.22)",
            aspectRatio: "16 / 11",
            background: "#fff"
          }}>
            <img
              src={service.image}
              alt={service.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x550/e6e0f5/6b5cb8?text=${encodeURIComponent(service.title)}`;
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}