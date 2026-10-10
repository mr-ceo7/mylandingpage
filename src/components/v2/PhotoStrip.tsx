"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface StripPhoto {
  src: string;
  alt: string;
  caption?: string;
}

/** Swipeable photo strip (native scroll-snap) with arrow buttons and a counter. */
export function PhotoStrip({ photos, tone, aspect = "aspect-[16/10]" }: { photos: StripPhoto[]; tone: "software" | "hardware"; aspect?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const go = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };
  const accent = tone === "software" ? "text-[#FFC2AE]" : "text-[#E3B23C]";

  return (
    <div className="relative">
      <div
        ref={ref}
        data-lenis-prevent
        onScroll={(e) => setIndex(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {photos.map((p, i) => (
          <figure key={p.src + i} className="snap-center shrink-0 w-full">
            <div className={`relative ${aspect} w-full overflow-hidden bg-black/30`}>
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 640px" className="object-cover" />
            </div>
            {p.caption && <figcaption className="pt-2 text-[11px] leading-snug opacity-80">{p.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {photos.length > 1 && (
        <div className="mt-2 flex items-center justify-between font-mono text-[10px] tracking-widest">
          <span className={accent}>
            {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </span>
          <div className="flex gap-1">
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="w-10 h-10 flex items-center justify-center border border-current/30 hover:border-current cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next photo" className="w-10 h-10 flex items-center justify-center border border-current/30 hover:border-current cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
