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
    <div className="relative bg-[#0b0c10] text-[#c5c6c7] font-sans overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200 min-h-screen">
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
