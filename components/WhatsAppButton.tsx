"use client";
import { useState } from "react";

const clinics = [
  { name: "Al Ain", number: "971521511465" },
  { name: "Dubai", number: "971503408149" },
];

const message = encodeURIComponent(
  "Hi! I found your website and I'm interested in booking an appointment for my pet. Could you please let me know your availability?"
);

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="white">
    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.75.72 5.33 1.97 7.58L.5 31.5l8.18-2.14A15.44 15.44 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.6a13.1 13.1 0 0 1-6.67-1.83l-.48-.28-4.86 1.27 1.3-4.73-.31-.49A13.1 13.1 0 0 1 2.9 16C2.9 9.3 8.3 3.9 16 3.9S29.1 9.3 29.1 16 23.7 29.1 16 29.1zm7.19-9.81c-.39-.2-2.32-1.15-2.68-1.28-.36-.13-.62-.2-.88.2s-1.01 1.28-1.24 1.54c-.23.26-.46.29-.85.1a10.71 10.71 0 0 1-3.15-1.95 11.83 11.83 0 0 1-2.18-2.72c-.23-.39 0-.6.17-.8.16-.17.36-.46.55-.69.18-.23.24-.39.36-.65.12-.26.06-.49-.03-.69-.1-.2-.88-2.13-1.21-2.91-.32-.76-.64-.66-.88-.67h-.75c-.26 0-.69.1-1.05.49s-1.38 1.35-1.38 3.28 1.41 3.8 1.61 4.06c.2.26 2.78 4.25 6.74 5.96.94.41 1.68.65 2.25.83.95.3 1.81.26 2.49.16.76-.11 2.32-.95 2.65-1.86.33-.91.33-1.69.23-1.86-.1-.17-.36-.26-.75-.46z"/>
  </svg>
);

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Pill badges */}
      {clinics.map((clinic) => (
        <a key={clinic.name} href={`https://wa.me/${clinic.number}?text=${message}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-200">
          <WhatsAppIcon size={16} />
          {clinic.name}
        </a>
      ))}

      
    </div>
  );
}