"use client";

import { type CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, Terminal, Cpu, Layers } from "lucide-react";
import { useScrollScene } from "./fx/useScrollScene";

// Copper routes behind the hero: right-angle traces ending in vias, drawn in on load
const traces = [
  "M -20 120 H 260 V 220 H 520",
  "M -20 340 H 140 V 470 H 430 V 560",
  "M 1460 90 H 1180 V 180 H 980",
  "M 1460 520 H 1290 V 400 H 1060",
  "M 600 -20 V 60 H 820 V 130",
  "M 380 700 V 640 H 700 V 600",
];
const vias = [
  [520, 220], [430, 560], [980, 180], [1060, 400], [820, 130], [700, 600],
];

const components = [
  {
    ref: "U2",
    side: "software",
    icon: Terminal,
    label: "Academic clearinghouse",
    title: "UoN Student Portal",
    body: "Institutional claims, administrative resolution queues & Google SSO.",
  },
  {
    ref: "U3",
    side: "hardware",
    icon: Cpu,
    label: "Embedded hardware",
    title: "RP2040 & ESP32",
    body: "Gearbox Academy RFID attendance, C/C++ interrupt routines & dual-core tasking.",
  },
  {
    ref: "U4",
    side: "software",
    icon: Layers,
    label: "Production stack",
    title: "React 19 & Next.js",
    body: "Over 18 active deployments with Vercel CLI, sub-second LCP & typed APIs.",
  },
];

const specs = [
  ["Primary tools", "C++, TS, Python, Kotlin"],
  ["Hardware cadence", "Gearbox Academy grad"],
  ["Hosting runtime", "Vercel Edge & AWS ECS"],
];

export function Hero() {
  // --exit drives the hero easing back as it scrolls away
  const ref = useScrollScene<HTMLElement>();
  const rise = (delay: number) => ({ "--rise-delay": `${delay}s` }) as CSSProperties;

  return (
    <section ref={ref} className="relative w-full bg-surface pt-14 sm:pt-20 pb-10 sm:pb-16 overflow-hidden transition-colors">
      {/* Board texture: faint grid of drill points */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#E3B23C 1px, transparent 1.2px)", backgroundSize: "28px 28px" }}
      />
      {/* Copper traces (behind everything; tablet and up only, since a phone-width crop blows them up across the copy) */}
      <svg aria-hidden="true" viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 z-0 w-full h-full pointer-events-none hidden sm:block">
        {traces.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            className="hero-trace"
            style={{ animationDelay: `${0.15 * i}s` }}
            fill="none"
            stroke="#C46A2B"
            strokeOpacity={0.55}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {vias.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={7} fill="none" stroke="#E3B23C" strokeOpacity={0.6} strokeWidth={3} />
        ))}
      </svg>

      {/* Software side: Electric Blue panel with a faint editor-minimap texture, cut on a diagonal (desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 w-[60%] z-0 bg-[#0147BA]"
        style={{ clipPath: "polygon(0 0, 100% 0, 86% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "repeating-linear-gradient(180deg, transparent 0 22px, #F3E6CE 22px 26px)", maskImage: "linear-gradient(90deg, #000 0 30%, transparent 75%)", WebkitMaskImage: "linear-gradient(90deg, #000 0 30%, transparent 75%)" }} />
      </div>

      <div className="hero-exit relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header rule */}
        <div className="rise-in flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-4 mb-10 sm:mb-12">
          <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase">
            <span className="text-neutral-400">Portfolio 2026</span>
            <span className="text-neutral-700">/</span>
            <span className="text-neutral-200 font-semibold">Nairobi, Kenya</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-neutral-400">
            <span>Vercel CLI deployments: 20+</span>
            <span className="text-neutral-700">/</span>
            <span>Hardware capstones: active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left: headline and story (the software side) */}
          <div className="relative lg:col-span-7 space-y-8">
            {/* Phones: the blue runs full-bleed behind the copy; the chip below stays on green */}
            <div aria-hidden="true" className="lg:hidden absolute -inset-x-4 sm:-inset-x-6 -top-48 -bottom-10 -z-10 bg-[#0147BA]" />
            <div className="space-y-4">
              <span className="rise-in block text-xs font-mono tracking-widest uppercase text-[#FFC2AE] font-semibold" style={rise(0.05)}>
                Full-stack software & systems / IoT engineer
              </span>
              <h1 className="rise-in font-serif text-4xl sm:text-5xl lg:text-[64px] tracking-tight text-neutral-50 leading-[1.08]" style={rise(0.12)}>
                From <span className="italic text-[#E3B23C]">bare-metal firmware</span> to <span className="italic text-[#FFC2AE]">production web platforms.</span>
              </h1>
            </div>

            <p className="rise-in text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl" style={rise(0.2)}>
              I am Kassim Musa Abass (<span className="font-mono text-neutral-100 font-semibold">@mr-ceo7</span>). My work spans both sides of the
              physical-digital boundary: low-level C/C++ firmware and SPI bus protocols on Raspberry Pi Pico and ESP32 hardware, and the institutional
              platforms and web applications I deploy on Vercel.
            </p>

            <div className="rise-in flex flex-col sm:flex-row items-stretch sm:items-center gap-3" style={rise(0.28)}>
              <a
                href="#software"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs font-mono tracking-widest uppercase bg-[#F3E6CE] text-[#081F4D] hover:bg-[#FFC2AE] transition-colors"
              >
                <span>See the software</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#hardware-act"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs font-mono tracking-widest uppercase border border-[#E3B23C]/70 hover:border-[#E3B23C] hover:bg-[#E3B23C]/10 text-neutral-50 transition-colors"
              >
                <span>See the hardware</span>
                <Cpu className="w-3.5 h-3.5 transition-transform group-hover:rotate-90" />
              </a>
            </div>

            {/* Highlights as components on the board */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {components.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.ref}
                    className={`rise-in group relative p-4 border transition-all duration-300 hover:-translate-y-1 ${
                      c.side === "software"
                        ? "bg-[#081F4D]/60 border-[#2F64C9] hover:border-[#FFC2AE]"
                        : "bg-[#0B2219]/80 border-[#2A5443] hover:border-[#C46A2B]"
                    }`}
                    style={rise(0.36 + i * 0.08)}
                  >
                    <span className={`absolute -top-2.5 right-3 px-1.5 font-mono text-[10px] tracking-widest ${c.side === "software" ? "bg-[#0147BA] text-[#FFC2AE]" : "bg-[#0B2219] text-[#E3B23C]"}`}>{c.ref}</span>
                    <div className={`flex items-center gap-2 mb-2 ${c.side === "software" ? "text-[#C9D4EE]" : "text-neutral-400"}`}>
                      <Icon className={`w-3.5 h-3.5 ${c.side === "software" ? "text-[#FFC2AE]" : "text-accent-hi"}`} />
                      <span className="text-[10px] font-mono tracking-widest uppercase">{c.label}</span>
                    </div>
                    <div className="font-serif text-xl text-neutral-50">{c.title}</div>
                    <div className={`text-xs mt-1 leading-relaxed ${c.side === "software" ? "text-[#C9D4EE]" : "text-neutral-400"}`}>{c.body}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: portrait as U1, a chip package with copper pins, plus its datasheet */}
          <div className="lg:col-span-5 lg:pl-6 space-y-5">
            <div className="rise-in relative mx-auto max-w-[400px] px-5 py-5" style={rise(0.18)}>
              {/* Pins */}
              <div aria-hidden="true" className="absolute inset-x-10 top-0 flex justify-between">
                {Array.from({ length: 8 }).map((_, i) => <span key={i} className="w-2.5 h-5 bg-[#C46A2B] rounded-b-[2px]" />)}
              </div>
              <div aria-hidden="true" className="absolute inset-x-10 bottom-0 flex justify-between">
                {Array.from({ length: 8 }).map((_, i) => <span key={i} className="w-2.5 h-5 bg-[#C46A2B] rounded-t-[2px]" />)}
              </div>
              {/* Package body */}
              <div className="relative bg-neutral-950 border border-neutral-800 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <span aria-hidden="true" className="absolute top-3 left-3 z-10 w-3 h-3 rounded-full border-2 border-[#E3B23C]" />
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Kassim Musa Abass in engineering workshop"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 380px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between pt-3 text-[10px] font-mono tracking-widest uppercase">
                  <span className="text-[#E3B23C]">U1 · KMA-2026</span>
                  <span className="text-neutral-400">Nairobi, KE</span>
                </div>
              </div>
            </div>

            {/* Datasheet */}
            <div className="rise-in border border-neutral-800 bg-neutral-950/60 p-4 text-[11px] font-mono space-y-2 max-w-[400px] mx-auto" style={rise(0.3)}>
              <div className="text-[10px] tracking-widest uppercase text-accent-hi pb-1">Datasheet</div>
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-neutral-800 pb-1">
                  <span className="text-neutral-400 uppercase">{k}</span>
                  <span className="text-neutral-100 font-medium uppercase text-right">{v}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-0.5">
                <span className="text-neutral-400 uppercase">Source code</span>
                <a
                  href="https://github.com/mr-ceo7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-50 font-semibold underline underline-offset-2 hover:text-[#E3B23C] inline-flex items-center min-h-[36px] py-1"
                >
                  GITHUB.COM/MR-CEO7 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
