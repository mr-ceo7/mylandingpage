"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PROJECTS } from "../../data/projects";
import { CountUp } from "../fx/CountUp";
import { useScrollScene } from "../fx/useScrollScene";

const buildLines = [
  { text: "$ npm run build", cls: "text-[#F3E6CE]" },
  { text: "✓ build passed", cls: "text-[#E3B23C]" },
  { text: "✓ live", cls: "text-[#FFC2AE]" },
];

// The laptop shows the real flagships, one after another, in showcase order
const SCREENS = PROJECTS.filter((p) => p.isFlagship && p.category !== "hardware" && p.shots?.length)
  .sort((a, b) => (a.flagshipRank ?? 99) - (b.flagshipRank ?? 99))
  .map((p) => ({ name: p.title.split(" — ")[0], slug: p.shots![0].desktop.split("/")[2], shot: p.shots![0] }));

const STATS = [
  { value: SCREENS.length, label: "Platforms live" },
  { value: PROJECTS.length, label: "Projects" },
  { value: PROJECTS.filter((p) => p.category === "hardware").length, label: "Hardware builds" },
];

/**
 * Opening scene: a desk with a laptop running a build (software) beside a breadboard with a chip and
 * blinking LEDs (hardware). Each object is a door into its act. Mobile first: the objects stack and overlap.
 */
export function DeskHero() {
  const ref = useScrollScene<HTMLElement>();
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setScreen((n) => (n + 1) % SCREENS.length), 3400);
    return () => clearInterval(id);
  }, []);
  const current = SCREENS[screen];

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-[#F2EBDD] pt-24 pb-24 sm:pt-28 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Name plate */}
        <div className="rise-in text-center">
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#9A4E1C]">Nairobi, Kenya · @mr-ceo7</span>
          <h1 className="mt-3 font-serif text-[44px] leading-[0.95] sm:text-7xl lg:text-8xl tracking-tight text-[#0A2E22]">
            Kassim Musa Abass
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-[#39483E]">
            I write the <span className="font-semibold text-[#0147BA]">software</span> and build the{" "}
            <span className="font-semibold text-[#9A4E1C]">hardware</span> it runs on.
          </p>
        </div>

        {/* The desk */}
        <div className="relative mt-10 sm:mt-14 desk-scene">
          <div className="relative grid grid-cols-12 items-end gap-y-0">
            {/* Laptop: door into Act I */}
            <a
              href="#software"
              aria-label="Enter the software act"
              className="desk-laptop group col-span-12 sm:col-span-7 relative z-10 block"
            >
              <div className="mx-auto w-[92%] sm:w-full rounded-t-[14px] border-[10px] border-b-[14px] border-[#01358C] bg-[#01358C] shadow-[0_24px_50px_rgba(1,53,140,0.35)] transition-transform duration-500 group-hover:-translate-y-1.5">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0147BA]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E34F33]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F3E6CE]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F3E6CE]/40" />
                  <span className="ml-2 truncate font-mono text-[10px] text-[#F3E6CE]/85">
                    ~/shipped/{current.slug} — {current.shot.label.toLowerCase()}
                  </span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#01358C]">
                  <Image key={current.shot.desktop} src={current.shot.desktop} alt={`${current.name}: ${current.shot.label}`} fill priority={screen === 0} quality={90} sizes="(max-width: 640px) 92vw, 680px" className="object-cover object-top screen-fade" />
                  {/* The build that shipped it, typing out in the corner */}
                  <div className="absolute left-2 bottom-2 sm:left-4 sm:bottom-4 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-[#012A70]/92 font-mono text-[9px] sm:text-xs leading-relaxed shadow-lg">
                    {buildLines.map((l, i) => (
                      <div key={l.text} className={`hero-line ${l.cls}`} style={{ animationDelay: `${0.6 + i * 0.55}s` }}>
                        {l.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Base */}
              <div className="mx-auto w-full h-3 sm:h-4 rounded-b-xl bg-[#012A70]" />
              <span className="mt-3 block text-center font-mono text-[10px] tracking-widest uppercase text-[#0147BA] group-hover:underline underline-offset-4">
                Tap the laptop · Software ↓
              </span>
            </a>

            {/* Breadboard: door into Act II */}
            <a
              href="#hardware-act"
              aria-label="Enter the hardware act"
              className="desk-board group col-span-7 sm:col-span-5 sm:col-start-auto relative z-20 -mt-6 sm:mt-0 sm:-ml-10 block"
            >
              <div
                className="relative rounded-md border-2 border-[#CFC3A8] bg-[#F8F3E8] p-3 sm:p-4 shadow-[0_22px_44px_rgba(10,46,34,0.35)] -rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-1.5"
                style={{ backgroundImage: "radial-gradient(#B9AE95 1.3px, transparent 1.6px)", backgroundSize: "12px 12px" }}
              >
                {/* Power rails */}
                <div className="absolute inset-x-3 top-1.5 h-[2px] bg-[#E34F33]/70" />
                <div className="absolute inset-x-3 bottom-1.5 h-[2px] bg-[#0147BA]/70" />
                <div className="relative flex items-center justify-between gap-3 py-4">
                  {/* Chip */}
                  <div className="relative px-3 py-5 bg-[#0A2E22] text-[#E3B23C] font-mono text-[10px] tracking-widest shadow-md">
                    <div className="absolute -top-2 inset-x-1.5 flex justify-between">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="w-1.5 h-2 bg-[#B9B2A0]" />)}</div>
                    <div className="absolute -bottom-2 inset-x-1.5 flex justify-between">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="w-1.5 h-2 bg-[#B9B2A0]" />)}</div>
                    RP2040
                  </div>
                  {/* Jumper wire */}
                  <svg viewBox="0 0 120 40" className="flex-1 h-10" aria-hidden="true">
                    <path d="M 2 30 C 30 -5, 80 50, 118 12" fill="none" stroke="#C46A2B" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 2 30 C 30 -5, 80 50, 118 12" pathLength={1} className="wire-pulse" fill="none" stroke="#E3B23C" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                  {/* LEDs */}
                  <div className="flex gap-2">
                    {["#E34F33", "#E3B23C", "#C46A2B"].map((c, i) => (
                      <span key={c} className="led relative w-4 h-4 rounded-full" style={{ backgroundColor: c, animationDelay: `${i * 0.35}s`, color: c }} />
                    ))}
                  </div>
                </div>
              </div>
              <span className="mt-3 block text-center font-mono text-[10px] tracking-widest uppercase text-[#9A4E1C] group-hover:underline underline-offset-4">
                Tap the board · Hardware ↓
              </span>
            </a>
          </div>

          {/* Polaroid of Kassim leaning on the desk */}
          <figure className="desk-photo absolute -bottom-10 right-0 sm:bottom-auto sm:top-0 sm:right-[6%] z-30 w-[42%] sm:w-52 lg:w-60 bg-[#FBF8F1] p-2 pb-7 sm:p-2.5 sm:pb-9 shadow-[0_14px_30px_rgba(0,0,0,0.3)] rotate-3 sm:rotate-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="/images/profile.jpeg" alt="Kassim Musa Abass" fill priority quality={90} sizes="(max-width: 640px) 42vw, 240px" className="object-cover object-[50%_30%]" />
            </div>
            <figcaption className="absolute bottom-1.5 sm:bottom-2.5 inset-x-0 text-center font-serif italic text-xs sm:text-sm text-[#39483E]">that&apos;s me</figcaption>
          </figure>

          {/* Desk surface */}
          <div aria-hidden="true" className="absolute -inset-x-[50vw] -bottom-4 h-10 bg-[#E6DCC8] -z-10" />
        </div>

        {/* Counts straight from the project data */}
        <dl className="rise-in mt-20 sm:mt-16 grid grid-cols-3 border-y border-[#0A2E22]/20 divide-x divide-[#0A2E22]/20">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col py-4 text-center">
              <dt className="order-2 mt-1 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-[#4E5B50]">{s.label}</dt>
              <dd className="font-serif text-4xl sm:text-5xl text-[#01358C]"><CountUp value={s.value} /></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
