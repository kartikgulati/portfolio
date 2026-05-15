import React from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import TechStack from "./components/techstack/techstack";
import { Skills } from "./components/skills/Skills";
import { Services } from "./components/services/Services";
import { Qualification } from "./components/qualification/Qualification";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import { Lanyard } from "./components/lanyard/Lanyard";
import ProjectsPage from "./pages/ProjectsPage";
// import { Github } from './components/github_calander/Github';

const revealUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionReveal({ children, delay = 0 }) {
  return (
    <motion.div
      className="section-shell"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  return (
    <main className="home site-shell">
      <SectionReveal>
        <Home />
      </SectionReveal>
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <TechStack />
      </SectionReveal>
      <SectionReveal>
        {/* <Skills /> */}
      </SectionReveal>
      <SectionReveal>
        <Services />
      </SectionReveal>
      <SectionReveal>
        <Qualification />
      </SectionReveal>
      <SectionReveal>
        <Testimonials />
      </SectionReveal>
      {/* <Github/> */}
      <SectionReveal>
        <Contact />
      </SectionReveal>
    </main>
  );
}

function App() {
  return (
    <>
      {/* <Lanyard /> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer/>
      <ScrollUp />
      <Analytics />
    </>
  );
}

export default App;
