"use client"
export default function AboutStory() {
      return (
        <section
          style={{
            background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)",
            fontFamily: "'Poppins', sans-serif",
            padding: "80px 0 100px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    
            .story-image-main {
              border-radius: 24px;
              overflow: hidden;
              aspect-ratio: 4/3;
              position: relative;
              box-shadow: 0 24px 64px rgba(124,111,205,0.18);
            }
            .story-image-main img {
              width: 100%; height: 100%;
              object-fit: cover;
              display: block;
              transition: transform 0.5s ease;
            }
            .story-image-main:hover img { transform: scale(1.04); }
    
            .story-image-small {
              position: absolute;
              bottom: -24px;
              right: -24px;
              width: 160px;
              height: 160px;
              border-radius: 18px;
              overflow: hidden;
              border: 4px solid rgba(255,255,255,0.9);
              box-shadow: 0 12px 36px rgba(124,111,205,0.2);
              display: none;
            }
            .story-image-small img { width: 100%; height: 100%; object-fit: cover; }
    
            .story-layout {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 48px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 72px;
              align-items: center;
              position: relative;
              z-index: 1;
            }
    
            .story-para {
              font-family: 'Poppins', sans-serif;
              font-size: 14.5px;
              color: #555570;
              line-height: 1.8;
              margin: 0;
              font-weight: 400;
            }
    
            @media (min-width: 1024px) {
              .story-image-small { display: block; }
            }
            @media (max-width: 1024px) {
              .story-layout { gap: 48px; padding: 0 32px; }
            }
            @media (max-width: 768px) {
              .story-layout { grid-template-columns: 1fr; gap: 36px; padding: 0 20px; }
            }
            @media (max-width: 480px) {
              .story-layout { padding: 0 16px; }
            }
          `}</style>
    
          {/* Blobs */}
          <div style={{ position: "absolute", width: 500, height: 500, background: "#b8b0e8", borderRadius: "50%", filter: "blur(100px)", opacity: 0.22, top: -150, right: 0, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 400, height: 400, background: "#c9b8f0", borderRadius: "50%", filter: "blur(90px)", opacity: 0.18, bottom: -100, right: 200, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 300, height: 300, background: "#a8a0e0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.13, top: 50, left: -100, pointerEvents: "none" }} />
    
          <div className="story-layout">
    
            {/* LEFT: Image */}
            <div style={{ position: "relative" }}>
              <div className="story-image-main">
                <img src="/ourstory.png" alt="PawCare clinic interior" />
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
              </div>
    
              {/* Small overlay image */}
              <div className="story-image-small">
                <img src="/ourstory2.png" alt="Veterinary team" />
              </div>
    
              {/* Floating badge */}
              <div style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(10px)",
                border: "1.5px solid rgba(255,255,255,0.95)",
                borderRadius: 14,
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 8px 28px rgba(124,111,205,0.14)",
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "#fff5ee", border: "1px solid #fdd5b0",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: "#1a1a2e", margin: 0 }}>Est. 2009</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#888", margin: "2px 0 0", fontWeight: 400 }}>15+ Years of Trust</p>
                </div>
              </div>
            </div>
    
            {/* RIGHT: Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#f57c20",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: 0,
              }}>
                Our Story
              </p>
    
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 3vw, 40px)",
                lineHeight: 1.15,
                color: "#1a1a2e",
                margin: 0,
                letterSpacing: "-0.02em",
              }}>
                A Legacy of{" "}
                <span style={{ color: "#f57c20", fontStyle: "italic" }}>Compassionate</span>{" "}
                Pet Care
              </h2>
    
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <p className="story-para">
                  PawCare Veterinary Clinic was founded in 2009 by Dr. Sarah Mitchell with a simple yet powerful vision: to provide every pet with the highest quality medical care while treating both animals and their owners with compassion and respect.
                </p>
                <p className="story-para">
                  What started as a small practice with just two veterinarians has grown into a network of three full-service clinics, staffed by over 30 dedicated professionals. Despite our growth, we have never lost sight of our founding principles.
                </p>
                <p className="story-para">
                  Today, we are proud to serve thousands of families in our community, offering comprehensive veterinary services from routine wellness care to advanced surgical procedures.
                </p>
              </div>
    
              {/* Mini stats row */}
              <div style={{
                display: "flex",
                gap: 0,
                marginTop: 8,
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
                border: "1.5px solid rgba(255,255,255,0.95)",
                borderRadius: 16,
                overflow: "hidden",
              }}>
                {[
                  { value: "3", label: "Clinics" },
                  { value: "30+", label: "Specialists" },
                  { value: "50K+", label: "Pets Treated" },
                ].map((s, i) => (
                  <div key={s.label} style={{
                    flex: 1,
                    padding: "18px 20px",
                    textAlign: "center",
                    borderRight: i < 2 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 22, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>{s.value}</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#888", margin: "3px 0 0", fontWeight: 500 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
    
          </div>
        </section>
      );
    }