"use client";

import { useState } from "react";
import { PillNav } from "@/components/v2/PillNav";
import { CaseStudy } from "@/components/v2/CaseStudy";
import { Project } from "@/data/projects";
import { Band } from "@/components/fx/Band";
import { TraceTicker } from "@/components/fx/TraceTicker";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { IntroCurtain } from "@/components/fx/IntroCurtain";
import { ActIntro } from "@/components/acts/ActIntro";
import { Handoff } from "@/components/acts/Handoff";
import { DeskHero } from "@/components/v2/DeskHero";
import { DeviceShowcase } from "@/components/v2/DeviceShowcase";
import { AppGrid } from "@/components/v2/AppGrid";
import { ExplodedBuilds } from "@/components/v2/ExplodedBuild";
import { ComponentReel } from "@/components/v2/ComponentReel";
import { LabNotebook } from "@/components/v2/LabNotebook";
import { PhotoStory } from "@/components/v2/PhotoStory";
import { RulesAndSkills } from "@/components/v2/RulesAndSkills";
import { BusinessCard } from "@/components/v2/BusinessCard";
import { AppWindow } from "@/components/v2/AppWindow";

export default function Home() {
  // Full case study (spec sheet) and the quicker app/part window
  const [specProject, setSpecProject] = useState<Project | null>(null);
  const [windowProject, setWindowProject] = useState<Project | null>(null);
  const windowTone = windowProject?.category === "hardware" ? "hardware" : "software";

  return (
    <div className="min-h-screen flex flex-col bg-surface text-neutral-900 dark:text-neutral-100 transition-colors selection:bg-copper selection:text-white">
      <IntroCurtain />
      <SmoothScroll />
      <PillNav />

      {/* Two acts in one scroll: Software (Electric Blue / Tangerine / Warm Cream), a handoff,
          then Hardware (PCB green / copper / solder cream). Principles and contact close the page. */}
      <main className="flex-grow">
        {/* Desk: the laptop opens Act I, the breadboard opens Act II */}
        <Band tone="cream" next="blue">
          <DeskHero />
        </Band>

        <TraceTicker />

        {/* ── Act I · Software ── */}
        <div className="act-software">
          <Band tone="blue" next="cream">
            <ActIntro side="software" />
          </Band>
          <Band tone="cream" next="blue">
            <DeviceShowcase onOpen={setSpecProject} />
          </Band>
          <Band tone="blue" next="cream">
            <AppGrid onOpen={setWindowProject} />
          </Band>
        </div>

        {/* The seam between the acts: code becomes copper */}
        <Handoff />

        {/* ── Act II · Hardware ── (alternates green and cream like Act I) */}
        <Band tone="green" next="cream">
          <ActIntro side="hardware" />
        </Band>
        <Band tone="cream" next="green">
          <ExplodedBuilds onOpen={setSpecProject} />
        </Band>
        <Band tone="green" next="cream">
          <ComponentReel onOpen={setWindowProject} />
        </Band>
        <Band tone="cream" next="green">
          <LabNotebook />
        </Band>
        <Band tone="green" next="cream">
          <PhotoStory />
        </Band>

        {/* ── Both sides ── */}
        <Band tone="cream" next="green">
          <RulesAndSkills />
        </Band>
        <BusinessCard />
      </main>

      <AppWindow
        project={windowProject}
        tone={windowTone}
        onClose={() => setWindowProject(null)}
        onFullSpec={(p) => {
          setWindowProject(null);
          setSpecProject(p);
        }}
      />
      <CaseStudy project={specProject} onClose={() => setSpecProject(null)} />
    </div>
  );
}
