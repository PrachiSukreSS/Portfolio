// Hero.jsx
import React, { useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import AnimatedText from "../Components/AnimatedText";
import { scrollToSection } from "../utils/scrollUtils";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, Icosahedron, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

import NetworkEarth from "./NetworkEarth";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#818cf8" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />

      <group position={[0, -1.2, 0]}>
        <NetworkEarth />
      </group>
    </>
  );
};

const FloatingOrb = ({ style, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ background: color, filter: "blur(100px)", ...style }}
    animate={{ y: [0, -40, 0], scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
    transition={{ repeat: Infinity, duration: 8 + Math.random() * 4, ease: "easeInOut" }}
  />
);

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    {/* Ambient background orbs */}
    <FloatingOrb style={{ width: "600px", height: "600px", top: "-10%", left: "-10%" }} color="#6366f1" />
    <FloatingOrb style={{ width: "500px", height: "500px", bottom: "10%", right: "-5%" }} color="#0ea5e9" />
    <FloatingOrb style={{ width: "400px", height: "400px", top: "40%", left: "50%" }} color="#818cf8" />
    {/* 3D Background Canvas */}
    <div className="absolute inset-0 z-0">
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617] z-10 pointer-events-none" />
      {/* Radial dark mask — protects text centre from globe bleed-through */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 38%, rgba(2,6,23,0.82) 0%, rgba(2,6,23,0.55) 45%, transparent 75%)",
        }}
      />
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>

    <div className="relative z-10 text-center w-full mt-16 md:mt-0 pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedText
          text={
            <h1
              className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-400"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Prachi Sukre
            </h1>
          }
        />
        <AnimatedText
          text={
            <p className="text-lg md:text-2xl mb-10 font-bold tracking-tight text-slate-200">
              Computer Engineering Student{" "}
              <span className="text-indigo-400">|</span> DevOps &amp; Full Stack
            </p>
          }
        />
        <AnimatedText
          text={
            <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto leading-loose text-slate-400 font-medium">
              Passionate about turning ideas into clean and impactful web solutions, exploring automation, and building smooth,
              reliable CI/CD workflows. Curious by nature and always excited to learn, experiment, and create real-world
              applications that actually make a difference.
            </p>
          }
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-7 py-3 bg-cyan-600 hover:bg-violet-500 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
          >
            Explore My Work
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-7 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-yellow-100 rounded-lg font-semibold transition-all duration-200"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Embedded Tech Stack Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="w-full overflow-hidden flex flex-col items-center z-10 pointer-events-none mb-20"
      >
        <p
          className="text-sm font-bold uppercase tracking-[0.25em] mb-6"
          style={{ color: "rgba(148,163,184,0.9)", textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
        >
          Core Technologies
        </p>
        <div className="flex w-full max-w-2xl mx-auto relative overflow-hidden">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#020617] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#020617] to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 22, repeat: Infinity, repeatType: "loop" }}
            className="flex whitespace-nowrap gap-10 text-slate-500 font-semibold text-base px-6 w-max"
          >
            {["Javascript", "React", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Kubernetes", " Django", "Jenkins", "Python",
              "Javascript", "React", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Kubernetes", " Django", "Jenkins", "Python"].map((tech, i) => (
                <span key={i} className="hover:text-slate-300 transition-colors duration-300 cursor-default">{tech}</span>
              ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Extra Highlight/Stats Content */}
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-4xl mx-auto mb-8"
        >
          {[
            { label: "CGPA", value: "9.38" },
            { label: "Cloud Certs", value: "2" },
            { label: "Projects", value: "10+" },
            { label: "Languages", value: "4" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-3 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
              <h4 className="text-2xl font-black text-sky-300">{stat.value}</h4>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer text-sky-400/60 hover:text-sky-300 transition-colors"
      onClick={() => scrollToSection("about")}
    >
      <ChevronDown className="w-10 h-10" />
    </motion.div>
  </section>
);

export default Hero;
