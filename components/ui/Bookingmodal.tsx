"use client";

import { useState, useEffect, useRef } from "react";

const SERVICES = [
      {
        id: "consultation",
        label: "Pet Consultation",
        desc: "Complete wellness checkups & health plans",
        icon: "M12 18v3m0 0a3 3 0 003-3V9a3 3 0 00-3-3m0 15a3 3 0 01-3-3V9a3 3 0 013-3m0 0V3",
        color: "#f57c20"
      },
      {
        id: "diagnostics",
        label: "In-House Diagnostics",
        desc: "Blood panels, urinalysis & same-day results",
        icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 8.25h-11L5 14.5m14 0H5",
        color: "#7c6fcd"
      },
      {
        id: "pcr",
        label: "PCR Testing",
        desc: "Molecular diagnostics for infectious disease",
        icon: "M12 6v6l4 2",
        color: "#4db6ac"
      },
      {
        id: "imaging",
        label: "Advanced Imaging",
        desc: "Digital X-rays, ultrasound & echocardiography",
        icon: "M3 7h18M3 17h18M6 7v10M18 7v10",
        color: "#e05c7a"
      },
      {
        id: "icu",
        label: "Intensive Care (ICU)",
        desc: "24/7 critical care & continuous monitoring",
        icon: "M12 8v4l3 3",
        color: "#f26b6b"
      },
      {
        id: "dental",
        label: "Dental Care",
        desc: "Professional cleanings & oral health therapy",
        icon: "M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5.5 2 1 4 1 6 0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0-2 .5-4 1-6 .5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z",
        color: "#f5c842"
      },
      {
        id: "laser",
        label: "Laser Therapy",
        desc: "Drug-free pain relief & accelerated healing",
        icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
        color: "#4caf82"
      },
      {
        id: "vaccination",
        label: "Vaccination Programs",
        desc: "Tailored immunization for every life stage",
        icon: "M9 12.75L11.25 15 15 9.75",
        color: "#ff8a50"
      },
      {
        id: "surgery",
        label: "Surgical Services",
        desc: "Board-certified surgeons & full OR support",
        icon: "M4 4l16 16M9 9l-5 5M15 15l5-5",
        color: "#7c6fcd"
      },
      {
        id: "pharmacy",
        label: "In-House Pharmacy",
        desc: "Same-day prescriptions & compounded meds",
        icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5",
        color: "#4caf82"
      },
      {
        id: "grooming",
        label: "Pet Grooming",
        desc: "Breed-specific styling & professional coat care",
        icon: "M6 14l3-3 3 3 6-6",
        color: "#e05c7a"
      },
      {
        id: "boarding",
        label: "Pet Boarding",
        desc: "Safe, vet-supervised overnight stays",
        icon: "M3 12l9-9 9 9M4.5 10.5V21h15V10.5",
        color: "#7c6fcd"
      }
    ];

const PET_TYPES = ["Dog", "Cat", "Bird", "Rabbit", "Reptile", "Fish", "Other"];

const LOCATIONS = [
  {
    id: "al-ain",
    name: "PNCV Al Ain",
    sub: "Central Market, Behind Bawadi Mall",
    waNumber: "971521511465",
    color: "#f57c20",
  },
  {
    id: "dubai",
    name: "PNCV Dubai (JVC)",
    sub: "Dar Al Jawhara Building, JVC",
    waNumber: "971503408149",
    color: "#7c6fcd",
  },
];

const STEP_META = [
  { number: 1, title: "Your Pet",     subtitle: "Tell us about your furry friend" },
  { number: 2, title: "Service",      subtitle: "What do you need help with?" },
  { number: 3, title: "Your Details", subtitle: "How can we reach you?" },
  { number: 4, title: "Location",     subtitle: "Choose your nearest clinic" },
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep]           = useState(1);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);
  const [done, setDone]           = useState(false);

  const [petName, setPetName]     = useState("");
  const [petType, setPetType]     = useState("");
  const [petAge, setPetAge]       = useState("");
  const [service, setService]     = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone]         = useState("");
  const [email, setEmail]         = useState("");
  const [location, setLocation]   = useState("");
  const [errors, setErrors]       = useState<Record<string, string>>({});

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        setStep(1); setDirection("forward"); setDone(false);
        setPetName(""); setPetType(""); setPetAge(""); setService("");
        setOwnerName(""); setPhone(""); setEmail(""); setLocation("");
        setErrors({});
      }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const goTo = (next: number, dir: "forward" | "back") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setStep(next);
      setAnimating(false);
    }, 260);
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!petName.trim()) e.petName = "Pet name is required";
      if (!petType)        e.petType = "Select a pet type";
    }
    if (step === 2 && !service) e.service = "Please select a service";
    if (step === 3) {
      if (!ownerName.trim()) e.ownerName = "Your name is required";
      if (!phone.trim())     e.phone     = "Phone number is required";
    }
    if (step === 4 && !location) e.location = "Please choose a location";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    if (step < 4) { goTo(step + 1, "forward"); return; }
    const loc = LOCATIONS.find((l) => l.id === location)!;
    const svc = SERVICES.find((s) => s.id === service)?.label ?? service;
    const msg =
`Hello! I'd like to book an appointment at ${loc.name}.

🐾 Pet Name: ${petName}
🐶 Pet Type: ${petType}${petAge ? `\n🎂 Pet Age: ${petAge}` : ""}

🩺 Service Needed: ${svc}

👤 Owner Name: ${ownerName}
📞 Phone: ${phone}${email ? `\n📧 Email: ${email}` : ""}

📍 Preferred Location: ${loc.name}`;

    window.open(`https://wa.me/${loc.waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setDone(true);
  };

  const back = () => {
    if (step > 1) goTo(step - 1, "back");
  };

  const progress = ((step - 1) / 3) * 100;

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .bm-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(15, 12, 30, 0.55);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          animation: bmFadeIn 0.22s ease;
        }
        @keyframes bmFadeIn { from { opacity: 0; } to { opacity: 1; } }

        .bm-modal {
          background: #fff;
          border-radius: 28px;
          width: 100%; max-width: 520px;
          box-shadow: 0 32px 80px rgba(15,12,30,0.28), 0 4px 24px rgba(245,124,32,0.08);
          overflow: hidden;
          animation: bmSlideUp 0.28s cubic-bezier(0.34,1.26,0.64,1);
          font-family: 'Poppins', sans-serif;
          position: relative;
          /* Let the modal grow with content but cap it so it doesn't exceed viewport */
          max-height: 92vh;
          display: flex;
          flex-direction: column;
        }
        @keyframes bmSlideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ── Header ── */
        .bm-header {
          padding: 28px 28px 0;
          position: relative;
          flex-shrink: 0;
        }
        .bm-close {
          position: absolute; top: 20px; right: 20px;
          width: 34px; height: 34px; border-radius: 10px;
          background: #f5f4fb; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s;
        }
        .bm-close:hover { background: #ece9f7; }

        /* ── Progress ── */
        .bm-progress-track {
          height: 4px; background: #f0edf9; border-radius: 2px;
          margin: 20px 0 0; overflow: hidden;
        }
        .bm-progress-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, #f57c20, #f59e40);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ── Step dots ── */
        .bm-steps {
          display: flex; align-items: center; gap: 6px;
          margin: 14px 0 0;
        }
        .bm-step-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #e8e5f5; transition: all 0.25s;
        }
        .bm-step-dot.active {
          background: #f57c20; width: 24px; border-radius: 4px;
        }
        .bm-step-dot.done { background: #f57c20; opacity: 0.35; }

        /* ── Body ── */
        .bm-body {
          padding: 24px 28px 28px;
          min-height: 320px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* Step 2 gets its own scrollable body */
        .bm-body.scrollable {
          overflow-y: auto;
          min-height: unset;
          /* Takes remaining space between header and footer */
          flex: 1;
        }
        .bm-body.scrollable::-webkit-scrollbar {
          width: 4px;
        }
        .bm-body.scrollable::-webkit-scrollbar-track {
          background: #f0edf9;
          border-radius: 2px;
          margin: 8px 0;
        }
        .bm-body.scrollable::-webkit-scrollbar-thumb {
          background: #d4cff0;
          border-radius: 2px;
        }
        .bm-body.scrollable::-webkit-scrollbar-thumb:hover {
          background: #f57c20;
        }

        /* Scroll hint fade at bottom of step 2 */
        .bm-scroll-hint {
          position: sticky;
          bottom: 0;
          left: 0; right: 0;
          height: 36px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.95));
          pointer-events: none;
          margin: -8px -28px 0;
        }

        /* Slide animations */
        .bm-step-enter-forward  { animation: bmEnterFwd  0.26s cubic-bezier(0.4,0,0.2,1) forwards; }
        .bm-step-enter-back     { animation: bmEnterBack 0.26s cubic-bezier(0.4,0,0.2,1) forwards; }
        .bm-step-exit-forward   { animation: bmExitFwd   0.22s ease forwards; position:absolute; inset:0; padding:24px 28px; }
        .bm-step-exit-back      { animation: bmExitBack  0.22s ease forwards; position:absolute; inset:0; padding:24px 28px; }

        @keyframes bmEnterFwd  { from { opacity:0; transform:translateX(40px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes bmEnterBack { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:translateX(0); } }
        @keyframes bmExitFwd   { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(-30px); } }
        @keyframes bmExitBack  { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(30px);  } }

        /* ── Step title ── */
        .bm-step-title { font-size: 20px; font-weight: 800; color: #1a1a2e; margin: 0 0 3px; letter-spacing: -0.02em; }
        .bm-step-sub   { font-size: 13px; color: #9090b0; margin: 0 0 22px; font-weight: 400; }

        /* ── Form elements ── */
        .bm-label {
          font-size: 11px; font-weight: 700; color: #555570;
          text-transform: uppercase; letter-spacing: 0.08em;
          display: block; margin: 0 0 6px;
        }
        .bm-label em { color: #f57c20; font-style: normal; }
        .bm-input {
          width: 100%; padding: 11px 14px; border-radius: 12px;
          border: 1.5px solid #e8e5f5; background: #faf9fd;
          font-family: 'Poppins', sans-serif; font-size: 13.5px; color: #1a1a2e;
          outline: none; transition: border-color 0.18s, box-shadow 0.18s;
          box-sizing: border-box;
        }
        .bm-input::placeholder { color: #c0bcd8; }
        .bm-input:focus { border-color: #f57c20; box-shadow: 0 0 0 3px rgba(245,124,32,0.1); background: #fff; }
        .bm-input.error { border-color: #ef4444; }
        .bm-err { font-size: 11px; color: #ef4444; margin: 4px 0 0; display: block; font-weight: 500; }
        .bm-field { margin-bottom: 14px; }
        .bm-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }

        /* Pet type pills */
        .bm-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .bm-pill {
          padding: 8px 16px; border-radius: 20px; cursor: pointer;
          font-family: 'Poppins', sans-serif; font-size: 12.5px; font-weight: 600;
          border: 1.5px solid #e8e5f5; background: #faf9fd; color: #555570;
          transition: all 0.16s;
        }
        .bm-pill:hover   { border-color: #f57c20; color: #f57c20; background: #fff8f3; }
        .bm-pill.selected { border-color: #f57c20; background: #fff5ee; color: #f57c20; }

        /* Service grid */
        .bm-service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .bm-service-card {
          display: flex; align-items: center; gap: 10px; padding: 11px 13px;
          border-radius: 12px; cursor: pointer;
          border: 1.5px solid #e8e5f5; background: #faf9fd;
          transition: all 0.16s;
        }
        .bm-service-card:hover   { border-color: rgba(245,124,32,0.4); background: #fff8f3; }
        .bm-service-card.selected { border-color: #f57c20; background: #fff5ee; box-shadow: 0 2px 12px rgba(245,124,32,0.12); }
        .bm-service-icon {
          width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .bm-service-label { font-size: 12px; font-weight: 600; color: #1a1a2e; line-height: 1.3; }

        /* Location cards */
        .bm-loc-card {
          display: flex; align-items: center; gap: 14px; padding: 16px 18px;
          border-radius: 16px; cursor: pointer;
          border: 2px solid #e8e5f5; background: #faf9fd;
          transition: all 0.18s; margin-bottom: 10px;
        }
        .bm-loc-card:last-child { margin-bottom: 0; }
        .bm-loc-card:hover     { border-color: rgba(245,124,32,0.35); background: #fff8f3; }
        .bm-loc-card.selected  { border-color: #f57c20; background: #fff5ee; box-shadow: 0 4px 18px rgba(245,124,32,0.14); }
        .bm-loc-icon {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .bm-loc-name { font-size: 14px; font-weight: 700; color: #1a1a2e; margin: 0 0 2px; }
        .bm-loc-sub  { font-size: 11.5px; color: #9090b0; margin: 0; }
        .bm-loc-check {
          margin-left: auto; width: 22px; height: 22px; border-radius: 50%;
          border: 2px solid #e0ddf5; flex-shrink: 0; transition: all 0.18s;
          display: flex; align-items: center; justify-content: center;
        }
        .bm-loc-card.selected .bm-loc-check { background: #f57c20; border-color: #f57c20; }

        /* ── Footer ── */
        .bm-footer {
          padding: 0 28px 28px;
          display: flex; gap: 10px; align-items: center;
          flex-shrink: 0;
          /* Subtle top separator so footer always feels grounded */
          border-top: 1px solid #f0edf9;
          padding-top: 16px;
        }
        .bm-btn-back {
          padding: 12px 20px; border-radius: 12px;
          border: 1.5px solid #e8e5f5; background: #faf9fd;
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; color: #555570;
          cursor: pointer; display: flex; align-items: center; gap: 6px;
          transition: all 0.16s; flex-shrink: 0;
        }
        .bm-btn-back:hover { background: #ece9f7; border-color: #ccc8e8; color: #1a1a2e; }
        .bm-btn-next {
          flex: 1; padding: 13px; border-radius: 12px; border: none;
          background: linear-gradient(135deg, #f57c20, #e8650a);
          font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; color: #fff;
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 4px 16px rgba(245,124,32,0.3); transition: opacity 0.18s, transform 0.15s;
        }
        .bm-btn-next:hover { opacity: 0.92; transform: translateY(-1px); }
        .bm-btn-next:active { transform: translateY(0); }
        .bm-btn-next.wa { background: linear-gradient(135deg, #25d366, #1aad4f); box-shadow: 0 4px 16px rgba(37,211,102,0.3); }

        /* ── Done screen ── */
        .bm-done {
          padding: 48px 28px;
          display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px;
        }
        .bm-done-icon {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #1aad4f);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 28px rgba(37,211,102,0.3);
          animation: bmPop 0.4s cubic-bezier(0.34,1.4,0.64,1);
        }
        @keyframes bmPop { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .bm-done h3 { font-size: 22px; font-weight: 800; color: #1a1a2e; margin: 0; letter-spacing: -0.02em; }
        .bm-done p  { font-size: 13.5px; color: #9090b0; margin: 0; line-height: 1.65; max-width: 340px; }
        .bm-done-close {
          margin-top: 8px; padding: 12px 32px; border-radius: 12px; border: none;
          background: #1a1a2e; color: #fff;
          font-family: 'Poppins', sans-serif; font-size: 13.5px; font-weight: 700;
          cursor: pointer; transition: background 0.18s;
        }
        .bm-done-close:hover { background: #f57c20; }

        @media (max-width: 540px) {
          .bm-modal { border-radius: 20px; }
          .bm-header { padding: 20px 20px 0; }
          .bm-body { padding: 20px 20px 24px; min-height: 280px; }
          .bm-footer { padding: 16px 20px 20px; }
          .bm-service-grid { grid-template-columns: 1fr 1fr; }
          .bm-grid2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 380px) {
          .bm-service-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="bm-overlay" ref={overlayRef} onClick={handleOverlayClick}>
        <div className="bm-modal" role="dialog" aria-modal="true">

          {done ? (
            <div className="bm-done">
              <div className="bm-done-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3>WhatsApp Opened!</h3>
              <p>Your booking details have been pre-filled. Just hit send and our team will confirm your appointment shortly.</p>
              <button className="bm-done-close" onClick={onClose}>Close</button>
            </div>
          ) : (
            <>
              {/* Header — always visible */}
              <div className="bm-header">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 9, background: "#fff5ee", border: "1px solid #fdd5b0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#f57c20">
                      <ellipse cx="12" cy="17" rx="5" ry="4"/>
                      <circle cx="6" cy="10" r="2.5"/>
                      <circle cx="18" cy="10" r="2.5"/>
                      <circle cx="9" cy="6" r="2"/>
                      <circle cx="15" cy="6" r="2"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, fontWeight: 700, color: "#f57c20", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Book Appointment
                  </span>
                  <span style={{ marginLeft: "auto", fontFamily: "'Poppins',sans-serif", fontSize: 11.5, color: "#9090b0", fontWeight: 500 }}>
                    Step {step} of 4
                  </span>
                </div>

                <div className="bm-progress-track">
                  <div className="bm-progress-fill" style={{ width: `${progress}%` }} />
                </div>

                <div className="bm-steps">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className={`bm-step-dot ${s === step ? "active" : s < step ? "done" : ""}`} />
                  ))}
                  <span style={{ marginLeft: "auto", fontFamily: "'Poppins',sans-serif", fontSize: 11, color: "#c0bcd8", fontWeight: 500 }}>
                    {STEP_META[step - 1].subtitle}
                  </span>
                </div>
              </div>

              {/* Body — scrollable only on step 2 */}
              <div className={`bm-body${step === 2 ? " scrollable" : ""}`}>
                <div className={animating
                  ? (direction === "forward" ? "bm-step-exit-forward" : "bm-step-exit-back")
                  : (direction === "forward" ? "bm-step-enter-forward" : "bm-step-enter-back")
                }>
                  <p className="bm-step-title">{STEP_META[step - 1].title}</p>
                  <p className="bm-step-sub">{STEP_META[step - 1].subtitle}</p>

                  {/* ── STEP 1 ── */}
                  {step === 1 && (
                    <>
                      <div className="bm-grid2">
                        <div>
                          <label className="bm-label">Pet Name <em>*</em></label>
                          <input
                            className={`bm-input${errors.petName ? " error" : ""}`}
                            placeholder="e.g. Buddy"
                            value={petName}
                            onChange={(e) => { setPetName(e.target.value); setErrors({ ...errors, petName: "" }); }}
                          />
                          {errors.petName && <span className="bm-err">{errors.petName}</span>}
                        </div>
                        <div>
                          <label className="bm-label">Age (optional)</label>
                          <input
                            className="bm-input"
                            placeholder="e.g. 2 years"
                            value={petAge}
                            onChange={(e) => setPetAge(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="bm-field">
                        <label className="bm-label">Pet Type <em>*</em></label>
                        <div className="bm-pills">
                          {PET_TYPES.map((t) => (
                            <button
                              key={t}
                              className={`bm-pill${petType === t ? " selected" : ""}`}
                              onClick={() => { setPetType(t); setErrors({ ...errors, petType: "" }); }}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                        {errors.petType && <span className="bm-err">{errors.petType}</span>}
                      </div>
                    </>
                  )}

                  {/* ── STEP 2 ── */}
                  {step === 2 && (
                    <div className="bm-field">
                      <div className="bm-service-grid">
                        {SERVICES.map((s) => (
                          <div
                            key={s.id}
                            className={`bm-service-card${service === s.id ? " selected" : ""}`}
                            onClick={() => { setService(s.id); setErrors({ ...errors, service: "" }); }}
                          >
                            <div className="bm-service-icon" style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d={s.icon} />
                              </svg>
                            </div>
                            <span className="bm-service-label">{s.label}</span>
                            {service === s.id && (
                              <svg style={{ marginLeft: "auto", flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f57c20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                      {errors.service && <span className="bm-err" style={{ marginTop: 8 }}>{errors.service}</span>}
                      {/* Scroll hint fade */}
                      <div className="bm-scroll-hint" />
                    </div>
                  )}

                  {/* ── STEP 3 ── */}
                  {step === 3 && (
                    <>
                      <div className="bm-field">
                        <label className="bm-label">Your Name <em>*</em></label>
                        <input
                          className={`bm-input${errors.ownerName ? " error" : ""}`}
                          placeholder="John Doe"
                          value={ownerName}
                          onChange={(e) => { setOwnerName(e.target.value); setErrors({ ...errors, ownerName: "" }); }}
                        />
                        {errors.ownerName && <span className="bm-err">{errors.ownerName}</span>}
                      </div>
                      <div className="bm-field">
                        <label className="bm-label">Phone Number <em>*</em></label>
                        <input
                          className={`bm-input${errors.phone ? " error" : ""}`}
                          placeholder="+971 XX XXX XXXX"
                          value={phone}
                          onChange={(e) => { setPhone(e.target.value); setErrors({ ...errors, phone: "" }); }}
                        />
                        {errors.phone && <span className="bm-err">{errors.phone}</span>}
                      </div>
                      <div className="bm-field" style={{ marginBottom: 0 }}>
                        <label className="bm-label">Email (optional)</label>
                        <input
                          className="bm-input"
                          type="email"
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {/* ── STEP 4 ── */}
                  {step === 4 && (
                    <div className="bm-field" style={{ marginBottom: 0 }}>
                      {LOCATIONS.map((loc) => (
                        <div
                          key={loc.id}
                          className={`bm-loc-card${location === loc.id ? " selected" : ""}`}
                          onClick={() => { setLocation(loc.id); setErrors({ ...errors, location: "" }); }}
                        >
                          <div className="bm-loc-icon" style={{ background: `${loc.color}15`, border: `1px solid ${loc.color}25` }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={loc.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                            </svg>
                          </div>
                          <div>
                            <p className="bm-loc-name">{loc.name}</p>
                            <p className="bm-loc-sub">{loc.sub}</p>
                          </div>
                          <div className="bm-loc-check">
                            {location === loc.id && (
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                            )}
                          </div>
                        </div>
                      ))}
                      {errors.location && <span className="bm-err">{errors.location}</span>}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer — always visible */}
              <div className="bm-footer">
                {step > 1 ? (
                  <button className="bm-btn-back" onClick={back}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                    Back
                  </button>
                ) : (
                  <button className="bm-btn-back" onClick={onClose}>Cancel</button>
                )}
                <button className={`bm-btn-next${step === 4 ? " wa" : ""}`} onClick={next}>
                  {step === 4 ? (
                    <>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Send via WhatsApp
                    </>
                  ) : (
                    <>
                      Continue
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </>
                  )}
                </button>
              </div>
            </>
          )}

          {/* Close button */}
          {!done && (
            <button className="bm-close" onClick={onClose} style={{ position: "absolute", top: 20, right: 20 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}

        </div>
      </div>
    </>
  );
}