"use client";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-10">
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ background: "#0f1628", display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        {/* LEFT */}
        <div className="flex flex-col justify-center gap-5 p-10 lg:p-14">
          <span style={{
            display: "inline-block",
            width: "fit-content",
            background: "#f57c20",
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "5px 12px",
            borderRadius: 999,
          }}>
            Limited Time Offer
          </span>

          <div>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 3vw, 38px)", color: "#fff", margin: 0, lineHeight: 1.2 }}>
              Special Launch Offer:
            </h2>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 3vw, 38px)", color: "#f57c20", margin: 0, lineHeight: 1.2 }}>
              50% Off!
            </h2>
          </div>

          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: 0, maxWidth: 380 }}>
            Get half off your first year of premium pet care. Don't miss out on giving your pet the best care available.
          </p>

          <Link
            href="/register"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              width: "fit-content",
              background: "#f57c20",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              padding: "13px 24px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            className="hover:bg-[#e06b10] hover:-translate-y-0.5"
          >
            Claim Discount
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative" style={{ background: "#e8d5b0", minHeight: 280 }}>
          <img
            src="/cta-pets.png"
            alt="Pets"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}