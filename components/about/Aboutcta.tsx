"use client"
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section
      style={{
        fontFamily: "'Poppins', sans-serif",
        padding: "0 48px 80px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .acta-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          background: #f57c20;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 80px;
          text-align: center;
        }

        .acta-swoosh-1 {
          position: absolute; width: 420px; height: 420px; border-radius: 50%;
          border: 56px solid rgba(255,255,255,0.08);
          top: -160px; left: -100px; pointer-events: none;
        }
        .acta-swoosh-2 {
          position: absolute; width: 260px; height: 260px; border-radius: 50%;
          border: 36px solid rgba(255,255,255,0.06);
          bottom: -100px; right: 80px; pointer-events: none;
        }
        .acta-swoosh-3 {
          position: absolute; width: 140px; height: 140px; border-radius: 50%;
          border: 20px solid rgba(255,255,255,0.07);
          top: 20px; right: 200px; pointer-events: none;
        }

        .acta-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: #f57c20;
          font-family: 'Poppins', sans-serif;
          font-weight: 700; font-size: 13px;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 15px 32px; border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }
        .acta-btn-white:hover {
          background: #fff5ee;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.16);
        }

        .acta-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 700; font-size: 13px;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 15px 32px; border-radius: 10px;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.6);
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
        }
        .acta-btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.9);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .acta-wrap { padding: 56px 40px; border-radius: 20px; }
        }
        @media (max-width: 580px) {
          section { padding: 0 20px 60px; }
          .acta-wrap { padding: 44px 24px; }
          .acta-buttons { flex-direction: column; align-items: center !important; }
          .acta-btn-white, .acta-btn-outline { width: 100%; justify-content: center; }
        }
        @media (max-width: 480px) {
          section { padding: 0 16px 48px; }
        }
      `}</style>

      <div className="acta-wrap">
        <div className="acta-swoosh-1" />
        <div className="acta-swoosh-2" />
        <div className="acta-swoosh-3" />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13, fontWeight: 600,
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.08em", textTransform: "uppercase",
            margin: "0 0 14px",
          }}>
            Get Started Today
          </p>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(26px, 3.5vw, 44px)",
            color: "#fff",
            margin: "0 0 16px",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}>
            Ready to Experience Our Care?
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.88)",
            lineHeight: 1.75,
            margin: "0 0 36px",
            fontWeight: 400,
          }}>
            Schedule an appointment today and see why thousands of pet owners trust PawCare with their beloved companions.
          </p>

          <div
            className="acta-buttons"
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/locations" className="acta-btn-white">
              Book Appointment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/contact" className="acta-btn-outline">
              Contact Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}