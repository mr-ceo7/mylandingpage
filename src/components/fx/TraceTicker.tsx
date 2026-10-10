"use client";

import { useEffect, useRef } from "react";

// Names taken from the project data and sections on this page
const items = [
  "Galvaniy Labs — Virtual Physics Lab",
  "calcOS — Casio fx-991ES Plus AI Mod",
  "RFID Student Attendance · RP2040 + ESP32",
  "UoN Academic Claims Clearinghouse",
  "NubianFit Coaching Suite",
  "Autonomous Radar Turret",
  "Young Scientists Kenya Mentor",
  "Gearbox Academy Hardware Capstone",
];

// One strip: drifts on its own, speeds up with scroll speed, follows scroll direction
function Strip({ className, direction }: { className: string; direction: 1 | -1 }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let x = 0;
    let lastY = window.scrollY;
    let boost = 0;
    let visible = false;
    const tick = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      // Capped so anchor jumps don't fling the strip
      boost = Math.max(-6, Math.min(6, boost * 0.9 + delta * 0.08));
      x -= direction * ((delta < 0 ? -1 : 1) * 0.45 + boost);
      const half = track.scrollWidth / 2;
      if (half > 0) x = ((x % half) - half) % half;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      if (visible) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        lastY = window.scrollY;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(tick);
      }
    });
    observer.observe(track);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [direction]);

  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden py-3 ${className}`}>
      <div ref={trackRef} className="flex w-max items-center gap-6 will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 whitespace-nowrap" aria-hidden={i >= items.length}>
            <span className="font-mono font-bold text-[11px] sm:text-xs tracking-widest uppercase">{item}</span>
            {/* Solder pad between items */}
            <span className="w-2.5 h-2.5 rounded-[2px] border-2 border-current opacity-70" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Two crossed strips laid over the seam between two bands, like jumper wires across a board. */
export function TraceTicker() {
  return (
    <div className="relative z-20 h-0" role="region" aria-label="Selected work">
      <div className="absolute left-0 right-0 -top-12 h-24 overflow-x-clip">
        <div className="absolute -left-8 -right-8 top-0">
          <Strip className="bg-[#E3B23C] text-[#0B2219] rotate-[2deg] shadow-[0_6px_16px_rgba(0,0,0,0.2)]" direction={-1} />
        </div>
        <div className="absolute -left-8 -right-8 top-11">
          <Strip className="bg-[#C46A2B] text-[#FBF8F1] -rotate-[1.8deg] shadow-[0_10px_24px_rgba(0,0,0,0.3)]" direction={1} />
        </div>
      </div>
    </div>
  );
}
