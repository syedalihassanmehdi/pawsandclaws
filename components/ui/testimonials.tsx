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
  },
  {
    name: "David Chen",
    pet: "Owner of Luna, Persian Cat",
    content: "I was nervous about online vet consultations but PawCare made it so easy. Luna got the care she needed within minutes.",
    rating: 5,
    initials: "DC",
    color: "#fff0e8",
  },
  {
    name: "Emily Rodriguez",
    pet: "Owner of Buddy, Labrador",
    content: "The 24/7 availability is incredible. When Buddy had an emergency at 2am, PawCare was right there to help us through it.",
    rating: 5,
    initials: "ER",
    color: "#e8f5e9",
  },
  {
    name: "Michael Park",
    pet: "Owner of Mochi, Shih Tzu",
    content: "Booking appointments is so simple and the vets always take time to explain everything. Highly recommend to every pet owner.",
    rating: 5,
    initials: "MP",
    color: "#fce8f0",
  },
  {
    name: "Priya Sharma",
    pet: "Owner of Coco, Beagle",
    content: "My go-to for all of Coco's health needs. The team genuinely cares about the animals and it really shows.",
    rating: 5,
    initials: "PS",
    color: "#e8f0fe",
  },
  {
    name: "James Wilson",
    pet: "Owner of Daisy, Poodle",
    content: "Outstanding service from start to finish. The follow-up care and reminders keep Daisy on track with all her check-ups.",
    rating: 5,
    initials: "JW",
    color: "#fff8e1",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');`}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">

          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#f57c20", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>
                Testimonials
              </p>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(26px, 3vw, 38px)", letterSpacing: "-0.02em", color: "#1a1a2e", margin: 0 }}>
                What Pet Owners Say
              </h2>
              <p style={{ fontSize: 14, color: "#888", marginTop: 8, marginBottom: 0, maxWidth: 360, lineHeight: 1.6 }}>
                Hear from our satisfied clients about their experiences with PawCare.
              </p>
            </div>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 w-10 h-10 rounded-xl border border-white/80 bg-white hover:bg-[#f0effe] shadow-none" />
              <CarouselNext className="static translate-x-0 translate-y-0 w-10 h-10 rounded-xl border border-white/80 bg-white hover:bg-[#f0effe] shadow-none" />
            </div>
          </div>

          {/* Cards */}
          <CarouselContent className="-ml-5">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
                <div
                  className="flex flex-col justify-between bg-white rounded-2xl p-6 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ minHeight: 220 }}
                >
                  {/* Stars */}
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f57c20" stroke="#f57c20" strokeWidth="1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p style={{ fontSize: 14, color: "#555570", lineHeight: 1.75, margin: 0 }}>
                      "{t.content}"
                    </p>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: "#f0effe", margin: "20px 0" }} />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: t.color }}
                    >
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#9b97c4" }}>{t.initials}</span>
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: 13, color: "#1a1a2e", margin: 0 }}>{t.name}</p>
                      <p style={{ fontSize: 11, color: "#aaa", margin: 0, marginTop: 2 }}>{t.pet}</p>
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