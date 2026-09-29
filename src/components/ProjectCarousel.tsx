"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from "lucide-react";
import { CarouselSlide } from "../data/projects";

interface ProjectCarouselProps {
  slides: CarouselSlide[];
  projectTitle: string;
  liveUrl?: string;
  onOpenZoom?: (src: string, caption: string) => void;
}

export function ProjectCarousel({
  slides,
  projectTitle,
  liveUrl,
  onOpenZoom
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full border border-neutral-300 dark:border-neutral-800 bg-neutral-900/5 dark:bg-neutral-950/80">
      {/* Top Browser / Terminal Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-200 dark:border-neutral-800 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-none bg-neutral-300 dark:bg-neutral-700 inline-block" />
            <span className="w-2 h-2 rounded-none bg-neutral-300 dark:bg-neutral-700 inline-block" />
            <span className="w-2 h-2 rounded-none bg-neutral-300 dark:bg-neutral-700 inline-block" />
          </div>
          <span className="text-neutral-400 dark:text-neutral-600">|</span>
          <span className="uppercase tracking-widest text-neutral-700 dark:text-neutral-300 truncate max-w-[200px] sm:max-w-none">
            {liveUrl ? liveUrl.replace("https://", "") : `${projectTitle.toLowerCase()} // telemetry`}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {slides.length > 1 && (
            <span className="tracking-widest">
              0{currentIndex + 1} / 0{slides.length}
            </span>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
            >
              <span>VISIT</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden group">
        <Image
          src={currentSlide.src}
          alt={currentSlide.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
        />

        {/* Directional Controls (Shown if more than 1 slide) */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous screenshot slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-neutral-900/80 hover:bg-neutral-900 text-neutral-100 border border-neutral-700 transition-opacity opacity-80 hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next screenshot slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-neutral-900/80 hover:bg-neutral-900 text-neutral-100 border border-neutral-700 transition-opacity opacity-80 hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Caption & Thumbnail Bar */}
      <div className="p-3 border-t border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-xs font-mono text-neutral-700 dark:text-neutral-300 leading-normal">
          <span className="text-[#b94a28] dark:text-[#e06d44] font-semibold mr-2">
            SLIDE 0{currentIndex + 1}:
          </span>
          {currentSlide.caption}
        </p>

        {/* Clickable thumbnail indicators */}
        {slides.length > 1 && (
          <div className="flex items-center gap-1.5 flex-shrink-0 self-end sm:self-auto">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-6 h-1.5 rounded-none transition-colors ${
                  currentIndex === idx
                    ? "bg-neutral-950 dark:bg-neutral-100"
                    : "bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
