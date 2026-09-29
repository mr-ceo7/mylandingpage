import Image from "next/image";
import { ArrowDown, ExternalLink, Terminal, Cpu, Layers } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full border-b border-neutral-200 dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0d0f11] py-16 sm:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Micro-mono Header Kicker (No Status Dots, No Emojis) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              DISPATCH REF: AGY-PORTFOLIO-2026
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-800 dark:text-neutral-200 font-semibold">
              NAIROBI, KENYA
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
            <span>VERCEL CLI DEPLOYMENTS: 20+</span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span>HARDWARE CAPSTONES: ACTIVE</span>
          </div>
        </div>

        {/* Main Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Commanding Display Typography & Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold block">
                FULL-STACK SOFTWARE & SYSTEMS / IOT ENGINEER
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.12]">
                Architecting resilient transactional rails, production cloud interfaces, and bare-metal microcontroller firmware.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans max-w-3xl">
              I am Kassim Musa Abass (<span className="font-mono text-neutral-900 dark:text-neutral-100 font-semibold">@mr-ceo7</span>). 
              My work spans both sides of the physical-digital boundary: from low-level C/C++ firmware and SPI bus protocols on Raspberry Pi Pico and ESP32 hardware, 
              to fault-tolerant fintech daemons handling automated M-Pesa transaction reconciliation, and high-frequency web platforms deployed worldwide via Vercel.
            </p>

            {/* Direct Architecture Metric Cards (Micro-Mono Editorial Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="p-4 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/40">
                <div className="flex items-center gap-2 mb-2 text-neutral-500 dark:text-neutral-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">FINTECH & CLOUD</span>
                </div>
                <div className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100">
                  PochiPay Daemon
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                  Local SQLite failover queues, accessibility SMS parsing & edge webhooks.
                </div>
              </div>

              <div className="p-4 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/40">
                <div className="flex items-center gap-2 mb-2 text-neutral-500 dark:text-neutral-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">EMBEDDED HARDWARE</span>
                </div>
                <div className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100">
                  RP2040 & ESP32
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                  Gearbox Academy RFID attendance, C/C++ interrupt routines & dual-core tasking.
                </div>
              </div>

              <div className="p-4 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/40">
                <div className="flex items-center gap-2 mb-2 text-neutral-500 dark:text-neutral-400">
                  <Layers className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">PRODUCTION STACK</span>
                </div>
                <div className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100">
                  React 19 & Next.js
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                  Over 18 active deployments with Vercel CLI, sub-second LCP & typed APIs.
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#flagship"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs font-mono tracking-widest uppercase bg-neutral-900 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-colors w-full sm:w-auto"
              >
                <span>EXPLORE FLAGSHIP ARCHITECTURES</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#archive"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs font-mono tracking-widest uppercase border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 text-neutral-800 dark:text-neutral-200 transition-colors w-full sm:w-auto"
              >
                <span>VERCEL DEPLOYMENT INDEX (20+)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Documentary Portrait & Engineering Profile Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="border border-neutral-300 dark:border-neutral-800 p-3 bg-neutral-100/80 dark:bg-neutral-900/60">
              <div className="relative aspect-[4/5] w-full border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <Image
                  src="/images/profile.jpeg"
                  alt="Kassim Musa Abass in engineering workshop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover grayscale contrast-110"
                />
              </div>

              {/* Documentary Caption */}
              <div className="pt-3 pb-1 border-t border-neutral-200 dark:border-neutral-800 mt-3 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
                  <span>FIGURE 01: ENGINEER PROFILE</span>
                  <span>NAIROBI, KE</span>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-normal">
                  Kassim Musa Abass. Systems engineer, firmware developer, and builder of autonomous transaction systems.
                </p>
              </div>
            </div>

            {/* Quick Field Specs */}
            <div className="border border-neutral-200 dark:border-neutral-800 p-4 text-[11px] font-mono space-y-2 bg-[#faf9f5] dark:bg-[#0d0f11]">
              <div className="flex justify-between border-b border-neutral-200/80 dark:border-neutral-800/80 pb-1">
                <span className="text-neutral-500">PRIMARY TOOLS</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">C++, TS, PYTHON, KOTLIN</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/80 dark:border-neutral-800/80 pb-1">
                <span className="text-neutral-500">HARDWARE CADENCE</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">GEARBOX ACADEMY GRAD</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/80 dark:border-neutral-800/80 pb-1">
                <span className="text-neutral-500">HOSTING RUNTIME</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">VERCEL EDGE & AWS ECS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">SOURCE CODE</span>
                <a
                  href="https://github.com/mr-ceo7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-950 dark:text-neutral-50 font-semibold underline underline-offset-2 hover:text-[#b94a28]"
                >
                  GITHUB.COM/MR-CEO7 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
