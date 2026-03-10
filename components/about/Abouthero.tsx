"use client"
export default function AboutHero() {
      return (
        <section
          style={{
            background: "linear-gradient(135deg, #eeedf8 0%, #e8e7f5 50%, #ece9f7 100%)",
            fontFamily: "'Poppins', sans-serif",
            padding: "100px 0 110px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
          `}</style>
    
          {/* Blobs */}
          <div style={{ position: "absolute", width: 500, height: 500, background: "#b8b0e8", borderRadius: "50%", filter: "blur(100px)", opacity: 0.25, top: -150, right: 0, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 400, height: 400, background: "#c9b8f0", borderRadius: "50%", filter: "blur(90px)", opacity: 0.2, bottom: -100, right: 200, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 300, height: 300, background: "#a8a0e0", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15, top: 50, left: -100, pointerEvents: "none" }} />
    
          <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#f57c20",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 14px",
            }}>
              About Us
            </p>
    
            <h1 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 58px)",
              lineHeight: 1.1,
              color: "#1a1a2e",
              margin: "0 0 20px",
              letterSpacing: "-0.025em",
            }}>
              Caring for Pets with{" "}
              <span style={{ color: "#f57c20", fontStyle: "italic" }}>Heart & Expertise</span>
            </h1>
    
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 16,
              color: "#555570",
              lineHeight: 1.75,
              margin: "0 auto",
              maxWidth: 560,
              fontWeight: 400,
            }}>
              Dedicated to providing exceptional care for your beloved pets since 2009. Our mission is to enhance the lives of animals and the families who love them.
            </p>
          </div>
        </section>
      );
    }