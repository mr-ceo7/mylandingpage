"use client";

import Image from "next/image";
import { MENTORSHIP_PHOTOS } from "../../data/site";
import { KineticHeading } from "../fx/KineticHeading";
import { Reveal } from "../fx/Reveal";
import { useScrollScene } from "../fx/useScrollScene";

function StoryFrame({ photo, index }: { photo: (typeof MENTORSHIP_PHOTOS)[number]; index: number }) {
  const ref = useScrollScene<HTMLElement>();
  return (
    <figure ref={ref} className="story-frame relative">
      <div className="story-wipe relative aspect-[4/5] sm:aspect-[16/9] overflow-hidden">
        <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-cover parallax-img" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0A2E22] via-[#0A2E22]/10 to-transparent" />
      </div>
      <figcaption className="story-caption absolute inset-x-0 bottom-0 px-5 sm:px-10 pb-6 sm:pb-10 max-w-3xl">
        <span className="font-mono text-[10px] tracking-widest uppercase text-[#E3B23C]">
          {String(index + 1).padStart(2, "0")} · {photo.tag}
        </span>
        <p className="mt-2 font-serif text-xl sm:text-3xl leading-snug text-[#F8F3E8]">{photo.caption}</p>
      </figcaption>
    </figure>
  );
}

/** Mentorship as a documentary: full-width photos one after another, captions sliding in as each arrives. */
export function PhotoStory() {
  return (
    <section id="mentorship" className="w-full bg-[#0A2E22] pt-20 sm:pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal>
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#E3B23C]">Act II · Young Scientists Kenya & KSEF</span>
        </Reveal>
        <KineticHeading text="From breadboard to the national stage." highlight="national stage." className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight text-[#F8F3E8]" />
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#CFC3A8]">
            I mentor secondary school teams through the whole engineering cycle: turning a real-world problem into a schematic, teaching embedded C/C++ from
            first principles, tuning motor PID loops, and coaching them to defend their methodology before national judges.
          </p>
        </Reveal>
      </div>
      <div className="mt-12 space-y-3 sm:space-y-4 max-w-6xl mx-auto sm:px-6">
        {MENTORSHIP_PHOTOS.map((p, i) => (
          <StoryFrame key={p.src} photo={p} index={i} />
        ))}
      </div>
    </section>
  );
}
