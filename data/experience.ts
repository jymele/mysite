type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

export const experience: Experience[] = [
  {
    title: "Senior Full Stack Engineer",
    company: "Groupe Media TFO",
    period: "2014 - Present",
    description:
      "I architect and maintain a resilient microservices infrastructure, ensuring our digital presence by keeping website frameworks, plugins, and servers current. I receive web application code, configure servers to meet application requirements, and deploy code online. I collaborate closely with the marketing department to implement and rigorously test Google Analytics tracking codes for actionable insights. As a proactive team member, I actively participate in brainstorming sessions and provide technical support to colleagues, including debugging and resolving code-level issues to ensure project velocity and code quality.",
    skills: [
      "React",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "Laravel",
      "Docker",
      "MySQL",
      "NextJS",
      "Wordpress",
      "Google Analytics",
      "Google Tag Manager",
    ],
  },

  {
    title: "Freelance Full Stack Engineer",
    company: "Freelance",
    period: "2015 - Present",
    description: "Develop and maintain websites for clients.",
    skills: [
      "NextJS",
      "Directus",
      "Strapi",
      "Wordpress",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Mylphen",
    period: "2013 - 2014",
    description: "I created a custom Wordpress theme for the company website.",
    skills: ["Wordpress", "MySQL"],
  },
];
