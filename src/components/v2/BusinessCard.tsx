"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, RotateCw } from "lucide-react";
import { GithubIcon } from "../Icons";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";

const EMAIL = "kassimmusa322@gmail.com";
const YEAR = new Date().getFullYear();

/** Contact as a business card: the software face flips over to a PCB hardware face. Footer underneath. */
export function BusinessCard() {
  const [flipped, setFlipped] = useState(false);
  const [nudge, setNudge] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);

  // A one-time wiggle when the card first comes into view, hinting that it flips
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNudge(true);
          observer.disconnect();
        }
      },
      { threshold: 0.7 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const links = (tone: "sw" | "hw") => {
    const cls = tone === "sw" ? "text-[#F3E6CE] hover:text-[#FFC2AE]" : "text-[#F8F3E8] hover:text-[#E3B23C]";
    return (
      <div className="mt-auto space-y-2 text-sm" onClick={(e) => e.stopPropagation()}>
        <a href={`mailto:${EMAIL}`} className={`flex items-center gap-2.5 min-h-[36px] ${cls}`}>
          <Mail className="w-4 h-4 shrink-0" /> {EMAIL}
        </a>
        <a href="https://github.com/mr-ceo7" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2.5 min-h-[36px] ${cls}`}>
          <GithubIcon className="w-4 h-4 shrink-0" /> github.com/mr-ceo7
        </a>
        <span className={`flex items-center gap-2.5 min-h-[36px] ${tone === "sw" ? "text-[#C9D4EE]" : "text-[#CFC3A8]"}`}>
          <MapPin className="w-4 h-4 shrink-0" /> Nairobi, Kenya
        </span>
      </div>
    );
  };

  return (
    <section id="contact" className="w-full bg-[#0F3D2E] pt-20 sm:pt-28 pb-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#E3B23C]">Contact</span>
        </Reveal>
        <KineticHeading text="Let's build something." highlight="build something." className="mt-2 font-serif text-4xl sm:text-6xl tracking-tight text-[#F8F3E8]" />
        <Reveal delay={100}>
          <p className="mt-4 text-[#CFC3A8]">Systems architecture, backend pipelines, custom firmware, full-stack builds.</p>
        </Reveal>

        <Reveal variant="scale" className="mt-12">
          <div className="card-stage mx-auto w-full max-w-[420px] aspect-[1.6/1]">
            <button
              type="button"
              ref={cardRef}
              onClick={() => setFlipped((f) => !f)}
              aria-label={flipped ? "Show the software side of the card" : "Show the hardware side of the card"}
              className={`card-flip relative block w-full h-full text-left cursor-pointer ${flipped ? "is-flipped" : ""} ${nudge && !flipped ? "card-nudge" : ""}`}
            >
              {/* Software face */}
              <div className="card-face absolute inset-0 flex flex-col p-6 bg-[#0147BA] shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] text-[#FFC2AE]">{"</>"} software</span>
                  <RotateCw className="w-4 h-4 text-[#C9D4EE]" />
                </div>
                <div className="mt-3 font-serif text-3xl leading-none text-[#F9F1E2]">Kassim Musa Abass</div>
                <div className="mt-1 font-mono text-[11px] text-[#C9D4EE]">@mr-ceo7 · full-stack developer</div>
                {links("sw")}
              </div>
              {/* Hardware face */}
              <div
                className="card-face card-back absolute inset-0 flex flex-col p-6 bg-[#0A2E22] shadow-[0_28px_60px_rgba(0,0,0,0.45)]"
                style={{ backgroundImage: "linear-gradient(90deg, transparent 0 70%, rgba(196,106,43,0.35) 70% 71%, transparent 71%), linear-gradient(0deg, transparent 0 30%, rgba(196,106,43,0.35) 30% 31.5%, transparent 31.5%)" }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] text-[#E3B23C]">⏚ hardware</span>
                  <RotateCw className="w-4 h-4 text-[#A9B39E]" />
                </div>
                <div className="mt-3 font-serif text-3xl leading-none text-[#F8F3E8]">Kassim Musa Abass</div>
                <div className="mt-1 font-mono text-[11px] text-[#CFC3A8]">systems & IoT engineer · RP2040 / ESP32</div>
                {links("hw")}
              </div>
            </button>
          </div>
          <p className="mt-4 font-mono text-[10px] tracking-widest uppercase text-[#A9B39E]">Tap the card to flip it</p>
        </Reveal>

        <footer className="mt-20 pt-6 border-t border-[#2A5443] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] tracking-widest uppercase text-[#A9B39E]">
          <span>© {YEAR} Kassim Musa Abass</span>
          <span>Built with Next.js · deployed on Vercel</span>
        </footer>
      </div>
    </section>
  );
}
