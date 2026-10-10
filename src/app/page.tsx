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

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-neutral-900 dark:text-neutral-100 transition-colors selection:bg-copper selection:text-white">
      <IntroCurtain />
      <SmoothScroll />

      {/* Top Header & Masthead */}
      <Navbar />

      {/* Sections alternate solder-cream and PCB-green bands joined by curved edges */}
      <main className="flex-grow">
        {/* Section 00: Hero */}
        <Band tone="green" next="cream">
          <Hero />
        </Band>

        {/* Crossed strips of selected work over the green → cream seam */}
        <TraceTicker />

        {/* Section 01: Flagship Engineering Deep Dives */}
        <Band tone="cream" next="green">
          <FlagshipProjects onSelectProject={(p) => setSelectedProject(p)} />
        </Band>

        {/* Section 02: Full Deployment Registry */}
        <Band tone="green" next="cream">
          <ProjectCatalog onSelectProject={(p) => setSelectedProject(p)} />
        </Band>

        {/* Section 03: Embedded Hardware & Gearbox Academy Lab Archive */}
        <Band tone="cream" next="green">
          <HardwareLab />
        </Band>

        {/* Section 04: Science Competitions & Field Mentorship (Young Scientists Kenya) */}
        <Band tone="green" next="cream">
          <ScienceMentorship />
        </Band>

        {/* Section 05: Engineering Principles */}
        <Band tone="cream" next="green">
          <EngineeringPhilosophy />
        </Band>

        {/* Section 06: Contact, with the footer on the same green band */}
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
