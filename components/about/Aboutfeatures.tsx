"use client"
const features = [
      {
        title: "Professional Team",
        description: "Board-certified veterinarians with specialized training and continuous education.",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        ),
      },
      {
        title: "Trusted by Owners",
        description: "Thousands of satisfied pet owners trust us with their beloved companions.",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        ),
      },
      {
        title: "Advanced Facilities",
        description: "State-of-the-art medical equipment and modern treatment facilities.",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
        ),
      },
      {
        title: "Personalized Care",
        description: "Tailored treatment plans designed for each pet's unique needs and lifestyle.",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        ),
      },
    ];
    
    export default function AboutFeatures() {
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
    
            .feat-blob-1 { position:absolute; width:500px; height:500px; background:#b8b0e8; border-radius:50%; filter:blur(100px); opacity:0.22; top:-150px; right:0; pointer-events:none; }
            .feat-blob-2 { position:absolute; width:400px; height:400px; background:#c9b8f0; border-radius:50%; filter:blur(90px); opacity:0.18; bottom:-100px; right:200px; pointer-events:none; }
            .feat-blob-3 { position:absolute; width:300px; height:300px; background:#a8a0e0; border-radius:50%; filter:blur(80px); opacity:0.13; top:50px; left:-100px; pointer-events:none; }
    
            .feat-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; position: relative; z-index: 1; }
    
            .feat-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 20px;
              margin-top: 56px;
            }
    
            .feat-card {
              background: rgba(255,255,255,0.78);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              border: 1.5px solid rgba(255,255,255,0.95);
              border-radius: 20px;
              padding: 30px 24px;
              text-align: center;
              transition: transform 0.25s ease, box-shadow 0.25s ease;
            }
            .feat-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 20px 56px rgba(124,111,205,0.15);
            }
            .feat-card:hover .feat-icon { transform: scale(1.1) rotate(-5deg); }
    
            .feat-icon {
              width: 52px; height: 52px; border-radius: 14px;
              background: #fff5ee; border: 1px solid #fdd5b0;
              display: flex; align-items: center; justify-content: center;
              margin: 0 auto 18px;
              transition: transform 0.25s ease;
            }
    
            @media (max-width: 1024px) {
              .feat-grid { grid-template-columns: repeat(2, 1fr); }
              .feat-inner { padding: 0 32px; }
            }
            @media (max-width: 640px) {
              .feat-grid { grid-template-columns: 1fr; }
              .feat-inner { padding: 0 20px; }
            }
            @media (max-width: 480px) {
              .feat-inner { padding: 0 16px; }
            }
          `}</style>
    
          <div className="feat-blob-1" />
          <div className="feat-blob-2" />
          <div className="feat-blob-3" />
    
          <div className="feat-inner">
            {/* Header */}
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "#f57c20", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>
                Why Choose Us
              </p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 42px)", letterSpacing: "-0.02em", color: "#1a1a2e", margin: "0 0 14px", lineHeight: 1.15 }}>
                What{" "}
                <span style={{ color: "#f57c20", fontStyle: "italic" }}>Sets Us Apart</span>
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#555570", margin: 0, lineHeight: 1.75, fontWeight: 400 }}>
                We go above and beyond to ensure your pets receive the best possible care.
              </p>
            </div>
    
            {/* Cards */}
            <div className="feat-grid">
              {features.map((f) => (
                <div key={f.title} className="feat-card">
                  <div className="feat-icon">{f.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: "#1a1a2e", margin: "0 0 8px" }}>
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#555570", lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }