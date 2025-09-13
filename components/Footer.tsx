"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 dark:bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          &copy; 2025 Joel Ymele Leki. All rights reserved.
        </motion.p>
        <motion.p
          className="mt-2 text-zinc-400 dark:text-zinc-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Built as an interactive resume experience.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
