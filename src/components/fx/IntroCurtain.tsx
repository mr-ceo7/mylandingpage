"use client";

import { useState } from "react";

/**
 * PCB-green curtain that lifts off the screen on the first visit of a session.
 * It is rendered on the server so there is no flash before it appears; an inline script in
 * layout.tsx adds `intro-seen` to <html> (already seen, or reduced motion) to hide it instantly.
 */
export function IntroCurtain() {
  const [done, setDone] = useState(false);
  if (done) return null;
  return (
    <div
      aria-hidden="true"
      className="intro-curtain fixed inset-0 z-[100] bg-[#0F3D2E] flex flex-col items-center justify-center"
      onAnimationEnd={(e) => {
        if (e.target !== e.currentTarget) return;
        try {
          sessionStorage.setItem("kma-intro-seen", "1");
        } catch {
          // Storage blocked: the curtain simply plays again next visit
        }
        setDone(true);
      }}
    >
      <span className="intro-mark font-serif text-5xl sm:text-6xl text-[#F8F3E8] tracking-tight">Kassim Musa Abass</span>
      <span className="intro-line mt-5 h-[2px] w-48 bg-[#C46A2B]" />
      <span className="intro-name mt-4 font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#E3B23C]">
        Firmware · Platforms · Hardware
      </span>
      <svg viewBox="0 0 1440 130" preserveAspectRatio="none" className="absolute top-full left-0 w-full h-[70px] sm:h-[110px]">
        <path d="M 0,0 L 0,72 C 160,116 360,130 620,108 C 900,84 1140,22 1440,50 L 1440,0 Z" fill="#0F3D2E" />
      </svg>
    </div>
  );
}
