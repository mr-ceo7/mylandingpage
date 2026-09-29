export interface CarouselSlide {
  src: string;
  caption: string;
  alt: string;
  tag?: string;
}

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
  screenshot: string;
  carouselSlides?: CarouselSlide[];
}

export const PROJECTS: Project[] = [
  {
    id: "galvaniy-labs",
    title: "Galvaniy Labs & AI API Store",
    subtitle: "Virtual Physics Laboratory, Simulator Workbench & Developer Portal",
    category: "ai",
    categoryLabel: "AI & Developer Platforms",
    description:
      "An intelligent scientific experimentation workspace and developer platform. Features an interactive Virtual Physics Laboratory simulator, automated report analysis with AI assistants, structured laboratory manuals, and a developer API store for programmatic endpoints.",
    architectureDetails: [
      "Virtual physics laboratory simulator with interactive circuit and instrument panels",
      "AI laboratory assistant (Dr. Vance) providing real-time experimental guidance",
      "Dynamic client-side PDF credential and invoice generator using jsPDF & QRCode",
      "Multi-tenant student and administrator role isolation with IndexedDB manual storage"
    ],
    techStack: ["React 19", "TypeScript", "Vite", "OpenAPI", "IndexedDB", "Tailwind CSS", "Vercel"],
    liveUrl: "https://galvaniy-labs.vercel.app",
    githubUrl: "https://github.com/mr-ceo7/galvaniy-ai-api-store",
    isFlagship: true,
    deploymentPlatform: "Vercel CLI",
    year: "2026",
    screenshot: "/screenshots/galvaniy-dashboard.png",
    carouselSlides: [
      {
        src: "/screenshots/galvaniy-dashboard.png",
        caption: "Main laboratory experiments dashboard with report generator and active modules.",
        alt: "Galvaniy Labs Experiment Dashboard",
        tag: "LAB DASHBOARD"
      },
      {
        src: "/screenshots/galvaniy-virtuallab.png",
        caption: "Virtual Physics Laboratory simulator workbench featuring live circuits and interactive apparatus.",
        alt: "Virtual Physics Lab Workbench",
        tag: "VIRTUAL LAB SIMULATOR"
      },
      {
        src: "/screenshots/galvaniy-api-store.png",
        caption: "Galvaniy API Store developer marketplace for model endpoints and API keys.",
        alt: "Developer API Store",
        tag: "DEVELOPER STORE"
      },
      {
        src: "/screenshots/galvaniy-labs.png",
        caption: "Secure student authentication portal and Google OAuth gateway.",
        alt: "Authentication Gateway",
        tag: "AUTH PORTAL"
      }
    ]
  },
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
    year: "2025 – 2026",
    screenshot: "/screenshots/pochipay-console.png",
    carouselSlides: [
      {
        src: "/screenshots/pochipay-console.png",
        caption: "Live production web telemetry & reconciliation console deployed on Vercel Edge.",
        alt: "PochiPay Console web dashboard",
        tag: "WEB CONSOLE"
      },
      {
        src: "/screenshots/pochi-mobile/sc2.jpeg",
        caption: "Android accessibility daemon monitoring incoming M-Pesa push notifications.",
        alt: "Android accessibility daemon listener",
        tag: "MOBILE DAEMON"
      },
      {
        src: "/screenshots/pochi-mobile/sc7.jpeg",
        caption: "Local SQLite transaction queue and network failover buffer for offline resiliency.",
        alt: "Transaction failover queue",
        tag: "FAILOVER QUEUE"
      },
      {
        src: "/screenshots/pochi-mobile/sc1.jpeg",
        caption: "Automated payment detection and SMS receipt cryptographic parsing.",
        alt: "Receipt parsing",
        tag: "RECEIPT PARSER"
      }
    ]
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
    year: "2026",
    screenshot: "/screenshots/sharpboyz-v3.png",
    carouselSlides: [
      {
        src: "/screenshots/sharpboyz-v3.png",
        caption: "Main hero interface and responsive navigation running on React 19.",
        alt: "Sharpboyz v3 Hero Interface",
        tag: "DESKTOP HERO"
      },
      {
        src: "/screenshots/sharpboyz-full.png",
        caption: "Full page layout showing product architecture, feature grid, and dynamic styling.",
        alt: "Sharpboyz full page view",
        tag: "PRODUCT CATALOG"
      },
      {
        src: "/screenshots/sharpboyz-mobile.png",
        caption: "Mobile-optimized responsive viewport with touch navigation and sub-second paint.",
        alt: "Sharpboyz mobile view",
        tag: "MOBILE VIEWPORT"
      }
    ]
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
    year: "2026",
    screenshot: "/projects/rfid/IMG-20260710-WA0009.jpg",
    carouselSlides: [
      {
        src: "/projects/rfid/IMG-20260710-WA0009.jpg",
        caption: "Integrated RFID attendance verification prototype in bench testing enclosure.",
        alt: "RFID attendance hardware assembly",
        tag: "HARDWARE PROTOTYPE"
      },
      {
        src: "/projects/rfid/IMG-20260705-WA0012.jpg",
        caption: "LED matrix display and core microcontroller bus communication validation.",
        alt: "Display and electronics testing",
        tag: "CIRCUIT BENCH TEST"
      },
      {
        src: "/projects/rfid/IMG-20260709-WA0024.jpg",
        caption: "RC522 SPI wiring, logic level translation, and breadboard circuit debugging.",
        alt: "RC522 reader and controller wiring",
        tag: "SPI WIRING"
      },
      {
        src: "/projects/rfid/IMG-20260709-WA0050.jpg",
        caption: "Capstone project presentation and live hardware demonstration at Gearbox Academy.",
        alt: "Project presentation at Gearbox Academy",
        tag: "FIELD PRESENTATION"
      }
    ]
  },
  {
    id: "tambuatips",
    title: "Tambua Tips & BetterTips",
    subtitle: "Sports Predictive Modeling & Fixture Probability Engine",
    category: "ai",
    categoryLabel: "AI & Developer Platforms",
    description:
      "A high-volume statistical analysis application that evaluates historical fixture datasets to compute outcome probabilities, form coefficients, and expected value distributions.",
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
    year: "2026",
    screenshot: "/screenshots/tambuatips.png",
    carouselSlides: [
      {
        src: "/screenshots/tambuatips.png",
        caption: "Tambua Tips desktop dashboard with live fixture probabilities and form ratings.",
        alt: "Tambua Tips platform",
        tag: "DESKTOP ANALYTICS"
      },
      {
        src: "/screenshots/tambuatips-mobile.png",
        caption: "Mobile view of fixture outcomes and live match status tables.",
        alt: "Tambua Tips mobile view",
        tag: "MOBILE FIXTURES"
      },
      {
        src: "/screenshots/bettertips.png",
        caption: "BetterTips specialized prediction and risk distribution interface.",
        alt: "BetterTips platform",
        tag: "RISK MODELING"
      }
    ]
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
    year: "2025",
    screenshot: "/screenshots/trojancrypto.png",
    carouselSlides: [
      {
        src: "/screenshots/trojancrypto.png",
        caption: "TrojanCrypto intake terminal with cryptographic transaction verification.",
        alt: "TrojanCrypto live intake interface",
        tag: "INTAKE TERMINAL"
      },
      {
        src: "/screenshots/trojancrypto-mobile.png",
        caption: "Mobile responsive case submission wizard for rapid evidence triage.",
        alt: "TrojanCrypto mobile view",
        tag: "MOBILE WIZARD"
      }
    ]
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
    year: "2025",
    screenshot: "/screenshots/royal-mint.png",
    carouselSlides: [
      {
        src: "/screenshots/royal-mint.png",
        caption: "University timetable landing portal with live semester schedule search.",
        alt: "Royal Mint timetable portal",
        tag: "SCHEDULE SEARCH"
      },
      {
        src: "/screenshots/royalmint-timetable.png",
        caption: "Parsed course examination schedule grid with real-time venue lookups.",
        alt: "Timetable examination grid",
        tag: "TIMETABLE GRID"
      }
    ]
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
    year: "2025",
    screenshot: "/screenshots/smartify-notes.png",
    carouselSlides: [
      {
        src: "/screenshots/smartify-notes.png",
        caption: "Knowledge graph dashboard and interactive study notes list.",
        alt: "Smartify Notes list",
        tag: "NOTES DASHBOARD"
      },
      {
        src: "/screenshots/smartify-editor.png",
        caption: "Distraction-free markdown editor with dual live AST compiler view.",
        alt: "Markdown editor",
        tag: "MARKDOWN EDITOR"
      }
    ]
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
    year: "2025",
    screenshot: "/screenshots/student-affairs.png"
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
    year: "2025",
    screenshot: "/screenshots/chama-yetu.png"
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
    year: "2025",
    screenshot: "/screenshots/edu-metric-ai.png"
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
    year: "2025",
    screenshot: "/screenshots/nubianfit.png"
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
    year: "2026",
    screenshot: "/screenshots/global-orators.png"
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
    year: "2026",
    screenshot: "/screenshots/jeffytab.png"
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
    year: "2025",
    screenshot: "/screenshots/ksef-display-board.png"
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
    year: "2025",
    screenshot: "/screenshots/report-labs.png"
  },
  {
    id: "lui-the-lab-bot",
    title: "Lui The Lab Bot",
    subtitle: "Autonomous Fire-Fighting & Chemical Titration Mobile Platform",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "A dual-function autonomous mobile robot engineered for precision chemical titration dispensing and rapid fire-suppression response in laboratory environments. Features integrated optical flame arrays, H-bridge DC motor drivers, micro-servo liquid dispensers, and an onboard sensor telemetry bus.",
    architectureDetails: [
      "Precision servo-actuated titration dispenser for controlled reagent metering",
      "Multi-channel optical flame sensor array for rapid 360-degree fire localization",
      "H-bridge motor drive circuitry with differential steering algorithms",
      "Microcontroller interrupt routines coordinating liquid handling and obstacle avoidance"
    ],
    techStack: ["C/C++", "Arduino Core", "L298N H-Bridge", "Flame Array", "Servos", "DC Gearmotors"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "Embedded Microcontroller + Motor Hardware",
    year: "2026",
    screenshot: "/projects/lui-the-lab-bot/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/lui-the-lab-bot/slide_1.jpeg",
        caption: "Lui The Lab Bot fully assembled mobile chassis with sensor mast and liquid dispenser.",
        alt: "Lui The Lab Bot mobile chassis",
        tag: "MOBILE CHASSIS"
      },
      {
        src: "/projects/lui-the-lab-bot/slide_2.jpeg",
        caption: "Motor drive bridge and power distribution bus wiring during bench calibration.",
        alt: "Motor drive bridge and wiring",
        tag: "POWER BUS & DRIVER"
      },
      {
        src: "/projects/lui-the-lab-bot/slide_3.jpeg",
        caption: "Microcontroller control board and sensor interface pinouts.",
        alt: "Microcontroller control board",
        tag: "CONTROLLER BOARD"
      },
      {
        src: "/projects/lui-the-lab-bot/slide_4.jpeg",
        caption: "Chemical titration servo arm and nozzle assembly for precision dispensing.",
        alt: "Chemical titration arm",
        tag: "TITRATION MECHANISM"
      }
    ]
  },
  {
    id: "mini-lui-fire-bot",
    title: "Mini Lui Fire-Fighting Bot",
    subtitle: "Compact Autonomous Rapid-Response Fire Suppression Unit",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "A compact mobile robotic platform dedicated to autonomous flame detection and extinguisher delivery. Built with high-torque gearmotors, infrared flame detection arrays, a submersible DC water pump, and autonomous search-and-extinguish navigation logic.",
    architectureDetails: [
      "Multi-quadrant infrared flame sensor array for rapid triangulation of heat sources",
      "High-pressure DC submersible pump and directional extinguisher nozzle",
      "Compact chassis tuned for navigating narrow corridors and confined test spaces",
      "Autonomous state machine: Patrol, Triangulate, Approach, Extinguish, and Confirm"
    ],
    techStack: ["Embedded C", "Microcontroller", "IR Sensor Array", "Submersible Pump", "Differential Drive"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "Bare Metal Firmware + Actuators",
    year: "2026",
    screenshot: "/projects/mini-lui/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/mini-lui/slide_1.jpeg",
        caption: "Mini Lui autonomous fire-suppression rover with multi-channel flame sensor array and directional pump.",
        alt: "Mini Lui robot chassis",
        tag: "FIRE BOT CHASSIS"
      },
      {
        src: "/projects/mini-lui/slide_2.jpeg",
        caption: "Active flame test: optical detection and closed-loop motor orientation toward an open lighter flame.",
        alt: "Bench test flame detection with lighter",
        tag: "FLAME ACQUISITION"
      },
      {
        src: "/projects/mini-lui/slide_3.jpeg",
        caption: "Autonomous roving deployment with dual 8x8 LED matrix status telemetry eyes active.",
        alt: "Autonomous floor navigation",
        tag: "AUTONOMOUS ROVING"
      },
      {
        src: "/projects/mini-lui/slide_4.jpeg",
        caption: "Electronics deck showing microcontroller, motor shield, and sensor routing.",
        alt: "Electronics deck and wiring",
        tag: "ELECTRONICS DECK"
      }
    ]
  },
  {
    id: "iron-dome-radar",
    title: "Autonomous Threat Tracking & Radar Turret",
    subtitle: "RP2040 Pan-Tilt Ultrasonic & Optical Target Tracking System",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "An autonomous dual-axis tracking radar turret engineered on the Raspberry Pi Pico (RP2040). Combines ultrasonic distance ranging with multi-spectral optical detectors to acquire, track, and lock onto moving targets in real-time.",
    architectureDetails: [
      "Dual-axis pan-tilt servo mechanism with sub-degree angular positioning",
      "HC-SR04 ultrasonic transducer for real-time proximity and vector calculation",
      "Optical sensor array providing multi-quadrant line-of-sight tracking",
      "Visual and acoustic alert telemetry with real-time target lock confirmation"
    ],
    techStack: ["RP2040", "C/C++", "HC-SR04 Ultrasonic", "Servo Pan-Tilt", "Optical Sensors", "PWM Control"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "RP2040 Firmware + Pan-Tilt Gimbal",
    year: "2026",
    screenshot: "/projects/iron-dome-radar/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/iron-dome-radar/slide_1.jpeg",
        caption: "RP2040 breadboard controller bus and pan-tilt HC-SR04 ultrasonic sensor turret.",
        alt: "RP2040 controller and sensor turret",
        tag: "SENSOR TURRET"
      },
      {
        src: "/projects/iron-dome-radar/slide_2.jpeg",
        caption: "Dynamic object tracking: turret actively acquiring and following an approaching target.",
        alt: "Turret tracking moving target",
        tag: "TARGET TRACKING"
      },
      {
        src: "/projects/iron-dome-radar/slide_3.jpeg",
        caption: "Target acquisition state: telemetry LEDs indicating distance lock and azimuth alignment.",
        alt: "Target lock confirmation",
        tag: "TARGET LOCK"
      },
      {
        src: "/projects/iron-dome-radar/slide_4.jpeg",
        caption: "Servo pan-tilt gimbal mechanism executing sweep scan across the 180-degree sector.",
        alt: "Pan-tilt gimbal mechanism",
        tag: "SECTOR SWEEP"
      }
    ]
  },
  {
    id: "chroma-scan",
    title: "Galvaniy Chroma-Scan",
    subtitle: "Digital Spectrophotometer & Optical Analytical Colorimeter",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "An embedded analytical instrument built for rapid biochemical sample analysis and colorimetric testing. Features a light-isolated optical cuvette chamber, calibrated photodetector array, SSD1306 OLED interface, and an ESP8266 WiFi module for direct cloud lab telemetry.",
    architectureDetails: [
      "Light-isolated optical transmission chamber for standard laboratory cuvettes",
      "Calibrated optical photodetector with multi-wavelength absorbance calculation",
      "SSD1306 graphical OLED user interface with multi-level calibration menus",
      "ESP8266 wireless telemetry bridge streaming absorbance data to laboratory cloud databases"
    ],
    techStack: ["Embedded C++", "Arduino Nano", "ESP8266 WiFi", "SSD1306 OLED", "Optical Sensor", "I2C/SPI"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "Galvaniy Technologies Analytical Firmware",
    year: "2026",
    screenshot: "/projects/chroma-scan/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/chroma-scan/slide_1.jpeg",
        caption: "Chroma-Scan boot sequence on high-contrast OLED display by Galvaniy Technologies.",
        alt: "Chroma-Scan OLED boot screen",
        tag: "OLED INTERFACE"
      },
      {
        src: "/projects/chroma-scan/slide_2.jpeg",
        caption: "Measurement standby state with optical light chamber and calibrated sample cuvette.",
        alt: "Optical test chamber and cuvette",
        tag: "TEST CHAMBER"
      },
      {
        src: "/projects/chroma-scan/slide_3.jpeg",
        caption: "Analytical menu interface: preset wavelength values versus manual curve calibration.",
        alt: "Calibration menu on OLED",
        tag: "CALIBRATION MENU"
      },
      {
        src: "/projects/chroma-scan/slide_4.jpeg",
        caption: "Sensor processing breadboard: ESP8266 wireless telemetry bridge and analog conditioning circuit.",
        alt: "ESP8266 and processing breadboard",
        tag: "TELEMETRY BRIDGE"
      }
    ]
  },
  {
    id: "ai-solar-tracker",
    title: "Dual-Axis Closed-Loop Solar Tracker",
    subtitle: "Autonomous Azimuth & Elevation Light-Optimizing PV Controller",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "A closed-loop dual-axis solar tracking platform engineered to maximize photovoltaic energy capture. Employs four directional light-dependent resistor (LDR) quadrants separated by shadow collimators to calculate differential flux and drive twin servo gimbals.",
    architectureDetails: [
      "Closed-loop differential light vector tracking eliminating static astrological lookups",
      "Dual servo mechanical gimbal providing 180-degree azimuth and 90-degree elevation tracking",
      "Real-time 16x2 LCD telemetry streaming differential lux, panel angle, and tracking status",
      "Integrated sleep and dawn re-orientation state machines for energy conservation"
    ],
    techStack: ["Arduino Core", "C++", "Dual SG90 Servos", "LDR Quadrant Array", "16x2 I2C LCD", "Photovoltaic Panel"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "Arduino Firmware + Dual-Servo Gimbal",
    year: "2026",
    screenshot: "/projects/ai-solar-tracker/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/ai-solar-tracker/slide_1.jpeg",
        caption: "Dual-axis solar tracking assembly with quadrant collimators and PV panel.",
        alt: "Solar tracker assembly and PV panel",
        tag: "PV GIMBAL"
      },
      {
        src: "/projects/ai-solar-tracker/slide_2.jpeg",
        caption: "Tracking sweep: twin servo gimbals reorienting panel toward highest lux vector.",
        alt: "Servo gimbal reorientation sweep",
        tag: "ACTIVE TRACKING"
      },
      {
        src: "/projects/ai-solar-tracker/slide_3.jpeg",
        caption: "Telemetry station: 16x2 LCD display streaming instantaneous differential lux and angle data.",
        alt: "LCD telemetry display",
        tag: "LCD TELEMETRY"
      },
      {
        src: "/projects/ai-solar-tracker/slide_4.jpeg",
        caption: "Elevation actuator holding panel at optimal incident angle under changing lighting conditions.",
        alt: "Elevation actuator holding angle",
        tag: "OPTIMAL INCIDENCE"
      }
    ]
  },
  {
    id: "rfid-smart-attendance-station",
    title: "RFID Smart Student Attendance Terminal",
    subtitle: "MIFARE 1K Authentication & Dual-Core Wireless Gateway",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "A contactless student attendance terminal designed for university lecture halls. Integrates an MFRC522 RFID reader over high-speed SPI, an 8x8 LED matrix visual confirmation display, an audio annunciator, and an ESP-based cloud synchronization gateway.",
    architectureDetails: [
      "Contactless MIFARE Classic 1K card interrogation over 13.56 MHz SPI interface",
      "MAX7219 cascaded 8x8 LED dot-matrix visual confirmation displays",
      "Dual-core task separation: core 0 handles card interrupts, core 1 handles network queues",
      "Autonomous offline caching with automatic cloud sync when network reconnects"
    ],
    techStack: ["RP2040", "ESP32", "MFRC522 RFID", "MAX7219 Matrix", "SPI/UART", "C++"],
    liveUrl: "/final-project-rfid-attendance.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "RP2040 + ESP32 Hybrid Hardware",
    year: "2026",
    screenshot: "/projects/rfid-attendance/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/rfid-attendance/slide_1.jpeg",
        caption: "Full hardware layout: RC522 RFID scanner, MAX7219 8x8 LED matrices, buzzer, and controller.",
        alt: "Full RFID terminal hardware assembly",
        tag: "HARDWARE LAYOUT"
      },
      {
        src: "/projects/rfid-attendance/slide_2.jpeg",
        caption: "Card scan verification sequence and visual status display layout.",
        alt: "Card scan verification display",
        tag: "SCAN VERIFICATION"
      },
      {
        src: "/projects/rfid-attendance/slide_3.jpeg",
        caption: "SPI bus routing and multi-module interconnect cabling on test chassis.",
        alt: "SPI bus cabling and circuit wiring",
        tag: "CIRCUIT ROUTING"
      },
      {
        src: "/projects/rfid-attendance/slide_4.jpeg",
        caption: "Benchtop validation of rapid sequential card authentication.",
        alt: "Benchtop card authentication test",
        tag: "BENCH VALIDATION"
      }
    ]
  }
];
