import { Cpu, Server, Globe, Shield, Terminal, ArrowRight } from "lucide-react";

export function EngineeringPhilosophy() {
  const principles = [
    {
      num: "01",
      title: "Failover by Default in Transactional Systems",
      description:
        "Networks in the field are fundamentally erratic. Whether handling mobile money webhooks (M-Pesa) or microsecond socket telemetry, systems must never presume remote availability. PochiPay is architected with local SQLite buffers on Android and idempotency keys on the server so that dropped packets simply trigger exponential retries without corrupting financial state."
    },
    {
      num: "02",
      title: "Direct Hardware Concurrency & Deterministic Timing",
      description:
        "On low-power microcontrollers like the RP2040, blocking operations are fatal to sensor responsiveness. By offloading RF SPI card polling to Core 0 and handling asynchronous WiFi socket serialization on Core 1 (or delegating to an ESP32 UART bridge), hardware loops remain bounded within strict sub-50ms deadlines."
    },
    {
      num: "03",
      title: "Zero-Jank Web Experiences with Modern React 19",
      description:
        "Web interfaces should load with the immediacy of printed paper. Utilizing static page compilation, streaming server components, and Tailwind CSS v4 eliminates bloated client runtime payloads. Every production site deployed to Vercel is tuned for instant first contentful paint."
    },
    {
      num: "04",
      title: "Cryptographic Integrity Over Trust Assumptions",
      description:
        "From digital asset incident analysis on TrojanCrypto to MIFARE 1K Sector authentication in RFID card readers, identity and ledger data must be verified mathematically rather than assumed via trusting endpoints."
    }
  ];

  const skillMatrix = [
    {
      domain: "EMBEDDED & HARDWARE",
      items: ["C / C++ (C99/C11)", "RP2040 (Raspberry Pi Pico)", "ESP32 (FreeRTOS)", "SPI / I2C / UART", "RC522 RFID", "Hardware Timers & Interrupts"]
    },
    {
      domain: "BACKEND & DISTRIBUTED SYSTEMS",
      items: ["Python Async / FastAPI / Flask", "Kotlin / Android Accessibility", "REST & OpenAPI Gateways", "SQLite & PostgreSQL", "Webhook Queues & Idempotency", "Systemd Daemons"]
    },
    {
      domain: "FRONTEND & PLATFORM",
      items: ["TypeScript", "React 19 & Next.js App Router", "Tailwind CSS v4", "Vite & SWC", "Canvas & Vector Printing", "Web Analytics & CWV"]
    },
    {
      domain: "TOOLCHAINS & DEPLOYMENT",
      items: ["Vercel CLI & Edge Network", "Git / GitHub (@mr-ceo7)", "CMake & GCC ARM Embedded", "GDB & OpenOCD", "Linux (Bash & Shell Scripting)", "Docker Containers"]
    }
  ];

  return (
    <section id="philosophy" className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0d0f11] py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 dark:border-neutral-800 pb-6 mb-12 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold block mb-1">
              SECTION 05 // TECHNICAL MANIFESTO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 tracking-tight font-normal">
              Systems Engineering Discipline
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-md">
            The technical invariants and architectural philosophies governing every line of code deployed across hardware and cloud.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((p) => (
            <div
              key={p.num}
              className="border border-neutral-300 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40 p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                <span className="text-xs font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold">
                  RULE // {p.num}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase">
                  VERIFIED RUNTIME PRACTICE
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-neutral-950 dark:text-neutral-50 font-normal">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Competencies Matrix */}
        <div className="border border-neutral-300 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 p-6 sm:p-8">
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-6">
            <h3 className="font-serif text-2xl text-neutral-950 dark:text-neutral-50 font-normal">
              Verified Technical Competencies
            </h3>
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1">
              Languages, hardware protocols, runtime environments, and delivery pipelines tested in production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillMatrix.map((col) => (
              <div key={col.domain} className="space-y-3">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold border-b border-neutral-200 dark:border-neutral-800 pb-1">
                  {col.domain}
                </div>
                <ul className="space-y-1.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-px bg-neutral-400 dark:bg-neutral-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
