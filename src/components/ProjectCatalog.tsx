"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, ExternalLink, Filter, Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS, Project } from "../data/projects";

type CategoryFilter = "all" | "fintech" | "ai" | "web" | "hardware";

export function ProjectCatalog({ onSelectProject }: { onSelectProject: (p: Project) => void }) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "ALL SYSTEMS" },
    { id: "fintech", label: "FINTECH & CORE RAILS" },
    { id: "ai", label: "AI & DEV PLATFORMS" },
    { id: "web", label: "PRODUCTION WEB PLATFORMS" },
    { id: "hardware", label: "HARDWARE & IOT" }
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="archive" className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0d0f11] py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 dark:border-neutral-800 pb-6 mb-8 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold block mb-1">
              SECTION 02 / DEPLOYMENT REGISTER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 tracking-tight font-normal">
              Active Vercel & Embedded Systems Archive
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-md">
            Complete inventory of live deployments, edge web applications, developer gateways, and firmware builds created on this machine.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 border border-neutral-300 dark:border-neutral-800 p-1 bg-white dark:bg-neutral-900 overflow-x-auto no-scrollbar touch-pan-x flex-nowrap sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`px-3 py-2 sm:py-1.5 min-h-[36px] text-[10px] font-mono tracking-widest uppercase transition-colors flex-shrink-0 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[260px]">
            <Search className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH BY TECH, KEYWORD, PROTOCOL..."
              className="w-full pl-9 pr-3 py-2 sm:py-1.5 min-h-[40px] text-xs font-mono bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
          <span>CATALOG INDEX: {filteredProjects.length} RECORDS MATCHED</span>
          <span>LOCATION: MR-CEO7 WORKSPACE</span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-neutral-300 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40 p-5 flex flex-col justify-between hover:border-neutral-900 dark:hover:border-neutral-200 transition-colors"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-3">
                  <span className="text-[#b94a28] dark:text-[#e06d44] font-semibold">
                    {project.categoryLabel}
                  </span>
                  <span>{project.year}</span>
                </div>

                {/* Actual Live Screenshot Preview Frame */}
                <div className="relative aspect-[16/10] w-full border border-neutral-300 dark:border-neutral-800 bg-neutral-950 overflow-hidden mb-4 group/img">
                  <Image
                    src={project.screenshot}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 py-1 px-2.5 bg-neutral-950/85 backdrop-blur-xs flex items-center justify-between text-[9px] font-mono text-neutral-300 border-t border-neutral-800">
                    <span className="truncate max-w-[180px]">
                      {project.liveUrl ? project.liveUrl.replace("https://", "") : "telemetry station"}
                    </span>
                    <span className="uppercase text-[#e06d44]">SNAPSHOT</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-normal text-neutral-950 dark:text-neutral-50 group-hover:text-[#b94a28] dark:group-hover:text-[#e06d44] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Stack Chips */}
                <div className="flex flex-wrap gap-1 mb-4 border-t border-neutral-200 dark:border-neutral-800 pt-3">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[9px] font-mono text-neutral-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-[10px] font-mono tracking-widest uppercase text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 flex items-center gap-1.5 py-2 min-h-[40px]"
                  >
                    <span>SPEC SHEET</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#b94a28] dark:text-[#e06d44]" />
                  </button>

                  <div className="flex items-center gap-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live deployment for ${project.title}`}
                        className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title}`}
                        className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
