"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { LAB_REPORTS, HARDWARE_PHOTOS } from "../../data/hardwareReports";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";

/** The Gearbox Academy reports as a spiral lab notebook: one report per page, bench photos taped in, pages turn. */
export function LabNotebook() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const touchX = useRef<number | null>(null);
  const report = LAB_REPORTS[page];
  const photo = HARDWARE_PHOTOS[page % HARDWARE_PHOTOS.length];
  const turn = (d: 1 | -1) => {
    const next = page + d;
    if (next < 0 || next >= LAB_REPORTS.length) return;
    setDir(d);
    setPage(next);
  };

  return (
    <section id="hardware" className="w-full bg-[#F2EBDD] py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#9A4E1C]">Act II · Gearbox Academy lab notebook</span>
        </Reveal>
        <KineticHeading text="Twelve weeks at the bench." highlight="the bench." className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight text-[#0A2E22]" />

        <Reveal variant="flutter" className="mt-10">
          <div
            className="relative mx-auto max-w-3xl"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) turn(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            {/* Spiral binding */}
            <div aria-hidden="true" className="absolute -top-3 inset-x-6 z-20 flex justify-between">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className="w-3 h-7 rounded-full border-[3px] border-[#8A8270] bg-[#F2EBDD]" />
              ))}
            </div>
            {/* Page */}
            <div
              key={page}
              className={`notebook-page relative bg-[#FBF8F1] text-[#0A2E22] px-5 sm:px-10 pt-10 pb-8 shadow-[0_26px_60px_rgba(0,0,0,0.45)] ${dir === 1 ? "turn-next" : "turn-prev"}`}
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
                  p. {page + 1}/{LAB_REPORTS.length}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-6 items-start">
                <p className="sm:col-span-3 text-[15px] leading-7 text-[#26332B]">{report.description}</p>
                {/* Taped-in photo */}
                <figure className="sm:col-span-2 relative rotate-2">
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
                <a href={report.pdfPath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 min-h-[44px] bg-[#0F3D2E] text-[#F8F3E8] font-mono text-[11px] tracking-widest uppercase">
                  <Download className="w-3.5 h-3.5" /> Report PDF
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Page turner */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button type="button" onClick={() => turn(-1)} disabled={page === 0} aria-label="Previous page" className="w-11 h-11 flex items-center justify-center border border-[#9A4E1C]/60 text-[#9A4E1C] disabled:opacity-30 cursor-pointer">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5" aria-hidden="true">
            {LAB_REPORTS.map((r, i) => (
              <span key={r.week} className={`h-1.5 rounded-full transition-all ${i === page ? "w-6 bg-[#C46A2B]" : "w-1.5 bg-[#C46A2B]/35"}`} />
            ))}
          </div>
          <button type="button" onClick={() => turn(1)} disabled={page === LAB_REPORTS.length - 1} aria-label="Next page" className="w-11 h-11 flex items-center justify-center border border-[#9A4E1C]/60 text-[#9A4E1C] disabled:opacity-30 cursor-pointer">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
