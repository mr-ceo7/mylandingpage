"use client";

import Image from "next/image";
import { useMemo, useState, type CSSProperties } from "react";
import { PROJECTS, Project } from "../../data/projects";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";

type Filter = "all" | "web" | "ai";

const initials = (title: string) =>
  title
    .replace(/\(.*?\)/g, "")
    .split(/[\s—–-]+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
const shortName = (title: string) => title.split(/ — | – | \(|:/)[0].replace(/ (Platform|Suite|Portal).*$/, "");

/** The software archive as a home screen of app icons. Tapping an icon opens the app as a window. */
export function AppGrid({ onOpen }: { onOpen: (p: Project) => void }) {
  const [filter, setFilter] = useState<Filter>("all");
  const apps = useMemo(() => PROJECTS.filter((p) => p.category !== "hardware" && (filter === "all" || p.category === filter)), [filter]);
  const tabs: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "ai", label: "AI" },
  ];

  return (
    <section id="archive" className="w-full bg-[#0147BA] py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#FFC2AE]">Act I · Everything shipped</span>
        </Reveal>
        <KineticHeading text="Tap an app to open it." highlight="open it." className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight text-[#F9F1E2]" />

        {/* Home screen */}
        <Reveal variant="scale" className="mt-10">
          <div className="mx-auto max-w-3xl rounded-[28px] bg-[#01358C]/70 border border-[#2F64C9] p-5 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#C9D4EE]">
              <span>mr-ceo7</span>
              <div className="flex gap-1 rounded-full bg-[#0147BA]/60 p-1">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setFilter(t.id)}
                    className={`px-3 min-h-[32px] rounded-full uppercase cursor-pointer transition-colors ${filter === t.id ? "bg-[#F3E6CE] text-[#01358C]" : "text-[#C9D4EE] hover:text-[#F9F1E2]"}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-7 grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-7">
              {apps.map((p, i) => (
                <button key={p.id} type="button" onClick={() => onOpen(p)} className="app-icon group flex flex-col items-center gap-2 cursor-pointer" style={{ "--i": i } as CSSProperties}>
                  <span className="relative w-[68px] h-[68px] sm:w-20 sm:h-20 rounded-[20px] overflow-hidden shadow-[0_10px_22px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-active:scale-95">
                    <Image src={p.screenshot} alt="" fill sizes="80px" className="object-cover object-top scale-125" />
                    <span className={`absolute inset-0 ${p.category === "ai" ? "bg-[#E34F33]/70" : "bg-[#0147BA]/65"}`} />
                    <span className="absolute inset-0 flex items-center justify-center font-serif text-2xl text-[#FCF8F0]">{initials(p.title)}</span>
                    {p.isFlagship && <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#F3E6CE] ring-2 ring-[#01358C]" title="Flagship" />}
                  </span>
                  <span className="max-w-[88px] text-center text-[11px] leading-tight text-[#F9F1E2] line-clamp-2">{shortName(p.title)}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
        <p className="mt-5 text-center font-mono text-[10px] tracking-widest uppercase text-[#C9D4EE]">
          {apps.length} apps · blue = web · tangerine = AI · dot = flagship
        </p>
      </div>
    </section>
  );
}
