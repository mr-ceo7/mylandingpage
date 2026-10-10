// Content for the mentorship, principles and skills sections (moved out of the old components)

export interface StoryPhoto { src: string; caption: string; tag: string; alt: string }

export const MENTORSHIP_PHOTOS: StoryPhoto[] = [] = [
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

export const PRINCIPLES = [
    {
      num: "01",
      title: "Failover by Default in Transactional Systems",
      description:
        "Networks in the field are fundamentally erratic. Whether handling asynchronous payment webhooks or microsecond telemetry streams, systems must never presume remote availability. Distributed architectures are engineered with local failover buffers and idempotency keys on the server so that dropped packets simply trigger deterministic retries without corrupting data or state."
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
        "From deterministic cryptographic validation across distributed community ledgers to MIFARE 1K Sector authentication in RFID card readers, identity and record data must be verified mathematically rather than assumed via trusting endpoints."
    }
  ];

export const SKILLS = [
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
