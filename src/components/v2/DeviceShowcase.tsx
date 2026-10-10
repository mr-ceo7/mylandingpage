"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PROJECTS, Project } from "../../data/projects";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";
import { useScrollScene } from "../fx/useScrollScene";

const slidesOf = (p: Project) => (p.carouselSlides?.length ? p.carouselSlides : [{ src: p.screenshot, alt: p.title, caption: "", tag: "" }]);

/** One flagship on a laptop with a phone leaning on it. The screens pan as it scrolls; tap a screen to flip through screenshots. */
function DeviceScene({ project, index, total, onOpen }: { project: Project; index: number; total: number; onOpen: (p: Project) => void }) {
  const ref = useScrollScene<HTMLDivElement>();
  const slides = slidesOf(project);
  const [shot, setShot] = useState(0);
  const laptop = slides[shot % slides.length];
  const phone = slides[(shot + 1) % slides.length];
  const flip = index % 2 === 1;

  return (
    <div ref={ref} className="device-scene grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Devices */}
      <div className={`lg:col-span-7 relative pb-10 pr-8 sm:pr-14 ${flip ? "lg:order-2" : ""}`}>
        <button type="button" onClick={() => setShot((s) => s + 1)} aria-label={`Next screenshot of ${project.title}`} className="device-laptop block w-full text-left cursor-pointer">
          <div className="rounded-t-xl border-[8px] sm:border-[10px] border-[#01358C] bg-[#01358C] shadow-[0_26px_56px_rgba(1,53,140,0.3)]">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#01358C]">
              <Image key={laptop.src} src={laptop.src} alt={laptop.alt} fill sizes="(max-width: 1024px) 92vw, 640px" className="object-cover object-top screen-pan screen-fade" />
              {/* Stamp lands on the screen as the scene scrolls in */}
              <span aria-hidden="true" className="build-stamp absolute left-3 bottom-3 sm:left-5 sm:bottom-5 whitespace-nowrap border-[3px] border-[#E3B23C] bg-[#01358C]/80 px-2.5 py-1 font-mono font-bold text-[10px] sm:text-sm tracking-widest uppercase text-[#E3B23C]">
                ✓ build passed
              </span>
            </div>
          </div>
          <div className="h-3 sm:h-4 -mx-3 sm:-mx-5 rounded-b-xl bg-[#012A70]" />
        </button>
        {/* Phone leaning on the laptop */}
        <button type="button" onClick={() => setShot((s) => s + 1)} aria-label={`Next screenshot of ${project.title}`} className="device-phone absolute right-0 bottom-0 w-[30%] sm:w-[26%] cursor-pointer">
          <div className="rounded-[18px] border-[5px] border-[#0A2E22] bg-[#0A2E22] shadow-[0_18px_36px_rgba(0,0,0,0.4)]">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[12px] bg-[#01358C]">
              <Image key={phone.src} src={phone.src} alt={phone.alt} fill sizes="160px" className="object-cover object-top screen-fade" />
            </div>
          </div>
        </button>
      </div>

      {/* Story */}
      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <div className="font-mono text-[11px] tracking-widest text-[#B23A21]">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {project.categoryLabel}
        </div>
        <h3 className="mt-2 font-serif text-3xl sm:text-4xl leading-tight text-[#01358C]">{project.title}</h3>
        <p className="mt-2 font-mono text-xs text-[#2A4F96]">{project.subtitle}</p>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#01358C]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 6).map((t) => (
            <span key={t} className="px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase bg-[#0147BA] text-[#F3E6CE]">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={() => onOpen(project)} className="group inline-flex items-center gap-2 px-4 min-h-[44px] bg-[#E34F33] text-[#FCF8F0] font-mono text-[11px] tracking-widest uppercase cursor-pointer hover:bg-[#C93F25] transition-colors">
            Case study <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 min-h-[44px] border border-[#0147BA] text-[#0147BA] font-mono text-[11px] tracking-widest uppercase">
              Live <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        {slides.length > 1 && (
          <div className="mt-5 flex items-center gap-2" aria-hidden="true">
            {slides.map((s, i) => (
              <span key={s.src + i} className={`h-1 rounded-full transition-all duration-300 ${i === shot % slides.length ? "w-6 bg-[#E34F33]" : "w-2 bg-[#0147BA]/30"}`} />
            ))}
            <span className="ml-2 font-mono text-[10px] text-[#2A4F96]">tap the screen</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function DeviceShowcase({ onOpen }: { onOpen: (p: Project) => void }) {
  const flagships = PROJECTS.filter((p) => p.isFlagship && p.category !== "hardware");
  return (
    <section id="flagship" className="w-full bg-[#F3E6CE] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#B23A21]">Act I · Flagship platforms</span>
        </Reveal>
        <KineticHeading text="Built and shipped." highlight="shipped." className="mt-2 font-serif text-4xl sm:text-6xl tracking-tight text-[#01358C]" />
        <div className="mt-14 space-y-24 sm:space-y-32">
          {flagships.map((p, i) => (
            <DeviceScene key={p.id} project={p} index={i} total={flagships.length} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
