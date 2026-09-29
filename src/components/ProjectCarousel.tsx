"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Play, Pause, Layers } from "lucide-react";
import { CarouselSlide } from "../data/projects";

interface ProjectCarouselProps {
  slides: CarouselSlide[];
  projectTitle: string;
  liveUrl?: string;
}

export function ProjectCarousel({
  slides,
  projectTitle,
  liveUrl
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (slides.length <= 1 || !isAutoPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, isAutoPlaying, isHovered]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="w-full border border-neutral-300 dark:border-neutral-800 bg-neutral-900/5 dark:bg-neutral-950/80 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Browser / Terminal Header */}
      <div className="flex flex-wrap items-center justify-between px-3.5 py-2.5 border-b border-neutral-200 dark:border-neutral-800 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-none bg-neutral-300 dark:bg-neutral-700 inline-block" />
            <span className="w-2 h-2 rounded-none bg-neutral-300 dark:bg-neutral-700 inline-block" />
            <span className="w-2 h-2 rounded-none bg-neutral-300 dark:bg-neutral-700 inline-block" />
          </div>
          <span className="text-neutral-400 dark:text-neutral-600">|</span>
          <span className="uppercase tracking-widest text-neutral-800 dark:text-neutral-200 font-semibold truncate max-w-[220px] sm:max-w-none">
            {liveUrl ? liveUrl.replace("https://", "") : `${projectTitle.toLowerCase()} // architecture`}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {slides.length > 1 && (
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-1 transition-colors"
              title={isAutoPlaying ? "Pause automatic slideshow" : "Play automatic slideshow"}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#b94a28] dark:text-[#e06d44]" />
                  <span>SLIDESHOW: ACTIVE</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-neutral-400" />
                  <span>SLIDESHOW: PAUSED</span>
                </>
              )}
            </button>
          )}

          {slides.length > 1 && (
            <span className="tracking-widest font-semibold text-neutral-700 dark:text-neutral-300">
              SCREEN 0{currentIndex + 1} / 0{slides.length}
            </span>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1 font-semibold text-[#b94a28] dark:text-[#e06d44]"
            >
              <span>VISIT LIVE</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}
        </div>
      </div>

      {/* Screen Selection Tabs (Direct Screen Navigation) */}
      {slides.length > 1 && (
        <div className="flex items-center gap-1 p-1.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-200/50 dark:bg-neutral-900/50 overflow-x-auto">
          <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-neutral-500 uppercase px-2 flex-shrink-0">
            <Layers className="w-3 h-3" />
            <span>SCREENS:</span>
          </div>
          {slides.map((slide, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase transition-colors flex-shrink-0 ${
                currentIndex === idx
                  ? "bg-neutral-950 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 font-semibold"
                  : "bg-white/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              {slide.tag || `PART 0${idx + 1}`}
            </button>
          ))}
        </div>
      )}

      {/* Main Image Viewport with Subtle Screen Frame */}
      <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden group">
        <Image
          src={currentSlide.src}
          alt={currentSlide.alt}
          fill
          priority={currentIndex === 0}
          sizes="(max-width: 1024px) 100vw, 850px"
          className="object-cover object-top transition-opacity duration-300"
        />

        {/* Current Screen Floating Badge */}
        <div className="absolute top-3 left-3 bg-neutral-950/85 backdrop-blur-xs border border-neutral-800 px-2 py-1 text-[9px] font-mono tracking-widest uppercase text-neutral-200">
          PART 0{currentIndex + 1}: {currentSlide.tag || "VIEW"}
        </div>

        {/* Directional Controls */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous screen"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-neutral-950/80 hover:bg-neutral-950 text-neutral-100 border border-neutral-700 transition-opacity opacity-80 hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next screen"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-neutral-950/80 hover:bg-neutral-950 text-neutral-100 border border-neutral-700 transition-opacity opacity-80 hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Caption & Documentary Context Bar */}
      <div className="p-3.5 border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="text-[10px] font-mono tracking-widest text-[#b94a28] dark:text-[#e06d44] font-semibold uppercase">
            DOCUMENTARY DISPATCH // {currentSlide.tag || `SCREEN 0${currentIndex + 1}`}
          </div>
          <p className="text-xs font-mono text-neutral-700 dark:text-neutral-300 leading-normal">
            {currentSlide.caption}
          </p>
        </div>

        {/* Mini Preview Thumbnails (Quick visual switcher) */}
        {slides.length > 1 && (
          <div className="flex items-center gap-1.5 flex-shrink-0 self-end sm:self-auto">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Switch to screen ${idx + 1}: ${slide.tag}`}
                className={`relative w-12 h-8 border overflow-hidden transition-all ${
                  currentIndex === idx
                    ? "border-neutral-950 dark:border-neutral-50 ring-1 ring-[#b94a28] dark:ring-[#e06d44] opacity-100"
                    : "border-neutral-300 dark:border-neutral-700 opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="48px"
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
