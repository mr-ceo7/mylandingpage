"use client";

import { type ReactNode } from "react";
import { ExternalLink, Terminal, ArrowRight, Cpu, Lock } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS, Project } from "../data/projects";
import { ProjectCarousel } from "./ProjectCarousel";
import { KineticHeading } from "./fx/KineticHeading";
import { Reveal } from "./fx/Reveal";

type Side = "software" | "hardware";

interface FlagshipProjectsProps {
  side: Side;
  id: string;
  kicker: string;
  title: string;
  highlight: string;
  intro: string;
  onSelectProject: (p: Project) => void;
}

const hostOf = (url?: string) => (url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "");

/** Software flagships sit in a browser window: tab strip, address bar, the case study as the page. */
function BrowserWindow({ project, index, children }: { project: Project; index: number; children: ReactNode }) {
  const host = hostOf(project.liveUrl) || `${project.id}.local`;
  return (
    <div className="group border border-neutral-300 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 shadow-[0_18px_40px_rgba(8,31,77,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(8,31,77,0.2)]">
      {/* Tab strip */}
      <div className="flex items-end gap-1 px-3 pt-2 bg-neutral-200/70 dark:bg-neutral-950/50 border-b border-neutral-300 dark:border-neutral-800">
        <span className="relative max-w-[70%] truncate px-4 py-2 text-[11px] font-mono bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-b-0 border-neutral-300 dark:border-neutral-800">
          <span className="text-accent dark:text-accent-hi mr-2">0{index + 1}</span>
          {project.title}
          {/* Underline draws in on hover */}
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#E34F33] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </span>
        <span className="hidden sm:inline px-3 py-2 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">{project.categoryLabel}</span>
      </div>
      {/* Address bar */}
      <div className="flex items-center gap-3 px-3 sm:px-4 py-2 border-b border-neutral-300 dark:border-neutral-800">
        <div className="flex-1 min-w-0 flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-600 dark:text-neutral-300">
          <Lock className="w-3 h-3 shrink-0 text-accent dark:text-accent-hi" />
          <span className="truncate">{host}</span>
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-accent dark:text-accent-hi hover:underline min-h-[36px]"
          >
            Open <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
      <div className="p-4 sm:p-8">{children}</div>
    </div>
  );
}

/** Hardware flagships sit on a module board: pin headers down both sides, mounting holes, silkscreen labels. */
function ModuleBoard({ project, index, children }: { project: Project; index: number; children: ReactNode }) {
  const pins = Array.from({ length: 10 });
  return (
    <div className="group relative px-5 sm:px-7">
      {/* Pin headers */}
      {(["left-0", "right-0"] as const).map((side) => (
        <div key={side} aria-hidden="true" className={`absolute ${side} top-12 bottom-12 flex flex-col justify-between`}>
          {pins.map((_, i) => (
            <span
              key={i}
              className="w-3 sm:w-4 h-2.5 bg-[#C46A2B] group-hover:bg-[#E3B23C] transition-colors duration-300"
              style={{ transitionDelay: `${i * 30}ms` }}
            />
          ))}
        </div>
      ))}
      <div className="relative border-2 border-neutral-300 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:-translate-y-1">
        {/* Mounting holes */}
        {["top-2.5 left-2.5", "top-2.5 right-2.5", "bottom-2.5 left-2.5", "bottom-2.5 right-2.5"].map((pos) => (
          <span key={pos} aria-hidden="true" className={`absolute ${pos} w-3.5 h-3.5 rounded-full border-2 border-[#E3B23C]/70`} />
        ))}
        {/* Silkscreen */}
        <div className="flex items-center justify-between px-8 pt-3 text-[10px] font-mono tracking-widest uppercase">
          <span className="text-accent dark:text-accent-hi">MOD-0{index + 1}</span>
          <span className="text-neutral-500 dark:text-neutral-400">J1 · {project.categoryLabel}</span>
        </div>
        <div className="p-4 sm:p-8 pt-3 sm:pt-4">{children}</div>
      </div>
    </div>
  );
}

function CaseStudy({ project, side, onSelectProject }: { project: Project; side: Side; onSelectProject: (p: Project) => void }) {
  const BulletIcon = side === "software" ? Terminal : Cpu;
  return (
    <>
      <div className="flex flex-wrap items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-6 gap-2 text-[10px] font-mono">
        <span className="text-neutral-600 dark:text-neutral-400 tracking-widest uppercase">{project.categoryLabel}</span>
        <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
          <span>TIMELINE: {project.year}</span>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <span>PLATFORM: {project.deploymentPlatform}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        <div className="lg:col-span-5 space-y-3">
          <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-50 font-normal">{project.title}</h3>
          <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400">{project.subtitle}</p>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[40px] text-[11px] font-mono tracking-widest uppercase bg-neutral-900 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-colors"
              >
                <span>LIVE DEPLOYMENT</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[40px] text-[11px] font-mono tracking-widest uppercase border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <GithubIcon className="w-3 h-3" />
                <span>SOURCE CODE</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="group/spec inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[40px] text-[11px] font-mono tracking-widest uppercase border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
            >
              <span>FULL SPEC</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover/spec:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div>
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2">SYSTEM OVERVIEW & SCOPE</h4>
            <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed">{project.description}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2">TECHNOLOGY IMPLEMENTATION</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <ProjectCarousel
          slides={
            project.carouselSlides || [
              {
                src: project.screenshot,
                caption: `Production snapshot of ${project.title} running on ${project.deploymentPlatform}.`,
                alt: project.title,
              },
            ]
          }
          projectTitle={project.title}
          liveUrl={project.liveUrl}
        />
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
        <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3">KEY ARCHITECTURAL DECISIONS</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.architectureDetails.map((detail, i) => (
            <div key={i} className="flex items-start gap-2.5 p-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50">
              <BulletIcon className="w-3.5 h-3.5 text-accent dark:text-accent-hi mt-0.5 flex-shrink-0" />
              <span className="text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-normal">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function FlagshipProjects({ side, id, kicker, title, highlight, intro, onSelectProject }: FlagshipProjectsProps) {
  const flagships = PROJECTS.filter((p) => p.isFlagship && (side === "hardware" ? p.category === "hardware" : p.category !== "hardware"));
  const Frame = side === "software" ? BrowserWindow : ModuleBoard;

  return (
    <section id={id} className="w-full bg-surface py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 dark:border-neutral-800 pb-6 mb-12 gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-accent dark:text-accent-hi font-semibold block mb-1">{kicker}</span>
              <KineticHeading
                text={title}
                highlight={highlight}
                className="font-serif text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 tracking-tight font-normal"
              />
            </div>
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-md">{intro}</p>
          </div>
        </Reveal>

        <div className="space-y-16">
          {flagships.map((project, idx) => (
            <Reveal key={project.id} variant={idx % 2 === 0 ? "left" : "right"}>
              <Frame project={project} index={idx}>
                <CaseStudy project={project} side={side} onSelectProject={onSelectProject} />
              </Frame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
