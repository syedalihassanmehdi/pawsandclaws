"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

const branches = [
  {
    id: "al-ain",
    name: "PNCV Al Ain",
    label: "Main Branch",
    address: "Central Market, Shop F45, Behind Bawadi Mall, Al Ain, Abu Dhabi - UAE",
    phone: "+971 52 151 1465",
    phoneHref: "tel:+971521511465",
    waNumber: "971521511465",
    email: "pawsandclawsalain@gmail.com",
    hours: [
      { days: "Sat – Thu", time: "9:00 AM – 9:00 PM" },
      { days: "Friday",    time: "2:00 PM – 9:00 PM" },
    ],
    mapsUrl: "https://maps.google.com/?q=Central+Market+Shop+F45+Bawadi+Mall+Al+Ain",
    waText: "Hello! I would like to book an appointment at the PNCV Al Ain clinic. Please confirm availability.",
  },
  {
    id: "dubai",
    name: "PNCV Dubai (JVC)",
    label: "Dubai Branch",
    address: "Dar Al Jawhara Building, Jumeirah Village Circle (JVC), Dubai, UAE",
    phone: "+971 50 340 8149",
    phoneHref: "tel:+971503408149",
    waNumber: "971503408149",
    email: "Pawsandclawsdxb1@gmail.com",
    hours: [
      { days: "Mon, Tue, Thu, Sat, Sun", time: "9:00 AM – 9:00 PM" },
      { days: "Wednesday",               time: "1:00 PM – 9:00 PM" },
      { days: "Friday",                  time: "2:00 PM – 9:00 PM" },
    ],
    mapsUrl: "https://maps.google.com/?q=Dar+Al+Jawhara+Building+JVC+Dubai",
    waText: "Hello! I would like to book an appointment at PNCV Dubai (JVC). Please confirm availability.",
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("location");

  const initial = branches.find((b) => b.id === locationParam) ?? branches[0];
  const [selected, setSelected] = useState(initial);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", petType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const found = branches.find((b) => b.id === locationParam);
    if (found) setSelected(found);
  }, [locationParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim())    newErrors.name    = "Name is required";
    if (!form.email.trim())   newErrors.email   = "Email is required";
    if (!form.phone.trim())   newErrors.phone   = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Please tell us how we can help";
    if (Object.keys(newErrors).length) { setErrors(newErrors); return; }

    // Build WhatsApp message from all form inputs
    const message =
`Hello! I'd like to book an appointment at ${selected.name}.

👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
🐾 Pet Type: ${form.petType || "Not specified"}
📍 Location: ${selected.name}

💬 Message: ${form.message}`;

    window.open(
      `https://wa.me/${selected.waNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", petType: "", message: "" });
    }, 4000);
  };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#eeedf8 0%,#e8e7f5 50%,#ece9f7 100%)", fontFamily:"'Poppins',sans-serif", padding:"64px 24px 80px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .cp-blob1 { position:fixed; width:500px; height:500px; border-radius:50%; background:#b8b0e8; filter:blur(100px); opacity:0.18; top:-100px; right:-100px; pointer-events:none; z-index:0; }
        .cp-blob2 { position:fixed; width:400px; height:400px; border-radius:50%; background:#c9b8f0; filter:blur(90px); opacity:0.14; bottom:-80px; left:-80px; pointer-events:none; z-index:0; }

        .cp-wrap { position:relative; z-index:1; max-width:1080px; margin:0 auto; }

        .cp-heading { text-align:center; margin-bottom:44px; }
        .cp-heading h1 { font-size:clamp(26px,4.5vw,42px); font-weight:800; color:#1a1a2e; margin:0 0 10px; letter-spacing:-0.02em; }
        .cp-heading p  { font-size:14.5px; color:#555570; margin:0; font-weight:400; }

        .cp-layout { display:grid; grid-template-columns:360px 1fr; gap:24px; align-items:start; }

        .cp-branch {
          background:rgba(255,255,255,0.82); border-radius:20px; padding:22px;
          border:2px solid rgba(255,255,255,0.9);
          backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
          box-shadow:0 2px 20px rgba(90,80,160,0.07);
          cursor:pointer; transition:border-color 0.2s, box-shadow 0.2s, transform 0.18s;
          margin-bottom:16px; position:relative;
        }
        .cp-branch:last-of-type { margin-bottom:0; }
        .cp-branch:hover { transform:translateY(-2px); box-shadow:0 6px 28px rgba(90,80,160,0.12); }
        .cp-branch.active { border-color:#f57c20; box-shadow:0 6px 28px rgba(245,124,32,0.15); }
        .cp-branch-dot { width:9px; height:9px; border-radius:50%; background:#e0ddf5; position:absolute; top:22px; right:22px; transition:background 0.2s; }
        .cp-branch.active .cp-branch-dot { background:#f57c20; }

        .cp-branch-head { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
        .cp-branch-icon { width:40px; height:40px; border-radius:12px; background:rgba(245,124,32,0.1); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:background 0.2s; }
        .cp-branch.active .cp-branch-icon { background:rgba(245,124,32,0.18); }
        .cp-branch-title { font-size:14.5px; font-weight:700; color:#1a1a2e; margin:0 0 2px; }
        .cp-branch-label { font-size:11.5px; color:#9090b0; font-weight:500; margin:0; }

        .cp-info-row { display:flex; align-items:flex-start; gap:9px; margin-bottom:7px; }
        .cp-info-row:last-child { margin-bottom:0; }
        .cp-info-text { font-size:12.5px; color:#555570; line-height:1.55; margin:0; text-decoration:none; transition:color 0.16s; }
        a.cp-info-text:hover { color:#1a1a2e; }

        .cp-divider { border:none; border-top:1px solid rgba(180,174,230,0.2); margin:12px 0; }

        .cp-hours-row { display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:5px; }
        .cp-hours-days { font-size:11.5px; color:#9090b0; }
        .cp-hours-time { font-size:11.5px; color:#1a1a2e; font-weight:600; }

        .cp-cta-row { display:flex; gap:7px; margin-top:14px; }
        .cp-btn-directions {
          flex:1; display:flex; align-items:center; justify-content:center; gap:6px;
          padding:9px 12px; border-radius:10px; border:1.5px solid rgba(180,174,230,0.3);
          background:#f9f8fd; font-family:'Poppins',sans-serif; font-size:12px; font-weight:600; color:#555570;
          text-decoration:none; transition:background 0.16s, border-color 0.16s, color 0.16s;
        }
        .cp-btn-directions:hover { background:#f0edf9; border-color:#c9c2e8; color:#1a1a2e; }
        .cp-btn-wa {
          display:flex; align-items:center; justify-content:center; gap:6px;
          padding:9px 14px; border-radius:10px;
          background:rgba(37,211,102,0.08); border:1.5px solid rgba(37,211,102,0.2);
          font-family:'Poppins',sans-serif; font-size:12px; font-weight:600; color:#16a34a;
          text-decoration:none; transition:background 0.16s;
        }
        .cp-btn-wa:hover { background:rgba(37,211,102,0.16); }

        .cp-form-panel {
          background:rgba(255,255,255,0.88); border-radius:24px; padding:36px;
          border:1.5px solid rgba(255,255,255,0.95); backdrop-filter:blur(12px);
          box-shadow:0 4px 32px rgba(90,80,160,0.09);
        }
        .cp-form-title { font-size:22px; font-weight:800; color:#1a1a2e; margin:0 0 4px; letter-spacing:-0.02em; }
        .cp-form-sub { font-size:13px; color:#9090b0; margin:0 0 28px; }
        .cp-form-sub span { color:#f57c20; font-weight:600; }

        .cp-form-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px; }
        .cp-form-full { margin-bottom:14px; }

        .cp-label { font-size:11.5px; font-weight:600; color:#555570; margin:0 0 6px; display:block; text-transform:uppercase; letter-spacing:0.06em; }
        .cp-label em { color:#f57c20; font-style:normal; }

        .cp-input, .cp-textarea {
          width:100%; padding:11px 14px; border-radius:12px;
          border:1.5px solid rgba(180,174,230,0.3); background:rgba(249,248,253,0.9);
          font-family:'Poppins',sans-serif; font-size:13.5px; color:#1a1a2e; font-weight:400;
          outline:none; transition:border-color 0.18s, box-shadow 0.18s;
          box-sizing:border-box;
        }
        .cp-input::placeholder, .cp-textarea::placeholder { color:#bbb8d0; }
        .cp-input:focus, .cp-textarea:focus { border-color:#f57c20; box-shadow:0 0 0 3px rgba(245,124,32,0.1); background:#fff; }
        .cp-input.error, .cp-textarea.error { border-color:#ef4444; }
        .cp-textarea { resize:vertical; min-height:110px; }
        .cp-error-msg { font-size:11px; color:#ef4444; margin:4px 0 0; display:block; font-weight:500; }

        .cp-submit-btn {
          width:100%; padding:14px; border-radius:14px; border:none;
          background:linear-gradient(135deg,#f57c20,#e8650a);
          font-family:'Poppins',sans-serif; font-size:14.5px; font-weight:700; color:#fff;
          cursor:pointer; display:flex; align-items:center; justify-content:center; gap:9px;
          margin-top:6px; transition:opacity 0.18s, transform 0.18s;
          box-shadow:0 4px 18px rgba(245,124,32,0.32);
        }
        .cp-submit-btn:hover { opacity:0.92; transform:translateY(-1px); }
        .cp-submit-btn:active { transform:translateY(0); }
        .cp-submit-btn.success { background:linear-gradient(135deg,#22c55e,#16a34a); box-shadow:0 4px 18px rgba(34,197,94,0.32); }

        @media (max-width:900px) {
          .cp-layout { grid-template-columns:1fr; }
          .cp-form-panel { padding:26px 22px; }
        }
        @media (max-width:540px) {
          .cp-form-grid { grid-template-columns:1fr; }
          .cp-form-panel { padding:20px 16px; border-radius:18px; }
          .cp-branch { padding:18px; }
          .cp-heading h1 { font-size:26px; }
        }
      `}</style>

      <div className="cp-blob1" />
      <div className="cp-blob2" />

      <div className="cp-wrap">
        <div className="cp-heading">
          <h1>Visit Us</h1>
          <p>Two convenient clinics across the UAE — choose your nearest branch and book below</p>
        </div>

        <div className="cp-layout">

          {/* ── Left: Branches ── */}
          <div>
            {branches.map((b) => (
              <div key={b.id} className={`cp-branch${selected.id === b.id ? " active" : ""}`} onClick={() => setSelected(b)}>
                <div className="cp-branch-dot" />
                <div className="cp-branch-head">
                  <div className="cp-branch-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="cp-branch-title">{b.name}</p>
                    <p className="cp-branch-label">{b.label}</p>
                  </div>
                </div>

                <div className="cp-info-row">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0, marginTop:2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <p className="cp-info-text">{b.address}</p>
                </div>
                <div className="cp-info-row">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <a href={b.phoneHref} className="cp-info-text">{b.phone}</a>
                </div>
                <div className="cp-info-row">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c6fcd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href={`mailto:${b.email}`} className="cp-info-text" style={{ wordBreak:"break-all" }}>{b.email}</a>
                </div>

                <hr className="cp-divider" />

                <div style={{ display:"flex", alignItems:"center", gap:5, marginBottom:8 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span style={{ fontSize:10, fontWeight:700, color:"#9090b0", textTransform:"uppercase", letterSpacing:"0.08em" }}>Opening Hours</span>
                </div>
                {b.hours.map((h, i) => (
                  <div key={i} className="cp-hours-row">
                    <span className="cp-hours-days">{h.days}</span>
                    <span className="cp-hours-time">{h.time}</span>
                  </div>
                ))}

                <div className="cp-cta-row">
                  <a href={b.mapsUrl} target="_blank" rel="noopener noreferrer" className="cp-btn-directions">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><path d="M21 3L9 15"/><path d="M11 3H3v18h18v-8"/></svg>
                    Get Directions
                  </a>
                  <a href={`https://wa.me/${b.waNumber}?text=${encodeURIComponent(b.waText)}`} target="_blank" rel="noopener noreferrer" className="cp-btn-wa">
                    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Form ── */}
          <div className="cp-form-panel">
            <p className="cp-form-title">Book Your Appointment</p>
            <p className="cp-form-sub">Selected Location: <span>{selected.name}</span></p>

            <div className="cp-form-grid">
              <div>
                <label className="cp-label">Your Name <em>*</em></label>
                <input className={`cp-input${errors.name ? " error" : ""}`} name="name" placeholder="John Doe" value={form.name} onChange={handleChange} />
                {errors.name && <span className="cp-error-msg">{errors.name}</span>}
              </div>
              <div>
                <label className="cp-label">Email Address <em>*</em></label>
                <input className={`cp-input${errors.email ? " error" : ""}`} name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} />
                {errors.email && <span className="cp-error-msg">{errors.email}</span>}
              </div>
            </div>

            <div className="cp-form-grid">
              <div>
                <label className="cp-label">Phone Number <em>*</em></label>
                <input className={`cp-input${errors.phone ? " error" : ""}`} name="phone" placeholder="+971 XX XXX XXXX" value={form.phone} onChange={handleChange} />
                {errors.phone && <span className="cp-error-msg">{errors.phone}</span>}
              </div>
              <div>
                <label className="cp-label">Pet Type</label>
                <input className="cp-input" name="petType" placeholder="Dog, Cat, Bird..." value={form.petType} onChange={handleChange} />
              </div>
            </div>

            <div className="cp-form-full">
              <label className="cp-label">How Can We Help? <em>*</em></label>
              <textarea className={`cp-textarea${errors.message ? " error" : ""}`} name="message" placeholder="Tell us about your pet's needs or any questions you have..." value={form.message} onChange={handleChange} />
              {errors.message && <span className="cp-error-msg">{errors.message}</span>}
            </div>

            {/* Location selector */}
            <div className="cp-form-full" style={{ marginBottom:20 }}>
              <label className="cp-label">Preferred Location</label>
              <div style={{ display:"flex", gap:8 }}>
                {branches.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => setSelected(b)}
                    style={{
                      flex:1, padding:"10px 14px", borderRadius:12, cursor:"pointer",
                      border: selected.id === b.id ? "2px solid #f57c20" : "1.5px solid rgba(180,174,230,0.3)",
                      background: selected.id === b.id ? "rgba(245,124,32,0.06)" : "rgba(249,248,253,0.9)",
                      transition:"all 0.16s",
                    }}
                  >
                    <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:12, fontWeight:700, color: selected.id === b.id ? "#f57c20" : "#1a1a2e", margin:"0 0 2px" }}>{b.name}</p>
                    <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:11, color:"#9090b0", margin:0 }}>{b.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className={`cp-submit-btn${submitted ? " success" : ""}`} onClick={handleSubmit}>
              {submitted ? (
                <>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Opening WhatsApp…
                </>
              ) : (
                <>
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Book via WhatsApp
                </>
              )}
            </button>

            
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#eeedf8,#ece9f7)", display:"flex", alignItems:"center", justifyContent:"center" }}><span style={{ fontFamily:"'Poppins',sans-serif", color:"#555570" }}>Loading...</span></div>}>
      <ContactContent />
    </Suspense>
  );
}