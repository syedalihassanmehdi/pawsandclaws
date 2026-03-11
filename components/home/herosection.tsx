export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)",
        fontFamily: "'Poppins', sans-serif",
        minHeight: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .hero-cta {
          background: #f57c20;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 15px 32px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          display: inline-block;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(245,124,32,0.3);
        }
        .hero-cta:hover { background: #e06b10; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(245,124,32,0.4); }

        .hero-btn-outline {
          font-family: 'Poppins', sans-serif;
          font-weight: 600; font-size: 13px; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 15px 28px; border-radius: 10px;
          border: 1.5px solid rgba(0,0,0,0.15); color: #1a1a2e;
          background: rgba(255,255,255,0.5); cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: background 0.2s, border-color 0.2s;
        }
        .hero-btn-outline:hover { background: rgba(255,255,255,0.85); border-color: rgba(0,0,0,0.22); }

        .stat-divider { width: 1px; height: 38px; background: rgba(0,0,0,0.1); }

        .hero-grid {
          max-width: 1200px; margin: 0 auto;
          padding: 64px 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center;
          min-height: 500px; position: relative; z-index: 1;
        }

        /* ── Image side ── */
        .hero-right {
          position: relative;
          height: 480px;
        }
        .hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .hero-image-wrap img {
          width: 100%; height: 100%;
          object-fit: contain; object-position: center bottom;
        }

        /* ── Floating cards ── */
        .hero-float {
          position: absolute;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(255,255,255,0.98);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(90,80,160,0.13);
          padding: 12px 16px;
          z-index: 10;
          animation: heroFloat 3.5s ease-in-out infinite;
        }
        .hero-float:nth-child(2) { animation-delay: 0.6s; animation-duration: 4s; }
        .hero-float:nth-child(3) { animation-delay: 1.2s; animation-duration: 3.8s; }
        .hero-float:nth-child(4) { animation-delay: 0.3s; animation-duration: 4.2s; }
        .hero-float:nth-child(5) { animation-delay: 0.9s; animation-duration: 3.6s; }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }

        /* ── Decorative ring ── */
        .hero-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px dashed rgba(245,124,32,0.2);
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .hero-grid { gap: 32px; padding: 50px 32px; }
          .hero-right { height: 420px; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; padding: 40px 24px 32px; gap: 24px; min-height: unset; text-align: center; }
          
          .hero-right { height: 340px; order: -1; }
          .hero-buttons { justify-content: center !important; }
          .hero-stats { justify-content: center !important; }
          .hero-float-hide { display: none; }
        }
        @media (max-width: 480px) {
          .hero-grid { padding: 32px 16px 24px; }
          .hero-right { height: 260px; }
          .hero-buttons { flex-direction: column; align-items: center !important; }
          .hero-cta, .hero-btn-outline { width: 100%; text-align: center; }
        }
      `}</style>

      {/* Background blobs */}
      <div style={{ position:"absolute", width:500, height:500, background:"#b8b0e8", borderRadius:"50%", filter:"blur(100px)", opacity:0.25, top:-150, right:0, pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:400, height:400, background:"#c9b8f0", borderRadius:"50%", filter:"blur(90px)", opacity:0.2, bottom:-100, right:200, pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:300, height:300, background:"#a8a0e0", borderRadius:"50%", filter:"blur(80px)", opacity:0.15, top:50, left:-100, pointerEvents:"none" }} />

      <div className="hero-grid">

        {/* ── LEFT ── */}
        <div style={{ display:"flex", flexDirection:"column", gap:22 }}>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:13, fontWeight:600, color:"#f57c20", letterSpacing:"0.08em", textTransform:"uppercase", margin:0 }}>
            Trusted Veterinary Care
          </p>
          <h1 style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800, fontSize:"clamp(28px,4vw,52px)", lineHeight:1.12, color:"#1a1a2e", margin:0, letterSpacing:"-0.025em" }}>
            Professional Care<br />
            for Your{" "}
            <span style={{ color:"#f57c20", fontStyle:"italic" }}>Beloved Pets</span>
          </h1>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:15, color:"#555570", lineHeight:1.75, margin:0, maxWidth:440, fontWeight:400 }}>
            Your trusted partner in pet health. Our experienced veterinarians provide comprehensive care with compassion and expertise, ensuring your furry friends receive the best treatment possible.{" "}
            <span style={{ color:"#f57c20", fontWeight:700 }}>50% off</span> your first consultation!
          </p>
          <div className="hero-buttons" style={{ display:"flex", gap:12, flexWrap:"wrap", marginTop:2 }}>
            <a href="/contact" className="hero-cta">Book Appointment</a>
            <a href="/services" className="hero-btn-outline">View Services</a>
          </div>
          <div className="hero-stats" style={{ display:"flex", alignItems:"center", gap:24, marginTop:4 }}>
           
            
            
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero-right">

          {/* Decorative rings */}
          <div className="hero-ring" style={{ width:320, height:320, top:"50%", left:"50%", transform:"translate(-50%,-50%)" }} />
          <div className="hero-ring" style={{ width:420, height:420, top:"50%", left:"50%", transform:"translate(-50%,-50%)", borderColor:"rgba(124,111,205,0.12)" }} />

          {/* Pet image */}
          <div className="hero-image-wrap">
            <img src="/hero.png" alt="Veterinarian caring for a pet" />
          </div>

          {/* ── Floating card 1: Rating — top left ── */}
          <div className="hero-float" style={{ top:24, left:-10 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:36, height:36, borderRadius:10, background:"#fff5ee", border:"1px solid #fdd5b0", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#f57c20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800, fontSize:15, color:"#1a1a2e", margin:0, lineHeight:1 }}>4.4 Stars</p>
                <div style={{ display:"flex", gap:2, marginTop:4 }}>
                  {[1,2,3,4].map(i => <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#e5e7eb"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:10, color:"#9090b0", margin:"3px 0 0", fontWeight:500 }}>Google Reviews</p>
              </div>
            </div>
          </div>

          {/* ── Floating card 2: Next appointment — top right ── */}
          <div className="hero-float hero-float-hide" style={{ top:40, right:-16 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:34, height:34, borderRadius:9, background:"rgba(124,111,205,0.12)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c6fcd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:11, fontWeight:600, color:"#7c6fcd", margin:"0 0 1px", letterSpacing:"0.04em", textTransform:"uppercase" }}>Next Available</p>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800, fontSize:13, color:"#1a1a2e", margin:0 }}>Today 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* ── Floating card 3: Pets treated — bottom left ── */}
          <div className="hero-float" style={{ bottom:48, left:-16 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:36, height:36, borderRadius:10, background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:800, fontSize:18, color:"#1a1a2e", margin:0, lineHeight:1 }}>50K+</p>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:10.5, color:"#9090b0", margin:"3px 0 0", fontWeight:500 }}>Happy Pets Treated</p>
              </div>
            </div>
          </div>

          {/* ── Floating card 4: Verified badge — bottom right ── */}
          <div className="hero-float hero-float-hide" style={{ bottom:64, right:-8 }}>
            <div style={{ display:"flex", alignItems:"center", gap:9 }}>
              <div style={{ width:34, height:34, borderRadius:9, background:"rgba(245,124,32,0.1)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:12, fontWeight:700, color:"#1a1a2e", margin:0 }}>Certified Clinic</p>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:10, color:"#9090b0", margin:"2px 0 0", fontWeight:500 }}>UAE Licensed Vets</p>
              </div>
            </div>
          </div>

          {/* ── Floating pill: 2 locations ── */}
          <div className="hero-float" style={{ top:"50%", right:-20, transform:"translateY(-50%)", padding:"8px 14px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:7 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:11.5, fontWeight:700, color:"#1a1a2e", margin:0, whiteSpace:"nowrap" }}>2 Locations in UAE</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}