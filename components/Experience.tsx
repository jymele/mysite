"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolio";
import { useModal } from "@/context/ModalContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Experience: React.FC = () => {
  const { openModal } = useModal();

  const handleExperienceClick = (item: (typeof experienceData)[0]) => {
    const content = Array.isArray(item.details)
      ? `<ul>${item.details
          .map((detail) => `<li class="list-disc ml-5 mb-2">${detail}</li>`)
          .join("")}</ul>`
      : `<p>${item.details}</p>`;

    openModal({
      title: item.title,
      content,
    });
  };

  return (
    <section id="experience" className="py-16 bg-white dark:bg-zinc-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
            Career Journey
          </h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            My professional experience and education timeline.
          </p>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                className="cursor-pointer transition-all duration-300"
                onClick={() => handleExperienceClick(item)}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="hover:shadow-lg dark:hover:shadow-zinc-600/30 transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-zinc-800 dark:text-zinc-200">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="font-semibold text-blue-500 dark:text-blue-400">
                      {item.context}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item.date}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
