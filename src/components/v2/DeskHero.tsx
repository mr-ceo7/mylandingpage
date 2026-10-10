"use client";

import Image from "next/image";
import { useScrollScene } from "../fx/useScrollScene";

const buildLines = [
  { text: "$ npm run build", cls: "text-[#F3E6CE]" },
  { text: "  compiling…", cls: "text-[#C9D4EE]" },
  { text: "  ✓ build passed", cls: "text-[#7EE2A8]" },
  { text: "$ vercel deploy --prod", cls: "text-[#F3E6CE]" },
  { text: "  ✓ live on the edge", cls: "text-[#FFC2AE]" },
];

/**
 * Opening scene: a desk with a laptop running a build (software) beside a breadboard with a chip and
 * blinking LEDs (hardware). Each object is a door into its act. Mobile first: the objects stack and overlap.
 */
export function DeskHero() {
  const ref = useScrollScene<HTMLElement>();

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-[#F2EBDD] dark:bg-[#0B2219] pt-24 pb-24 sm:pt-28 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Name plate */}
        <div className="rise-in text-center">
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#9A4E1C] dark:text-[#E39A5C]">Nairobi, Kenya · @mr-ceo7</span>
          <h1 className="mt-3 font-serif text-[44px] leading-[0.95] sm:text-7xl lg:text-8xl tracking-tight text-[#0B2219] dark:text-[#F8F3E8]">
            Kassim Musa Abass
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-[#39483E] dark:text-[#CFC3A8]">
            I write the <span className="font-semibold text-[#0147BA] dark:text-[#8FB0F0]">software</span> and build the{" "}
            <span className="font-semibold text-[#9A4E1C] dark:text-[#E39A5C]">hardware</span> it runs on.
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
              <div className="mx-auto w-[92%] sm:w-full rounded-t-[14px] border-[10px] border-b-[14px] border-[#1C2433] bg-[#081F4D] shadow-[0_24px_50px_rgba(8,31,77,0.35)] transition-transform duration-500 group-hover:-translate-y-1.5">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0147BA]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E34F33]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F3E6CE]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F3E6CE]/40" />
                  <span className="ml-2 font-mono text-[10px] text-[#F3E6CE]/80">~/mr-ceo7 — build</span>
                </div>
                <div className="aspect-[16/9] px-4 py-3 font-mono text-[11px] sm:text-sm leading-relaxed">
                  {buildLines.map((l, i) => (
                    <div key={l.text} className={`hero-line ${l.cls}`} style={{ animationDelay: `${0.6 + i * 0.55}s` }}>
                      {l.text}
                    </div>
                  ))}
                  <span className="hero-caret inline-block w-2 h-4 mt-1 bg-[#FFC2AE]" />
                </div>
              </div>
              {/* Base */}
              <div className="mx-auto w-full h-3 sm:h-4 rounded-b-xl bg-[#2B3447]" />
              <span className="mt-3 block text-center font-mono text-[10px] tracking-widest uppercase text-[#0147BA] dark:text-[#8FB0F0] group-hover:underline underline-offset-4">
                Tap the laptop · Software ↓
              </span>
            </a>

            {/* Breadboard: door into Act II */}
            <a
              href="#hardware-act"
              aria-label="Enter the hardware act"
              className="desk-board group col-span-10 col-start-3 sm:col-span-5 sm:col-start-auto relative z-20 -mt-6 sm:mt-0 sm:-ml-10 block"
            >
              <div
                className="relative rounded-md border-2 border-[#CFC3A8] bg-[#F8F3E8] p-3 sm:p-4 shadow-[0_22px_44px_rgba(11,34,25,0.35)] -rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-1.5"
                style={{ backgroundImage: "radial-gradient(#B9AE95 1.3px, transparent 1.6px)", backgroundSize: "12px 12px" }}
              >
                {/* Power rails */}
                <div className="absolute inset-x-3 top-1.5 h-[2px] bg-[#E34F33]/70" />
                <div className="absolute inset-x-3 bottom-1.5 h-[2px] bg-[#0147BA]/70" />
                <div className="relative flex items-center justify-between gap-3 py-4">
                  {/* Chip */}
                  <div className="relative px-3 py-5 bg-[#14161A] text-[#E3B23C] font-mono text-[10px] tracking-widest shadow-md">
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
                    {["#E34F33", "#E3B23C", "#4CC38A"].map((c, i) => (
                      <span key={c} className="led relative w-4 h-4 rounded-full" style={{ backgroundColor: c, animationDelay: `${i * 0.35}s`, color: c }} />
                    ))}
                  </div>
                </div>
              </div>
              <span className="mt-3 block text-center font-mono text-[10px] tracking-widest uppercase text-[#9A4E1C] dark:text-[#E39A5C] group-hover:underline underline-offset-4">
                Tap the board · Hardware ↓
              </span>
            </a>
          </div>

          {/* Polaroid of Kassim leaning on the desk */}
          <figure className="desk-photo absolute -top-10 -right-1 sm:top-auto sm:bottom-24 sm:right-auto sm:-left-4 lg:-left-12 z-30 w-24 sm:w-36 bg-[#FBF8F1] p-1.5 pb-5 sm:p-2 sm:pb-7 shadow-[0_14px_30px_rgba(0,0,0,0.3)] rotate-6 sm:-rotate-6">
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/profile.jpeg" alt="Kassim Musa Abass" fill priority sizes="144px" className="object-cover" />
            </div>
            <figcaption className="absolute bottom-0.5 sm:bottom-1.5 inset-x-0 text-center font-serif italic text-[10px] sm:text-xs text-[#39483E]">that&apos;s me</figcaption>
          </figure>

          {/* Desk surface */}
          <div aria-hidden="true" className="absolute -inset-x-[50vw] -bottom-4 h-10 bg-[#E6DCC8] dark:bg-[#102E23] -z-10" />
        </div>
      </div>
    </section>
  );
}
