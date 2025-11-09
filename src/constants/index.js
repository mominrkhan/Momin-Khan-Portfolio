export const myProjects = [
  {
    id: 1,
    title: "DentWise - Voice AI Dental Platform",
    description:
      "Enables a 24/7 voice-AI receptionist that answers questions and books appointments in real time, paired with a clean web app for patients and admins.",
    subDescription: [
      "Built with Next.js 15 (App Router, RSC, Server Actions) on React 19 and TypeScript 5, bundled by Turbopack.",
      "Data layer uses Prisma 6 with PostgreSQL (migrations, pooling, indexing), with authentication, RBAC, and sessions via Clerk plus Zod-validated routes.",
      "UI is Tailwind CSS 4 with Radix UI and shadcn/ui; data + forms use TanStack Query v5 and React Hook Form.",
      "Voice, booking, and comms are powered by Vapi (STT/TTS over WebSockets with event hooks and history), a 3-step availability-aware scheduler, and transactional emails via Resend + React Email.",
    ],
    href: "https://dentwiseai.vercel.app/",
    image: "/assets/projects/dentwise.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.png",
      },
      {
        id: 2,
        name: "PostgreSQL",
        path: "/assets/logos/PostgreSQL.png",
      },
      {
        id: 3,
        name: "Prisma",
        path: "/assets/logos/prisma.svg",
      },
      {
        id: 4,
        name: "Vapi",
        path: "/assets/logos/Vapi.png",
      },
    ],
  },
  {
    id: 2,
    title: "Signalist - Stock Market Platform",
    description:
      "Empowers investors to track live prices, manage watchlists, set price alerts, and read AI-generated market summaries—all in a clean, responsive dashboard.",
    subDescription: [
      "Built a full-stack app with Next.js (App Router) + TypeScript, integrating Finnhub data and TradingView charts.",
      "Implemented secure authentication and data storage using Better Auth, MongoDB, and Mongoose.",
      "Automated price-alert checks and daily email digests with event-driven workflows in Inngest.",
      "Designed a modern dark UI with Tailwind CSS, shadcn/ui, and Radix UI, adding polished animations. Added email notifications (Nodemailer), caching, and fast search to improve reliability and UX.",
    ],
    href: "https://signalistrading.vercel.app/sign-in",
    image: "/assets/projects/signalist.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.png",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/Typescript.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.png",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/mominrkhan",
    icon: "/assets/socials/github.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mominkhann/",
    icon: "/assets/socials/linkedIn.svg",
  }
];

export const experiences = [
  {
    title: "Software Engineer Intern - Threat Intelligence",
    job: "Apollo Information Systems",
    date: "Jun 2025 - Present",
    contents: [
      "Achieved 99% pipeline reliability across 250 scheduled runs/month, processing 12,000 records/day by shipping Python web-scraping and ingestion services that normalize JSON and STIX 2.1 and index into Elasticsearch, with typed validation and unit/integration tests, deployed via Docker and GitHub Actions CI/CD",
      "Reduced analyst triage time by 35% by refactoring the parsing pipeline into modular components and adding Attacker Intent and Application/Platform tags from subdomain and path rules (SAP SuccessFactors, VPN gateway, MFA), exporting analyst-ready CSV",
      "Expanded monitoring to 200+ services and cut 95th-percentile runtime from 12s to 7s by building a rate-limited status-page collector on AWS Lambda with centralized logging and alerts and least-privilege IAM, and delivered 500 corrected vendor mappings plus a search-API collection flow capturing query, timestamp, title, snippet, and URL with relevance filters",
    ],
  },
  {
    title: "Biomedical Informatics Bootcamp",
    job: "Stony Brook University",
    date: "Sep 2025 - Oct 2025",
    contents: [
      "Developed Python-based data processing pipelines for biomedical datasets using NumPy, Pandas, and Matplotlib, analyzing text, EHRs, medical images, and gene sequences with a focus on efficient computation and clear visualization",
      "Implemented machine learning and NLP techniques—including supervised and unsupervised learning, data visualization, and modern architectures such as transformers and LLMs—to support biomedical data analysis workflows",
      "Explored RNA-seq pipelines and applied Python programming fundamentals to build practical, code-driven workflows for bioinformatics research",
    ],
  },
  {
    title: "Data Analyst Extern",
    job: "Beats by Dre",
    date: "May 2025 - Aug 2025",
    contents: [
      "Analyzed 3,000+ consumer reviews using Python, Pandas, NumPy, and NLP models to extract sentiment, cluster key themes, and surface product-level insights",
      "Performed EDA on survey and behavioral datasets, identifying trend patterns, building consumer profiles, and mapping journeys with the AIDA framework to support data-driven recommendations",
      "Built visual dashboards and insight reports using Python and Google Sheets, delivering a capstone analysis combining sentiment modeling, EDA, and market research into clear, actionable findings for product and marketing teams",
    ],
  },
  {
    title: "Software Engineer Fellow",
    job: "Headstarter",
    date: "Jul 2024 - Sep 2024",
    contents: [
      "Completed industry training with Amazon, Bloomberg, and Capital One engineers, strengthening fundamentals in Agile development, Git, and clean software design patterns",
      "Built and deployed full-stack features using React.js, Firebase, and Flask, collaborating in scrum cycles to deliver production-quality web application components",
      "Led bi-weekly code reviews, improving code quality and maintainability across the cohort while reinforcing scalable architecture and engineering best practices",
    ],
  },
  {
    title: "Software & Technology Instructor",
    job: "Lavner Education",
    date: "Jun 2024 - Aug 2024",
    contents: [
      "Taught 15–20+ students per cohort, delivering 100+ Python projects covering OOP, data structures, algorithms, loops, and debugging, and led real-time code reviews to strengthen core engineering fundamentals",
      "Built interactive applications including Tic-Tac-Toe, Pig Dice, Adventure Games, and Snake (pygame), teaching modular design, state management, and problem-solving through production-style programming",
      "Provided weekly 1:1 technical coaching and optimized operations by repairing 80+ devices, reducing maintenance time by ~1 hour per device",
    ],
  },
];
