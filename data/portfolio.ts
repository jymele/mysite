import { SkillsData, ExperienceItem, ProjectItem } from "@/types";

export const skillsData: SkillsData = {
  Frontend: [
    "React.js & Hooks",
    "Next.js",
    "Angular 16",
    "HTML5 & CSS3",
    "TailwindCSS",
  ],
  "Backend & API": [
    "Node.js & Express.js",
    "TypeScript",
    "Microservices",
    "REST API Design",
    "PostgreSQL & Prisma",
  ],
  "DevOps & Infra": [
    "AWS & Docker",
    "CI/CD Pipelines",
    "Git & Version Control",
    "Ubuntu Server Mgmt",
    "Webpack & NPM",
  ],
  "Analytics & Tools": [
    "Google Analytics 4",
    "Google Tag Manager",
    "Postman & API Testing",
    "WordPress (CMS)",
    "JEST (Unit Testing)",
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    type: "Work",
    title: "Full Stack Engineer",
    context: "Groupe Media TFO",
    date: "2014 – Present",
    details: [
      "<strong>Engineered Growth-Focused Analytics:</strong> Collaborated directly with the marketing department to architect and implement advanced tracking solutions using Google Analytics 4. This enabled the measurement of key performance indicators (KPIs) and provided actionable data to guide user acquisition and engagement strategies.",
      "<strong>Led Backend Modernization:</strong> Took full ownership of a legacy backend system, re-architecting it into scalable Node.js microservices. This initiative improved system resilience and reduced API latency by 30%.",
      "<strong>Developed Enterprise-Level APIs:</strong> Designed and launched a new suite of REST APIs in TypeScript, creating robust and secure endpoints that enabled critical new integrations with enterprise partners.",
      "<strong>Optimized Application Performance:</strong> Boosted frontend and backend performance by optimizing PostgreSQL queries, implementing caching strategies, and containerizing applications with Docker, leading to a faster, more reliable user experience.",
      "<strong>Mentored & Reviewed Code:</strong> Acted as a senior resource, reviewing code from external developers and mentoring junior team members on best practices for building maintainable and testable code.",
    ],
  },
  {
    type: "Education",
    title: "Web Development Certificate",
    context: "Humber College",
    date: "2013",
    details: [
      "Completed a comprehensive certificate program focusing on modern web development practices, covering both front-end and back-end technologies.",
    ],
  },
  {
    type: "Education",
    title: "BSc in Applied Mathematics",
    context: "York University",
    date: "2012",
    details: [
      "Developed a strong foundation in logical reasoning, problem-solving, and data analysis through a rigorous mathematics curriculum.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: "Deepdil.ai",
    context: "Next.js & TailwindCSS",
    details:
      "Architected and built a modern, responsive website from the ground up, implementing a reusable component-based structure in React that prioritized performance, scalability, and an exceptional user experience.",
  },
  {
    title: "Biochemical Engineering Research Group Website",
    context: "WordPress CMS",
    details:
      "Led a client-facing project to deliver a complete website solution. Translated client requirements into a customized and user-friendly WordPress platform, allowing for easy content management and publication updates.",
  },
];
