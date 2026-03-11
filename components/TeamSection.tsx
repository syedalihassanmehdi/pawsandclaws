"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const team = [
  {
    name: "Dr. Zaib Mahel",
    role: "Chief Head Surgeon",
    experience: "19+ Years",
    specialties: ["Surgery", "Endoscopy", "Falcon Medicine"],
    bio: "Dr. Zaib Mahel leads our surgical team with over 19 years of veterinary experience. She is renowned for her expertise in complex surgeries.",
    image: "/dr-mahel.png",
    initials: "ZM",
    color: "#f5c842",
  },
  {
    name: "Dr. Mirza Salman",
    role: "Senior Veterinarian",
    experience: "16+ Years",
    specialties: ["Small Animals", "Wild Primates"],
    bio: "With 16+ years dedicated to small animal and wild primate medicine, Dr. Salman provides unparalleled care for exotic and domestic pets.",
    image: "/dr-salman.png",
    initials: "MS",
    color: "#7c6fa0",
  },
  {
    name: "Dr. Asif Iqbal",
    role: "Veterinarian",
    experience: "14 Years",
    specialties: ["Falcon Medicine", "Endoscopy"],
    bio: "Dr. Asif brings 14 years of specialized experience in falcon medicine and endoscopy. His expertise is trusted by pet owners across the region.",
    image: "/dr-asif.png",
    initials: "AI",
    color: "#4caf82",
  },
  {
    name: "Dr. Kiran",
    role: "Veterinarians",
    experience: "8+ Years",
    specialties: ["Small Animals", "Diagnostics"],
    bio: "Dr. Kiran provides compassionate care for cats, dogs, and other small animals. Her gentle approach and thorough diagnostic skills ensure the best outcomes for every patient.",
    image: "/dr-kiran.png",
    initials: "HM",
    color: "#f57c20",
  },
  
];

export default function TeamSection() {
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

        .team-blob-1 { position:absolute; width:500px; height:500px; background:#b8b0e8; border-radius:50%; filter:blur(100px); opacity:0.22; top:-150px; right:0; pointer-events:none; }
        .team-blob-2 { position:absolute; width:400px; height:400px; background:#c9b8f0; border-radius:50%; filter:blur(90px); opacity:0.18; bottom:-100px; right:200px; pointer-events:none; }
        .team-blob-3 { position:absolute; width:300px; height:300px; background:#a8a0e0; border-radius:50%; filter:blur(80px); opacity:0.13; top:50px; left:-100px; pointer-events:none; }

        .team-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 1;
        }

        .team-card {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.95);
          border-radius: 22px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(124,111,205,0.18);
        }

        .team-card-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }
        .team-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.4s ease;
          position: relative;
          z-index: 1;
        }
        .team-card:hover .team-card-image img {
          transform: scale(1.04);
        }

        .team-exp-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #f57c20;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 5px 12px;
          border-radius: 999px;
          z-index: 3;
        }

        .team-initials {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 0;
        }

        .team-name-overlay {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: 12px 14px;
          z-index: 3;
        }

        .specialty-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #eeedf8;
          border: 1px solid rgba(155,151,196,0.2);
          border-radius: 6px;
          padding: 3px 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #6b68a8;
        }

        .team-bio {
          padding: 16px 18px 20px;
          border-top: 1px solid rgba(0,0,0,0.04);
        }

        .team-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f57c20;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .team-cta:hover {
          background: #e06b10;
          transform: translateY(-2px);
        }

        [data-slot="carousel-previous"],
        [data-slot="carousel-next"] {
          position: static !important;
          transform: none !important;
          width: 40px !important;
          height: 40px !important;
          border-radius: 12px !important;
          border: 1.5px solid rgba(255,255,255,0.9) !important;
          background: rgba(255,255,255,0.7) !important;
          backdrop-filter: blur(8px) !important;
          box-shadow: none !important;
          transition: background 0.2s, box-shadow 0.2s !important;
        }
        [data-slot="carousel-previous"]:hover,
        [data-slot="carousel-next"]:hover {
          background: white !important;
          box-shadow: 0 4px 16px rgba(124,111,205,0.15) !important;
        }

        @media (max-width: 768px) {
          .team-inner { padding: 0 20px; }
          .team-header { text-align: left !important; }
          .team-header p, .team-header h2, .team-header .team-desc {
            margin-left: 0 !important;
            margin-right: 0 !important;
            text-align: left !important;
          }
        }

        @media (max-width: 480px) {
          .team-inner { padding: 0 16px; }
          .team-card-image { height: 260px; }
        }
      `}</style>

      <div className="team-blob-1" />
      <div className="team-blob-2" />
      <div className="team-blob-3" />

      <div className="team-inner">

        {/* Header */}
        <div className="team-header" style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "#f57c20",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: "0 0 10px",
          }}>
            Our Experts
          </p>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(26px, 4vw, 44px)",
            letterSpacing: "-0.02em",
            color: "#1a1a2e",
            margin: "0 0 14px",
            lineHeight: 1.15,
          }}>
            Meet Our Lead{" "}
            <span style={{ color: "#f57c20", fontStyle: "italic" }}>Veterinarians</span>
          </h2>
          <p className="team-desc" style={{
            fontSize: 15,
            color: "#555570",
            margin: "0 auto",
            maxWidth: 480,
            lineHeight: 1.75,
            fontWeight: 400,
          }}>
            A dedicated team of specialists committed to providing the highest quality care for your beloved pets.
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">

          {/* Nav */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 24 }}>
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>

          <CarouselContent className="-ml-5">
            {team.map((member) => (
              <CarouselItem
                key={member.name}
                className="pl-5 md:basis-1/2 lg:basis-1/3"
              >
                <div className="team-card">

                  {/* Image area */}
                  <div className="team-card-image" style={{ background: member.color }}>

                    {/* Initials fallback — sits behind the image */}
                    <div className="team-initials">
                      <span style={{
                        fontSize: 72,
                        fontWeight: 800,
                        fontFamily: "'Poppins', sans-serif",
                        color: "rgba(255,255,255,0.28)",
                        letterSpacing: "-0.04em",
                      }}>
                        {member.initials}
                      </span>
                    </div>

                    {/* Photo — hides on error, reveals initials behind */}
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />

                    {/* Experience badge */}
                    <div className="team-exp-badge">{member.experience}</div>

                    {/* Name overlay */}
                    <div className="team-name-overlay">
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        fontSize: 15,
                        color: "#1a1a2e",
                        margin: "0 0 2px",
                      }}>
                        {member.name}
                      </p>
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 12,
                        color: "#f57c20",
                        fontWeight: 600,
                        margin: "0 0 8px",
                      }}>
                        {member.role}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {member.specialties.map((s) => (
                          <span key={s} className="specialty-tag">
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="team-bio">
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      color: "#555570",
                      lineHeight: 1.75,
                      margin: 0,
                      fontWeight: 400,
                    }}>
                      {member.bio}
                    </p>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 52 }}>
          <Link href="/team" className="team-cta">
            View Full Team
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}