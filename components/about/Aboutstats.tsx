"use client"
const stats = [
      { value: "15+", label: "Years of Experience", icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      )},
      { value: "50K+", label: "Pets Treated", icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      )},
      { value: "98%", label: "Satisfied Clients", icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )},
      { value: "30+", label: "Veterinary Specialists", icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )},
    ];
    
    export default function AboutStats() {
      return (
        <section
          style={{
            background: "#f57c20",
            fontFamily: "'Poppins', sans-serif",
            padding: "64px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    
            .stats-swoosh-1 {
              position: absolute; width: 400px; height: 400px; border-radius: 50%;
              border: 56px solid rgba(255,255,255,0.08);
              top: -160px; left: -80px; pointer-events: none;
            }
            .stats-swoosh-2 {
              position: absolute; width: 260px; height: 260px; border-radius: 50%;
              border: 36px solid rgba(255,255,255,0.06);
              bottom: -100px; right: 100px; pointer-events: none;
            }
    
            .stats-grid {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 48px;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 2px;
              position: relative;
              z-index: 1;
            }
    
            .stat-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
              padding: 32px 24px;
              text-align: center;
              border-right: 1px solid rgba(255,255,255,0.2);
              transition: background 0.2s;
            }
            .stat-card:last-child { border-right: none; }
            .stat-card:hover { background: rgba(255,255,255,0.06); }
    
            .stat-icon-wrap {
              width: 48px; height: 48px; border-radius: 13px;
              background: rgba(255,255,255,0.15);
              display: flex; align-items: center; justify-content: center;
              margin-bottom: 4px;
            }
            .stat-icon-wrap svg { stroke: white !important; }
    
            @media (max-width: 768px) {
              .stats-grid { grid-template-columns: repeat(2, 1fr); padding: 0 24px; }
              .stat-card:nth-child(2) { border-right: none; }
              .stat-card:nth-child(1), .stat-card:nth-child(2) {
                border-bottom: 1px solid rgba(255,255,255,0.2);
              }
            }
            @media (max-width: 480px) {
              .stats-grid { padding: 0 16px; }
              .stat-card { padding: 24px 16px; }
            }
          `}</style>
    
          <div className="stats-swoosh-1" />
          <div className="stats-swoosh-2" />
    
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-icon-wrap">
                  {stat.icon}
                </div>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.85)",
                  margin: 0,
                  fontWeight: 500,
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      );
    }