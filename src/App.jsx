import React from "react";
import FloatingParticles from "./Components/FloatingParticles";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation"; // 🚀 Floating side nav or bottom nav

const App = () => {
  return (
    <div className="relative bg-slate-900 text-white font-sans overflow-x-hidden">
      {/* Floating background particles */}
      <FloatingParticles /> {/* 🪄✨ should stay behind everything */}
      {/* Floating Navigation Buttons */}
      <Navigation />
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
