"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { LAB_REPORTS, HARDWARE_PHOTOS } from "../../data/hardwareReports";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";

// Each sheet rests at a slightly different angle, like loose pages on a bench
const restingTilt = ["-rotate-1", "rotate-[0.8deg]", "-rotate-[0.6deg]", "rotate-1"];

/** The Gearbox Academy reports as spiral-notebook pages stacked down the page, each fluttering in as you scroll. */
export function LabNotebook() {
  return (
    <section id="hardware" className="w-full bg-[#F2EBDD] py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#9A4E1C]">Act II · Gearbox Academy lab notebook</span>
        </Reveal>
        <KineticHeading text="Twelve weeks at the bench." highlight="the bench." className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight text-[#0A2E22]" />

        <div className="mt-12 space-y-12 sm:space-y-16">
          {LAB_REPORTS.map((report, i) => {
            const photo = HARDWARE_PHOTOS[i % HARDWARE_PHOTOS.length];
            return (
              <Reveal key={report.week} variant="flutter">
                <article className={`relative ${restingTilt[i % restingTilt.length]}`}>
                  {/* Spiral binding */}
                  <div aria-hidden="true" className="absolute -top-3 inset-x-6 z-20 flex justify-between">
                    {Array.from({ length: 14 }).map((_, k) => (
                      <span key={k} className="w-3 h-7 rounded-full border-[3px] border-[#8A8270] bg-[#F2EBDD]" />
                    ))}
                  </div>
                  <div
                    className="relative bg-[#FBF8F1] text-[#0A2E22] px-5 sm:px-10 pt-10 pb-8 shadow-[0_22px_50px_rgba(10,46,34,0.22)]"
                    style={{ backgroundImage: "repeating-linear-gradient(180deg, transparent 0 27px, rgba(1,71,186,0.13) 27px 28px)" }}
                  >
                    <div aria-hidden="true" className="absolute top-0 bottom-0 left-4 sm:left-7 w-px bg-[#E34F33]/40" />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-serif italic text-3xl sm:text-4xl text-[#9A4E1C]">{report.week}</div>
                        <h3 className="mt-1 font-serif text-2xl sm:text-3xl leading-tight">{report.title}</h3>
                        <p className="mt-1 font-mono text-[11px] text-[#4E5B50]">{report.topic}</p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] tracking-widest text-[#66705F]">
                        p. {i + 1}/{LAB_REPORTS.length}
                      </span>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-6 items-start">
                      <p className="sm:col-span-3 text-[15px] leading-7 text-[#26332B]">{report.description}</p>
                      {/* Taped-in bench photo */}
                      <figure className={`sm:col-span-2 relative ${i % 2 ? "-rotate-2" : "rotate-2"}`}>
                        <span aria-hidden="true" className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 w-16 h-5 bg-[#E3B23C]/60 -rotate-3" />
                        <div className="relative aspect-[4/3] overflow-hidden border-4 border-[#F8F3E8] shadow-md">
                          <Image src={photo.src} alt={photo.alt} fill sizes="280px" className="object-cover" />
                        </div>
                      </figure>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {report.tools.map((t) => (
                          <span key={t} className="px-2 py-0.5 border border-[#0F3D2E]/30 font-mono text-[10px] tracking-wider uppercase text-[#2A5443]">{t}</span>
                        ))}
                      </div>
                      <a href={report.pdfPath} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-4 min-h-[44px] bg-[#0F3D2E] text-[#F8F3E8] font-mono text-[11px] tracking-widest uppercase">
                        <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" /> Report PDF
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
