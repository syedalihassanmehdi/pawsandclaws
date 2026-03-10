"use client"
import Link from "next/link";

const teamPreview = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & Chief Veterinarian",
    experience: "15+ Years",
    bio: "Passionate about animal wellness with 15+ years of experience in veterinary medicine.",
    image: "/team/sarah.jpg",
    initials: "SM",
    color: "#f5c842",
  },
  {
    name: "Dr. James Wilson",
    role: "Veterinary Surgeon",
    experience: "12 Years",
    bio: "Specializes in orthopedic and soft tissue surgery with advanced training and expertise.",
    image: "/team/james.jpg",
    initials: "JW",
    color: "#7c6fa0",
  },
  {
    name: "Dr. Emily Chen",
    role: "Internal Medicine Specialist",
    experience: "10 Years",
    bio: "Expert in diagnosing and treating complex internal conditions in small animals.",
    image: "/team/emily.jpg",
    initials: "EC",
    color: "#4caf82",
  },
];

export default function AboutTeamPreview() {
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

        .atp-blob-1 { position:absolute; width:500px; height:500px; background:#b8b0e8; border-radius:50%; filter:blur(100px); opacity:0.22; top:-150px; right:0; pointer-events:none; }
        .atp-blob-2 { position:absolute; width:400px; height:400px; background:#c9b8f0; border-radius:50%; filter:blur(90px); opacity:0.18; bottom:-100px; right:200px; pointer-events:none; }
        .atp-blob-3 { position:absolute; width:300px; height:300px; background:#a8a0e0; border-radius:50%; filter:blur(80px); opacity:0.13; top:50px; left:-100px; pointer-events:none; }

        .atp-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; position: relative; z-index: 1; }

        .atp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 56px;
        }

        .atp-card {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.95);
          border-radius: 22px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .atp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(124,111,205,0.18);
        }

        .atp-card-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .atp-card-image img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
        .atp-card:hover .atp-card-image img { transform: scale(1.04); }

        .atp-exp-badge {
          position: absolute; top: 14px; right: 14px;
          background: #f57c20; color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.06em;
          padding: 5px 12px; border-radius: 999px;
          z-index: 2;
        }

        .atp-initials {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          z-index: 0;
        }

        .atp-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #f57c20; color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 700; font-size: 13px;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 14px 32px; border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 6px 20px rgba(245,124,32,0.3);
        }
        .atp-cta:hover { background: #e06b10; transform: translateY(-2px); }

        .specialty-tag {
          display: inline-flex; align-items: center; gap: 4px;
          background: #eeedf8; border: 1px solid rgba(155,151,196,0.2);
          border-radius: 6px; padding: 3px 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px; font-weight: 600; color: #6b68a8;
        }

        @media (max-width: 1024px) {
          .atp-grid { grid-template-columns: repeat(2, 1fr); }
          .atp-inner { padding: 0 32px; }
        }
        @media (max-width: 640px) {
          .atp-grid { grid-template-columns: 1fr; }
          .atp-inner { padding: 0 20px; }
        }
        @media (max-width: 480px) {
          .atp-inner { padding: 0 16px; }
        }
      `}</style>

      <div className="atp-blob-1" />
      <div className="atp-blob-2" />
      <div className="atp-blob-3" />

      <div className="atp-inner">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "#f57c20", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>
            Our Team
          </p>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 42px)", letterSpacing: "-0.02em", color: "#1a1a2e", margin: "0 0 14px", lineHeight: 1.15 }}>
            Meet Our{" "}
            <span style={{ color: "#f57c20", fontStyle: "italic" }}>Expert Veterinarians</span>
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#555570", margin: 0, lineHeight: 1.75, fontWeight: 400 }}>
            Our experienced team of veterinary professionals is dedicated to your pet's health and wellbeing.
          </p>
        </div>

        {/* Cards */}
        <div className="atp-grid">
          {teamPreview.map((member) => (
            <div key={member.name} className="atp-card">
              {/* Image */}
              <div className="atp-card-image" style={{ background: member.color }}>
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="atp-initials">
                  <span style={{ fontSize: 64, fontWeight: 800, fontFamily: "'Poppins', sans-serif", color: "rgba(255,255,255,0.28)", letterSpacing: "-0.04em" }}>
                    {member.initials}
                  </span>
                </div>
                <div className="atp-exp-badge">{member.experience}</div>

                {/* Name overlay */}
                <div style={{
                  position: "absolute", bottom: 14, left: 14, right: 14,
                  background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)",
                  borderRadius: 14, padding: "12px 14px", zIndex: 2,
                }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 14, color: "#1a1a2e", margin: "0 0 2px" }}>{member.name}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#f57c20", fontWeight: 600, margin: 0 }}>{member.role}</p>
                </div>
              </div>

              {/* Bio */}
              <div style={{ padding: "16px 18px 20px", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#555570", lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <Link href="/team" className="atp-cta">
            View Full Team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}