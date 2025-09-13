"use client";

import React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components";

const Navigation: React.FC = () => {
  const navItems = [
    { href: "#summary", label: "Summary" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md shadow-sm dark:shadow-zinc-700/20 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-xl font-bold text-zinc-800 dark:text-zinc-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Joel Ymele Leki
          </motion.div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
