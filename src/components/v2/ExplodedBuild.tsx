"use client";

import { type CSSProperties } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS, Project } from "../../data/projects";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";
import { useScrollScene } from "../fx/useScrollScene";
import { PhotoStrip } from "./PhotoStrip";

const plateColors = ["#0F3D2E", "#0A2E22", "#C46A2B", "#2A5443", "#E3B23C"];

/** A build's stack as plates that sit together, then separate with callouts as it scrolls into view. */
function Exploded({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const ref = useScrollScene<HTMLDivElement>();
  const layers = project.techStack.slice(0, 5);
  const photos = (project.carouselSlides?.length ? project.carouselSlides : [{ src: project.screenshot, alt: project.title, caption: "" }]).map((s) => ({ src: s.src, alt: s.alt, caption: s.caption }));

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-5">
        <div className="font-mono text-[11px] tracking-widest text-[#9A4E1C]">BUILD 0{index + 1} · {project.year}</div>
        <h3 className="mt-2 font-serif text-3xl sm:text-4xl leading-tight text-[#0A2E22]">{project.title}</h3>
        <p className="mt-2 font-mono text-xs text-[#4E5B50]">{project.subtitle}</p>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#26332B]">{project.description}</p>

        {/* The stack, exploding with scroll */}
        <div ref={ref} className="exploded mt-8 relative" style={{ "--layers": layers.length } as CSSProperties}>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#4E5B50]">The stack, layer by layer</span>
          <div className="relative mt-4 h-[calc(var(--layers)*14px+120px+var(--t,0)*var(--layers)*30px)] transition-[height] duration-200">
            {layers.map((layer, i) => (
              <div
                key={layer}
                className="explode-plate absolute left-0 right-[48%] sm:right-[40%] h-12"
                style={{ "--i": i, zIndex: layers.length - i } as CSSProperties}
              >
                <div className="h-full skew-x-[-18deg] border border-[#E3B23C]/40 shadow-[0_10px_20px_rgba(0,0,0,0.35)]" style={{ backgroundColor: plateColors[i % plateColors.length] }} />
                <span className="explode-label absolute left-full top-1/2 -translate-y-1/2 ml-4 w-[80%] sm:w-auto sm:whitespace-nowrap leading-tight font-mono text-[10px] sm:text-[11px] tracking-wider text-[#0A2E22]">
                  <span className="text-[#C46A2B]">← </span>
                  {layer}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={() => onOpen(project)} className="group inline-flex items-center gap-2 px-4 min-h-[44px] bg-[#C46A2B] text-[#FBF8F1] font-mono text-[11px] tracking-widest uppercase cursor-pointer hover:bg-[#B05B1F]">
            Build log <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 min-h-[44px] border border-[#9A4E1C]/60 text-[#9A4E1C] font-mono text-[11px] tracking-widest uppercase">
              Live <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
      <Reveal variant="right" className="lg:col-span-7 text-[#CFC3A8]">
        <div className="border-2 border-[#2A5443] bg-[#0A2E22] p-2 sm:p-3 shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
          <PhotoStrip photos={photos} tone="hardware" />
        </div>
      </Reveal>
    </article>
  );
}

export function ExplodedBuilds({ onOpen }: { onOpen: (p: Project) => void }) {
  const builds = PROJECTS.filter((p) => p.isFlagship && p.category === "hardware");
  return (
    <section id="flagship-hardware" className="w-full bg-[#F2EBDD] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#9A4E1C]">Act II · Flagship builds</span>
        </Reveal>
        <KineticHeading text="Taken apart, layer by layer." highlight="layer by layer." className="mt-2 font-serif text-4xl sm:text-6xl tracking-tight text-[#0A2E22]" />
        <div className="mt-14 space-y-24">
          {builds.map((p, i) => (
            <Exploded key={p.id} project={p} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
