// About.jsx
import { BookOpen, Award, Globe } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";

const About = () => (
  <section id="about" className="py-20 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <GlassmorphismCard className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a Computer Engineering student at JSPM's Rajarshi Shahu College
            of Engineering, Pune, with a strong passion for web development, DevOps, and
            automation. With a CGPA of 9.38, I'm actively involved in
            college-level coding initiatives and team-based projects.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm always curious to explore new ideas, improve my skills, and
            build things that solve real problems. My experience spans from
            frontend development with React.js to full-stack applications using
            the MERN stack.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Problem Solver",
              "Team Player",
              "Quick Learner",
              "Innovation Enthusiast",
            ].map((trait, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full text-sm font-medium tracking-wide"
              >
                {trait}
              </span>
            ))}
          </div>
        </GlassmorphismCard>
        <div className="space-y-6">
          <GlassmorphismCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-fuchsia-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Education</h3>
                <p className="text-violet-200">B.Tech Computer Engineering</p>
              </div>
            </div>
            <p className="text-gray-300">
              JSPM's Rajarshi Shahu College of Engineering, Pune
            </p>
            <p className="text-fuchsia-400 font-semibold tracking-wide">
              CGPA: 9.38 | 2023-2027
            </p>
          </GlassmorphismCard>
          <GlassmorphismCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="w-8 h-8 text-violet-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
                <p className="text-violet-200">Multilingual Communication</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Hindi", "English", "Marathi", "Japanese (JLPT N5)"].map(
                (lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 rounded-full text-sm font-medium tracking-wide"
                  >
                    {lang}
                  </span>
                )
              )}
            </div>
          </GlassmorphismCard>
          <GlassmorphismCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-8 h-8 text-indigo-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Achievements</h3>
                <p className="text-violet-200">Recognition & Certifications</p>
              </div>
            </div>
            <p className="text-gray-300">
              Aviatrix Certified Multicloud Network Associate
            </p>
            <p className="text-gray-300">LFEL1009: Getting Started with OpenTofu</p>
            <p className="text-gray-300">JLPT N5 Certified</p>
            <p className="text-gray-300">AWS Hands-on Workshop</p>
          </GlassmorphismCard>
        </div>
      </div>
    </div>
  </section>
);

export default About;
