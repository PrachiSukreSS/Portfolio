// About.jsx
import { BookOpen, Award, Globe } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";

const About = () => (
  <section id="about" className="py-20 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <GlassmorphismCard className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a Computer Engineering student at JSPM's Rajarshi Shahu College
            of Engineering, Pune, with a strong passion for web development and
            automation. With a CGPA of 9.27, I'm actively involved in
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
                className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </GlassmorphismCard>
        <div className="space-y-6">
          <GlassmorphismCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Education</h3>
                <p className="text-gray-400">B.Tech Computer Engineering</p>
              </div>
            </div>
            <p className="text-gray-300">
              JSPM's Rajarshi Shahu College of Engineering, Pune
            </p>
            <p className="text-cyan-400 font-semibold">
              CGPA: 9.27 | 2023-2027
            </p>
          </GlassmorphismCard>
          <GlassmorphismCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
                <p className="text-gray-400">Multilingual Communication</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Hindi", "English", "Marathi", "Japanese (Basic)"].map(
                (lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                )
              )}
            </div>
          </GlassmorphismCard>
          <GlassmorphismCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-8 h-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Achievements</h3>
                <p className="text-gray-400">Recognition & Certifications</p>
              </div>
            </div>
            <p className="text-gray-300">
              Second Runner-up in Sci-Tech Competition
            </p>
            <p className="text-gray-300">AWS Hands-on Workshop Certificate</p>
          </GlassmorphismCard>
        </div>
      </div>
    </div>
  </section>
);

export default About;
