"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Senior Full Stack Engineer
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Specializing in React & Next.js to build high-performance,
          user-centric web applications.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="mailto:joel.ymele@gmail.com"
            className="inline-flex items-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </motion.a>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-zinc-500">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              647-779-6002
            </div>
            <span className="text-zinc-400 hidden sm:block">|</span>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Pickering, ON
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
