// Hero.jsx
import React, { useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import AnimatedText from "../Components/AnimatedText";
import { scrollToSection } from "../utils/scrollUtils";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, Icosahedron, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight position={[5, 10, 5]} intensity={2.5} color="#bae6fd" />
      <directionalLight position={[-5, -5, -5]} intensity={1.5} color="#38bdf8" />
      
      {/* Center Network Lattice (Big) */}
      <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron args={[5, 2]} position={[0, 0, -5]} rotation={[0, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#38bdf8" wireframe wireframeLinewidth={2} transparent opacity={0.15} />
        </Icosahedron>
      </Float>

      {/* Network Nodes (Points/Stars) */}
      <Stars radius={10} depth={50} count={300} factor={4} saturation={0} fade speed={0.5} />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    {/* 3D Background Canvas */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617] z-10 pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>

    <div className="relative z-10 text-center w-full mt-16 md:mt-0 pt-20">
      <div className="max-w-4xl mx-auto px-4">
      <AnimatedText
        text={
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-indigo-300 via-indigo-100 to-indigo-300 bg-clip-text text-transparent drop-shadow-xl tracking-tight">
            Prachi Sukre
          </h1>
        }
      />
      <AnimatedText
        text={
          <p className="text-xl md:text-3xl text-indigo-100/90 mb-8 font-light tracking-wide">
            Computer Engineering Student <span className="text-indigo-400">|</span> DevOps & Full Stack
          </p>
        }
      />
      <AnimatedText
        text={
          <p className="text-lg text-indigo-100/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating elegant web solutions, exploring
            cloud automation, and building reliable CI/CD infrastructure. Currently pursuing B.Tech in Computer
            Engineering.
          </p>
        }
      />
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 3 }}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
      >
        <button
          onClick={() => scrollToSection("projects")}
          className="relative overflow-hidden group px-8 py-4 bg-sky-600/80 backdrop-blur-md text-white rounded-full font-semibold border border-sky-400/30 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
        >
          {/* Animated Moving Element gradient inside button */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
          <span className="relative z-10">Explore My Work</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="relative overflow-hidden group px-8 py-4 bg-slate-800/60 backdrop-blur-md border border-slate-500/30 text-sky-200 rounded-full font-semibold hover:border-sky-400/60 hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-2"
        >
          <span className="relative z-10">Get In Touch</span>
        </button>
      </motion.div>
      </div>

      {/* Embedded Tech Stack Marquee to fill the Hero nicely */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3 }}
        className="w-full overflow-hidden flex flex-col items-center z-10 pointer-events-none mb-12"
      >
        <p className="text-slate-400/80 text-sm font-semibold uppercase tracking-[0.2em] mb-4">Core Technologies</p>
        <div className="flex w-full max-w-2xl mx-auto mt-2 relative overflow-hidden">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>
          
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className="flex whitespace-nowrap gap-12 text-slate-500/60 font-bold text-xl md:text-2xl px-6 w-max"
          >
            {/* Repeat twice for seamless loop */}
            {["React", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Kubernetes", "Redis", "TypeScript", "Python"].map((tech, i) => (
              <span key={`tech1-${i}`} className="hover:text-blue-400 transition-colors pointer-events-auto">{tech}</span>
            ))}
            {["React", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Kubernetes", "Redis", "TypeScript", "Python"].map((tech, i) => (
              <span key={`tech2-${i}`} className="hover:text-blue-400 transition-colors pointer-events-auto">{tech}</span>
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
