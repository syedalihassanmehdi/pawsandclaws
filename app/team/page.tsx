import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-background to-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium mb-4">Our Team</p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Meet Our Veterinary Team
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our dedicated team of veterinary professionals combines expertise, compassion, and a genuine love for animals to provide the best possible care for your pets.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Leadership</p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Our Leadership Team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Experienced leaders guiding our clinic with vision and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <Card key={member.name} className="bg-card overflow-hidden group">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.specialization}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <ExperienceIcon className="h-4 w-4 text-primary" />
                    <span>{member.experience} years experience</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <LinkedInIcon className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <EmailIcon className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Veterinary Staff */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Veterinary Staff</p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Our Veterinarians
            </h2>
            <p className="mt-4 text-muted-foreground">
              Skilled veterinarians committed to your pet's health and happiness.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {veterinaryStaff.map((member) => (
              <Card key={member.name} className="bg-card overflow-hidden group">
                <div className="aspect-square bg-muted overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Support Staff</p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Our Care Team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dedicated professionals ensuring smooth operations and exceptional client service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStaff.map((member) => (
              <Card key={member.name} className="bg-card overflow-hidden group">
                <div className="aspect-square bg-muted overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-card">
                <img
                  src="/placeholder.svg?height=450&width=600"
                  alt="Veterinary team working together"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <p className="text-primary font-medium mb-2">Why Our Team</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance mb-6">
                Why Trust Our Veterinarians
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team is united by a shared passion for animal welfare and a commitment to excellence. Every member brings unique skills and perspectives that enhance our ability to care for your pets.
              </p>
              <div className="space-y-6">
                {teamFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="bg-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <p className="text-primary font-medium mb-2">Careers</p>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance mb-4">
                  Join Our Team
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Are you passionate about animal care? We are always looking for talented individuals to join our growing team. Explore our current openings and become part of the PawCare family.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Competitive compensation packages", "Continuing education support", "Collaborative work environment", "Employee pet care benefits"].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckIcon className="h-4 w-4 text-primary shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href="/contact">View Open Positions</Link>
                </Button>
              </div>
              <div className="aspect-[4/3] lg:aspect-auto bg-muted">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Join our veterinary team"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance mb-4">
              Ready to Meet Our Team?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Schedule an appointment and experience the compassionate care our team provides firsthand.
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

const leadershipTeam = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & Chief Veterinarian",
    specialization: "Small Animal Medicine",
    experience: 18,
    bio: "Dr. Mitchell founded PawCare with a vision to provide exceptional veterinary care. Her passion for animal welfare drives our clinic's mission.",
  },
  {
    name: "Dr. James Wilson",
    role: "Head of Surgery",
    specialization: "Veterinary Surgery",
    experience: 15,
    bio: "Dr. Wilson leads our surgical department with expertise in orthopedic and soft tissue procedures, ensuring the best outcomes for our patients.",
  },
  {
    name: "Dr. Emily Chen",
    role: "Head of Internal Medicine",
    specialization: "Internal Medicine",
    experience: 12,
    bio: "Dr. Chen specializes in diagnosing and treating complex internal conditions, bringing a meticulous approach to every case.",
  },
]

const veterinaryStaff = [
  { name: "Dr. Michael Park", role: "Associate Veterinarian", specialization: "General Practice" },
  { name: "Dr. Lisa Thompson", role: "Associate Veterinarian", specialization: "Dermatology" },
  { name: "Dr. David Martinez", role: "Associate Veterinarian", specialization: "Dentistry" },
  { name: "Dr. Amanda White", role: "Emergency Veterinarian", specialization: "Emergency & Critical Care" },
  { name: "Dr. Robert Kim", role: "Associate Veterinarian", specialization: "Oncology" },
  { name: "Dr. Jennifer Lee", role: "Associate Veterinarian", specialization: "Cardiology" },
  { name: "Dr. Christopher Brown", role: "Associate Veterinarian", specialization: "Neurology" },
  { name: "Dr. Rachel Green", role: "Associate Veterinarian", specialization: "Exotic Animals" },
]

const supportStaff = [
  { name: "Maria Garcia", role: "Clinic Manager" },
  { name: "John Smith", role: "Head Veterinary Technician" },
  { name: "Ashley Johnson", role: "Client Relations Coordinator" },
  { name: "Kevin Williams", role: "Veterinary Technician" },
  { name: "Samantha Davis", role: "Veterinary Technician" },
  { name: "Tyler Brown", role: "Veterinary Assistant" },
  { name: "Nicole Taylor", role: "Receptionist" },
  { name: "Brandon Wilson", role: "Kennel Technician" },
]

const teamFeatures = [
  {
    title: "Board-Certified Specialists",
    description: "Many of our veterinarians hold board certifications in their specialties, ensuring expert-level care.",
    icon: CertificateIcon,
  },
  {
    title: "Continuous Education",
    description: "Our team regularly attends conferences and training to stay current with the latest veterinary advances.",
    icon: EducationIcon,
  },
  {
    title: "Collaborative Approach",
    description: "We work together as a team to develop comprehensive treatment plans for complex cases.",
    icon: TeamIcon,
  },
]

// Icon Components
function ExperienceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  )
}

function EducationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  )
}

function TeamIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  )
}
