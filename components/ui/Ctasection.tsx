"use client";
import Link from "next/link";

export default function CTASection() {
  return (
    <section style={{ fontFamily: "'Poppins', sans-serif" }} className="px-6 lg:px-12 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .cta-btn-dark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1a1a2e;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 16px 40px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .cta-btn-dark:hover {
          background: #2d2d4e;
          transform: translateY(-2px);
        }

        .cta-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          background: #f57c20;
          min-height: 300px;
          display: flex;
          align-items: stretch;
          width: 100%;
        }

        .cta-left {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 22px;
          padding: 64px 52px 64px 72px;
          flex: 0 0 50%;
          max-width: 50%;
        }

        .cta-right {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 55%;
          z-index: 1;
        }

        .cta-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .cta-blob-pink {
          position: absolute;
          width: 320px;
          height: 340px;
          background: rgba(255, 200, 170, 0.5);
          border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
          top: 50%;
          left: 22%;
          transform: translate(-50%, -50%);
          z-index: 0;
          pointer-events: none;
        }
        .cta-blob-yellow {
          position: absolute;
          width: 220px;
          height: 220px;
          background: rgba(255, 215, 60, 0.7);
          border-radius: 50%;
          bottom: -50px;
          right: 40px;
          z-index: 0;
          pointer-events: none;
        }

        .cta-swoosh-1 {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          border: 56px solid rgba(255,255,255,0.08);
          top: -160px;
          left: -100px;
          pointer-events: none;
          z-index: 2;
        }
        .cta-swoosh-2 {
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          border: 34px solid rgba(255,255,255,0.06);
          bottom: -100px;
          left: 280px;
          pointer-events: none;
          z-index: 2;
        }

        .cta-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 45%;
          width: 200px;
          background: linear-gradient(to right, #f57c20 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .cta-left {
            padding: 52px 44px 52px 56px;
            flex: 0 0 54%;
            max-width: 54%;
          }
          .cta-right { width: 52%; }
        }

        @media (max-width: 768px) {
          .cta-wrap { min-height: 260px; }
          .cta-left {
            padding: 40px 32px 40px 40px;
            flex: 0 0 58%;
            max-width: 58%;
            gap: 16px;
          }
          .cta-right { width: 48%; }
          .cta-fade { right: 50%; width: 140px; }
        }

        @media (max-width: 580px) {
          .cta-wrap { min-height: 220px; border-radius: 20px; }
          .cta-left {
            padding: 30px 20px 30px 28px;
            flex: 0 0 60%;
            max-width: 60%;
            gap: 12px;
          }
          .cta-right { width: 46%; }
          .cta-fade { right: 52%; width: 100px; }
          .cta-btn-dark { padding: 12px 20px; font-size: 11px; }
        }

        @media (max-width: 400px) {
          .cta-wrap { min-height: 190px; }
          .cta-left {
            padding: 24px 14px 24px 20px;
            flex: 0 0 62%;
            max-width: 62%;
            gap: 10px;
          }
          .cta-btn-dark { padding: 10px 16px; font-size: 10px; gap: 5px; }
        }
      `}</style>

      <div className="cta-wrap">
        <div className="cta-swoosh-1" />
        <div className="cta-swoosh-2" />

        {/* LEFT */}
        <div className="cta-left">
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 3.2vw, 56px)",
            color: "#fff",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}>
            Schedule Your<br />Pet's Health Check
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(12px, 1.1vw, 16px)",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.7,
            margin: 0,
            maxWidth: 400,
            fontWeight: 400,
          }}>
            Keep your companion happy and healthy. Book a professional veterinary checkup and get personalized care for your pet.
          </p>

          <Link href="/contact" className="cta-btn-dark">
            Book Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="cta-right">
          
          <img src="/Ctaimage.png" alt="Happy pets" style={{ objectFit: "contain", zIndex: 1 }} />
        </div>

        <div className="cta-fade" />
      </div>
    </section>
  );
}