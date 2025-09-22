"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { scaleOnHover } from "@/lib/animations";

export default function Contact() {
  return (
    <>
      <motion.section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-8">
          <motion.h2
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities and
              exciting projects. Whether you have a question or just want to say
              hi, feel free to reach out!
            </p>
            <div className="flex items-center gap-4">
              <motion.div {...scaleOnHover}>
                <Button
                  asChild
                  className="shadow-lg hover:shadow-xl transition-shadow cta"
                >
                  <a href="mailto:joel@jymele.org">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  asChild
                  className="hover:bg-accent/50 transition-colors bg-transparent"
                >
                  <a
                    href="https://linkedin.com/in/jymele"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
