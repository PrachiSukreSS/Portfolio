// Hero.jsx
import React, { useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import AnimatedText from "../Components/AnimatedText";
import { scrollToSection } from "../utils/scrollUtils";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Icosahedron, MeshTransmissionMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1.2} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#a5b4fc" />
      <directionalLight position={[-5, -5, -5]} intensity={1} color="#818cf8" />
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[2.5, 0]} position={[0, 0, -3]}>
          <MeshTransmissionMaterial 
            color="#818cf8" 
            resolution={256}
            thickness={1} 
            roughness={0.2}
            transmission={0.8}
            ior={1.5}
            chromaticAberration={0.04}
            flatShading={true} // Creates the highly requested low-poly aesthetic!
          />
        </Icosahedron>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron args={[0.8, 0]} position={[4, 2, -6]}>
          <meshStandardMaterial color="#6366f1" opacity={0.6} transparent flatShading={true} />
        </Icosahedron>
      </Float>
      
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5}>
        <Icosahedron args={[0.5, 0]} position={[-4, -2, -4]}>
          <meshStandardMaterial color="#818cf8" opacity={0.4} transparent flatShading={true} wireframe />
        </Icosahedron>
      </Float>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/40 via-transparent to-[#0b0c10] z-10 pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mt-16 md:mt-0">
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
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <button
          onClick={() => scrollToSection("projects")}
          className="relative overflow-hidden group px-8 py-4 bg-indigo-600/80 backdrop-blur-md text-white rounded-full font-semibold border border-indigo-400/30 transition-all duration-300 flex items-center gap-2"
        >
          {/* Animated Moving Element gradient inside button */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
          <span className="relative z-10">Explore My Work</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="relative overflow-hidden group px-8 py-4 bg-[#1f2833]/60 backdrop-blur-md border border-indigo-500/30 text-indigo-200 rounded-full font-semibold hover:border-indigo-400 transition-all duration-300 flex items-center gap-2"
        >
          {/* subtle pulsing element */}
          <span className="absolute inset-0 rounded-full ring-2 ring-indigo-400/50 scale-110 opacity-0 group-hover:animate-ping" />
          <span className="relative z-10">Get In Touch</span>
        </button>
      </motion.div>
    </div>
    
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer text-indigo-400/60 hover:text-indigo-300 transition-colors"
      onClick={() => scrollToSection("about")}
    >
      <ChevronDown className="w-10 h-10" />
    </motion.div>
  </section>
);

export default Hero;
