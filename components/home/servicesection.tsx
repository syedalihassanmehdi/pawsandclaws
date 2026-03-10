"use client";

import Link from "next/link";
import { ArrowRightIcon, HeartPulse, Stethoscope, Syringe, Microscope, Scissors, Clock } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Wellness Exams",
    description: "Comprehensive annual checkups to keep your pet in peak health with personalized care plans.",
    accent: "#f57c20",
    bg: "#fff5ee",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description: "Complete immunization programs tailored to your pet's lifestyle, age, and health needs.",
    accent: "#f57c20",
    bg: "#fff5ee",
  },
  {
    icon: HeartPulse,
    title: "Emergency Care",
    description: "Round-the-clock urgent care when your pet needs it most — fast, expert, compassionate.",
    accent: "#f57c20",
    bg: "#fff5ee",
  },
  {
    icon: Microscope,
    title: "Diagnostics & Lab",
    description: "Advanced in-house diagnostics including bloodwork, X-rays, and ultrasound imaging.",
    accent: "#f57c20",
    bg: "#fff5ee",
  },
  {
    icon: Scissors,
    title: "Surgery & Dental",
    description: "Safe, modern surgical and dental procedures with full pre- and post-operative support.",
    accent: "#f57c20",
    bg: "#fff5ee",
  },
  {
    icon: Clock,
    title: "Preventive Care",
    description: "Flea, tick, and parasite prevention plus nutritional guidance for a long, healthy life.",
    accent: "#f57c20",
    bg: "#fff5ee",
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)",
        padding: "80px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&display=swap');

        .services-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px 26px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .services-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(124, 111, 205, 0.15);
        }
        .services-card:hover .card-icon-wrap {
          transform: scale(1.08) rotate(-4deg);
        }
        .card-icon-wrap {
          transition: transform 0.25s ease;
        }
        .learn-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          color: #f57c20;
          font-family: 'Poppins', sans-serif;
          margin-top: 16px;
          transition: gap 0.2s ease;
        }
        .learn-link:hover { gap: 8px; }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 36px;
          border-radius: 10px;
          border: 1.5px solid rgba(0,0,0,0.18);
          background: transparent;
          color: #1a1a2e;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s, border-color 0.2s;
        }
        .view-all-btn:hover {
          background: #1a1a2e;
          color: #fff;
          border-color: #1a1a2e;
          transform: translateY(-2px);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
          .svc-inner { padding: 0 20px !important; }
          .svc-heading { font-size: 26px !important; }
        }
      `}</style>

      {/* Background blobs — same as hero */}
      <div style={{ position: "absolute", width: 500, height: 500, background: "#b8b0e8", borderRadius: "50%", filter: "blur(100px)", opacity: 0.25, top: -150, right: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, background: "#c9b8f0", borderRadius: "50%", filter: "blur(90px)", opacity: 0.2, bottom: -100, right: 200, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, background: "#a8a0e0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15, top: 50, left: -100, pointerEvents: "none" }} />

      <div className="svc-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "#f57c20",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: "0 0 10px",
          }}>
            Our Services
          </p>
          <h2
            className="svc-heading"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 44px)",
              lineHeight: 1.15,
              color: "#1a1a2e",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Comprehensive Pet Care{" "}
            <span style={{ color: "#f57c20", fontStyle: "italic" }}>Services</span>
          </h2>
          <p style={{
            fontSize: 15,
            color: "#555570",
            lineHeight: 1.75,
            margin: 0,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
          }}>
            From routine checkups to emergency care, we provide a full range of veterinary services to keep your pets healthy and happy.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="services-card">
              <div
                className="card-icon-wrap"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  background: "#fff5ee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  border: "1px solid #fdd5b0",
                }}
              >
                <service.icon size={22} color="#f57c20" strokeWidth={1.8} />
              </div>

              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 15.5,
                color: "#1a1a2e",
                margin: "0 0 8px",
                letterSpacing: "-0.01em",
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: 13.5,
                color: "#555570",
                lineHeight: 1.7,
                margin: 0,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
              }}>
                {service.description}
              </p>

              <Link href="/services" className="learn-link">
                Learn more <ArrowRightIcon size={13} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <Link href="/services" className="view-all-btn">
            View All Services <ArrowRightIcon size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}