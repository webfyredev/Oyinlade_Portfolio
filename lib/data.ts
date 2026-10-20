export const siteConfig = {
  name: "Oyinlade Oyinloye",
  role: "Full-Stack Developer",
  tagline: "Frontend + Backend Engineering",
  email: "oyinbook@gmail.com",
  github: "https://github.com/webfyredev",
  linkedin: "www.linkedin.com/in/oyinlade-oyinloye-3159ba292",
  location: "Based in Nigeria",
  availability: "Open to Remote Opportunities",
  portraitImage: "/pic.jpg",
  contactImage: "/contact.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export const credibilityStats = [
  { value: "5+", label: "Projects shipped" },
  { value: "2", label: "Layers owned — UI & API" },
  { value: "5", label: "Domains: health, logistics, education, nonprofit, business" },
  { value: "100%", label: "Full-stack — frontend and backend" },
];

export const capabilities = [
  {
    number: "01",
    title: "Product Interfaces",
    description:
      "I turn requirements and designs into responsive, accessible interfaces that are structured around how users actually interact with a product.",
  },
  {
    number: "02",
    title: "Full-Stack Applications",
    description:
      "I build complete applications across the frontend and backend, connecting user experiences to APIs, business logic and databases.",
  },
  {
    number: "03",
    title: "API & Backend Systems",
    description:
      "I develop REST APIs with Django and Django REST Framework, handling application logic, authentication, data access and integrations.",
  },
  {
    number: "04",
    title: "Dashboards & Workflows",
    description:
      "I build dashboards that let users and administrators manage information, perform actions and monitor activity through structured workflows.",
  },
  {
    number: "05",
    title: "Authentication & User Roles",
    description:
      "I implement authentication and role-specific experiences that ensure users see and interact with the functionality relevant to them.",
  },
  {
    number: "06",
    title: "Data-Driven Applications",
    description:
      "I connect applications to backend services and databases to create experiences where users can create, retrieve, update and manage real data.",
  },
];

export type FeatureGroup = {
  heading: string;
  items: string[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  featureGroups: FeatureGroup[];
  technicalDecisions: string[];
  challenges: string[];
  result: string;
  technology: string[];
  liveUrl?: string;
  githubUrl?: string;
  // e.g. "/projects/lifecare-cover.jpg" — put the file at /public/projects/lifecare-cover.jpg
  image?: string;
};

export const featuredProjects: CaseStudy[] = [
  {
    slug: "lifecare",
    name: "LifeCare",
    category: "Healthcare Management Platform",
    summary:
      "A healthcare platform with separate patient and doctor experiences, built to keep clinical information organized without collapsing two very different workflows into one interface.",
    problem:
      "Healthcare platforms need to serve people with very different responsibilities — patients and doctors — while keeping medical information organized, accurate and accessible to the right person at the right time.",
    approach:
      "I started by separating the two roles at the data and routing level, not just visually. Patients and doctors authenticate into the same platform but land in dashboards built around what each role actually needs to do day to day.",
    solution:
      "A full-stack healthcare platform with dedicated patient and doctor experiences. Each role interacts with the system according to their responsibilities, backed by a shared API and database rather than two disconnected apps.",
    featureGroups: [
      {
        heading: "Patient Dashboard",
        items: [
          "Patient overview",
          "Appointments",
          "Medical information",
          "Prescriptions",
          "Notifications",
          "Profile management",
        ],
      },
      {
        heading: "Doctor Dashboard",
        items: [
          "Doctor overview",
          "Patient management",
          "Appointments",
          "Prescription workflows",
          "Patient information",
          "Notifications",
          "Profile management",
        ],
      },
    ],
    technicalDecisions: [
      "Role-based authentication that determines which dashboard and API permissions a user receives after login.",
      "A shared PostgreSQL schema for patients, doctors, appointments and prescriptions, accessed through a single Django REST Framework API.",
      "Frontend built as reusable components so the same dashboard shell renders different content depending on role.",
    ],
    challenges: [
      "Keeping one codebase serving two roles without the interface becoming a maze of conditionals.",
      "Structuring the API so patient-facing and doctor-facing endpoints enforce the correct permissions consistently.",
    ],
    result:
      "A working full-stack platform demonstrating role-based dashboards, authentication and a REST API backing two distinct, database-driven workflows.",
    technology: ["React", "Django", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://life-care-websites.vercel.app/",
    githubUrl: "https://github.com/webfyredev/LifeCare_Websites",
    // e.g. "/projects/lifecare-cover.jpg"
    image: "",
  },
  {
    slug: "swiftease",
    name: "SwiftEase",
    category: "Logistics Management Platform",
    summary:
      "A logistics platform where the dashboard, not the landing page, is the product — built around booking, tracking and managing shipments end to end.",
    problem:
      "Shipping customers need more than a landing page. They need a centralized way to manage shipments, monitor delivery activity, access support and keep track of their logistics information.",
    approach:
      "I treated the dashboard as the core product from the start: every shipment action — booking, tracking, scheduling — needed to read from and write to the same backend state, with the UI reflecting real shipment status rather than static content.",
    solution:
      "A logistics platform with a dedicated user dashboard that brings shipment management, tracking, scheduling, wallet activity, notifications and support into one experience.",
    featureGroups: [
      {
        heading: "User Dashboard",
        items: [
          "Book a shipment",
        "View shipment details",
        "Track shipment in real-time",
        "Schedule a pickup",
        "Wallet & top-up",
        "Pay for shipment (card, wallet, COD)",
        "Download shipment label (PDF)",
        "Support tickets",
        "Notifications (SMS, email, in-app)",
        "Shipment history & filters",
        "Rate & review delivery",
        "Profile & password management",
        ],
      },
      {
        heading: "Driver Dashboard",
        items: [
          "View assigned deliveries",
        "Mark shipment as picked up",
        "Mark shipment as out for delivery",
        "Complete delivery (proof of delivery)",
        "Upload delivery photo",
        "Capture receiver signature",
        "Toggle on-duty / off-duty status",
        "Live GPS location update",
        "View delivery history",
        "View vehicle & branch info",
        "Notifications for new assignments",
        "Profile management",
        ],
      },
      {
        heading: "Staff / Admin Dashboard",
        items: [
          "Overview KPIs (shipments, revenue, drivers)",
        "Create & manage shipments",
        "Assign drivers to shipments",
        "Add tracking events to shipments",
        "Manage customers & accounts",
        "Manage drivers & driver profiles",
        "Manage vehicles & fleet",
        "Manage branches / hubs",
        "Manage service types & pricing",
        "Manage pickup schedules",
        "Payments & revenue reports",
        "Wallet transactions overview",
        "Support ticket management & replies",
        "Notifications broadcast",
        "Analytics & charts",
        "Staff management (Admin only)",
        "Export reports (PDF / CSV)",
        ],
      },
    ],
    technicalDecisions: [
      "State management structured around shipment status so tracking, history and notifications stay in sync from one source of truth.",
      "REST API endpoints in Django REST Framework for shipment creation, tracking updates, wallet transactions and support tickets.",
      "Loading and error states handled explicitly across the dashboard so incomplete or failed requests never render as false success.",
    ],
    challenges: [
      "Coordinating several dependent workflows — booking, scheduling, tracking, wallet — inside a single dashboard without state drifting out of sync.",
      "Designing a data-driven UI that stays legible as the number of active shipments grows.",
    ],
    result:
      "A functional logistics dashboard demonstrating complex, multi-workflow state management backed by a Django REST API and PostgreSQL.",
    technology: ["React", "Next.js", "Django", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://swift-ease.vercel.app/",
    githubUrl: "https://github.com/webfyredev/SwiftEase",
    // e.g. "/projects/swiftease-cover.jpg"
    image: "",
  },
  {
    slug: "bidora",
    name: "Bidora",
    category: "Auction Marketplace Platform",
    summary:
      "A full-stack auction marketplace where users discover items, place competitive bids and create their own auctions — a Next.js frontend built on top of an existing Django REST Framework backend.",
    problem:
      "Auction platforms live or die on trust in the number on screen. Buyers need to always know the real current price and time remaining, and none of that works if the frontend and backend don't agree on a single source of truth for price and auction state.",
    approach:
      "I treated the Django REST Framework API as the source of truth throughout — building a typed API layer around the actual auction and bid models rather than assuming a data shape, and designing the bidding UI around what the backend could really validate instead of duplicating that logic on the client.",
    solution:
      "A full-stack marketplace frontend covering discovery, bidding, auction creation and a personal dashboard, with current price, auction status and bid history kept in sync with the backend through scheduled polling rather than pretending to have real-time infrastructure that didn't exist.",
    featureGroups: [
      {
        heading: "Marketplace",
        items: [
          "Auction discovery with search, filter and sort",
          "Auction detail page with live price and countdown",
          "Bidding with a confirmation step and backend-validated errors",
          "Bid history",
        ],
      },
      {
        heading: "Account Dashboard",
        items: [
          "Create auction flow",
          "My Auctions (edit / delete)",
          "My Bids",
          "Won auctions",
          "Profile",
          "JWT-based authentication with protected routes",
        ],
      },
    ],
    technicalDecisions: [
      "Centralized every API call through one typed client instead of scattering fetch() calls, so the whole frontend adapts to the real backend contract from a single place.",
      "Polled the auction detail page every 15 seconds while an auction is active instead of building fake real-time bidding, since the backend has no WebSocket layer.",
      "Kept client-side bid validation minimal — checking the bid is higher than the current price — and let the backend remain the actual authority, surfacing its real error messages instead of inventing rules.",
    ],
    challenges: [
      "Structuring a typed frontend around an API contract, with every assumption isolated in one place so it's fast to correct once wired to a live environment.",
      "Keeping the current price and bid history feel trustworthy without overselling update speed as real-time.",
    ],
    result:
      "A working full-stack marketplace demonstrating auction discovery, an end-to-end bidding flow, protected dashboard routes and a typed API layer built to integrate cleanly with a Django backend.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL"],
    liveUrl: "#", // add your deployed URL
    githubUrl: "#", // add your repo URL
    image: "/projects/bidora-cover.jpg",
  },
]

export type MiniProject = {
  name: string;
  category: string;
  description: string;
  technology: string[];
  liveUrl?: string;
  githubUrl?: string;
  // e.g. "/projects/hopebloom-thumb.jpg" — put the file at /public/projects/hopebloom-thumb.jpg
  image?: string;
};

export const moreWork: MiniProject[] = [
    {
    name: "Aurelium",
    category: "University / Education Platform",
    description:
      "A structured university platform that organizes academic programs, resources and campus content into a navigable digital experience.",
    technology: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://aurelium-university.vercel.app/",
    githubUrl: "https://github.com/webfyredev/Aurelium_University",
    image: "/projects/uni.jpg",
  },
  
  {
    name: "Structura",
    category: "Business / Product Site",
    description:
      "A product-style site focused on clear information hierarchy and a responsive, component-based layout.",
    technology: ["React", "Tailwind CSS"],
    liveUrl: "https://structural-construction.vercel.app/",
    githubUrl: "https://github.com/webfyredev/Structural_Construction",
    image: "/projects/structura.jpg",
  },
  {
    name: "Iron Core Fitness",
    category: "Business Platform",
    description:
      "A fitness business site built around clear service presentation and a straightforward booking-oriented layout.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://iron-core-fitness-two.vercel.app/",
    githubUrl: "https://github.com/webfyredev/IronCore_Fitness",
    image: "/projects/ironcore.png",
  },
  {
    name: "HopeBloom Africa",
    category: "Nonprofit Platform",
    description:
      "A nonprofit-focused site built to present programs and impact information clearly to visitors and potential supporters.",
    technology: ["React", "Tailwind CSS", "Django"],
    liveUrl: "https://hopebloomafrica.vercel.app/",
    githubUrl: "https://github.com/webfyredev/HopeBloom_Africa",
    image: "/projects/bloom.jpg",
  },
  {
    name: "Shyn Works",
    category: "Business Platform",
    description:
      "A business-facing site structured around clearly presenting services and guiding visitors toward contact.",
    technology: ["React", "Tailwind CSS"],
    liveUrl: "https://shyn-works.vercel.app/",
    githubUrl: "https://github.com/webfyredev/ShynWorks",
    image: "/projects/shynwork.jpg",
  },
  
];

export const skillCategories = [
  {
    heading: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    heading: "Backend",
    skills: ["Python", "Django", "Django REST Framework", "REST APIs"],
  },
  {
    heading: "Database",
    skills: ["PostgreSQL", "SQLite"],
  },
  {
    heading: "Engineering",
    skills: [
      "Authentication",
      "API Integration",
      "State Management",
      "Git",
      "GitHub",
      "Postman",
      "Deployment",
    ],
  },
];

export const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the user, requirement and actual problem before writing code.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Break the problem into components, workflows, data structures and API interactions.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the interface, backend logic and integrations needed to turn the idea into a working product.",
  },
  {
    number: "04",
    title: "Test",
    description: "Handle loading states, errors, edge cases, authentication, responsiveness and real user flows.",
  },
  {
    number: "05",
    title: "Refine",
    description: "Improve usability, performance, maintainability and overall product quality.",
  },
];

export const architectureLayers = [
  { label: "User", detail: "Interacts with the interface" },
  { label: "Next.js / React", detail: "Renders UI, manages client state" },
  { label: "REST API", detail: "Defines contracts between client and server" },
  { label: "Django / DRF", detail: "Handles logic, auth, validation" },
  { label: "PostgreSQL", detail: "Persists application data" },
];

export const journey = [
  {
    year: "2023",
    title: "Foundations",
    description: "Learned the fundamentals of web development and began building interfaces.",
  },
  {
    year: "2024",
    title: "Frontend Engineering",
    description: "Moved into React and started building interactive, responsive applications.",
  },
  {
    year: "2025",
    title: "Backend Engineering",
    description: "Expanded into Django, REST APIs, authentication and databases.",
  },
  {
    year: "2026",
    title: "Full-Stack Product Development",
    description: "Combined frontend and backend engineering to build complete, deployable digital products.",
  },
];
