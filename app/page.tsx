import React from "react";
import { ModalProvider } from "@/context/ModalContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <ModalProvider>
        <main>
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <Modal />
          <Chatbot />
        </main>
      </ModalProvider>
    </>
  );
}
