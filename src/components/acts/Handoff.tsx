"use client";

import { useScrollScene } from "../fx/useScrollScene";

// Rows of "code" (editor minimap bars) that continue as copper traces
const rows = [
  { y: 70, w: 360, bend: 160 },
  { y: 130, w: 260, bend: 230 },
  { y: 190, w: 420, bend: 120 },
  { y: 250, w: 300, bend: 200 },
  { y: 310, w: 220, bend: 260 },
  { y: 370, w: 380, bend: 140 },
];

/**
 * The seam between the two acts. Scrolling through it shifts the ground from warm cream to PCB green:
 * the blue code bars slide away and copper traces draw on from where each bar ended.
 */
export function Handoff() {
  const ref = useScrollScene<HTMLElement>();
  return (
    <section ref={ref} aria-label="From software to hardware" className="handoff relative w-full min-h-[110vh] flex items-center overflow-hidden">
      <svg aria-hidden="true" viewBox="0 0 1440 440" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
        {rows.map((r, i) => {
          const x = 90 + r.w;
          const d = `M ${x} ${r.y} H ${x + r.bend} V ${r.y + (i % 2 ? -30 : 30)} H 1460`;
          return (
            <g key={r.y} style={{ ["--row" as string]: i }}>
              <rect className="handoff-bar" x={90} y={r.y - 9} width={r.w} height={18} rx={9} fill={i % 3 === 1 ? "#E34F33" : "#0147BA"} />
              <path className="handoff-trace" d={d} pathLength={1} fill="none" stroke="#C46A2B" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
              <circle className="handoff-via" cx={x} cy={r.y} r={8} fill="none" stroke="#E3B23C" strokeWidth={4} />
            </g>
          );
        })}
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <div className="inline-block bg-[#0B2219] text-[#F8F3E8] px-6 sm:px-10 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)] border border-[#2A5443]">
          <span className="block text-[10px] font-mono tracking-widest uppercase text-[#E3B23C]">Same engineer, one layer down</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight">From code to copper.</h2>
          <p className="mt-4 text-sm sm:text-base text-[#CFC3A8] leading-relaxed">
            calcOS runs on both sides: as a web platform and in-browser emulator, and inside a modified Casio fx-991ES Plus.
          </p>
        </div>
      </div>
    </section>
  );
}
