"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "../Icons";
import { Project } from "../../data/projects";
import { PhotoStrip } from "./PhotoStrip";

/**
 * A project's full case study, opened full-screen in its act's colors: hero screenshot, what it is,
 * the key decisions as numbered chapters, the full photo set, and links. Esc or the close button closes it.
 */
export function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    scrollRef.current?.scrollTo(0, 0);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;
  const hw = project.category === "hardware";
  const slides = project.carouselSlides?.length ? project.carouselSlides : [{ src: project.screenshot, alt: project.title, caption: "", tag: "" }];
  const t = hw
    ? { bg: "bg-[#0B2219]", text: "text-[#F8F3E8]", muted: "text-[#CFC3A8]", kicker: "text-[#E3B23C]", rule: "border-[#2A5443]", chip: "border-[#E3B23C]/40 text-[#E3B23C]", cta: "bg-[#C46A2B] text-[#FBF8F1]", num: "text-[#C46A2B]" }
    : { bg: "bg-[#F3E6CE]", text: "text-[#081F4D]", muted: "text-[#313B56]", kicker: "text-[#B23A21]", rule: "border-[#0147BA]/20", chip: "border-[#0147BA]/30 text-[#0A3C9A]", cta: "bg-[#0147BA] text-[#F3E6CE]", num: "text-[#E34F33]" };

  return (
    <div role="dialog" aria-modal="true" aria-label={`${project.title} case study`} className={`case-sheet fixed inset-0 z-[95] ${t.bg} ${t.text}`}>
      <div ref={scrollRef} data-lenis-prevent className="h-full overflow-y-auto">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className={`fixed top-4 right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer ${t.cta}`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero screenshot */}
        <div className="relative h-[46vh] sm:h-[60vh] overflow-hidden">
          <Image src={slides[0].src} alt={slides[0].alt} fill priority sizes="100vw" className="object-cover case-hero-img" />
          <div aria-hidden="true" className={`absolute inset-0 ${hw ? "bg-gradient-to-t from-[#0B2219] via-[#0B2219]/30" : "bg-gradient-to-t from-[#F3E6CE] via-[#F3E6CE]/20"} to-transparent`} />
        </div>

        <div className="relative -mt-20 max-w-3xl mx-auto px-5 sm:px-8 pb-24">
          <div className="case-rise">
            <span className={`font-mono text-[11px] tracking-widest uppercase ${t.kicker}`}>
              {hw ? "Build log" : "Case study"} · {project.categoryLabel} · {project.year}
            </span>
            <h2 className="mt-2 font-serif text-4xl sm:text-6xl leading-[1.02] tracking-tight">{project.title}</h2>
            <p className={`mt-3 font-mono text-xs ${t.muted}`}>{project.subtitle}</p>
          </div>

          <section className={`case-rise mt-10 pt-6 border-t ${t.rule}`} style={{ animationDelay: "0.1s" }}>
            <h3 className={`font-mono text-[10px] tracking-widest uppercase ${t.kicker}`}>What it is</h3>
            <p className="mt-3 text-lg sm:text-xl leading-relaxed">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.techStack.map((s) => (
                <span key={s} className={`px-2 py-0.5 border font-mono text-[10px] tracking-wider uppercase ${t.chip}`}>{s}</span>
              ))}
            </div>
          </section>

          <section className={`case-rise mt-12 pt-6 border-t ${t.rule}`} style={{ animationDelay: "0.2s" }}>
            <h3 className={`font-mono text-[10px] tracking-widest uppercase ${t.kicker}`}>Key decisions</h3>
            <ol className="mt-4 space-y-6">
              {project.architectureDetails.map((d, i) => (
                <li key={i} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className={`inline-block overflow-hidden font-serif text-4xl leading-none ${t.num}`}>
                    <span className="tick-num inline-block" style={{ animationDelay: `${0.45 + i * 0.12}s` }}>{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <p className={`pt-1 text-base leading-relaxed ${t.muted}`}>{d}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={`case-rise mt-12 pt-6 border-t ${t.rule}`} style={{ animationDelay: "0.3s" }}>
            <h3 className={`font-mono text-[10px] tracking-widest uppercase ${t.kicker}`}>{hw ? "On the bench" : "Screens"}</h3>
            <div className="mt-4">
              <PhotoStrip photos={slides.map((s) => ({ src: s.src, alt: s.alt, caption: s.caption }))} tone={hw ? "hardware" : "software"} />
            </div>
          </section>

          <div className={`mt-12 pt-6 border-t ${t.rule} flex flex-wrap gap-3`}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-5 min-h-[48px] font-mono text-[11px] tracking-widest uppercase ${t.cta}`}>
                Open live <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 min-h-[48px] border border-current/40 font-mono text-[11px] tracking-widest uppercase">
                <GithubIcon className="w-3.5 h-3.5" /> Source code
              </a>
            )}
            <button type="button" onClick={onClose} className="inline-flex items-center gap-2 px-5 min-h-[48px] border border-current/40 font-mono text-[11px] tracking-widest uppercase cursor-pointer">
              Back to the page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
