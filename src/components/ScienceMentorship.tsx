"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Users, BookOpen, Wrench, ChevronLeft, ChevronRight } from "lucide-react";

interface MentorshipPhoto {
  src: string;
  caption: string;
  tag: string;
  alt: string;
}

const MENTORSHIP_PHOTOS: MentorshipPhoto[] = [
  {
    src: "/mentorship/slide_1.jpeg",
    tag: "NATIONAL EXHIBITION",
    caption: "Young Scientists Kenya National Science Exhibition: Kassim Musa Abass standing with mentored student researchers on the exhibition presentation floor.",
    alt: "Young Scientists Kenya National Exhibition presentation with Kassim and mentored students"
  },
  {
    src: "/mentorship/slide_2.jpeg",
    tag: "LAB WORKSHOP BENCH",
    caption: "Hardware debugging session: students diagnosing motor driver signals, ultrasonic sensor alignment, and firmware logic directly on the lab bench.",
    alt: "Students and mentor testing autonomous mobile robot on workshop table"
  },
  {
    src: "/mentorship/slide_3.jpeg",
    tag: "SYSTEM INTEGRATION",
    caption: "Hands-on instruction: guiding secondary school competitors through power distribution bus wiring and sensor calibration.",
    alt: "Laboratory instruction session on robotics hardware"
  },
  {
    src: "/mentorship/slide_4.jpeg",
    tag: "CIRCUIT PROTOTYPING",
    caption: "Component-level assembly: H-bridge driver heat-sinking, microcontroller GPIO routing, and logic isolation.",
    alt: "Handheld inspection of motor driver board and microcontroller wiring"
  }
];

export function ScienceMentorship() {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev === 0 ? MENTORSHIP_PHOTOS.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev === MENTORSHIP_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="mentorship" className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0d0f11] py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 dark:border-neutral-800 pb-6 mb-12 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold block mb-1">
              SECTION 04 // FIELD LEADERSHIP & MENTORSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 tracking-tight font-normal">
              Science Competitions & STEM Mentorship
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-md">
            Training and mentoring high school engineering teams across Kenya, guiding students from initial breadboard prototypes to the Young Scientists Kenya (YSK) national exhibition stage.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photo Carousel with Editorial Frame */}
          <div className="lg:col-span-7 space-y-4">
            <div className="border border-neutral-300 dark:border-neutral-800 p-3 bg-neutral-100/70 dark:bg-neutral-900/50">
              <div className="relative aspect-[4/3] w-full border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-950">
                <Image
                  src={MENTORSHIP_PHOTOS[selectedPhoto].src}
                  alt={MENTORSHIP_PHOTOS[selectedPhoto].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                  priority
                />

                {/* Tag Overlay */}
                <div className="absolute top-3 left-3 bg-neutral-950/85 backdrop-blur-sm border border-neutral-700 px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#e06d44] uppercase">
                  {MENTORSHIP_PHOTOS[selectedPhoto].tag}
                </div>

                {/* Arrow Controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prevPhoto}
                    aria-label="Previous photograph"
                    className="p-1.5 bg-neutral-950/80 hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextPhoto}
                    aria-label="Next photograph"
                    className="p-1.5 bg-neutral-950/80 hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Caption */}
              <div className="pt-3 pb-1 border-t border-neutral-200 dark:border-neutral-800 mt-3 flex items-center justify-between">
                <p className="text-xs font-mono text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {MENTORSHIP_PHOTOS[selectedPhoto].caption}
                </p>
                <span className="text-[10px] font-mono text-neutral-400 uppercase flex-shrink-0 ml-4">
                  0{selectedPhoto + 1} / 0{MENTORSHIP_PHOTOS.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-4 gap-2">
              {MENTORSHIP_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setSelectedPhoto(idx)}
                  aria-label={`Select mentorship photograph ${idx + 1}: ${photo.alt}`}
                  className={`relative aspect-[4/3] border overflow-hidden transition-all ${
                    selectedPhoto === idx
                      ? "border-neutral-950 dark:border-neutral-50 ring-1 ring-neutral-950 dark:ring-neutral-50 opacity-100"
                      : "border-neutral-300 dark:border-neutral-800 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Mentorship Pillars & Outcomes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-neutral-300 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/40 space-y-4">
              <div className="flex items-center gap-2 text-[#b94a28] dark:text-[#e06d44]">
                <Award className="w-4 h-4" />
                <span className="text-[10px] font-mono tracking-widest uppercase font-semibold">
                  COMPETITIVE ENGINEERING PEDAGOGY
                </span>
              </div>

              <h3 className="font-serif text-2xl text-neutral-950 dark:text-neutral-50 font-normal">
                Empowering the Next Generation of Hardware Innovators
              </h3>

              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                Beyond writing production software and bare-metal firmware, I actively train secondary school students for national science competitions including the <strong>Kenya Science and Engineering Fair (KSEF)</strong> and <strong>Young Scientists Kenya (YSK)</strong>.
              </p>

              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                I mentor students through complete engineering lifecycles: translating real-world problems into schematic designs, teaching embedded C/C++ programming from first principles, tuning motor PID loops, and coaching them to defend their scientific methodology before national judges.
              </p>

              {/* Mentorship Core Pillars */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                <div className="flex items-start gap-3">
                  <Wrench className="w-4 h-4 text-[#b94a28] dark:text-[#e06d44] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 uppercase">
                      Hands-On Circuit Prototyping
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans">
                      Teaching schematic capture, breadboard prototyping, sensor calibration, and safe bench soldering.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-[#b94a28] dark:text-[#e06d44] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 uppercase">
                      Embedded Software Foundations
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans">
                      Guiding young coders from visual blocks to real C/C++ firmware, interrupt routines, and state machines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#b94a28] dark:text-[#e06d44] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 uppercase">
                      National Exhibition Defense
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans">
                      Preparing students to articulate system architecture, error tolerances, and societal impact at the YSK finals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Project Bridge */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-500">
                  Related Software Platform:
                </span>
                <a
                  href="https://ksef-display-board.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#b94a28] dark:text-[#e06d44] hover:underline uppercase"
                >
                  KSEF Display Board &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
