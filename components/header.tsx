"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Locations", href: "/locations" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
]

const serviceLinks = [
  { slug: "pet-consultation",     title: "Pet Consultation",      desc: "Complete wellness checkups & health plans",      color: "#f57c20", icon: "M12 18v3m0 0a3 3 0 003-3V9a3 3 0 00-3-3m0 15a3 3 0 01-3-3V9a3 3 0 013-3m0 0V3" },
  { slug: "in-house-diagnostics", title: "In-House Diagnostics",  desc: "Blood panels, urinalysis & same-day results",    color: "#7c6fcd", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m4.75-11.396c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 8.25h-11L5 14.5m14 0H5" },
  { slug: "pcr-testing",          title: "PCR Testing",           desc: "Molecular diagnostics for infectious disease",   color: "#2a9d8f", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25" },
  { slug: "advanced-imaging",     title: "Advanced Imaging",      desc: "Digital X-rays, ultrasound & echocardiography", color: "#e05c7a", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" },
  { slug: "intensive-care",       title: "Intensive Care (ICU)",  desc: "24/7 critical care & continuous monitoring",    color: "#e05c7a", icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" },
  { slug: "dental-care",          title: "Dental Care",           desc: "Professional cleanings & oral health therapy",  color: "#f5c842", icon: "M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5.5 2 1 4 1 6 0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0-2 .5-4 1-6 .5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z" },
  { slug: "laser-therapy",        title: "Laser Therapy",         desc: "Drug-free pain relief & accelerated healing",   color: "#4caf82", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
  { slug: "vaccination-programs", title: "Vaccination Programs",  desc: "Tailored immunization for every life stage",    color: "#f57c20", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { slug: "surgical-services",    title: "Surgical Services",     desc: "Board-certified surgeons & full OR support",    color: "#7c6fcd", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5 M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.047 2.047" },
  { slug: "in-house-pharmacy",    title: "In-House Pharmacy",     desc: "Same-day prescriptions & compounded meds",     color: "#4caf82", icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .hdr-root {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(180,174,230,0.25);
          font-family: 'Poppins', sans-serif;
        }
        .hdr-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 68px;
        }

        /* Logo */
        .hdr-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .hdr-logo-text { font-family: 'Poppins', sans-serif; font-weight: 800; font-size: 20px; color: #1a1a2e; letter-spacing: -0.02em; }
        .hdr-logo-text span { color: #f57c20; }

        /* Nav links */
        .hdr-nav { display: flex; align-items: center; gap: 6px; }
        .hdr-link {
          font-family: 'Poppins', sans-serif; font-size: 13.5px; font-weight: 500;
          color: #555570; text-decoration: none; padding: 8px 12px; border-radius: 8px;
          transition: color 0.18s, background 0.18s;
          display: flex; align-items: center; gap: 4px; white-space: nowrap;
        }
        .hdr-link:hover { color: #1a1a2e; background: rgba(124,111,205,0.07); }
        .hdr-link.active { color: #f57c20; }

        /* Services trigger chevron */
        .hdr-chevron {
          transition: transform 0.2s ease;
          color: #888;
        }
        .hdr-services-open .hdr-chevron { transform: rotate(180deg); color: #f57c20; }
        .hdr-services-open { color: #1a1a2e !important; background: rgba(124,111,205,0.07) !important; }

        /* CTA button */
        .hdr-cta {
          display: inline-flex; align-items: center; gap: 7px;
          background: #f57c20; color: #fff;
          font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 12.5px;
          letter-spacing: 0.05em; text-transform: uppercase;
          padding: 11px 22px; border-radius: 10px; text-decoration: none;
          box-shadow: 0 4px 16px rgba(245,124,32,0.28);
          transition: background 0.18s, transform 0.15s;
          white-space: nowrap;
        }
        .hdr-cta:hover { background: #e06b10; transform: translateY(-1px); }

        /* ── Dropdown ── */
        .hdr-dropdown-wrap { position: relative; }
        .hdr-dropdown {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%);
          width: 720px;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          border: 1.5px solid rgba(180,174,230,0.3);
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(26,26,46,0.14), 0 4px 16px rgba(124,111,205,0.1);
          padding: 20px;
          opacity: 0; pointer-events: none;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 0.18s ease, transform 0.18s ease;
          z-index: 100;
        }
        .hdr-dropdown.open {
          opacity: 1; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .hdr-dropdown-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 4px 8px 14px;
          border-bottom: 1px solid rgba(180,174,230,0.2);
          margin-bottom: 12px;
        }
        .hdr-dropdown-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
        }
        .hdr-svc-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 11px 12px; border-radius: 12px;
          text-decoration: none;
          transition: background 0.16s;
          border: 1px solid transparent;
        }
        .hdr-svc-item:hover {
          background: rgba(124,111,205,0.06);
          border-color: rgba(124,111,205,0.12);
        }
        .hdr-svc-icon {
          width: 36px; height: 36px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .hdr-svc-title {
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600;
          color: #1a1a2e; margin: 0 0 2px; line-height: 1.3;
        }
        .hdr-svc-desc {
          font-family: 'Poppins', sans-serif; font-size: 11.5px; color: #888;
          margin: 0; line-height: 1.5; font-weight: 400;
        }
        .hdr-dropdown-footer {
          margin-top: 12px; padding-top: 12px;
          border-top: 1px solid rgba(180,174,230,0.2);
          display: flex; align-items: center; justify-content: space-between;
        }
        .hdr-view-all {
          display: inline-flex; align-items: center; gap: 6px;
          background: #f57c20; color: #fff;
          font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 11.5px;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 10px 18px; border-radius: 8px; text-decoration: none;
          box-shadow: 0 3px 12px rgba(245,124,32,0.25);
          transition: background 0.18s;
        }
        .hdr-view-all:hover { background: #e06b10; }

        /* ── Mobile ── */
        .hdr-mobile-btn {
          display: none; background: none; border: none; cursor: pointer;
          padding: 6px; border-radius: 8px; color: #1a1a2e;
          transition: background 0.15s;
        }
        .hdr-mobile-btn:hover { background: rgba(124,111,205,0.08); }
        .hdr-mobile-menu {
          display: none;
          border-top: 1px solid rgba(180,174,230,0.2);
          padding: 12px 24px 20px;
          background: rgba(255,255,255,0.97);
        }
        .hdr-mob-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 12px; border-radius: 10px; text-decoration: none;
          font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 500; color: #1a1a2e;
          transition: background 0.15s;
        }
        .hdr-mob-link:hover { background: rgba(124,111,205,0.06); }
        .hdr-mob-services-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 6px; padding: 8px 0 4px 12px;
        }
        .hdr-mob-svc {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 10px; border-radius: 8px; text-decoration: none;
          font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; color: #1a1a2e;
          transition: background 0.15s;
        }
        .hdr-mob-svc:hover { background: rgba(124,111,205,0.06); }

        @media (max-width: 1024px) {
          .hdr-inner { padding: 0 24px; }
          .hdr-nav, .hdr-cta-wrap { display: none !important; }
          .hdr-mobile-btn { display: flex !important; }
        }
        @media (max-width: 1024px) {
          .hdr-mobile-menu { display: block; }
        }
        @media (min-width: 1025px) {
          .hdr-mobile-menu { display: none !important; }
        }
        @media (max-width: 480px) {
          .hdr-mob-services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="hdr-root">
        <div className="hdr-inner">
          {/* Logo */}
          <Link href="/" className="hdr-logo">
            <PawIcon style={{ width: 34, height: 34, color: "#f57c20" }} />
            <span className="hdr-logo-text">Paws<span>&</span>Claws</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hdr-nav">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="hdr-dropdown-wrap"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={`hdr-link ${servicesOpen ? "hdr-services-open" : ""}`}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    {item.name}
                    <svg className="hdr-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  <div className={`hdr-dropdown ${servicesOpen ? "open" : ""}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                    {/* Header row */}
                    <div className="hdr-dropdown-header">
                      <div>
                        <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, color: "#1a1a2e", margin: "0 0 2px" }}>Our Services</p>
                        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#888", margin: 0, fontWeight: 400 }}>Comprehensive care for your beloved pets</p>
                      </div>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, color: "#f57c20", background: "#fff5ee", border: "1px solid #fdd5b0", borderRadius: 6, padding: "3px 10px", letterSpacing: "0.04em" }}>
                        10 Services
                      </span>
                    </div>

                    {/* Service grid */}
                    <div className="hdr-dropdown-grid">
                      {serviceLinks.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="hdr-svc-item" onClick={() => setServicesOpen(false)}>
                          <div className="hdr-svc-icon" style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d={s.icon} />
                            </svg>
                          </div>
                          <div>
                            <p className="hdr-svc-title">{s.title}</p>
                            <p className="hdr-svc-desc">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="hdr-dropdown-footer">
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#888", margin: 0, fontWeight: 400 }}>
                        🐾 Need help choosing? <Link href="/contact" style={{ color: "#f57c20", fontWeight: 600, textDecoration: "none" }} onClick={() => setServicesOpen(false)}>Talk to our team</Link>
                      </p>
                      <Link href="/services" className="hdr-view-all" onClick={() => setServicesOpen(false)}>
                        View All Services
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} className="hdr-link">{item.name}</Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hdr-cta-wrap" style={{ display: "flex" }}>
            <Link href="/locations" className="hdr-cta">
              Book Appointment
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
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
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    className="hdr-mob-link"
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {item.name}
                    <svg style={{ transition: "transform 0.2s", transform: mobileServicesOpen ? "rotate(180deg)" : "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="hdr-mob-services-grid">
                      {serviceLinks.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="hdr-mob-svc" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>
                          <div style={{ width: 28, height: 28, borderRadius: 7, background: `${s.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d={s.icon} />
                            </svg>
                          </div>
                          {s.title}
                        </Link>
                      ))}
                      <Link href="/services" className="hdr-mob-svc" style={{ gridColumn: "1 / -1", color: "#f57c20", fontWeight: 600 }} onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}>
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.name} href={item.href} className="hdr-mob-link" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              )
            )}
            <div style={{ paddingTop: 12 }}>
              <Link href="/locations" className="hdr-cta" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMobileMenuOpen(false)}>
                Book Appointment
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

function PawIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="17" rx="5" ry="4" />
      <circle cx="6" cy="10" r="2.5" />
      <circle cx="18" cy="10" r="2.5" />
      <circle cx="9" cy="6" r="2" />
      <circle cx="15" cy="6" r="2" />
    </svg>
  )
}