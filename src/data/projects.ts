export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "fintech" | "ai" | "web" | "hardware";
  categoryLabel: string;
  description: string;
  architectureDetails: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFlagship?: boolean;
  deploymentPlatform: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    id: "pochipay-console",
    title: "PochiPay Console",
    subtitle: "Automated Mobile Money Processing & Client Failover Daemon",
    category: "fintech",
    categoryLabel: "Fintech & Core Rails",
    description:
      "A high-reliability transaction processing console and background daemon built for automated M-Pesa payment verification and reconciliation. Engineered with client-side event queues, local cryptographic validation, and persistent failover buffers to survive network degradation.",
    architectureDetails: [
      "Client failover protocol with local SQLite buffering for offline transaction queuing",
      "Automated SMS/M-Pesa notification parser operating via an Android accessibility daemon",
      "Secure webhook dispatcher with exponential backoff and replay attack prevention",
      "Clean real-time telemetry console for transaction reconciliation and audit trails"
    ],
    techStack: ["Kotlin", "Python Async", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://pochipay-console.vercel.app",
    githubUrl: "https://github.com/mr-ceo7/pochi-pay",
    isFlagship: true,
    deploymentPlatform: "Vercel CLI + Android Daemon",
    year: "2025 – 2026"
  },
  {
    id: "galvaniy-labs",
    title: "Galvaniy Labs & AI API Store",
    subtitle: "Developer API Gateway, Usage Accounting & Credential Portal",
    category: "ai",
    categoryLabel: "AI & Developer Platforms",
    description:
      "An intelligent developer platform providing unified access to specialized AI model endpoints. Features programmable token budgeting, automated invoice and receipt rendering with jsPDF and QR verification, and granular API key permission controls.",
    architectureDetails: [
      "Interactive API playground with live request/response schema validation",
      "Dynamic client-side PDF credential and invoice generator using jsPDF & QRCode",
      "Real-time token utilization tracking and rate-limit mitigation policies",
      "Modular routing architecture designed for multi-tenant developer teams"
    ],
    techStack: ["React 19", "TypeScript", "Vite", "OpenAPI", "Tailwind CSS", "Vercel"],
    liveUrl: "https://galvaniy-labs.vercel.app",
    githubUrl: "https://github.com/mr-ceo7/galvaniy-ai-api-store",
    isFlagship: true,
    deploymentPlatform: "Vercel CLI",
    year: "2026"
  },
  {
    id: "rfid-attendance-system",
    title: "RFID Student Attendance System",
    subtitle: "Dual-Core RP2040 Microcontroller & ESP32 Telemetry Station",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "An integrated edge verification terminal designed for institutional attendance records. Features hardware interrupt-driven RC522 card scanning on a Raspberry Pi Pico W, synchronized over SPI and UART to an ESP32 telemetry server with an interactive web dashboard.",
    architectureDetails: [
      "Dual-core firmware architecture on RP2040 separating RFID polling from wireless telemetry",
      "Hardware debouncing and SPI bus timing tuned for rapid sub-50ms badge reads",
      "Local display rendering on OLED/LED matrix with animated status transitions",
      "Direct HTTP/REST sync to institutional server with offline memory caching"
    ],
    techStack: ["Raspberry Pi Pico W", "C/C++", "Arduino Core", "ESP32", "FreeRTOS", "SPI/I2C"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: true,
    deploymentPlatform: "Bare Metal Firmware + Edge Webhook",
    year: "2026"
  },
  {
    id: "trojancrypto",
    title: "TrojanCrypto Forensic Recovery",
    subtitle: "Cryptographic Asset Intake & On-Chain Audit Pipeline",
    category: "fintech",
    categoryLabel: "Fintech & Core Rails",
    description:
      "A high-trust intake terminal and investigation platform for tracing compromised cryptocurrency transactions. Collects deterministic victim evidence, validates EVM transaction hashes, and formats structured forensic dossiers.",
    architectureDetails: [
      "Deterministic transaction hash validation against multiple block explorers",
      "Multi-stage intake wizard with client-side cryptographic payload sanitization",
      "Python REST backend paired with React TypeScript frontend for real-time case triage",
      "Strict data isolation and encrypted client evidence attachments"
    ],
    techStack: ["React", "TypeScript", "Python REST", "Web3 EVM APIs", "Tailwind CSS", "Vercel"],
    liveUrl: "https://trojancrypto.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    deploymentPlatform: "Vercel CLI",
    year: "2025"
  },
  {
    id: "sharpboyz-v3",
    title: "Sharpboyz Production Platform",
    subtitle: "Modern React 19 Web Architecture & Automated SEO Pipeline",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A high-traffic web platform built with React 19, TypeScript, and Tailwind CSS v4. Features automated build-time static SEO page generation, Python backend integration test harnesses, and sub-second Largest Contentful Paint.",
    architectureDetails: [
      "Custom static site generation scripts written in Node.js for programmatic landing pages",
      "Backend verification suite utilizing Python unittest for contract testing",
      "Performance-tuned bundle splitting delivering 100% Core Web Vitals",
      "Deep integration with Vercel Web Analytics for performance telemetry"
    ],
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Python Unittest", "Vercel"],
    liveUrl: "https://sharpboyz-v3.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    deploymentPlatform: "Vercel CLI",
    year: "2026"
  },
  {
    id: "tambuatips",
    title: "Tambua Tips & BetterTips",
    subtitle: "Sports Predictive Modeling & Fixture Probability Engine",
    category: "ai",
    categoryLabel: "AI & Developer Platforms",
    description:
      "A high-volume statistical analysis application that evaluates historical football fixture datasets to compute outcome probabilities, form coefficients, and expected value distributions.",
    architectureDetails: [
      "Statistical algorithms calculating weighted historical team performance indices",
      "Google GenAI integration for dynamic qualitative game previews and summaries",
      "Responsive interactive fixture tables with custom client-side search and sorting",
      "Optimized static build output with rapid client-side hydration"
    ],
    techStack: ["React", "TypeScript", "Google GenAI SDK", "Tailwind CSS", "Vercel"],
    liveUrl: "https://tambua-tips-preview.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    deploymentPlatform: "Vercel CLI",
    year: "2026"
  },
  {
    id: "royal-mint",
    title: "Royal Mint (Exam Timetable Portal)",
    subtitle: "University Academic Schedule & Examination Distribution Engine",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A high-concurrency schedule distribution system serving university students. Parses complex faculty timetable spreadsheets into structured, instant searchable mobile schedules.",
    architectureDetails: [
      "Client-side schedule search filtering across faculty, course codes, and lecture venues",
      "Offline-first PWA caching for access in areas with weak campus connectivity",
      "Custom domain configuration with automatic SSL termination"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI"],
    liveUrl: "https://www.royalmint.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI + Custom Domain",
    year: "2025"
  },
  {
    id: "student-affairs",
    title: "Student Affairs Information Portal",
    subtitle: "Institutional Communications & Resource Registry",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A central hub for campus announcements, student welfare resources, and administrative notifications, designed for instant mobile loading.",
    architectureDetails: [
      "Lightweight semantic layout with zero layout shifts on mobile",
      "Structured categorization for bursary, housing, and academic notices",
      "Edge-cached assets delivering sub-200ms initial response times"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI"],
    liveUrl: "https://studentaffairs-six.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025"
  },
  {
    id: "chama-yetu",
    title: "Chama Yetu Pamoja",
    subtitle: "Community Savings & Cooperative Contribution Ledger",
    category: "fintech",
    categoryLabel: "Fintech & Core Rails",
    description:
      "A transparent digital record-keeping system for community savings groups (chamas), providing share tracking, monthly dividend calculations, and member contribution histories.",
    architectureDetails: [
      "Double-entry bookkeeping validation on client and server transactions",
      "Automated summary statements ready for export and distribution",
      "Clear mobile view designed for non-technical users"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI"],
    liveUrl: "https://chama-yetu-pamoja.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025"
  },
  {
    id: "smartify-notes",
    title: "Smartify Notes",
    subtitle: "Markdown Knowledge Graph & Contextual Study Tool",
    category: "ai",
    categoryLabel: "AI & Developer Platforms",
    description:
      "A distraction-free technical note-taking environment featuring instant markdown preview, tag-based knowledge indexing, and local-storage revision history.",
    architectureDetails: [
      "Real-time markdown AST parsing with code syntax highlighting",
      "Encrypted browser storage persistence with export/import capabilities",
      "Clean editorial typography optimized for long reading sessions"
    ],
    techStack: ["React", "TypeScript", "Markdown AST", "Tailwind CSS", "Vercel"],
    liveUrl: "https://smartify-notes.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025"
  },
  {
    id: "edu-metric-ai",
    title: "Edu Metric AI",
    subtitle: "Academic Performance Telemetry & Diagnostic Analytics",
    category: "ai",
    categoryLabel: "AI & Developer Platforms",
    description:
      "An analytical dashboard that aggregates institutional student test scores, identifying subject difficulty bottlenecks and providing tailored learning interventions.",
    architectureDetails: [
      "Statistical quartile computation and visual bell-curve distribution plots",
      "Automated performance report card generator with actionable feedback metrics",
      "Strict data sanitization compliant with student privacy practices"
    ],
    techStack: ["React", "TypeScript", "Chart Engines", "Tailwind CSS", "Vercel"],
    liveUrl: "https://edu-metric-ai.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025"
  },
  {
    id: "nubianfit",
    title: "NubianFit Wellness Engine",
    subtitle: "Caloric Tracking & Progressive Overload Training Portal",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A client-focused fitness tracking application calculating basal metabolic rates, macro splits, and progressive training log progressions.",
    architectureDetails: [
      "Custom macronutrient calculator with regional meal preset entries",
      "Interactive workout log maintaining exercise set histories in IndexedDB",
      "Responsive touch-optimized workout timer and counter"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI"],
    liveUrl: "https://nubianfit.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025"
  },
  {
    id: "global-orators",
    title: "Global Orators Project",
    subtitle: "Public Speaking & Youth Leadership Organization Platform",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "The official web presence for an international public speaking initiative. Showcases speech archives, workshop registrations, and speaker biographies.",
    architectureDetails: [
      "Custom domain deployment with edge routing and DNS hardening",
      "Optimized media delivery for high-resolution event photography",
      "Accessible navigation with full ARIA keyboard compliance"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI + Custom DNS"],
    liveUrl: "https://globaloratorsproject.com",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI + Custom Domain",
    year: "2026"
  },
  {
    id: "jeffytab",
    title: "JeffyTab Browser Workspace",
    subtitle: "High-Focus Minimalist New-Tab Productivity Dashboard",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A zero-latency new tab replacement featuring world clocks, custom terminal quick-launch shortcuts, and ephemeral scratchpad notes.",
    architectureDetails: [
      "Sub-50ms cold startup time with zero third-party tracking scripts",
      "Customizable keyboard shortcuts for rapid navigation",
      "Local state synchronized with browser storage"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI"],
    liveUrl: "https://jeffytab.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2026"
  },
  {
    id: "ksef-display-board",
    title: "KSEF Display Board Generator",
    subtitle: "Science Congress Project Documentation & Visual Board Builder",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A specialized layout utility built for Kenya Science and Engineering Fair participants to compose, scale, and print regulation project display boards.",
    architectureDetails: [
      "Precise aspect-ratio enforcement conforming to competition guidelines",
      "Multi-panel section orchestrator for abstract, hypothesis, and methodology",
      "High-DPI vector export engine for large-format physical plotters"
    ],
    techStack: ["React", "TypeScript", "Canvas / Vector Print", "Tailwind CSS", "Vercel"],
    liveUrl: "https://ksef-display-board-generator.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025"
  },
  {
    id: "report-labs",
    title: "Report Labs Documentation Portal",
    subtitle: "Technical Laboratory Writeups & Engineering Spec Publisher",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "An automated technical publishing suite organizing hardware experiments, schematics, and C/C++ firmware documentation into structured chapters.",
    architectureDetails: [
      "Hierarchical chapter navigation with active scroll spy",
      "Embedded PDF viewer and source code block inspectors",
      "Responsive multi-device reading interface"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI"],
    liveUrl: "https://report-labs.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025"
  }
];
