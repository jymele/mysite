"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="summary" className="py-16 bg-white dark:bg-zinc-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
            About Me
          </h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            A brief introduction to my professional journey.
          </p>
        </motion.div>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed text-center">
                I am a results-driven Senior Full Stack Engineer with over a
                decade of experience translating complex business needs into
                high-performance web applications. I specialize in building and
                optimizing user-centric solutions with React.js and Node.js, and
                have a proven track record of collaborating with marketing teams
                to implement analytics and drive measurable growth. My passion
                lies in taking full ownership of the development lifecycle to
                deliver robust, scalable, and maintainable code.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
