"use client";

import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Github, Linkedin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const Hero: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        className="space-y-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div className="space-y-2" variants={fadeInUp}>
          <motion.h1
            className="text-4xl md:text-6xl text-center font-bold tracking-tight text-balance mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Senior Full Stack Engineer
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground text-pretty text-center"
            variants={fadeInUp}
          >
            Building scalable web applications and microservices with modern
            technologies
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center gap-6 text-sm text-muted-foreground justify-center"
          variants={fadeInUp}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MapPin className="h-4 w-4" />
            <span>Remote</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Calendar className="h-4 w-4" />
            <span>Available for new opportunities</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 justify-center"
          variants={fadeInUp}
        >
          <motion.div {...scaleOnHover}>
            <Button
              asChild
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <a className="text-slate-50" href="mailto:joel.ymele@gmail.com">
                Get in touch
              </a>
            </Button>
          </motion.div>
          <motion.div {...scaleOnHover}>
            <Button
              variant="outline"
              asChild
              className="hover:bg-accent/50 transition-colors bg-transparent"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 justify-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            {
              href: "https://github.com/jymele",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/jymele",
              icon: Linkedin,
              label: "LinkedIn",
            },
            { href: "mailto:joel.ymele@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.div key={label} variants={fadeInUp}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-accent/50 hover:scale-110 transition-all duration-200"
              >
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
