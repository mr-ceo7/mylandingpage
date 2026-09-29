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

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] dark:bg-[#0d0f11] text-neutral-900 dark:text-neutral-100 transition-colors selection:bg-[#b94a28] selection:text-white">
      {/* Top Header & Masthead */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 00: Hero & Primary Editorial Dispatch */}
        <Hero />

        {/* Section 01: Flagship Engineering Deep Dives */}
        <FlagshipProjects onSelectProject={(p) => setSelectedProject(p)} />

        {/* Section 02: Full Deployment Registry (18+ Vercel Builds) */}
        <ProjectCatalog onSelectProject={(p) => setSelectedProject(p)} />

        {/* Section 03: Embedded Hardware & Gearbox Academy Lab Archive */}
        <HardwareLab />

        {/* Section 04: Science Competitions & Field Mentorship (Young Scientists Kenya) */}
        <ScienceMentorship />

        {/* Section 05: Technical Manifesto & Engineering Invariants */}
        <EngineeringPhilosophy />

        {/* Section 06: Direct Inquiries & Contact Terminal */}
        <ContactSection />
      </main>

      {/* Colophon & Footer */}
      <Footer />

      {/* Interactive Project Specification Sheet Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
