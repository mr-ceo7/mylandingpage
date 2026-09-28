import { ExternalLink, Terminal, CheckCircle2, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS, Project } from "../data/projects";

export function FlagshipProjects({ onSelectProject }: { onSelectProject: (p: Project) => void }) {
  const flagships = PROJECTS.filter((p) => p.isFlagship);

  return (
    <section id="flagship" className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0d0f11] py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 dark:border-neutral-800 pb-6 mb-12 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold block mb-1">
              SECTION 01 / CASE STUDIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 tracking-tight font-normal">
              Flagship Engineering Architectures
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-md">
            Detailed dissections of core transaction engines, low-level microcontroller systems, and high-frequency production web platforms.
          </p>
        </div>

        {/* Flagship Cards Grid */}
        <div className="space-y-12">
          {flagships.map((project, idx) => (
            <article
              key={project.id}
              className="border border-neutral-300 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 p-6 sm:p-8 hover:border-neutral-900 dark:hover:border-neutral-200 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left meta & header */}
                <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 pb-6 lg:pb-0 lg:pr-8">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
                    <span>DOSSIER 0{idx + 1}</span>
                    <span>{project.year}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold block mb-1">
                      {project.categoryLabel}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-50 font-normal">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] font-mono space-y-1.5 text-neutral-600 dark:text-neutral-400">
                    <div className="flex justify-between">
                      <span className="text-neutral-400 dark:text-neutral-500">PLATFORM:</span>
                      <span className="text-neutral-800 dark:text-neutral-200 font-medium">{project.deploymentPlatform}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase bg-neutral-900 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-colors"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 text-neutral-800 dark:text-neutral-200 transition-colors"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right detailed technical narrative & architecture */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2">
                      SYSTEM OVERVIEW & SCOPE
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3">
                      KEY ARCHITECTURAL DECISIONS & PROTOCOLS
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.architectureDetails.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50"
                        >
                          <Terminal className="w-3.5 h-3.5 text-[#b94a28] dark:text-[#e06d44] mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-normal">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack chips */}
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2">
                      TECHNOLOGY IMPLEMENTATION
                    </h4>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
