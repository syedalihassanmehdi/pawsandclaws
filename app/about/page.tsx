import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-background to-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium mb-4">About Us</p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              About Our Veterinary Clinic
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Dedicated to providing exceptional care for your beloved pets since 2009. Our mission is to enhance the lives of animals and the families who love them.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Story Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=450&width=600"
                  alt="PawCare clinic interior"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 aspect-square w-48 rounded-2xl overflow-hidden bg-muted hidden lg:block">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Veterinary team"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <p className="text-primary font-medium mb-2">Our Story</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance mb-6">
                A Legacy of Compassionate Pet Care
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PawCare Veterinary Clinic was founded in 2009 by Dr. Sarah Mitchell with a simple yet powerful vision: to provide every pet with the highest quality medical care while treating both animals and their owners with compassion and respect.
                </p>
                <p>
                  What started as a small practice with just two veterinarians has grown into a network of three full-service clinics, staffed by over 30 dedicated professionals. Despite our growth, we have never lost sight of our founding principles.
                </p>
                <p>
                  Today, we are proud to serve thousands of families in our community, offering comprehensive veterinary services from routine wellness care to advanced surgical procedures. Our commitment to excellence, continuous learning, and genuine love for animals drives everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Why Choose Us</p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-muted-foreground">
              We go above and beyond to ensure your pets receive the best possible care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card text-center">
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Our Team</p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Meet Our Expert Veterinarians
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our experienced team of veterinary professionals is dedicated to your pet's health and wellbeing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamPreview.map((member) => (
              <Card key={member.name} className="bg-card overflow-hidden">
                <div className="aspect-[3/4] bg-muted">
                  <img
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/team">View Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance mb-4">
              Ready to Experience Our Care?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Schedule an appointment today and see why thousands of pet owners trust PawCare with their beloved companions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/locations">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50,000+", label: "Pets Treated" },
  { value: "98%", label: "Satisfied Clients" },
  { value: "30+", label: "Veterinary Specialists" },
]

const features = [
  {
    title: "Professional Team",
    description: "Board-certified veterinarians with specialized training and continuous education.",
    icon: TeamIcon,
  },
  {
    title: "Trusted by Owners",
    description: "Thousands of satisfied pet owners trust us with their beloved companions.",
    icon: TrustIcon,
  },
  {
    title: "Advanced Facilities",
    description: "State-of-the-art medical equipment and modern treatment facilities.",
    icon: FacilityIcon,
  },
  {
    title: "Personalized Care",
    description: "Tailored treatment plans designed for each pet's unique needs.",
    icon: PersonalizedIcon,
  },
]

const teamPreview = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & Chief Veterinarian",
    bio: "15+ years of experience in veterinary medicine with a passion for animal wellness.",
  },
  {
    name: "Dr. James Wilson",
    role: "Veterinary Surgeon",
    bio: "Specializes in orthopedic and soft tissue surgery with advanced training.",
  },
  {
    name: "Dr. Emily Chen",
    role: "Internal Medicine Specialist",
    bio: "Expert in diagnosing and treating complex internal conditions.",
  },
]

// Icon Components
function TeamIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  )
}

function TrustIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function FacilityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  )
}

function PersonalizedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}
