"use client";

import React from "react";
import { motion } from "motion/react";
import { staggerContainer } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

const Experience: React.FC = () => {
  return (
    <motion.section
      id="experience"
      className="py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className=" max-w-5xl mx-auto  text-pretty">
        <motion.h2
          className="text-3xl mb-4 font-bold text-foreground text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {experience.map((job, index) => (
            <motion.div key={index}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <Badge variant="outline">{job.period}</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="hover:bg-accent transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
