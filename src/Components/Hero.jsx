// Hero.jsx
import { Code, ChevronDown } from "lucide-react";
import AnimatedText from "../Components/AnimatedText";
import { scrollToSection } from "../utils/scrollUtils";

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-8 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center">
                <Code className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatedText
        text={
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Prachi Sukre
          </h1>
        }
      />
      <AnimatedText
        text={
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Computer Engineering Student & Full Stack Developer
          </p>
        }
      />
      <AnimatedText
        text={
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and exploring
            cutting-edge technologies. Currently pursuing B.Tech in Computer
            Engineering with a focus on MERN stack development.
          </p>
        }
      />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => scrollToSection("projects")}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
        >
          Get In Touch
        </button>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-cyan-400" />
    </div>
  </section>
);

export default Hero;
