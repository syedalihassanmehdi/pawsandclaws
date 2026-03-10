export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)",
        fontFamily: "'Poppins', sans-serif",
        minHeight: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .hero-cta {
          background: #f57c20;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 15px 32px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          display: inline-block;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(245,124,32,0.3);
        }
        .hero-cta:hover {
          background: #e06b10;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(245,124,32,0.4);
        }

        .hero-btn-outline {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 15px 28px;
          border-radius: 10px;
          border: 1.5px solid rgba(0,0,0,0.15);
          color: #1a1a2e;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s, border-color 0.2s;
        }
        .hero-btn-outline:hover {
          background: rgba(255,255,255,0.85);
          border-color: rgba(0,0,0,0.22);
        }

        .stat-divider { width: 1px; height: 38px; background: rgba(0,0,0,0.1); }

        .hero-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          min-height: 500px;
          position: relative;
          z-index: 1;
        }

        .hero-image-wrap {
          height: 450px;
          position: relative;
          margin-right: -48px;
        }
        .hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center bottom;
        }

        @media (max-width: 1024px) {
          .hero-grid { gap: 32px; padding: 50px 32px; }
          .hero-image-wrap { height: 400px; margin-right: -32px; }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 40px 24px 32px;
            gap: 24px;
            min-height: unset;
            text-align: center;
          }
          .hero-image-wrap { height: 300px; margin-right: 0; order: -1; }
          .hero-buttons { justify-content: center !important; }
          .hero-stats { justify-content: center !important; }
        }

        @media (max-width: 480px) {
          .hero-grid { padding: 32px 16px 24px; }
          .hero-image-wrap { height: 240px; }
          .hero-buttons { flex-direction: column; align-items: center !important; }
          .hero-cta, .hero-btn-outline { width: 100%; text-align: center; }
        }
      `}</style>

      {/* Background blobs */}
      <div style={{ position: "absolute", width: 500, height: 500, background: "#b8b0e8", borderRadius: "50%", filter: "blur(100px)", opacity: 0.25, top: -150, right: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, background: "#c9b8f0", borderRadius: "50%", filter: "blur(90px)", opacity: 0.2, bottom: -100, right: 200, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, background: "#a8a0e0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15, top: 50, left: -100, pointerEvents: "none" }} />

      <div className="hero-grid">

        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>

          {/* Label */}
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "#f57c20",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: 0,
          }}>
            Trusted Veterinary Care
          </p>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 52px)",
            lineHeight: 1.12,
            color: "#1a1a2e",
            margin: 0,
            letterSpacing: "-0.025em",
          }}>
            Professional Care<br />
            for Your{" "}
            <span style={{ color: "#f57c20", fontStyle: "italic" }}>Beloved Pets</span>
          </h1>

          {/* Description */}
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 15,
            color: "#555570",
            lineHeight: 1.75,
            margin: 0,
            maxWidth: 440,
            fontWeight: 400,
          }}>
            Your trusted partner in pet health. Our experienced veterinarians provide comprehensive care with compassion and expertise, ensuring your furry friends receive the best treatment possible.{" "}
            <span style={{ color: "#f57c20", fontWeight: 700 }}>50% off</span> your first consultation!
          </p>

          {/* Buttons */}
          <div
            className="hero-buttons"
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 2 }}
          >
            <a href="/locations" className="hero-cta">Book Appointment</a>
            <a href="/services" className="hero-btn-outline">View Services</a>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 4 }}
          >
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, fontWeight: 800, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>15+</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#888", margin: "3px 0 0", fontWeight: 500 }}>Years Experience</p>
            </div>
            <div className="stat-divider" />
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, fontWeight: 800, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>50K+</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#888", margin: "3px 0 0", fontWeight: 500 }}>Pets Treated</p>
            </div>
            <div className="stat-divider" />
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, fontWeight: 800, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>4.9</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#888", margin: "3px 0 0", fontWeight: 500 }}>Star Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="hero-image-wrap">
          <img src="/hero.png" alt="Veterinarian caring for a pet" />
        </div>

      </div>
    </section>
  );
}