import Link from "next/link"
import { Button } from "@/components/ui/button"
import PetProblemsSection from "@/components/ui/PetProblemsSection"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialsSection from "@/components/ui/testimonials"
import CTASection from "@/components/ui/Ctasection"
import TeamSection from "@/components/TeamSection"
export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
  `}</style>

  {/* Background blobs matching the image */}
  <div style={{ position: "absolute", width: 500, height: 500, background: "#b8b0e8", borderRadius: "50%", filter: "blur(100px)", opacity: 0.25, top: -150, right: 0, pointerEvents: "none" }} />
  <div style={{ position: "absolute", width: 400, height: 400, background: "#c9b8f0", borderRadius: "50%", filter: "blur(90px)", opacity: 0.2, bottom: -100, right: 200, pointerEvents: "none" }} />
  <div style={{ position: "absolute", width: 300, height: 300, background: "#a8a0e0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15, top: 50, left: -100, pointerEvents: "none" }} />

  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", minHeight: 420, position: "relative", zIndex: 1 }}>

    {/* LEFT: Content */}
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.15, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>
        Professional Veterinary Care for Your Pets
      </h1>

      <p style={{ fontSize: 16, color: "#555570", lineHeight: 1.65, margin: 0, maxWidth: 460 }}>
        Your trusted partner in pet health. Our experienced veterinarians provide comprehensive care with compassion and expertise, ensuring your furry friends receive the best treatment possible.{" "}
        <span style={{ color: "#f57c20", fontWeight: 700 }}>50% off</span> your first consultation!
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
        <a href="/locations" className="hero-cta">Book Appointment</a>
        <a href="/services" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: 8, border: "1.5px solid rgba(0,0,0,0.18)", color: "#1a1a2e", background: "transparent", cursor: "pointer", textDecoration: "none", display: "inline-block" }}>
          View Services
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 12 }}>
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
    <div style={{ height: 380, position: "relative" }}>
      <img
        src="/hero-image.png"
        alt="Veterinarian caring for a pet"
        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 24 }}
      />
    </div>

  </div>
</section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Our Services</p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Comprehensive Pet Care Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              From routine checkups to emergency care, we provide a full range of veterinary services to keep your pets healthy and happy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:underline"
                  >
                    Learn more
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-2">Why Choose Us</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance mb-6">
                Trusted Care for Your Beloved Companions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At PawCare, we combine medical expertise with genuine compassion. Our state-of-the-art facilities and dedicated team ensure your pets receive the highest quality care in a comfortable, stress-free environment.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-card">
                <img
                  src="/placeholder.svg?height=450&width=600"
                  alt="Modern veterinary clinic"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* whats Bothering your pet */}   
      <PetProblemsSection />       
      {/* team section */}
      <TeamSection />

                  {/* CTA Section */}
      < CTASection/>
      
      {/* Testimonials Section */}
      <TestimonialsSection />

      
    </div>
  )
}

const services = [
  {
    title: "General Checkup",
    description: "Comprehensive health examinations to ensure your pet stays in optimal condition.",
    icon: StethoscopeIcon,
  },
  {
    title: "Vaccination",
    description: "Protect your pets with essential vaccines and preventive immunizations.",
    icon: SyringeIcon,
  },
  {
    title: "Pet Surgery",
    description: "Safe surgical procedures performed by experienced veterinary surgeons.",
    icon: SurgeryIcon,
  },
  {
    title: "Dental Care",
    description: "Complete dental services including cleaning, extraction, and oral health.",
    icon: ToothIcon,
  },
  {
    title: "Skin Treatment",
    description: "Diagnosis and treatment for allergies, infections, and skin conditions.",
    icon: SkinIcon,
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency services for urgent pet health situations.",
    icon: EmergencyIcon,
  },
]

const benefits = [
  {
    title: "Experienced Veterinarians",
    description: "Board-certified professionals with years of expertise.",
    icon: AwardIcon,
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art diagnostic and treatment technology.",
    icon: EquipmentIcon,
  },
  {
    title: "Compassionate Care",
    description: "Gentle, stress-free environment for your pets.",
    icon: HeartIcon,
  },
  {
    title: "Multiple Locations",
    description: "Conveniently located clinics across the city.",
    icon: LocationIcon,
  },
]

const locations = [
  {
    name: "PawCare Downtown",
    type: "Main Branch",
    address: "123 Pet Care Lane, Downtown",
    phone: "(555) 123-4567",
  },
  {
    name: "PawCare Westside",
    type: "Branch",
    address: "456 Animal Ave, Westside",
    phone: "(555) 234-5678",
  },
  {
    name: "PawCare Eastview",
    type: "Branch",
    address: "789 Vet Street, Eastview",
    phone: "(555) 345-6789",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    pet: "Owner of Max (Golden Retriever)",
    content: "The team at PawCare is absolutely wonderful. They treated Max with such care and professionalism. Highly recommend!",
  },
  {
    name: "Michael Chen",
    pet: "Owner of Whiskers (Persian Cat)",
    content: "Been coming here for 3 years. The vets are knowledgeable and the staff is always friendly. My cat loves them!",
  },
  {
    name: "Emily Rodriguez",
    pet: "Owner of Buddy (Beagle)",
    content: "Emergency visit at 2 AM and they were there for us. Can not thank them enough for saving Buddy's life.",
  },
]

// Icon Components
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3m0 0a3 3 0 003-3V9a3 3 0 00-3-3m0 15a3 3 0 01-3-3V9a3 3 0 013-3m0 0V3m0 3h.008v.008H12V6zm6 6a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function SyringeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function SurgeryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.047 2.047a3.578 3.578 0 01-5.058-.058l-.025-.025a3.578 3.578 0 01-.057-5.058L14.5 8.75" />
    </svg>
  )
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  )
}

function SkinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
}

function EmergencyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  )
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  )
}

function EquipmentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 8.25h-11L5 14.5m14 0H5" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}
