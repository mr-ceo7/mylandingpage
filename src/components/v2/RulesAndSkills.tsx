"use client";

import { type CSSProperties } from "react";
import { PRINCIPLES, SKILLS } from "../../data/site";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";

/** A tiny looping diagram for each rule. */
function RuleDiagram({ n }: { n: number }) {
  const common = "w-full h-20";
  if (n === 0)
    // Failover: a packet takes the backup route when the main link drops
    return (
      <svg viewBox="0 0 220 80" className={common} aria-hidden="true">
        <circle cx="20" cy="40" r="10" fill="#0147BA" />
        <circle cx="200" cy="40" r="10" fill="#0F3D2E" />
        <path d="M30 40 H190" stroke="#E34F33" strokeWidth="3" strokeDasharray="6 6" className="rule-break" />
        <path d="M30 40 C 80 -5, 140 -5, 190 40" fill="none" stroke="#C46A2B" strokeWidth="3" />
        <circle r="6" fill="#E3B23C" className="rule-packet">
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M30 40 C 80 -5, 140 -5, 190 40" />
        </circle>
      </svg>
    );
  if (n === 1)
    // Deterministic timing: an evenly spaced square wave
    return (
      <svg viewBox="0 0 220 80" className={common} aria-hidden="true">
        <path d="M0 60 H25 V20 H55 V60 H85 V20 H115 V60 H145 V20 H175 V60 H205 V20 H220" pathLength={1} className="rule-wave" fill="none" stroke="#E3B23C" strokeWidth="3" />
      </svg>
    );
  if (n === 2)
    // Zero jank: frames ticking at a steady rhythm
    return (
      <svg viewBox="0 0 220 80" className={common} aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x={8 + i * 21} y={22} width={14} height={36} rx={3} fill="#0147BA" className="rule-frame" style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </svg>
    );
  // Integrity: a checkmark sealed inside a shield
  return (
    <svg viewBox="0 0 220 80" className={common} aria-hidden="true">
      <path d="M110 8 L140 20 V42 C140 58 126 70 110 74 C94 70 80 58 80 42 V20 Z" fill="none" stroke="#C46A2B" strokeWidth="3" />
      <path d="M96 42 L106 52 L126 30" pathLength={1} className="rule-check" fill="none" stroke="#E3B23C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Which side of the tree each skill domain grows on
const SIDE: Record<string, "software" | "hardware" | "shared"> = {
  "EMBEDDED & HARDWARE": "hardware",
  "BACKEND & DISTRIBUTED SYSTEMS": "software",
  "FRONTEND & PLATFORM": "software",
  "TOOLCHAINS & DEPLOYMENT": "shared",
};

export function RulesAndSkills() {
  const software = SKILLS.filter((s) => SIDE[s.domain] === "software");
  const hardware = SKILLS.filter((s) => SIDE[s.domain] === "hardware");
  const shared = SKILLS.filter((s) => SIDE[s.domain] === "shared");

  return (
    <section id="philosophy" className="w-full bg-[#F2EBDD] py-20 sm:py-28 overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#9A4E1C]">Both sides · Principles</span>
        </Reveal>
        <KineticHeading text="Four rules I don't break." highlight="don't break." className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight text-[#0A2E22]" />

        {/* Rule cards stacked down the page, one per screen, alternating sides */}
        <div className="mt-12 space-y-10 sm:space-y-16">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.num} variant={i % 2 === 0 ? "left" : "right"} className={`min-h-[60vh] flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <article className="rule-card w-full sm:w-[82%] lg:w-[70%] bg-[#FBF8F1] border border-[#CFC3A8] p-6 sm:p-10 grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-2">
                  <span className="font-mono text-[11px] tracking-widest text-[#9A4E1C]">RULE {p.num}</span>
                  <div className="mt-4 rounded-sm bg-[#0A2E22] px-3 py-3">
                    <RuleDiagram n={i} />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-2xl sm:text-3xl leading-snug text-[#0A2E22]">{p.title}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#39483E]">{p.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Skill tree */}
        <Reveal className="mt-20">
          <h3 className="font-serif text-3xl text-center text-[#0A2E22]">The toolkit, as a tree</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-start">
            {/* Software branch */}
            <div className="space-y-5 md:text-right">
              {software.map((s) => (
                <div key={s.domain}>
                  <div className="font-mono text-[10px] tracking-widest text-[#0147BA]">{s.domain}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5 md:justify-end">
                    {s.items.map((it, li) => <span key={it} style={{ "--i": li } as CSSProperties} className="skill-leaf px-2 py-1 text-[11px] bg-[#0147BA] text-[#F3E6CE]">{it}</span>)}
                  </div>
                </div>
              ))}
            </div>
            {/* Trunk */}
            <div className="flex md:flex-col items-center justify-center gap-3 order-first md:order-none">
              <span className="hidden md:block w-px h-24 bg-gradient-to-b from-[#0147BA] to-[#0F3D2E]" />
              <span className="px-4 py-2 rounded-full bg-[#0A2E22] text-[#E3B23C] font-mono text-[10px] tracking-widest">KASSIM</span>
              <span className="hidden md:block w-px h-24 bg-gradient-to-b from-[#0F3D2E] to-[#C46A2B]" />
            </div>
            {/* Hardware branch */}
            <div className="space-y-5">
              {hardware.map((s) => (
                <div key={s.domain}>
                  <div className="font-mono text-[10px] tracking-widest text-[#0F3D2E]">{s.domain}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {s.items.map((it, li) => <span key={it} style={{ "--i": li } as CSSProperties} className="skill-leaf px-2 py-1 text-[11px] bg-[#0F3D2E] text-[#F8F3E8]">{it}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Roots: shared toolchain */}
          {shared.map((s) => (
            <div key={s.domain} className="mt-8 text-center">
              <div className="font-mono text-[10px] tracking-widest text-[#9A4E1C]">ROOTS · {s.domain}</div>
              <div className="mt-2 flex flex-wrap gap-1.5 justify-center">
                {s.items.map((it, li) => <span key={it} style={{ "--i": li } as CSSProperties} className="skill-leaf px-2 py-1 text-[11px] border border-[#C46A2B] text-[#9A4E1C]">{it}</span>)}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
