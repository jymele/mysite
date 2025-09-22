"use client";

import React from "react";
import { motion } from "motion/react";
import { projectsData } from "@/data/portfolio";
import { useModal } from "@/context/ModalContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const Projects: React.FC = () => {
  const { openModal } = useModal();

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    openModal({
      title: project.title,
      content: `<p>${project.details}</p>`,
    });
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
            Project Spotlight
          </h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Click on a project to see the details.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="cursor-pointer transition-all duration-300"
              onClick={() => handleProjectClick(project)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl dark:hover:shadow-zinc-600/30 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-zinc-800 dark:text-zinc-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-blue-500 dark:text-blue-400 font-semibold">
                    {project.context}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Click to learn more about this project.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
