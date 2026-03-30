"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import BookingModal from "@/components/ui/Bookingmodal"

type ServiceLink = {
  slug: string
  title: string
  desc: string
  color: string
  icon: string
  subServices?: { slug: string; title: string }[]
}

const serviceLinks: ServiceLink[] = [
  { slug: "pet-consultation",         title: "Pet Consultation",         desc: "Complete wellness checkups & health plans",       color: "#f57c20", icon: "M12 18v3m0 0a3 3 0 003-3V9a3 3 0 00-3-3m0 15a3 3 0 01-3-3V9a3 3 0 013-3m0 0V3" },
  { slug: "in-house-diagnostics", title: "Pet In-House Diagnostics", desc: "Blood panels, urinalysis & same-day results",     color: "#7c6fcd", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m4.75-11.396c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 8.25h-11L5 14.5m14 0H5" },
  { slug: "pcr-testing",          title: "Pet PCR Testing",          desc: "Molecular diagnostics for infectious disease",    color: "#2a9d8f", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25" },
  { slug: "advanced-imaging",     title: "Pet Advanced Imaging",     desc: "Digital X-rays, ultrasound & echocardiography",  color: "#e05c7a", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" },
  { slug: "intensive-care",       title: "Pet Intensive Care (ICU)", desc: "24/7 critical care & continuous monitoring",      color: "#e05c7a", icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" },
  { slug: "dental-care",          title: "Pet Dental Care",          desc: "Professional cleanings & oral health therapy",   color: "#f5c842", icon: "M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5.5 2 1 4 1 6 0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0-2 .5-4 1-6 .5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z" },
  { slug: "laser-therapy",        title: "Pet Laser Therapy",        desc: "Drug-free pain relief & accelerated healing",    color: "#4caf82", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
  { slug: "vaccination-programs", title: "Pet Vaccination Programs", desc: "Tailored immunization for every life stage",     color: "#f57c20", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  {
    slug: "surgical-services",
    title: "Pet Surgical Services",
    desc: "Board-certified surgeons & full OR support",
    color: "#7c6fcd",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5 M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.047 2.047",
    subServices: [
      { slug: "spay-neuter-surgery",          title: "Spay & Neuter" },
      { slug: "soft-tissue-surgery",          title: "Soft Tissue Surgery" },
      { slug: "orthopedic-procedures",        title: "Orthopedic Procedures" },
      { slug: "tumor-mass-removal",           title: "Tumor & Mass Removal" },
      
    ],
  },
  
  { slug: "pet-grooming",             title: "Pet Grooming",             desc: "Breed-specific styling & professional coat care", color: "#e05c7a", icon: "M7 3a1 1 0 000 2h10a1 1 0 100-2H7zM4 7a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" },
  { slug: "pet-boarding",             title: "Pet Boarding",             desc: "Safe, vet-supervised overnight stays",           color: "#7c6fcd", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
]

const locationLinks = [
  { id: "al-ain", name: "PNCV Al Ain",      sub: "Al Ain, Abu Dhabi - UAE" },
  { id: "dubai",  name: "PNCV Dubai (JVC)", sub: "Dubai, UAE" },
]

const navigation = [
  { name: "Home",      href: "/" },
  { name: "About",     href: "/about" },
  { name: "Services",  href: "/services", hasDropdown: "services" },
  { name: "Locations", href: "#",         hasDropdown: "locations" },
  { name: "Team",      href: "/team" },
  { name: "Contact",   href: "/contact" },
]

export function Header() {
  const router = useRouter()
  const [modalOpen,            setModalOpen]            = useState(false)
  const [mobileMenuOpen,       setMobileMenuOpen]       = useState(false)
  const [servicesOpen,         setServicesOpen]         = useState(false)
  const [locationsOpen,        setLocationsOpen]        = useState(false)
  const [mobileServicesOpen,   setMobileServicesOpen]   = useState(false)
  const [mobileLocationsOpen,  setMobileLocationsOpen]  = useState(false)
  const [surgicalFlyoutOpen,   setSurgicalFlyoutOpen]   = useState(false)
  const [mobileSurgicalOpen,   setMobileSurgicalOpen]   = useState(false)

  const svcTimer      = useRef<ReturnType<typeof setTimeout> | null>(null)
  const locTimer      = useRef<ReturnType<typeof setTimeout> | null>(null)
  const surgicalTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openSvc  = () => { if (svcTimer.current) clearTimeout(svcTimer.current); setServicesOpen(true);  setLocationsOpen(false) }
  const closeSvc = () => { svcTimer.current = setTimeout(() => setServicesOpen(false), 120) }
  const openLoc  = () => { if (locTimer.current) clearTimeout(locTimer.current); setLocationsOpen(true); setServicesOpen(false) }
  const closeLoc = () => { locTimer.current = setTimeout(() => setLocationsOpen(false), 120) }

  const openModal = () => {
    setMobileMenuOpen(false)
    setModalOpen(true)
  }

  return (
    <>
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .hdr-root {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(180,174,230,0.25);
          font-family: 'Poppins', sans-serif;
        }
        .hdr-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 68px;
        }
        .hdr-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .hdr-logo-text { font-family: 'Poppins', sans-serif; font-weight: 800; font-size: 20px; color: #1a1a2e; letter-spacing: -0.02em; }
        .hdr-logo-text span { color: #f57c20; }

        .hdr-nav { display: flex; align-items: center; gap: 6px; }
        .hdr-link {
          font-family: 'Poppins', sans-serif; font-size: 13.5px; font-weight: 500;
          color: #555570; text-decoration: none; padding: 8px 12px; border-radius: 8px;
          transition: color 0.18s, background 0.18s;
          display: flex; align-items: center; gap: 4px; white-space: nowrap;
        }
        .hdr-link:hover { color: #1a1a2e; background: rgba(124,111,205,0.07); }
        .hdr-link.active { color: #f57c20; }
        .hdr-chevron { transition: transform 0.2s ease; color: #888; }
        .hdr-dropdown-open .hdr-chevron { transform: rotate(180deg); color: #f57c20; }
        .hdr-dropdown-open { color: #1a1a2e !important; background: rgba(124,111,205,0.07) !important; }

        .hdr-cta {
          display: inline-flex; align-items: center; gap: 7px;
          background: #f57c20; color: #fff;
          font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 12.5px;
          letter-spacing: 0.05em; text-transform: uppercase;
          padding: 11px 22px; border-radius: 10px; border: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(245,124,32,0.28);
          transition: background 0.18s, transform 0.15s; white-space: nowrap;
          text-decoration: none;
        }
        .hdr-cta:hover { background: #e06b10; transform: translateY(-1px); }

        .hdr-dropdown-wrap { position: relative; }
        .hdr-dropdown {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background: rgba(255,255,255,0.97); backdrop-filter: blur(20px);
          border: 1.5px solid rgba(180,174,230,0.3); border-radius: 20px;
          box-shadow: 0 24px 64px rgba(26,26,46,0.14), 0 4px 16px rgba(124,111,205,0.1);
          opacity: 0; pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease; z-index: 100;
        }
        .hdr-dropdown.open {
          opacity: 1; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        .hdr-dropdown-services { width: 780px; padding: 20px; }
        .hdr-dropdown-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 4px 8px 14px; border-bottom: 1px solid rgba(180,174,230,0.2); margin-bottom: 12px;
        }
        .hdr-dropdown-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 6px; }
        .hdr-svc-item {
          display: flex; align-items: flex-start; gap: 12px; padding: 11px 12px;
          border-radius: 12px; text-decoration: none;
          transition: background 0.16s; border: 1px solid transparent;
        }
        .hdr-svc-item:hover { background: rgba(124,111,205,0.06); border-color: rgba(124,111,205,0.12); }
        .hdr-svc-icon {
          width: 36px; height: 36px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
        }
        .hdr-svc-title { font-family: 'Poppins',sans-serif; font-size: 13px; font-weight: 600; color: #1a1a2e; margin: 0 0 2px; line-height: 1.3; }
        .hdr-svc-desc  { font-family: 'Poppins',sans-serif; font-size: 11.5px; color: #888; margin: 0; line-height: 1.5; font-weight: 400; }
        .hdr-dropdown-footer {
          margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(180,174,230,0.2);
          display: flex; align-items: center; justify-content: space-between;
        }
        .hdr-view-all {
          display: inline-flex; align-items: center; gap: 6px;
          background: #f57c20; color: #fff;
          font-family: 'Poppins',sans-serif; font-weight: 700; font-size: 11.5px;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 10px 18px; border-radius: 8px; text-decoration: none;
          box-shadow: 0 3px 12px rgba(245,124,32,0.25); transition: background 0.18s;
        }
        .hdr-view-all:hover { background: #e06b10; }

        .hdr-dropdown-locations { width: 280px; padding: 10px; }
        .hdr-loc-item {
          display: flex; align-items: center; gap: 12px; padding: 12px 14px;
          border-radius: 12px; text-decoration: none; cursor: pointer;
          transition: background 0.16s; border: 1px solid transparent;
        }
        .hdr-loc-item:hover { background: rgba(245,124,32,0.06); border-color: rgba(245,124,32,0.15); }
        .hdr-loc-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: rgba(245,124,32,0.1);
          display: flex; align-items: center; justify-content: center;
        }
        .hdr-loc-name { font-family: 'Poppins',sans-serif; font-size: 13px; font-weight: 700; color: #1a1a2e; margin: 0 0 2px; }
        .hdr-loc-sub  { font-family: 'Poppins',sans-serif; font-size: 11.5px; color: #9090b0; margin: 0; font-weight: 400; }
        .hdr-loc-arrow { margin-left: auto; color: #ccc; flex-shrink: 0; transition: color 0.16s; }
        .hdr-loc-item:hover .hdr-loc-arrow { color: #f57c20; }

        /* Surgical flyout */
        .hdr-svc-item-wrap { position: relative; }
        .hdr-svc-flyout {
          position: absolute; left: 100%; top: -8px;
          background: rgba(255,255,255,0.98); backdrop-filter: blur(20px);
          border: 1.5px solid rgba(124,111,205,0.2); border-radius: 14px;
          box-shadow: 0 16px 48px rgba(26,26,46,0.14);
          padding: 8px; min-width: 220px; z-index: 200;
          opacity: 0; pointer-events: none;
          transform: translateX(-6px);
          transition: opacity 0.16s ease, transform 0.16s ease;
        }
        .hdr-svc-flyout.open {
          opacity: 1; pointer-events: all;
          transform: translateX(0);
        }
        .hdr-svc-flyout-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; border-radius: 9px;
          text-decoration: none; font-family: 'Poppins', sans-serif;
          font-size: 12.5px; font-weight: 500; color: #1a1a2e;
          transition: background 0.14s; white-space: nowrap;
        }
        .hdr-svc-flyout-item:hover { background: rgba(124,111,205,0.08); color: #7c6fcd; }
        .hdr-svc-flyout-dot { width: 6px; height: 6px; border-radius: 50%; background: #7c6fcd; flex-shrink: 0; }
        .hdr-svc-item-surgical { background: rgba(124,111,205,0.04); border-color: rgba(124,111,205,0.15) !important; }

        /* Mobile */
        .hdr-mobile-btn {
          display: none; background: none; border: none; cursor: pointer;
          padding: 6px; border-radius: 8px; color: #1a1a2e; transition: background 0.15s;
        }
        .hdr-mobile-btn:hover { background: rgba(124,111,205,0.08); }
        .hdr-mobile-menu {
          display: none; border-top: 1px solid rgba(180,174,230,0.2);
          padding: 12px 24px 20px; background: rgba(255,255,255,0.97);
        }
        .hdr-mob-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 12px; border-radius: 10px; text-decoration: none;
          font-family: 'Poppins',sans-serif; font-size: 14px; font-weight: 500; color: #1a1a2e;
          transition: background 0.15s; width: 100%; background: none; border: none; cursor: pointer; text-align: left;
        }
        .hdr-mob-link:hover { background: rgba(124,111,205,0.06); }
        .hdr-mob-services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; padding: 8px 0 4px 12px; }
        .hdr-mob-svc {
          display: flex; align-items: center; gap: 8px; padding: 8px 10px; border-radius: 8px;
          text-decoration: none; font-family: 'Poppins',sans-serif; font-size: 12px; font-weight: 500; color: #1a1a2e;
          transition: background 0.15s;
        }
        .hdr-mob-svc:hover { background: rgba(124,111,205,0.06); }
        .hdr-mob-surgical-list { padding: 4px 0 4px 24px; display: flex; flex-direction: column; gap: 2px; }
        .hdr-mob-surgical-item {
          display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px;
          text-decoration: none; font-family: 'Poppins',sans-serif; font-size: 12px; font-weight: 500; color: #555570;
          transition: background 0.15s;
        }
        .hdr-mob-surgical-item:hover { background: rgba(124,111,205,0.06); color: #7c6fcd; }
        .hdr-mob-loc-list { padding: 6px 0 4px 12px; display: flex; flex-direction: column; gap: 4px; }
        .hdr-mob-loc {
          display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px;
          text-decoration: none; cursor: pointer; transition: background 0.15s; border: none; background: none; width: 100%; text-align: left;
        }
        .hdr-mob-loc:hover { background: rgba(245,124,32,0.06); }
        .hdr-mob-loc-name { font-family: 'Poppins',sans-serif; font-size: 13px; font-weight: 600; color: #1a1a2e; margin: 0 0 1px; }
        .hdr-mob-loc-sub  { font-family: 'Poppins',sans-serif; font-size: 11px; color: #9090b0; margin: 0; }

        @media (max-width: 1024px) {
          .hdr-inner { padding: 0 24px; }
          .hdr-nav, .hdr-cta-wrap { display: none !important; }
          .hdr-mobile-btn { display: flex !important; }
          .hdr-mobile-menu { display: block; }
        }
        @media (min-width: 1025px) { .hdr-mobile-menu { display: none !important; } }
        @media (max-width: 480px) { .hdr-mob-services-grid { grid-template-columns: 1fr; } }
      `}</style>

      <header className="hdr-root">
        <div className="hdr-inner">

          {/* Logo */}
          <Link href="/" className="hdr-logo">
            <img src="/logo.png" alt="Paws & Claws" style={{ width: 180, objectFit: "contain" }} />
          </Link>

          {/* Desktop nav */}
          <nav className="hdr-nav">
            {navigation.map((item) => {
              if (item.hasDropdown === "services") return (
                <div key="services" className="hdr-dropdown-wrap" onMouseEnter={openSvc} onMouseLeave={closeSvc}>
                  <button className={`hdr-link ${servicesOpen ? "hdr-dropdown-open" : ""}`} style={{ background: "none", border: "none", cursor: "pointer" }}>
                    {item.name}
                    <svg className="hdr-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  <div className={`hdr-dropdown hdr-dropdown-services ${servicesOpen ? "open" : ""}`} onMouseEnter={openSvc} onMouseLeave={closeSvc}>
                    <div className="hdr-dropdown-header">
                      <div>
                        <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:14, color:"#1a1a2e", margin:"0 0 2px" }}>Our Services</p>
                        <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:12, color:"#888", margin:0, fontWeight:400 }}>Comprehensive care for your beloved pets</p>
                      </div>
                      <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:11, fontWeight:600, color:"#f57c20", background:"#fff5ee", border:"1px solid #fdd5b0", borderRadius:6, padding:"3px 10px", letterSpacing:"0.04em" }}>12 Services</span>
                    </div>

                    <div className="hdr-dropdown-grid">
                      {serviceLinks.map((s) => {
                        if (s.subServices) {
                          return (
                            <div
                              key={s.slug}
                              className="hdr-svc-item-wrap"
                              onMouseEnter={() => { if (surgicalTimer.current) clearTimeout(surgicalTimer.current); setSurgicalFlyoutOpen(true); }}
                              onMouseLeave={() => { surgicalTimer.current = setTimeout(() => setSurgicalFlyoutOpen(false), 120); }}
                            >
                              <Link
                                href={`/services/${s.slug}`}
                                className="hdr-svc-item hdr-svc-item-surgical"
                                onClick={() => setServicesOpen(false)}
                                style={{ width: "100%" }}
                              >
                                <div className="hdr-svc-icon" style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon} /></svg>
                                </div>
                                <div style={{ flex: 1 }}>
                                  <p className="hdr-svc-title" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    {s.title}
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c6fcd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                                  </p>
                                  <p className="hdr-svc-desc">{s.desc}</p>
                                </div>
                              </Link>

                              {/* Flyout */}
                              <div
                                className={`hdr-svc-flyout ${surgicalFlyoutOpen ? "open" : ""}`}
                                onMouseEnter={() => { if (surgicalTimer.current) clearTimeout(surgicalTimer.current); setSurgicalFlyoutOpen(true); }}
                                onMouseLeave={() => { surgicalTimer.current = setTimeout(() => setSurgicalFlyoutOpen(false), 120); }}
                              >
                                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:10.5, fontWeight:700, color:"#7c6fcd", letterSpacing:"0.08em", textTransform:"uppercase", padding:"4px 12px 8px", margin:0, borderBottom:"1px solid rgba(124,111,205,0.1)" }}>
                                  Surgical Procedures
                                </p>
                                {s.subServices.map((sub) => (
                                  <Link
                                    key={sub.slug}
                                    href={`/services/surgical-services/${sub.slug}`}
                                    className="hdr-svc-flyout-item"
                                    onClick={() => { setServicesOpen(false); setSurgicalFlyoutOpen(false); }}
                                  >
                                    <span className="hdr-svc-flyout-dot" />
                                    {sub.title}
                                  </Link>
                                ))}
                                <div style={{ borderTop:"1px solid rgba(124,111,205,0.1)", marginTop:4, paddingTop:4 }}>
                                  <Link
                                    href="/services/surgical-services"
                                    className="hdr-svc-flyout-item"
                                    style={{ color:"#7c6fcd", fontWeight:600 }}
                                    onClick={() => { setServicesOpen(false); setSurgicalFlyoutOpen(false); }}
                                  >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c6fcd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    View All Surgical Services
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )
                        }

                        return (
                          <Link key={s.slug} href={`/services/${s.slug}`} className="hdr-svc-item" onClick={() => setServicesOpen(false)}>
                            <div className="hdr-svc-icon" style={{ background:`${s.color}15`, border:`1px solid ${s.color}30` }}>
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
                            </div>
                            <div>
                              <p className="hdr-svc-title">{s.title}</p>
                              <p className="hdr-svc-desc">{s.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>

                    <div className="hdr-dropdown-footer">
                      <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:12, color:"#888", margin:0, fontWeight:400 }}>
                        🐾 Need help? <Link href="/contact" style={{ color:"#f57c20", fontWeight:600, textDecoration:"none" }} onClick={() => setServicesOpen(false)}>Talk to our team</Link>
                      </p>
                      <Link href="/services" className="hdr-view-all" onClick={() => setServicesOpen(false)}>
                        View All Services
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )

              if (item.hasDropdown === "locations") return (
                <div key="locations" className="hdr-dropdown-wrap" onMouseEnter={openLoc} onMouseLeave={closeLoc}>
                  <button className={`hdr-link ${locationsOpen ? "hdr-dropdown-open" : ""}`} style={{ background:"none", border:"none", cursor:"pointer" }}>
                    {item.name}
                    <svg className="hdr-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  <div className={`hdr-dropdown hdr-dropdown-locations ${locationsOpen ? "open" : ""}`} onMouseEnter={openLoc} onMouseLeave={closeLoc}>
                    {locationLinks.map((loc) => (
                      <div key={loc.id} className="hdr-loc-item" onClick={() => { router.push(`/contact?location=${loc.id}`); setLocationsOpen(false); }}>
                        <div className="hdr-loc-icon">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                          </svg>
                        </div>
                        <div>
                          <p className="hdr-loc-name">{loc.name}</p>
                          <p className="hdr-loc-sub">{loc.sub}</p>
                        </div>
                        <svg className="hdr-loc-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                      </div>
                    ))}
                  </div>
                </div>
              )

              return <Link key={item.name} href={item.href} className="hdr-link">{item.name}</Link>
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hdr-cta-wrap" style={{ display:"flex" }}>
            <button onClick={openModal} className="hdr-cta">
              Book Appointment
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="hdr-mobile-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="hdr-mobile-menu">
            {navigation.map((item) => {
              if (item.hasDropdown === "services") return (
                <div key="services">
                  <button className="hdr-mob-link" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                    {item.name}
                    <svg style={{ transition:"transform 0.2s", transform: mobileServicesOpen ? "rotate(180deg)" : "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="hdr-mob-services-grid">
                      {serviceLinks.map((s) => {
                        if (s.subServices) {
                          return (
                            <div key={s.slug} style={{ gridColumn: "1 / -1" }}>
                              <button
                                className="hdr-mob-svc"
                                style={{ width: "100%", justifyContent: "space-between", background: "rgba(124,111,205,0.05)", borderRadius: 8, border: "1px solid rgba(124,111,205,0.12)" }}
                                onClick={() => setMobileSurgicalOpen(!mobileSurgicalOpen)}
                              >
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                  <div style={{ width:28, height:28, borderRadius:7, background:`${s.color}15`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
                                  </div>
                                  <span style={{ fontWeight: 600, color: "#1a1a2e" }}>{s.title}</span>
                                </div>
                                <svg style={{ transition:"transform 0.2s", transform: mobileSurgicalOpen ? "rotate(180deg)" : "none", flexShrink: 0 }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c6fcd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                              </button>
                              {mobileSurgicalOpen && (
                                <div className="hdr-mob-surgical-list">
                                  {s.subServices.map((sub) => (
                                    <Link
                                      key={sub.slug}
                                      href={`/services/surgical-services/${sub.slug}`}
                                      className="hdr-mob-surgical-item"
                                      onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileSurgicalOpen(false); }}
                                    >
                                      <span style={{ width:6, height:6, borderRadius:"50%", background:"#7c6fcd", flexShrink:0, display:"inline-block" }} />
                                      {sub.title}
                                    </Link>
                                  ))}
                                  <Link
                                    href="/services/surgical-services"
                                    className="hdr-mob-surgical-item"
                                    style={{ color:"#7c6fcd", fontWeight:600 }}
                                    onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileSurgicalOpen(false); }}
                                  >
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7c6fcd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    View All Surgical
                                  </Link>
                                </div>
                              )}
                            </div>
                          )
                        }
                        return (
                          <Link key={s.slug} href={`/services/${s.slug}`} className="hdr-mob-svc" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>
                            <div style={{ width:28, height:28, borderRadius:7, background:`${s.color}15`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
                            </div>
                            {s.title}
                          </Link>
                        )
                      })}
                      <Link href="/services" className="hdr-mob-svc" style={{ gridColumn:"1 / -1", color:"#f57c20", fontWeight:600 }} onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>
              )

              if (item.hasDropdown === "locations") return (
                <div key="locations">
                  <button className="hdr-mob-link" onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}>
                    {item.name}
                    <svg style={{ transition:"transform 0.2s", transform: mobileLocationsOpen ? "rotate(180deg)" : "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {mobileLocationsOpen && (
                    <div className="hdr-mob-loc-list">
                      {locationLinks.map((loc) => (
                        <button key={loc.id} className="hdr-mob-loc" onClick={() => { router.push(`/contact?location=${loc.id}`); setMobileMenuOpen(false); setMobileLocationsOpen(false); }}>
                          <div style={{ width:32, height:32, borderRadius:9, background:"rgba(245,124,32,0.1)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          </div>
                          <div style={{ textAlign:"left" }}>
                            <p className="hdr-mob-loc-name">{loc.name}</p>
                            <p className="hdr-mob-loc-sub">{loc.sub}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )

              return <Link key={item.name} href={item.href} className="hdr-mob-link" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
            })}

            {/* Mobile CTA */}
            <div style={{ paddingTop:12 }}>
              <button onClick={openModal} className="hdr-cta" style={{ width:"100%", justifyContent:"center" }}>
                Book Appointment
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}