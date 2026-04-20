import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
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

function HomePage() {
  return (
    <main className="home">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
      {/* <Github/> */}
      <Contact />
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
    </>
  );
}

export default App;
