"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Cpu, FileText, Download, ExternalLink, HardDrive, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { LAB_REPORTS, HARDWARE_PHOTOS, LabReport } from "../data/hardwareReports";

export function HardwareLab() {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      setSelectedPhoto((prev) => (prev === HARDWARE_PHOTOS.length - 1 ? 0 : prev + 1));
    } else if (diff < -40) {
      setSelectedPhoto((prev) => (prev === 0 ? HARDWARE_PHOTOS.length - 1 : prev - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev === 0 ? HARDWARE_PHOTOS.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev === HARDWARE_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="hardware" className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0d0f11] py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 dark:border-neutral-800 pb-6 mb-12 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold block mb-1">
              SECTION 03 / PHYSICAL TELEMETRY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 tracking-tight font-normal">
              Embedded Systems & Hardware Laboratory
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-md">
            Documented engineering fieldwork from the Gearbox Academy Embedded Systems curriculum, featuring firmware architectures, bench schematics, and capstone telemetry.
          </p>
        </div>

        {/* Featured Hardware Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Interactive Hardware Photo Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="border border-neutral-300 dark:border-neutral-800 p-3 bg-neutral-100/70 dark:bg-neutral-900/50">
              <div
                className="relative aspect-[16/10] w-full border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-950 touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  src={HARDWARE_PHOTOS[selectedPhoto].src}
                  alt={HARDWARE_PHOTOS[selectedPhoto].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover select-none"
                />

                {/* Arrow Controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prevPhoto}
                    aria-label="Previous hardware photograph"
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center bg-neutral-950/85 hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextPhoto}
                    aria-label="Next hardware photograph"
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center bg-neutral-950/85 hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Photo Caption */}
              <div className="pt-3 pb-1 border-t border-neutral-200 dark:border-neutral-800 mt-3 flex items-center justify-between">
                <p className="text-xs font-mono text-neutral-700 dark:text-neutral-300">
                  {HARDWARE_PHOTOS[selectedPhoto].caption}
                </p>
                <span className="text-[10px] font-mono text-neutral-400 uppercase flex-shrink-0 ml-4">
                  0{selectedPhoto + 1} / 0{HARDWARE_PHOTOS.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-4 gap-2">
              {HARDWARE_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setSelectedPhoto(idx)}
                  aria-label={`Select hardware photograph ${idx + 1}: ${photo.alt}`}
                  className={`relative aspect-[16/10] border overflow-hidden transition-colors ${
                    selectedPhoto === idx
                      ? "border-neutral-950 dark:border-neutral-50 ring-1 ring-neutral-950 dark:ring-neutral-50"
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

          {/* Right Column: Hardware Specification Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-neutral-300 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/40 space-y-4">
              <div className="flex items-center gap-2 text-[#b94a28] dark:text-[#e06d44]">
                <Cpu className="w-4 h-4" />
                <span className="text-[10px] font-mono tracking-widest uppercase font-semibold">
                  CAPSTONE HARDWARE ARCHITECTURE
                </span>
              </div>

              <h3 className="font-serif text-2xl text-neutral-950 dark:text-neutral-50 font-normal">
                RFID Student Attendance Station
              </h3>

              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                Engineered to replace manual university paper sign-in sheets. The terminal captures student MIFARE 1K RF cards via SPI, 
                validates authentication keys on Core 0 of an RP2040, and uses Core 1 to queue asynchronous JSON telemetry over UART to an ESP32 WiFi module.
              </p>

              {/* Hardware specifications list */}
              <div className="space-y-2 border-t border-neutral-200 dark:border-neutral-800 pt-4 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-500">PRIMARY MCU</span>
                  <span className="text-neutral-900 dark:text-neutral-100">RP2040 Dual ARM Cortex-M0+</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-500">WIRELESS GATEWAY</span>
                  <span className="text-neutral-900 dark:text-neutral-100">ESP32-WROOM-32 (UART Mesh)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-500">CARD SENSOR</span>
                  <span className="text-neutral-900 dark:text-neutral-100">RC522 (13.56 MHz, SPI Bus)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-neutral-500">DISPLAY UNIT</span>
                  <span className="text-neutral-900 dark:text-neutral-100">SSD1306 128x64 OLED (I2C)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">FIRMWARE CORE</span>
                  <span className="text-neutral-900 dark:text-neutral-100">C/C++ Arduino Core + FreeRTOS</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/projects/rfid/pico_attendance.ino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-mono tracking-widest uppercase bg-neutral-900 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-colors w-full justify-center"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>VIEW PICO ATTENDANCE FIRMWARE (.INO)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Laboratory Curriculum & Field Reports */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
            <h3 className="text-xs font-mono tracking-widest uppercase text-neutral-800 dark:text-neutral-200 font-semibold">
              FIELD DISPATCHES: 12-WEEK EMBEDDED CURRICULUM LOGS
            </h3>
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
              GEARBOX ACADEMY REPOSITORY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LAB_REPORTS.map((report) => (
              <div
                key={report.week}
                className="border border-neutral-300 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 p-5 flex flex-col justify-between hover:border-neutral-900 dark:hover:border-neutral-200 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#b94a28] dark:text-[#e06d44] font-semibold mb-2">
                    <span>{report.week}</span>
                    <span className="text-neutral-400 font-normal">ACADEMY LOG</span>
                  </div>
                  <h4 className="font-serif text-lg font-normal text-neutral-950 dark:text-neutral-50 mb-1">
                    {report.title}
                  </h4>
                  <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-3">
                    {report.topic}
                  </p>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed mb-4">
                    {report.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4 border-t border-neutral-200 dark:border-neutral-800 pt-3">
                    {report.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-1.5 py-0.5 text-[9px] font-mono tracking-wider uppercase border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href={report.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-neutral-900 dark:text-neutral-100 hover:text-[#b94a28] dark:hover:text-[#e06d44] transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    <span>DOWNLOAD LAB REPORT (PDF)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
