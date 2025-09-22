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
    description: "",
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
    title: "Senior Full Stack Engineer",
    company: "Mylphen",
    period: "2013 - 2014",
    description: "",
    skills: ["Wordpress", "MySQL"],
  },
  {
    title: "Freelance Full Stack Engineer",
    company: "Freelance",
    period: "Since 2015",
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
];
