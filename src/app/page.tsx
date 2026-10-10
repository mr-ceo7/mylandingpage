"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlagshipProjects } from "@/components/FlagshipProjects";
import { ProjectCatalog } from "@/components/ProjectCatalog";
import { HardwareLab } from "@/components/HardwareLab";
import { ScienceMentorship } from "@/components/ScienceMentorship";
import { EngineeringPhilosophy } from "@/components/EngineeringPhilosophy";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { Project } from "@/data/projects";
import { Band } from "@/components/fx/Band";
import { TraceTicker } from "@/components/fx/TraceTicker";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { IntroCurtain } from "@/components/fx/IntroCurtain";
import { ActIntro } from "@/components/acts/ActIntro";
import { Handoff } from "@/components/acts/Handoff";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-neutral-900 dark:text-neutral-100 transition-colors selection:bg-copper selection:text-white">
      <IntroCurtain />
      <SmoothScroll />

      {/* Top Header & Masthead */}
      <Navbar />

      {/* Two acts in one scroll: Software (Electric Blue / Tangerine / Warm Cream), a handoff,
          then Hardware (PCB green / copper / solder cream). Shared sections close the page. */}
      <main className="flex-grow">
        {/* Hero: software on blue, hardware on green */}
        <Band tone="green" next="blue">
          <Hero />
        </Band>

        {/* Crossed strips of selected work over the hero → Act I seam */}
        <TraceTicker />

        {/* ── Act I · Software ── */}
        <div className="act-software">
          <Band tone="blue" next="cream">
            <ActIntro side="software" />
          </Band>
          <Band tone="cream" next="blue">
            <FlagshipProjects
              side="software"
              id="flagship"
              kicker="Act I / Flagship platforms"
              title="Software, in Depth"
              highlight="in Depth"
              intro="The platforms I am proudest of: the problem, the architecture, and the decisions behind it."
              onSelectProject={(p) => setSelectedProject(p)}
            />
          </Band>
          <Band tone="blue" next="cream">
            <ProjectCatalog
              side="software"
              id="archive"
              kicker="Act I / Deployment register"
              title="Everything I've Shipped"
              highlight="Shipped"
              intro="Live web apps, AI tools and developer products. Filter by type or search for a stack."
              onSelectProject={(p) => setSelectedProject(p)}
            />
          </Band>
        </div>

        {/* The seam between the acts: code becomes copper */}
        <Handoff />

        {/* ── Act II · Hardware ── */}
        <Band tone="green" next="cream">
          <ActIntro side="hardware" />
        </Band>
        <Band tone="cream" next="green">
          <FlagshipProjects
            side="hardware"
            id="flagship-hardware"
            kicker="Act II / Flagship builds"
            title="Hardware, in Depth"
            highlight="in Depth"
            intro="Two builds from firmware up: the boards, the bus protocols, and the decisions behind them."
            onSelectProject={(p) => setSelectedProject(p)}
          />
        </Band>
        <Band tone="green" next="cream">
          <ProjectCatalog
            side="hardware"
            id="archive-hardware"
            kicker="Act II / The bench"
            title="Everything I've Built"
            highlight="Built"
            intro="Robots, trackers, sensors and attendance terminals. Search by part, bus or sensor."
            onSelectProject={(p) => setSelectedProject(p)}
          />
        </Band>
        <Band tone="cream" next="green">
          <HardwareLab />
        </Band>
        <Band tone="green" next="cream">
          <ScienceMentorship />
        </Band>

        {/* ── Shared ── */}
        <Band tone="cream" next="green">
          <EngineeringPhilosophy />
        </Band>
        <Band tone="green">
          <ContactSection />
          <Footer />
        </Band>
      </main>

      {/* Interactive Project Specification Sheet Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
