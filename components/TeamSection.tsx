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
    image: "/team/zaib.jpg",
    initials: "ZM",
    color: "#f5c842",
  },
  {
    name: "Dr. Mirza Salman",
    role: "Senior Veterinarian",
    experience: "16+ Years",
    specialties: ["Small Animals", "Wild Primates"],
    bio: "With 16+ years dedicated to small animal and wild primate medicine, Dr. Salman provides unparalleled care for exotic and domestic pets.",
    image: "/team/salman.jpg",
    initials: "MS",
    color: "#7c6fa0",
  },
  {
    name: "Dr. Asif Iqbal",
    role: "Veterinarian",
    experience: "14 Years",
    specialties: ["Falcon Medicine", "Endoscopy"],
    bio: "Dr. Asif brings 14 years of specialized experience in falcon medicine and endoscopy. His expertise is trusted by pet owners across the region.",
    image: "/team/asif.jpg",
    initials: "AI",
    color: "#4caf82",
  },
  {
    name: "Dr. Hana Malik",
    role: "Pet Dentist",
    experience: "10+ Years",
    specialties: ["Dental Care", "Oral Surgery"],
    bio: "Dr. Hana specializes in veterinary dentistry, helping pets maintain healthy teeth and gums through gentle and effective treatments.",
    image: "/team/hana.jpg",
    initials: "HM",
    color: "#f57c20",
  },
  {
    name: "Dr. Omar Farooq",
    role: "Dermatology Specialist",
    experience: "12 Years",
    specialties: ["Skin Issues", "Allergies"],
    bio: "Dr. Omar is our go-to expert for pet skin conditions and allergies, with a decade of experience treating complex dermatological cases.",
    image: "/team/omar.jpg",
    initials: "OF",
    color: "#e05c7a",
  },
];

export default function TeamSection() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "#f7f6fb",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');
        .specialty-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #eeedf8;
          border-radius: 6px;
          padding: 3px 8px;
          font-size: 11px;
          font-weight: 600;
          color: #6b68a8;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
  <p className="text-primary font-medium mb-2" style={{ fontSize: 14 }}>Our Experts</p>
  <h2 style={{ fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.02em", color: "#1a1a2e", margin: 0 }}>
    Meet Our Lead Veterinarians
  </h2>
  <p style={{ fontSize: 15, color: "#888", marginTop: 12, maxWidth: 480, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
    A dedicated team of specialists committed to providing the highest quality care for your beloved pets.
  </p>
</div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">

          <div className="flex justify-end gap-2 mb-6">
            <CarouselPrevious className="static translate-x-0 translate-y-0 w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#eeedf8] shadow-none" />
            <CarouselNext className="static translate-x-0 translate-y-0 w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#eeedf8] shadow-none" />
          </div>

          <CarouselContent className="-ml-5">
            {team.map((member) => (
              <CarouselItem key={member.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl" style={{ border: "1px solid rgba(0,0,0,0.05)" }}>

                  {/* Image area */}
                  <div className="relative" style={{ height: 260, background: member.color }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />

                    {/* Experience badge */}
                    <div style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      background: "#f57c20",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      padding: "5px 10px",
                      borderRadius: 999,
                    }}>
                      {member.experience}
                    </div>

                    {/* Initials fallback overlay */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 0 }}>
                      <span style={{ fontSize: 64, fontWeight: 800, color: "rgba(255,255,255,0.3)" }}>{member.initials}</span>
                    </div>

                    {/* Name card overlay */}
                    <div style={{
                      position: "absolute",
                      bottom: 14,
                      left: 14,
                      right: 14,
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(8px)",
                      borderRadius: 14,
                      padding: "12px 14px",
                    }}>
                      <p style={{ fontWeight: 800, fontSize: 15, color: "#1a1a2e", margin: 0 }}>{member.name}</p>
                      <p style={{ fontSize: 12, color: "#f57c20", fontWeight: 600, margin: "2px 0 8px" }}>{member.role}</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((s) => (
                          <span key={s} className="specialty-tag">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9b97c4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div style={{ padding: "16px 18px 18px" }}>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, margin: 0 }}>
                      {member.bio}
                    </p>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/team"
            style={{
              background: "#f57c20",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.04em",
              padding: "14px 32px",
              borderRadius: 999,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "background 0.2s, transform 0.15s",
            }}
            className="hover:bg-[#e06b10] hover:-translate-y-0.5"
          >
            View Full Team
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}