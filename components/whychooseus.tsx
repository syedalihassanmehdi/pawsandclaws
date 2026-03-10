"use client";

import { Shield, Clock, Heart, Award, Users, Stethoscope } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Certified Experts",
    description: "Board-certified veterinarians with decades of combined clinical experience.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency care around the clock so your pet is never without help.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every pet like our own — with patience, love, and expertise.",
  },
  {
    icon: Award,
    title: "Award-Winning Clinic",
    description: "Recognized as the region's top veterinary clinic for 5 consecutive years.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A full team of specialists, nurses, and support staff focused on your pet.",
  },
  {
    icon: Stethoscope,
    title: "Modern Facilities",
    description: "State-of-the-art equipment for accurate diagnosis and effective treatment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)",
        padding: "90px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .benefit-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 18px;
          border-radius: 14px;
          border: 1.5px solid transparent;
          transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
        }
        .benefit-item:hover {
          background: rgba(255,255,255,0.75);
          border-color: rgba(255,255,255,0.95);
          transform: translateX(4px);
          box-shadow: 0 8px 32px rgba(124,111,205,0.10);
        }
        .benefit-icon {
          width: 44px;
          height: 44px;
          border-radius: 11px;
          background: #fff5ee;
          border: 1px solid #fdd5b0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.22s ease;
        }
        .benefit-item:hover .benefit-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        .wcu-image-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: 0 32px 80px rgba(100, 90, 180, 0.18);
        }
        .wcu-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .wcu-image-wrap:hover img {
          transform: scale(1.04);
        }

        .stat-badge {
          position: absolute;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1.5px solid rgba(255,255,255,0.9);
        }

        .wcu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 12px;
        }

        .wcu-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .wcu-layout { grid-template-columns: 1fr; gap: 48px; }
          .wcu-image-col { order: -1; }
        }
        @media (max-width: 640px) {
          .wcu-inner { padding: 0 20px !important; }
          .wcu-heading { font-size: 26px !important; }
          .wcu-grid { grid-template-columns: 1fr; }
          .stat-badge-happy { display: none; }
        }
      `}</style>

      {/* Background blobs */}
      <div style={{ position: "absolute", width: 500, height: 500, background: "#b8b0e8", borderRadius: "50%", filter: "blur(100px)", opacity: 0.25, top: -150, right: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, background: "#c9b8f0", borderRadius: "50%", filter: "blur(90px)", opacity: 0.2, bottom: -100, right: 200, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, background: "#a8a0e0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15, top: 50, left: -100, pointerEvents: "none" }} />

      <div className="wcu-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        <div className="wcu-layout">

          {/* LEFT: Content */}
          <div>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#f57c20",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 10px",
            }}>
              Why Choose Us
            </p>

            <h2
              className="wcu-heading"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3.5vw, 42px)",
                lineHeight: 1.15,
                color: "#1a1a2e",
                margin: "0 0 18px",
                letterSpacing: "-0.02em",
              }}
            >
              Trusted Care for Your{" "}
              <span style={{ color: "#f57c20", fontStyle: "italic" }}>Beloved</span>{" "}
              Companions
            </h2>

            <p style={{
              fontSize: 15,
              color: "#555570",
              lineHeight: 1.75,
              margin: "0 0 32px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              maxWidth: 480,
            }}>
              At PawCare, we combine medical expertise with genuine compassion. Our state-of-the-art facilities and dedicated team ensure your pets receive the highest quality care in a comfortable, stress-free environment.
            </p>

            {/* Benefits Grid */}
            <div className="wcu-grid">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="benefit-item">
                  <div className="benefit-icon">
                    <benefit.icon size={20} color="#f57c20" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#1a1a2e",
                      margin: "0 0 4px",
                    }}>
                      {benefit.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 12.5,
                      color: "#555570",
                      lineHeight: 1.65,
                      margin: 0,
                      fontWeight: 400,
                    }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="wcu-image-col" style={{ position: "relative" }}>
            <div className="wcu-image-wrap">
              <img
                src="/whychooseus.png"
                alt="Modern veterinary clinic"
              />
              {/* Gradient overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(26,26,46,0.18) 0%, transparent 60%)",
                pointerEvents: "none",
              }} />
            </div>

            {/* Floating stat badge — bottom left */}
            <div className="stat-badge" style={{ bottom: -18, left: 24 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "#fff5ee", border: "1px solid #fdd5b0",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Heart size={18} color="#f57c20" strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 18, color: "#1a1a2e", margin: 0, lineHeight: 1 }}>50K+</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#888", margin: "3px 0 0", fontWeight: 500 }}>Pets Treated</p>
              </div>
            </div>

            {/* Floating stat badge — top right */}
            <div className="stat-badge stat-badge-happy" style={{ top: -18, right: 24 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "#fff5ee", border: "1px solid #fdd5b0",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Award size={18} color="#f57c20" strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 18, color: "#1a1a2e", margin: 0, lineHeight: 1 }}>4.9 Stars</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#888", margin: "3px 0 0", fontWeight: 500 }}>Client Rating</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}