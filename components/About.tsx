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
          className="text-3xl mb-4 font-bold text-foreground text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="prose prose-neutral dark:prose-invert max-w-none text-center text-xl text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="">
              I am a passionate full stack engineer with over a decade of
              experience building web applications that scale. I specialize in
              React, Node.js, and cloud technologies, with a focus on creating
              exceptional user experiences and robust backend systems.
            </p>
            <p>
              I also have a proven track record of collaborating with marketing
              teams to implement analytics and drive measurable growth. My
              passion lies in taking full ownership of the development lifecycle
              to deliver robust, scalable, and maintainable code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
