"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    pet: "Owner of Max, Golden Retriever",
    content: "PawCare has been an absolute lifesaver. The vets are so caring and professional. Max always leaves happy and healthy!",
    rating: 5,
    initials: "SJ",
    color: "#f0effe",
    textColor: "#9b97c4",
  },
  {
    name: "David Chen",
    pet: "Owner of Luna, Persian Cat",
    content: "I was nervous about online vet consultations but PawCare made it so easy. Luna got the care she needed within minutes.",
    rating: 5,
    initials: "DC",
    color: "#fff5ee",
    textColor: "#f57c20",
  },
  {
    name: "Emily Rodriguez",
    pet: "Owner of Buddy, Labrador",
    content: "The 24/7 availability is incredible. When Buddy had an emergency at 2am, PawCare was right there to help us through it.",
    rating: 5,
    initials: "ER",
    color: "#edfaf8",
    textColor: "#2a9d8f",
  },
  {
    name: "Michael Park",
    pet: "Owner of Mochi, Shih Tzu",
    content: "Booking appointments is so simple and the vets always take time to explain everything. Highly recommend to every pet owner.",
    rating: 5,
    initials: "MP",
    color: "#fff0f3",
    textColor: "#e05c7a",
  },
  {
    name: "Priya Sharma",
    pet: "Owner of Coco, Beagle",
    content: "My go-to for all of Coco's health needs. The team genuinely cares about the animals and it really shows.",
    rating: 5,
    initials: "PS",
    color: "#f0effe",
    textColor: "#9b97c4",
  },
  {
    name: "James Wilson",
    pet: "Owner of Daisy, Poodle",
    content: "Outstanding service from start to finish. The follow-up care and reminders keep Daisy on track with all her check-ups.",
    rating: 5,
    initials: "JW",
    color: "#fff5ee",
    textColor: "#f57c20",
  },
];

export default function TestimonialsSection() {
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

        .tm-blob-1 { position:absolute; width:500px; height:500px; background:#b8b0e8; border-radius:50%; filter:blur(100px); opacity:0.22; top:-150px; right:0; pointer-events:none; }
        .tm-blob-2 { position:absolute; width:400px; height:400px; background:#c9b8f0; border-radius:50%; filter:blur(90px); opacity:0.18; bottom:-100px; right:200px; pointer-events:none; }
        .tm-blob-3 { position:absolute; width:300px; height:300px; background:#a8a0e0; border-radius:50%; filter:blur(80px); opacity:0.13; top:50px; left:-100px; pointer-events:none; }

        .tm-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 1;
        }

        .tm-card {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.95);
          border-radius: 20px;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 230px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .tm-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 56px rgba(124,111,205,0.15);
        }

        .tm-quote-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #fff5ee;
          border: 1px solid #fdd5b0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          flex-shrink: 0;
        }

        .tm-divider {
          height: 1px;
          background: rgba(155,151,196,0.15);
          margin: 18px 0;
        }

        .tm-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 13px;
        }

        /* Carousel nav overrides */
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
          .tm-inner { padding: 0 20px; }
          .tm-header { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
        }

        @media (max-width: 480px) {
          .tm-inner { padding: 0 16px; }
          .tm-card { padding: 22px 20px; min-height: unset; }
        }
      `}</style>

      <div className="tm-blob-1" />
      <div className="tm-blob-2" />
      <div className="tm-blob-3" />

      <div className="tm-inner">
        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">

          {/* Header */}
          <div
            className="tm-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
              gap: 16,
            }}
          >
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
                Testimonials
              </p>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 3vw, 42px)",
                letterSpacing: "-0.02em",
                color: "#1a1a2e",
                margin: "0 0 10px",
                lineHeight: 1.15,
              }}>
                What Pet Owners{" "}
                <span style={{ color: "#f57c20", fontStyle: "italic" }}>Say</span>
              </h2>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                color: "#555570",
                margin: 0,
                maxWidth: 380,
                lineHeight: 1.7,
                fontWeight: 400,
              }}>
                Hear from our satisfied clients about their experiences with PawCare.
              </p>
            </div>

            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>

          {/* Cards */}
          <CarouselContent className="-ml-5">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
                <div className="tm-card">

                  {/* Top: quote icon + stars + text */}
                  <div>
                    {/* Quote icon */}
                    <div className="tm-quote-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#f57c20">
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002-.004zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.016.66-1.065 1.515-1.867 2.558-2.403L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002-.004z"/>
                      </svg>
                    </div>

                    {/* Stars */}
                    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f57c20" stroke="#f57c20" strokeWidth="1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>

                    {/* Quote text */}
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13.5,
                      color: "#555570",
                      lineHeight: 1.75,
                      margin: 0,
                      fontWeight: 400,
                    }}>
                      "{t.content}"
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="tm-divider" />

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      className="tm-avatar"
                      style={{ background: t.color, color: t.textColor }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: 13,
                        color: "#1a1a2e",
                        margin: 0,
                      }}>
                        {t.name}
                      </p>
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 11,
                        color: "#888",
                        margin: "2px 0 0",
                        fontWeight: 400,
                      }}>
                        {t.pet}
                      </p>
                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </div>
    </section>
  );
}