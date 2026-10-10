"use client";

import { useEffect } from "react";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "../Icons";
import { Project } from "../../data/projects";
import { PhotoStrip } from "./PhotoStrip";

const slidesOf = (p: Project) =>
  (p.carouselSlides?.length ? p.carouselSlides : [{ src: p.screenshot, alt: p.title, caption: "" }]).map((s) => ({ src: s.src, alt: s.alt, caption: s.caption }));

/**
 * A project opened as a window: an app window (software) or a component inspector (hardware).
 * It zooms out of the icon/chip that was tapped and closes with Esc, the close button or the backdrop.
 */
export function AppWindow({ project, tone, onClose, onFullSpec }: { project: Project | null; tone: "software" | "hardware"; onClose: () => void; onFullSpec: (p: Project) => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  if (!project) return null;
  const sw = tone === "software";
  const frame = sw ? "bg-[#F9F1E2] text-[#01358C] border-[#0147BA]" : "bg-[#0A2E22] text-[#F8F3E8] border-[#C46A2B]";
  const bar = sw ? "bg-[#0147BA] text-[#F3E6CE]" : "bg-[#0F3D2E] text-[#E3B23C]";
  const chip = sw ? "border-[#0147BA]/30 text-[#0A3C9A]" : "border-[#E3B23C]/40 text-[#E3B23C]";

  return (
    <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-[#0A2E22]/60 backdrop-blur-sm window-backdrop" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        className={`window-pop w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto border-2 ${frame} shadow-[0_30px_80px_rgba(0,0,0,0.5)]`}
      >
        <div className={`sticky top-0 z-10 flex items-center justify-between px-4 py-2.5 ${bar}`}>
          <span className="font-mono text-[11px] tracking-widest uppercase truncate">
            {sw ? `${project.id}.app` : `INSPECT · ${project.id}`}
          </span>
          <button type="button" onClick={onClose} aria-label="Close" className="w-9 h-9 -mr-2 flex items-center justify-center cursor-pointer hover:opacity-70">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 sm:p-6 space-y-5">
          <PhotoStrip photos={slidesOf(project)} tone={tone} reveal={false} />
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase opacity-70">{project.categoryLabel} · {project.year}</div>
            <h3 className="mt-1 font-serif text-3xl leading-tight">{project.title}</h3>
            <p className="mt-1 font-mono text-xs opacity-75">{project.subtitle}</p>
          </div>
          <p className="text-sm leading-relaxed opacity-90">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span key={t} className={`px-2 py-0.5 border font-mono text-[10px] tracking-wider uppercase ${chip}`}>{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 min-h-[44px] font-mono text-[11px] tracking-widest uppercase ${sw ? "bg-[#0147BA] text-[#F3E6CE]" : "bg-[#C46A2B] text-[#FBF8F1]"}`}>
                Open live <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 min-h-[44px] border border-current/40 font-mono text-[11px] tracking-widest uppercase">
                <GithubIcon className="w-3.5 h-3.5" /> Source
              </a>
            )}
            <button type="button" onClick={() => onFullSpec(project)} className="inline-flex items-center gap-2 px-4 min-h-[44px] border border-current/40 font-mono text-[11px] tracking-widest uppercase cursor-pointer">
              Full spec <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
