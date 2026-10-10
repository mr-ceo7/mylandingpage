"use client";

import Image from "next/image";
import { type CSSProperties } from "react";
import { PROJECTS, Project } from "../../data/projects";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";
import { useScrollScene } from "../fx/useScrollScene";

const SPROCKETS = "radial-gradient(circle, #0F3D2E 4px, transparent 4.5px)";

/** One part on the tape. It slides down along the reel into its pocket as it scrolls in; its pins light up. */
function ReelChip({ part, index, onOpen }: { part: Project; index: number; onOpen: (p: Project) => void }) {
  const ref = useScrollScene<HTMLButtonElement>();
  const left = index % 2 === 0;
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onOpen(part)}
      style={{ "--side": left ? -1 : 1 } as CSSProperties}
      className="reel-chip group relative block w-full text-left cursor-pointer"
    >
      <div className="relative bg-[#0A2E22] text-[#F8F3E8] p-3 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-shadow duration-300 group-hover:shadow-[0_28px_54px_rgba(0,0,0,0.5)]">
        {/* Pins along both edges, chasing while the chip is in view */}
        {(["-left-2", "-right-2"] as const).map((edge) => (
          <div key={edge} aria-hidden="true" className={`absolute ${edge} inset-y-6 flex flex-col justify-between`}>
            {Array.from({ length: 7 }).map((_, k) => (
              <span key={k} className="pin-chase w-2 h-2.5 bg-[#B9B2A0]" style={{ animationDelay: `${k * 0.12}s` }} />
            ))}
          </div>
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
          <div className="sm:col-span-2 relative aspect-[4/3] overflow-hidden">
            <Image src={part.screenshot} alt={part.title} fill sizes="(max-width: 640px) 90vw, 320px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="sm:col-span-3">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#E3B23C]">
              <span>U{String(index + 1).padStart(2, "0")}</span>
              <span className="text-[#A9B39E]">{part.year}</span>
            </div>
            <h3 className="mt-2 font-serif text-2xl leading-snug">{part.title}</h3>
            <p className="mt-1 font-mono text-[10px] text-[#A9B39E]">{part.subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#CFC3A8] line-clamp-3">{part.description}</p>
            <span className="mt-3 inline-block font-mono text-[10px] tracking-widest uppercase text-[#E3B23C] transition-transform group-hover:translate-x-1">
              Tap to inspect →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

/** The hardware archive on a component reel running down the page. */
export function ComponentReel({ onOpen }: { onOpen: (p: Project) => void }) {
  const parts = PROJECTS.filter((p) => p.category === "hardware");

  return (
    <section id="archive-hardware" className="w-full bg-[#0F3D2E] py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#E3B23C]">Act II · The parts bin</span>
        </Reveal>
        <KineticHeading text="Everything I've built, on one reel." highlight="one reel." className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight text-[#F8F3E8]" />

        {/* Tape running down the page, sprocket holes on both edges */}
        <div className="relative mt-12 px-7 sm:px-12 py-8 bg-[#164536]/60">
          <div aria-hidden="true" className="absolute inset-y-0 left-0 w-5 bg-[#164536]" style={{ backgroundImage: SPROCKETS, backgroundSize: "20px 26px" }} />
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-5 bg-[#164536]" style={{ backgroundImage: SPROCKETS, backgroundSize: "20px 26px" }} />
          <div className="space-y-8">
            {parts.map((p, i) => (
              <ReelChip key={p.id} part={p} index={i} onOpen={onOpen} />
            ))}
          </div>
        </div>
        <p className="mt-5 text-center font-mono text-[10px] tracking-widest uppercase text-[#CFC3A8]">{parts.length} parts · tap any part to inspect</p>
      </div>
    </section>
  );
}
