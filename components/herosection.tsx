export default function Hero() {
      return (
        <section
          style={{
            background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)",
            fontFamily: "'DM Sans', sans-serif",
            minHeight: "420px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');
    
            .hero-cta {
              background: #f57c20;
              color: #fff;
              font-family: 'DM Sans', sans-serif;
              font-weight: 700;
              font-size: 13px;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              padding: 14px 32px;
              border-radius: 8px;
              border: none;
              cursor: pointer;
              transition: background 0.2s, transform 0.15s;
              display: inline-block;
              text-decoration: none;
            }
            .hero-cta:hover { background: #e06b10; transform: translateY(-1px); }
    
            .stat-divider { width: 1px; height: 40px; background: rgba(0,0,0,0.12); }
    
            .hero-grid {
              max-width: 1200px;
              margin: 0 auto;
              padding: 60px 48px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 48px;
              align-items: center;
              min-height: 420px;
              position: relative;
              z-index: 1;
            }
    
            .hero-image-wrap {
              height: 480px;
              position: relative;
              margin-right: -48px;
            }
    
            .hero-image-wrap img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              border-radius: 24px;
            }
    
            .hero-btn-outline {
              font-family: 'DM Sans', sans-serif;
              font-weight: 600;
              font-size: 13px;
              letter-spacing: 0.06em;
              text-transform: uppercase;
              padding: 14px 28px;
              border-radius: 8px;
              border: 1.5px solid rgba(0,0,0,0.18);
              color: #1a1a2e;
              background: transparent;
              cursor: pointer;
              text-decoration: none;
              display: inline-block;
              transition: background 0.2s, color 0.2s;
            }
            .hero-btn-outline:hover {
              background: rgba(0,0,0,0.05);
            }
    
            /* Tablet */
            @media (max-width: 1024px) {
              .hero-grid {
                grid-template-columns: 1fr 1fr;
                gap: 32px;
                padding: 50px 32px;
              }
              .hero-image-wrap {
                height: 380px;
                margin-right: -32px;
              }
            }
    
            /* Mobile */
            @media (max-width: 768px) {
              .hero-grid {
                grid-template-columns: 1fr;
                padding: 40px 24px 20px;
                gap: 32px;
                min-height: unset;
                text-align: center;
              }
              .hero-image-wrap {
                height: 300px;
                margin-right: 0;
                order: -1;
              }
              .hero-buttons {
                justify-content: center !important;
              }
              .hero-stats {
                justify-content: center !important;
              }
            }
    
            /* Small mobile */
            @media (max-width: 480px) {
              .hero-grid {
                padding: 32px 16px 16px;
              }
              .hero-image-wrap {
                height: 240px;
              }
              .hero-buttons {
                flex-direction: column;
                align-items: center !important;
              }
              .hero-cta, .hero-btn-outline {
                width: 100%;
                text-align: center;
              }
            }
          `}</style>
    
          {/* Background blobs */}
          <div style={{ position: "absolute", width: 500, height: 500, background: "#b8b0e8", borderRadius: "50%", filter: "blur(100px)", opacity: 0.25, top: -150, right: 0, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 400, height: 400, background: "#c9b8f0", borderRadius: "50%", filter: "blur(90px)", opacity: 0.2, bottom: -100, right: 200, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 300, height: 300, background: "#a8a0e0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15, top: 50, left: -100, pointerEvents: "none" }} />
    
          <div className="hero-grid">
    
            {/* LEFT: Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h1 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 52px)",
                lineHeight: 1.15,
                color: "#1a1a2e",
                margin: 0,
                letterSpacing: "-0.02em",
              }}>
                Professional Veterinary Care for Your Pets
              </h1>
    
              <p style={{
                fontSize: 15,
                color: "#555570",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 460,
              }}>
                Your trusted partner in pet health. Our experienced veterinarians provide comprehensive care with compassion and expertise, ensuring your furry friends receive the best treatment possible.{" "}
                <span style={{ color: "#f57c20", fontWeight: 700 }}>50% off</span> your first consultation!
              </p>
    
              <div
                className="hero-buttons"
                style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}
              >
                <a href="/locations" className="hero-cta">Book Appointment</a>
                <a href="/services" className="hero-btn-outline">View Services</a>
              </div>
    
              <div
                className="hero-stats"
                style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 12 }}
              >
                <div>
                  <p style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", margin: 0 }}>15+</p>
                  <p style={{ fontSize: 12, color: "#888", margin: 0, marginTop: 2 }}>Years Experience</p>
                </div>
                <div className="stat-divider" />
                <div>
                  <p style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", margin: 0 }}>50K+</p>
                  <p style={{ fontSize: 12, color: "#888", margin: 0, marginTop: 2 }}>Pets Treated</p>
                </div>
                <div className="stat-divider" />
                <div>
                  <p style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", margin: 0 }}>4.9</p>
                  <p style={{ fontSize: 12, color: "#888", margin: 0, marginTop: 2 }}>Star Rating</p>
                </div>
              </div>
            </div>
    
            {/* RIGHT: Image */}
            <div className="hero-image-wrap">
              <img
                src="/hero.png"
                alt="Veterinarian caring for a pet"
              />
            </div>
    
          </div>
        </section>
      );
    }