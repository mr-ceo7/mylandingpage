"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Terminal, CheckCircle2, Cpu } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "../data/projects";
import { ProjectCarousel } from "./ProjectCarousel";

export function ProjectModal({
  project,
  onClose
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#faf9f5] dark:bg-[#0d0f11] border border-neutral-300 dark:border-neutral-700 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold">
              <span>SPECIFICATION SHEET</span>
              <span className="text-neutral-400">/</span>
              <span>{project.categoryLabel}</span>
            </div>
            <h3
              id="modal-project-title"
              className="font-serif text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-50 font-normal mt-1"
            >
              {project.title}
            </h3>
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close specification sheet"
            className="p-1.5 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-200 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Screen Slideshow Carousel in Modal */}
        <div>
          <ProjectCarousel
            slides={
              project.carouselSlides || [
                {
                  src: project.screenshot,
                  caption: `Production capture of ${project.title} running on ${project.deploymentPlatform}.`,
                  alt: project.title,
                  tag: "PRIMARY VIEW"
                }
              ]
            }
            projectTitle={project.title}
            liveUrl={project.liveUrl}
          />
        </div>

        {/* Runtime & Deployment Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono">
          <div>
            <span className="text-neutral-400 uppercase block text-[9px]">RUNTIME:</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">{project.deploymentPlatform}</span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase block text-[9px]">TIMELINE:</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">{project.year}</span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase block text-[9px]">STATUS:</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">PRODUCTION LIVE</span>
          </div>
        </div>

        {/* System Description */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
            TECHNICAL DESCRIPTION
          </h4>
          <p className="text-sm text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Architectural Decisions */}
        {project.architectureDetails.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
              ARCHITECTURAL DECISIONS & PROTOCOLS
            </h4>
            <div className="space-y-2">
              {project.architectureDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#b94a28] dark:text-[#e06d44] mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-neutral-800 dark:text-neutral-200 font-sans leading-normal">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Complete Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
            TECHNOLOGY STACK
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[10px] font-mono uppercase border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-widest uppercase bg-neutral-900 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-colors"
              >
                <span>OPEN DEPLOYMENT</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-widest uppercase border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB REPO</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 text-xs font-mono tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            [CLOSE SPEC SHEET]
          </button>
        </div>
      </div>
    </div>
  );
}
