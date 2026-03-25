"use client";

import Link from "next/link";

const serviceLinks = [
  { title: "Pet Consultation",      slug: "pet-consultation" },
  { title: "In-House Diagnostics",  slug: "in-house-diagnostics" },
  { title: "PCR Testing",           slug: "pcr-testing" },
  { title: "Advanced Imaging",      slug: "advanced-imaging" },
  { title: "Intensive Care (ICU)",  slug: "intensive-care" },
  { title: "Dental Care",           slug: "dental-care" },
  { title: "Laser Therapy",         slug: "laser-therapy" },
  { title: "Vaccination Programs",  slug: "vaccination-programs" },
  { title: "Surgical Services",     slug: "surgical-services" },
  { title: "In-House Pharmacy",     slug: "in-house-pharmacy" },
];

const quickLinks = [
  { name: "Home",      href: "/" },
  { name: "About Us",  href: "/about" },
  { name: "Services",  href: "/services" },
  
  { name: "Locations", href: "/locations" },
  { name: "Contact",   href: "/contact" },
];

const branches = [
  {
    name: "PNCV Al Ain",
    address: "Central Market, Shop F45, Behind Bawadi Mall, Al Ain, Abu Dhabi - UAE",
    phone: "+971 52 151 1465",
    phoneHref: "tel:+971521511465",
    email: "pawsandclawsalain@gmail.com",
    waText: "Hello! I would like to inquire about your veterinary services at the Al Ain clinic. Please share more details.",
  },
  {
    name: "PNCV Dubai (JVC)",
    address: "Dar Al Jawhara Building, Jumeirah Village Circle (JVC), Dubai, UAE",
    phone: "+971 50 340 8149",
    phoneHref: "tel:+971503408149",
    email: "Pawsandclawsdxb1@gmail.com",
    waText: "Hello! I would like to inquire about your veterinary services at the Dubai JVC clinic. Please share more details.",
  },
];

export function Footer() {
  return (
    <footer style={{ background: "#1a1a2e", fontFamily: "'Poppins', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        /* ── Layout ── */
        .ftr-inner  { max-width: 1200px; margin: 0 auto; padding: 72px 48px 0; }
        .ftr-grid   { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1.8fr; gap: 48px; }

        /* ── Typography ── */
        .ftr-col-title {
          font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: #f57c20; margin: 0 0 16px;
        }
        .ftr-link {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 400;
          color: rgba(255,255,255,0.5); text-decoration: none; padding: 3px 0;
          transition: color 0.16s;
        }
        .ftr-link:hover { color: #f57c20; }

        /* ── Branch cards ── */
        .ftr-branch { margin-bottom: 20px; }
        .ftr-branch:last-child { margin-bottom: 0; }
        .ftr-branch + .ftr-branch { padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.07); }
        .ftr-branch-name {
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700;
          color: #fff; margin: 0 0 10px; display: flex; align-items: center; gap: 7px;
        }
        .ftr-contact-row { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 7px; }
        .ftr-contact-text {
          font-family: 'Poppins', sans-serif; font-size: 12.5px; font-weight: 400;
          color: rgba(255,255,255,0.5); margin: 0; line-height: 1.55;
          text-decoration: none; transition: color 0.16s;
        }
        a.ftr-contact-text:hover { color: rgba(255,255,255,0.8); }
        .ftr-cta-row { display: flex; gap: 7px; margin-top: 10px; }
        .ftr-btn-call {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(245,124,32,0.1); color: #f57c20;
          border: 1px solid rgba(245,124,32,0.22); border-radius: 7px;
          font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
          padding: 7px 13px; text-decoration: none; transition: background 0.16s;
        }
        .ftr-btn-call:hover { background: rgba(245,124,32,0.2); }
        .ftr-btn-wa {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(37,211,102,0.08); color: #25d366;
          border: 1px solid rgba(37,211,102,0.18); border-radius: 7px;
          font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
          padding: 7px 13px; text-decoration: none; transition: background 0.16s;
        }
        .ftr-btn-wa:hover { background: rgba(37,211,102,0.16); }

        /* ── Social ── */
        .ftr-social { display: flex; gap: 8px; margin-top: 20px; }
        .ftr-soc-btn {
          width: 34px; height: 34px; border-radius: 8px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.45); text-decoration: none; transition: background 0.16s, color 0.16s;
        }
        .ftr-soc-btn:hover { background: rgba(245,124,32,0.12); color: #f57c20; }

        /* ── Bottom bar ── */
        .ftr-divider { margin: 52px 48px 0; border: none; border-top: 1px solid rgba(255,255,255,0.07); }
        .ftr-bottom {
          max-width: 1200px; margin: 0 auto; padding: 18px 48px 28px;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;
        }
        .ftr-copy  { font-family: 'Poppins', sans-serif; font-size: 12px; color: rgba(255,255,255,0.28); margin: 0; }
        .ftr-btm-links { display: flex; gap: 18px; }
        .ftr-btm-link  {
          font-family: 'Poppins', sans-serif; font-size: 12px;
          color: rgba(255,255,255,0.28); text-decoration: none; transition: color 0.16s;
        }
        .ftr-btm-link:hover { color: #f57c20; }

        /* ══ TABLET ══ */
        @media (max-width: 1024px) {
          .ftr-inner  { padding: 56px 32px 0; }
          .ftr-grid   { grid-template-columns: 1fr 1fr; gap: 36px; }
          .ftr-divider { margin-left: 32px; margin-right: 32px; }
          .ftr-bottom  { padding-left: 32px; padding-right: 32px; }
        }

        /* ══ MOBILE ══ */
        @media (max-width: 640px) {
          .ftr-inner  { padding: 36px 20px 0; }

          /* Single column, tighter spacing */
          .ftr-grid   { grid-template-columns: 1fr; gap: 0; }

          /* Each column becomes a compact accordion-style row */
          .ftr-col    { padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .ftr-col:last-child { border-bottom: none; }

          /* Smaller titles */
          .ftr-col-title { font-size: 10px; margin-bottom: 10px; }

          /* Links tighter */
          .ftr-link   { font-size: 12.5px; padding: 2px 0; }

          /* Hide quick-links chevrons on mobile, save space */
          .ftr-link svg { display: none; }

          /* Quick links: 2-col grid */
          .ftr-links-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }

          /* Services: 2-col grid, smaller text */
          .ftr-svc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
          .ftr-svc-grid .ftr-link { font-size: 11.5px; }

          /* Branch: collapsed — hide address, keep name + buttons only */
          .ftr-branch { margin-bottom: 14px; }
          .ftr-branch + .ftr-branch { padding-top: 14px; }
          .ftr-branch-name { font-size: 12.5px; margin-bottom: 6px; }
          .ftr-contact-row { margin-bottom: 4px; }
          .ftr-contact-text { font-size: 11.5px; }
          /* hide address on mobile */
          .ftr-hide-mobile { display: none !important; }
          .ftr-cta-row { margin-top: 8px; gap: 6px; }
          .ftr-btn-call, .ftr-btn-wa { font-size: 10.5px; padding: 6px 10px; }

          /* Social row */
          .ftr-social { margin-top: 14px; gap: 6px; }
          .ftr-soc-btn { width: 30px; height: 30px; }

          /* Bottom bar */
          .ftr-divider { margin: 28px 20px 0; }
          .ftr-bottom  { padding: 14px 20px 20px; flex-direction: column; align-items: flex-start; gap: 6px; }
          .ftr-copy    { font-size: 11px; }
          .ftr-btm-links { gap: 12px; }
          .ftr-btm-link  { font-size: 11px; }

          /* Brand */
          .ftr-brand-desc { font-size: 12px !important; margin-bottom: 0 !important; }
        }
      `}</style>

      <div className="ftr-inner">
        <div className="ftr-grid">

          {/* ── Brand ── */}
          <div className="ftr-col">
          <Link href="/" className="hdr-logo">
  <img 
    src="/logo.png" 
    alt="Paws & Claws" 
    style={{ width: 180, objectFit: "contain", marginBottom: 18 }} 
  />
  
</Link>
            <p className="ftr-brand-desc" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.75, margin: "0 0 20px", fontWeight: 400, maxWidth: 270 }}>
              Professional veterinary care for your beloved pets across the UAE. Trusted by thousands of pet families.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 8, padding: "6px 11px" }}>
              <span style={{ fontSize: 14 }}>🇦🇪</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11.5, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>Serving UAE since 2018</span>
            </div>
            <div className="ftr-social">
              <a href="https://www.facebook.com/p/Paws-and-claws-veterinary-clinic-dubai-100086720370384/" className="ftr-soc-btn">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://www.instagram.com/paws.and.claws.clinic/" className="ftr-soc-btn">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
              <a href="https://wa.me/971503408149" target="_blank" rel="noopener noreferrer" className="ftr-soc-btn" style={{ color: "#25d366" }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="ftr-col">
            <p className="ftr-col-title">Quick Links</p>
            <div className="ftr-links-grid">
              {quickLinks.map((l) => (
                <Link key={l.name} href={l.href} className="ftr-link">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35, flexShrink: 0 }}><path d="M9 18l6-6-6-6"/></svg>
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Services ── */}
          <div className="ftr-col">
            <p className="ftr-col-title">Services</p>
            <div className="ftr-svc-grid">
              {serviceLinks.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="ftr-link">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35, flexShrink: 0 }}><path d="M9 18l6-6-6-6"/></svg>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Contact ── */}
          <div className="ftr-col">
            <p className="ftr-col-title">Contact Us</p>
            {branches.map((b) => (
              <div key={b.name} className="ftr-branch">
                <p className="ftr-branch-name">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f57c20", display: "inline-block", flexShrink: 0 }} />
                  {b.name}
                </p>

                {/* Address — hidden on mobile */}
                <div className="ftr-contact-row ftr-hide-mobile">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <p className="ftr-contact-text">{b.address}</p>
                </div>

                {/* Phone */}
                <div className="ftr-contact-row">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <a href={b.phoneHref} className="ftr-contact-text">{b.phone}</a>
                </div>

                {/* Email — hidden on mobile */}
                <div className="ftr-contact-row ftr-hide-mobile">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href={`mailto:${b.email}`} className="ftr-contact-text" style={{ wordBreak: "break-all" }}>{b.email}</a>
                </div>

                <div className="ftr-cta-row">
                  <a href={b.phoneHref} className="ftr-btn-call">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    Call
                  </a>
                  <a href={`https://wa.me/971503408149?text=${encodeURIComponent(b.waText)}`} target="_blank" rel="noopener noreferrer" className="ftr-btn-wa">
                    <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <hr className="ftr-divider" />
      <div className="ftr-bottom">
  <p className="ftr-copy">© {new Date().getFullYear()} Paws &amp; Claws Veterinary. All rights reserved.</p>
  <p className="ftr-copy">Powered by <a href="https://mindoxa.com" target="_blank" rel="noopener noreferrer" className="ftr-btm-link">Mindoxa</a></p>
</div>
    </footer>
  );
}

function PawIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="17" rx="5" ry="4" />
      <circle cx="6"  cy="10" r="2.5" />
      <circle cx="18" cy="10" r="2.5" />
      <circle cx="9"  cy="6"  r="2" />
      <circle cx="15" cy="6"  r="2" />
    </svg>
  );
}