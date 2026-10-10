"use client";

import { useScrollScene } from "./useScrollScene";

/** Curved bottom edge filled with the next band's color; two wave layers drift as the page scrolls. */
export function SectionCurve({ fill }: { fill: string }) {
  const ref = useScrollScene<HTMLDivElement>();
  return (
    <div ref={ref} aria-hidden="true" className="absolute -bottom-px left-0 right-0 h-[70px] sm:h-[110px] overflow-hidden pointer-events-none">
      <svg viewBox="0 0 1440 130" preserveAspectRatio="none" className="curve-back absolute inset-y-0 -left-[15%] w-[130%] h-full">
        <path d="M 0,130 L 0,40 C 220,0 420,10 700,40 C 980,70 1200,30 1440,50 L 1440,130 Z" style={{ fill }} opacity="0.45" />
      </svg>
      <svg viewBox="0 0 1440 130" preserveAspectRatio="none" className="curve-front absolute inset-y-0 -left-[15%] w-[130%] h-full">
        <path d="M 0,130 L 0,58 C 160,14 360,0 620,22 C 900,46 1140,108 1440,80 L 1440,130 Z" style={{ fill }} />
      </svg>
    </div>
  );
}
