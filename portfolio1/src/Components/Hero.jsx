import React, { useState, useEffect, useRef } from "react";
import { Code, ChevronDown, Sparkles, Zap } from "lucide-react";

const AnimatedText = ({ text, className = "", delay = 0 }) => (
  <div className={`overflow-hidden ${className}`}>
    <div
      className="animate-slideUp opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {text}
    </div>
  </div>
);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    /*  const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }  */
  }, []);

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-600/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: "0 0 4px rgba(34, 211, 238, 0.15)",
          }}
        />
      ))}
      {[...Array(30)].map((_, i) => (
        <div
          key={`purple-${i}`}
          className="absolute  bg-purple-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: "0 0 3px rgba(168, 85, 247, 0.1)",
          }}
        />
      ))}
    </div>
  );

  const InteractiveAvatar = () => (
    <div className="w-32 h-32 mx-auto mb-8 relative group">
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1 transition-all duration-3000"
        /*    style={{
          // animation: "spin 8s linear infinite",
          transform: `scale(${1 + mousePosition.x * 0.1})`,
        }} */
      >
        <div
          className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center relativeoverflow-hidden "
          style={
            {
              // animation: "spin 12s linear infinite reverse",
            }
          }
        >
          <div
            className="w-24 h-24 rounded-full backdrop-blur-xl bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center border border-white/10 relative overflow-hidden"
            style={{
              transform: `translateX(${mousePosition.x * 5}px) translateY(${
                mousePosition.y * 5
              }px)`,
            }}
          >
            <Code className="w-12 h-12 text-cyan-400 relative z-10" />
            <Sparkles className="absolute top-2 right-2 w-4 h-4 text-purple-400 opacity-40 animate-pulse" />
            <Zap className="absolute bottom-2 left-2 w-3 h-3 text-cyan-300 opacity-30 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x * 100}% ${
          mousePosition.y * 100
        }%, rgba(34, 211, 238, 0.05) 0%, transparent 50%),
          radial-gradient(circle at ${(1 - mousePosition.x) * 100}% ${
          (1 - mousePosition.y) * 100
        }%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, rgb(15, 23, 42), rgb(15, 23, 42))
        `,
      }}
    >
      <FloatingParticles />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-8">
          <InteractiveAvatar />
        </div>

        <AnimatedText
          delay={200}
          text={
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent relative">
              Prachi Sukre
            </h1>
          }
        />

        <AnimatedText
          delay={400}
          text={
            <p className="text-xl md:text-2xl text-gray-300 mb-8 relative">
              Computer Engineering Student & Full Stack Developer
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
            </p>
          }
        />

        <AnimatedText
          delay={600}
          text={
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-white/[0.01] p-6 rounded-2xl border border-white/5">
              Passionate about creating innovative web solutions and exploring
              cutting-edge technologies. Currently pursuing B.Tech in Computer
              Engineering with a focus on MERN stack development.
            </p>
          }
        />
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            animation: "slideUp 0.8s ease-out 0.8s both",
          }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              transform: `translateX(${mousePosition.x * 2}px) translateY(${
                mousePosition.y * 2
              }px)`,
            }}
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold backdrop-blur-sm bg-white/[0.02] transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
            style={{
              transform: `translateX(${-mousePosition.x * 2}px) translateY(${
                mousePosition.y * 2
              }px)`,
            }}
          >
            Connect Now
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="relative">
          <ChevronDown className="w-8 h-8 text-cyan-400 relative z-10" />
          <div className="absolute inset-0 w-8 h-8 bg-cyan-400/10 rounded-full blur-md animate-pulse" />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-5px) rotate(0deg);
          }
          75% {
            transform: translateY(-15px) rotate(-1deg);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
