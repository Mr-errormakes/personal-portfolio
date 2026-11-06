// All portfolio content lives here. Edit this file to update the site —
// the section components only render what is defined below.
//
// Entries marked `placeholder: true` render as muted "to be added" cards.
// Replace them with real, verifiable details (no invented results).

export const siteConfig = {
  name: "MOHAMED MUBASHIR",
  initials: "M",
  // Drop your photo in /public with this name (portrait, ~4:5 works best).
  photo: "profile.jpg",
  role: "Software Engineer | Cloud & DevOps Enthusiast",
  tagline: "Building intelligent systems.",
  description:
    "I'm a pre-final-year B.Tech Information Technology student passionate about building interactive software, automating CI/CD pipelines with AWS Infrastructure, and engineering practical solutions to real-world problems.",
  location: "Chennai, India",
  availability: "Open to Work & Opportunities",
  graduation: "IT Engineering · 2028",
  email: "mubashir14md@gmail.com",
  socials: {
    github: "https://github.com/Mr-errormakes",
    linkedin: "https://www.linkedin.com/in/mubashir-md",
  },
  // Static so the page can be fully prerendered; bump once a year.
  copyrightYear: 2026,
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export type FocusArea = {
  title: string;
  icon: "code" | "cloud" | "brain" | "puzzle";
};

export const overview = {
  summary:
    "I'm an Information Technology engineering student who enjoys turning complex ideas into useful software. From full-stack applications to AI-driven systems and automated cloud pipelines, I like understanding how things work — then building them myself.",
  focusAreas: [
    { title: "Full Stack Development", icon: "code" },
    { title: "Cloud & DevOps", icon: "cloud" },
    { title: "AI / ML Systems", icon: "brain" },
    { title: "Problem Solving & Algorithms", icon: "puzzle" },
  ] satisfies FocusArea[],
};

export type EducationEntry = {
  period: string;
  degree: string;
  institution: string;
  score?: string;
  highlights: string[];
  current?: boolean;
  placeholder?: boolean;
};

export const education: EducationEntry[] = [
  {
    period: "2024 — 2028",
    degree: "B.Tech Information Technology",
    institution: "St.Joseph's College Of Engineering", 
    score: "CGPA 8.7", 
    current: true,
    highlights: [
      "Pre-final year, focusing on Problem solving, cloud and DevOps.",
      "Building projects across digital twins, Landslide warning system and computer vision.",
    ],
  },
  {
    period: "2022 — 2024",
    degree: "Higher Secondary (Class XII)",
    institution: "Kendriya Vidyalaya DGQA", // TODO
    highlights: ["Computer Science - 88%."],
    placeholder: true,
  },
  {
    period: "2022",
    degree: "Secondary School (Class X)",
    institution: "Kendriya Vidyalaya DGQA", // TODO
    highlights: ["CBSE - 91%."],
    placeholder: true,
  },
];

export type SkillGroup = {
  label: string;
  // Self-assessed proficiency, 1–5. Adjust to taste.
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", level: 4 },
      { name: "Java", level: 3 },
      { name: "javascript", level: 2 },
      { name: "SQL", level: 4 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "HTML", level: 4 },
      { name: "React.js", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Node.js", level: 2 },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "FastAPI", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "Firebase", level: 2 },
      { name: "Machine Learning", level: 3 },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 3 },
      { name: "Terraform", level: 3 },
      { name: "Jenkins", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "Git", level: 4 },
      { name: "AWS", level: 3 },
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "MedScribe",
    category: "Sarvam AI · Ocean Engineering",
    description:
      "AI-Assisted Clinical Note Generation for doctors integrating dual speech to text engines.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Tesseract OCR",],
    featured: true,
  },
  {
    name: "VarunaX",
    category: "River - Flood Intelligence · AI/ML",
    description:
      "AI-powered offline first flood monitoring and water resource using SAR Imagery , AI/ML models.",
    tags: ["Flutter", "ML Models", "FastAPI","Hive","Cloudinary"],

  },
  {
    name: "Containerized deployment with CI/CD",
    category: "Automation . Containerization",
    description:
      "Automated Containerized application by pushing to GHCR and provisioned through AWS.",
    tags: ["Docker", "Jenkins", "Terraform", "AWS"],
  },
];

export type Achievement = {
  title: string;
  category: "Hackathon" | "Certification" | "Competition" | "Open Source" | "Recognition";
  issuer: string;
  date: string;
  description: string;
  link?: string;
  placeholder?: boolean;
};

// Headline counters in the Achievements section. "Projects built" is counted
// from `projects` automatically; set the rest here (a "+" suffix is allowed).
export const achievementStats = {
  hackathons: "05",
  certifications: "04+",
  awards: "02",
};

export const achievements: Achievement[] = [
  {
    title: "WINNER",
    category: "Hackathon",
    issuer: "Makethon 4.0",
    date: "july 2026",
    description:
      "Developed a real-time Flood water monitoring of rivers,Dams using IoT sensors and AI models, achievied 95% accuracy in prediction.",

    placeholder: true,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    category: "Certification",
    issuer: "Amazon Web Services",
    date: "June 2026",
    description: "Credential name with a verification link.",
    placeholder: true,
  },
  {
    title: "BEST Project Award",
    category: "Competition",
    issuer: "PEP Cloud - college level",
    date: "April 2026",
    description: "presented a project that detects and reports civic issues by real backend and data retrival in postgresSQL.",
    placeholder: true,
  },
];

