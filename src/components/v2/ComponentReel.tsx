"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS, Project } from "../../data/projects";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";

/** The hardware archive on a component reel: swipe along the tape; the centered part enlarges. Tap to inspect. */
export function ComponentReel({ onOpen }: { onOpen: (p: Project) => void }) {
  const parts = PROJECTS.filter((p) => p.category === "hardware");
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    [...el.children].forEach((c, i) => {
      const n = c as HTMLElement;
      const d = Math.abs(n.offsetLeft + n.offsetWidth / 2 - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  };
  const step = (dir: number) => {
    const el = ref.current;
    const target = el?.children[Math.max(0, Math.min(parts.length - 1, active + dir))] as HTMLElement | undefined;
    if (el && target) el.scrollTo({ left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <section id="archive-hardware" className="w-full bg-[#0F3D2E] py-20 sm:py-28 overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#E3B23C]">Act II · The parts bin</span>
        </Reveal>
        <KineticHeading text="Everything I've built, on one reel." highlight="one reel." className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight text-[#F8F3E8]" />
      </div>

      {/* Reel tape */}
      <div className="relative mt-10">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-5 bg-[#164536]" style={{ backgroundImage: "radial-gradient(circle, #0F3D2E 4px, transparent 4.5px)", backgroundSize: "26px 20px", backgroundPosition: "0 0" }} />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-5 bg-[#164536]" style={{ backgroundImage: "radial-gradient(circle, #0F3D2E 4px, transparent 4.5px)", backgroundSize: "26px 20px" }} />
        <div
          ref={ref}
          data-lenis-prevent
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar py-9 px-[14vw] sm:px-[30vw] bg-[#164536]/50"
        >
          {parts.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => (i === active ? onOpen(p) : step(i - active))}
              className={`snap-center shrink-0 w-[72vw] sm:w-[340px] text-left cursor-pointer transition-all duration-300 ${i === active ? "scale-100 opacity-100" : "scale-[0.86] opacity-60"}`}
            >
              <div className="relative bg-[#0A2E22] text-[#F8F3E8] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                {/* Pins */}
                <div aria-hidden="true" className="absolute -left-2 inset-y-6 flex flex-col justify-between">{Array.from({ length: 6 }).map((_, k) => <span key={k} className={`w-2 h-2.5 bg-[#B9B2A0] ${i === active ? "pin-chase" : ""}`} style={{ animationDelay: `${k * 0.12}s` }} />)}</div>
                <div aria-hidden="true" className="absolute -right-2 inset-y-6 flex flex-col justify-between">{Array.from({ length: 6 }).map((_, k) => <span key={k} className={`w-2 h-2.5 bg-[#B9B2A0] ${i === active ? "pin-chase" : ""}`} style={{ animationDelay: `${k * 0.12}s` }} />)}</div>
                <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#E3B23C]">
                  <span>U{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[#A9B39E]">{p.year}</span>
                </div>
                <div className="relative mt-2 aspect-[4/3] overflow-hidden">
                  <Image src={p.screenshot} alt={p.title} fill sizes="340px" className="object-cover" />
                </div>
                <h3 className="mt-3 font-serif text-xl leading-snug">{p.title}</h3>
                <p className="mt-1 font-mono text-[10px] text-[#A9B39E] line-clamp-2">{p.subtitle}</p>
                <span className={`mt-3 inline-block font-mono text-[10px] tracking-widest uppercase ${i === active ? "text-[#E3B23C]" : "text-transparent"}`}>Tap to inspect →</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button type="button" onClick={() => step(-1)} aria-label="Previous part" className="w-11 h-11 flex items-center justify-center border border-[#E3B23C]/70 text-[#E3B23C] cursor-pointer">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-mono text-xs tracking-widest text-[#CFC3A8]">
          {String(active + 1).padStart(2, "0")} / {String(parts.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={() => step(1)} aria-label="Next part" className="w-11 h-11 flex items-center justify-center border border-[#E3B23C]/70 text-[#E3B23C] cursor-pointer">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
