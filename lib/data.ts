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
  { value: "7", label: "Websites built across different industries" },
  { value: "1", label: "End-to-end full-stack platform: LifeCare" },
  { value: "React + Django", label: "Core frontend and backend stack" },
  { value: "2023-2026", label: "Web development journey" },
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
  githubBackendUrl? : string,
  video?: string;
};

export const featuredProjects: CaseStudy[] = [
  {
    slug: "lifecare",
    name: "LifeCare",
    category: "Healthcare Management Platform",
    summary:
      "A full-stack healthcare platform featuring dedicated workflows for patients, doctors, and system administrators, built to manage clinical data and user roles without collapsing three distinct environments into one interface.",
    problem:
      "Healthcare platforms need to serve users with very different responsibilities  patients seeking care, doctors managing clinical schedules, and admins overseeing platform operations  while keeping medical information organized, secure, and accessible to the right person.",
    approach:
      "I built a role-based architecture by separating permissions at both the API and routing levels. Rather than three disconnected apps, patients, doctors, and admins authenticate into a unified backend but land in tailored dashboards designed around their specific daily responsibilities.",
    solution:
      "A production-ready healthcare web application backed by a shared PostgreSQL database and Django REST Framework API. It provides a patient portal for medical history and bookings, a doctor portal for patient management, and an admin dashboard for complete system and user oversight.",
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
      {
        heading: "Admin Dashboard",
        items: [
          "Manage users (patients, doctors, admins)",
          "Manage appointments",
          "Manage prescriptions",
          "Manage notifications",
          "Manage Medical information",
        ],
      }
    ],
    technicalDecisions: [
      "Role-based authentication that dynamically determines dashboard routing and API permissions after login.",
      "A shared PostgreSQL schema for patients, doctors, admins, appointments, and prescriptions, accessed through a single Django REST Framework API.",
      "Frontend component architecture designed so shared layout shells render role-specific views dynamically.",
    ],
    challenges: [
      "Maintaining a single codebase serving three distinct roles without the frontend and routing becoming weighed down by conditional logic.",
      "Structuring API endpoints to consistently enforce strict permissions across patient-facing, doctor-facing, and admin-facing requests.",
    ],
    result:
      "A fully deployed production platform demonstrating multi-role authentication, tailored dashboards, and a robust REST API backing three distinct, database-driven workflows.",
    technology: ["React", "Django", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://life-care-websites.vercel.app/",
    githubUrl: "https://github.com/webfyredev/LifeCare_Websites",
    githubBackendUrl : "https://github.com/webfyredev/Lifecare_Backend",
    video: "/projects/lifecare_vid.mp4"
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
  {
    name: "SwiftEase",
    category: "Logistics Platforms",
    description:
      "A logistics platform designed to simplify shipping and delivery management through a responsive interface for handling shipments, tracking deliveries, and accessing essential logistics services.",
    technology: ["React", "Tailwind CSS"],
    liveUrl: "https://swift-ease.vercel.app/",
    githubUrl: "https://github.com/webfyredev/SwiftEase",
    image: "/projects/ease.jpg",
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
    title: "Web Development Foundations",
    description:
      "Started learning the fundamentals of web development and building my foundation in creating websites.",
  },
  {
    year: "2024",
    title: "Web Development & Early Django Projects",
    description:
      "Built websites with HTML and CSS and explored Django while developing an early school portal project.",
  },
  {
    year: "2025",
    title: "Frontend Development with React",
    description:
      "Focused on React and building interactive web applications, while experimenting with Django to introduce backend functionality into selected projects.",
  },
  {
    year: "2026",
    title: "Full-Stack Development",
    description:
      "Deepened my backend engineering skills with Django, REST APIs, authentication, and databases, bringing frontend and backend development together through projects like LifeCare.",
  },
];
