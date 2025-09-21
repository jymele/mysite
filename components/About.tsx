"use client";

import React from "react";
import { motion } from "motion/react";

const About: React.FC = () => {
  return (
    <motion.section
      id="summary"
      className="max-w-5xl mx-auto px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-8">
        <motion.h2
          className="text-3xl mb-2 font-bold text-foreground text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <p className="mt-2 text-center text-slate-700 dark:text-slate-400">
          A brief introduction to my professional journey.
        </p>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="prose prose-neutral dark:prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-center">
              I am a results-driven Senior Full Stack Engineer with over a
              decade of experience translating complex business needs into
              high-performance web applications. I specialize in building and
              optimizing user-centric solutions with React.js and Node.js, and
              have a proven track record of collaborating with marketing teams
              to implement analytics and drive measurable growth. My passion
              lies in taking full ownership of the development lifecycle to
              deliver robust, scalable, and maintainable code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
