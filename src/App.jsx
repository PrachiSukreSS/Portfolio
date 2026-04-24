import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation"; // Floating side nav or bottom nav
import FloatingParticles from "./Components/FloatingParticles";

const App = () => {
  return (
    <div className="relative bg-[#0a0a0a] text-slate-300 font-sans overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-200 min-h-screen">
      <FloatingParticles />
      {/* Ambient background glows for color */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-fuchsia-500/5 blur-[100px] pointer-events-none" />
      <div className="fixed top-[40%] right-[-10%] w-[25%] h-[25%] rounded-full bg-lime-500/5 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[20%] left-[-5%] w-[20%] h-[20%] rounded-full bg-amber-500/5 blur-[80px] pointer-events-none" />

      {/* Floating Navigation Buttons */}
      {/* Floating Navigation Buttons */}
      <Navigation />
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/*  <Certificates /> */}

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
