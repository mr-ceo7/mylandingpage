"use client";

import { type CSSProperties } from "react";
import { PROJECTS } from "../../data/projects";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";
import { useScrollScene } from "../fx/useScrollScene";
import { CountUp } from "../fx/CountUp";

type Side = "software" | "hardware";

const counts = (side: Side) => {
  const list = PROJECTS.filter((p) => (side === "hardware" ? p.category === "hardware" : p.category !== "hardware"));
  return { total: list.length, flagships: list.filter((p) => p.isFlagship).length };
};

/** A terminal whose lines type themselves out as it scrolls into view (and un-type going back up). */
function ScrollTerminal({ lines }: { lines: string[] }) {
  const ref = useScrollScene<HTMLDivElement>();
  return (
    <div ref={ref} className="border border-neutral-800 bg-neutral-950/70 font-mono text-xs sm:text-sm shadow-[0_20px_44px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 text-[10px] tracking-widest uppercase text-neutral-400">
        <span>~/mr-ceo7 — zsh</span>
        <span>tty1</span>
      </div>
      <div className="px-4 py-4 space-y-1.5">
        {lines.map((line, i) => (
          <div key={line} className="flex">
            <span className="type-line text-neutral-100" style={{ "--chars": line.length, "--line": i } as CSSProperties}>
              {line}
            </span>
          </div>
        ))}
        <span className="type-cursor inline-block w-2 h-4 align-middle bg-[#FFC2AE]" />
      </div>
    </div>
  );
}

/** An oscilloscope screen whose trace draws across as it scrolls into view. */
function ScrollScope() {
  const ref = useScrollScene<HTMLDivElement>();
  // A square-ish digital signal: the kind you probe on an MCU pin
  const wave = "M 0 110 H 40 V 50 H 110 V 110 H 150 V 50 H 190 V 110 H 260 V 50 H 300 V 110 H 340 V 50 H 410 V 110 H 450 V 50 H 490 V 110 H 560";
  return (
    <div ref={ref} className="border border-neutral-800 bg-neutral-950/70 shadow-[0_20px_44px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 text-[10px] font-mono tracking-widest uppercase text-neutral-400">
        <span>CH1 · GPIO</span>
        <span>RP2040</span>
      </div>
      <svg viewBox="0 0 560 160" className="w-full h-auto block" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 80} y1={0} x2={i * 80} y2={160} stroke="#E3B23C" strokeOpacity={0.12} />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 40 + 20} x2={560} y2={i * 40 + 20} stroke="#E3B23C" strokeOpacity={0.12} />
        ))}
        <path d={wave} pathLength={1} className="scope-trace" fill="none" stroke="#E3B23C" strokeWidth={3} strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function ActIntro({ side }: { side: Side }) {
  const { total, flagships } = counts(side);
  const software = side === "software";
  return (
    <section id={software ? "software" : "hardware-act"} className="w-full bg-surface pt-24 pb-16 sm:pt-28 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <Reveal>
            <span className="text-[10px] font-mono tracking-widest uppercase text-accent dark:text-accent-hi font-semibold">
              {software ? "Act I · Software" : "Act II · Hardware"}
            </span>
          </Reveal>
          <KineticHeading
            text={software ? "The Software" : "The Hardware"}
            highlight={software ? "Software" : "Hardware"}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-50"
          />
          <Reveal delay={120}>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              {software
                ? "Web platforms, AI tools and developer products, written in TypeScript and deployed on Vercel."
                : "Firmware in C/C++ for RP2040 and ESP32, and the sensors, motors and boards it drives, built at the bench."}
            </p>
            <div className="mt-6 flex gap-8 font-mono">
              <div>
                <div className="font-serif text-4xl text-neutral-50"><CountUp value={flagships} /></div>
                <div className="text-[10px] tracking-widest uppercase text-neutral-400 mt-1">Flagship {software ? "platforms" : "builds"}</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-neutral-50"><CountUp value={total} /></div>
                <div className="text-[10px] tracking-widest uppercase text-neutral-400 mt-1">Projects in this act</div>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal variant="right" delay={150} className="lg:col-span-6">
          {software ? <ScrollTerminal lines={["$ git push origin main", "$ npm run build", "$ vercel deploy --prod"]} /> : <ScrollScope />}
        </Reveal>
      </div>
    </section>
  );
}
