"use client";

import Image from "next/image";
import { Reveal } from "../fx/Reveal";

export interface StripPhoto {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Photos stacked down the page, no sideways scrolling. On the page each one reveals as it scrolls in;
 * inside overlays (windows, case studies), which scroll on their own, pass `reveal={false}`.
 */
export function PhotoStrip({ photos, tone, aspect = "aspect-[16/10]", reveal = true }: { photos: StripPhoto[]; tone: "software" | "hardware"; aspect?: string; reveal?: boolean }) {
  const accent = tone === "software" ? "text-[#B23A21]" : "text-[#E3B23C]";
  return (
    <div className="space-y-5">
      {photos.map((p, i) => {
        const figure = (
          <figure className={/-mobile\./.test(p.src) ? "max-w-[300px] mx-auto" : ""}>
            {/* Phone captures keep their tall shape; everything else uses the wide frame */}
            <div className={`relative ${/-mobile\./.test(p.src) ? "aspect-[390/844] rounded-[18px] border-[5px] border-[#0A2E22]" : aspect} w-full overflow-hidden bg-[#0A2E22]/40`}>
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 760px" className="object-cover object-top" />
            </div>
            {p.caption && (
              <figcaption className="pt-2 text-[11px] leading-snug opacity-85">
                <span className={`font-mono tracking-widest mr-2 ${accent}`}>{String(i + 1).padStart(2, "0")}</span>
                {p.caption}
              </figcaption>
            )}
          </figure>
        );
        return reveal ? (
          <Reveal key={p.src + i} variant="scale" delay={Math.min(i, 3) * 60}>
            {figure}
          </Reveal>
        ) : (
          <div key={p.src + i}>{figure}</div>
        );
      })}
    </div>
  );
}
