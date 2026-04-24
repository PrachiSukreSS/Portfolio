import React from "react";
import { BookOpen, Award, Globe } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 px-4 relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-center mb-20 text-white tracking-tighter"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full"
        >
          <GlassmorphismCard className="p-6 h-full flex flex-col justify-center">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 mb-8">
              <div className="relative w-40 h-40 lg:w-48 lg:h-48 flex-shrink-0 group p-2 bg-slate-900/50 rounded-3xl border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <img
                  src="/photo.webp"
                  alt="Prachi Sukre"
                  onError={(e) => e.target.src = '/photo.jpg'}
                  className="w-full h-full object-cover rounded-2xl border border-slate-600/30 relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="text-center xl:text-left mt-2 xl:mt-4">
                <h3 className="text-3xl font-black text-white mb-2 leading-tight">My Journey</h3>
                <p className="text-sky-400 font-bold tracking-widest text-sm uppercase px-1">DevOps & Full Stack Enthusiast</p>
              </div>
            </div>

            <p className="text-slate-300 leading-loose mb-6 font-medium">
              I'm a Computer Engineering student at JSPM's Rajarshi Shahu College
              of Engineering, Pune, with a strong passion for web development, DevOps, and
              automation. With a CGPA of 9.38, I'm actively involved in
              college-level coding initiatives and team-based projects.
            </p>
            <p className="text-slate-300 leading-loose mb-8 font-medium">
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
                  className="px-4 py-1.5 bg-sky-500/20 text-sky-200 border border-sky-500/30 rounded-full text-sm font-medium tracking-wide"
                >
                  {trait}
                </span>
              ))}
            </div>
          </GlassmorphismCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <GlassmorphismCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-sky-500/20 ring-1 ring-sky-500/30">
                <BookOpen className="w-8 h-8 text-sky-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Education</h3>
                <p className="text-blue-200">B.Tech Computer Engineering</p>
              </div>
            </div>
            <p className="text-slate-300">
              JSPM's Rajarshi Shahu College of Engineering, Pune
            </p>
            <p className="text-sky-400 font-semibold tracking-wide">
              CGPA: 9.38 | 2023-2027
            </p>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-teal-500/20 ring-1 ring-teal-500/30">
                <Globe className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
                <p className="text-teal-200/80">Multilingual Communication</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Hindi", "English", "Marathi", "Japanese (JLPT N5)"].map(
                (lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-blue-500/20 text-blue-200 border border-blue-500/30 rounded-full text-sm font-medium tracking-wide"
                  >
                    {lang}
                  </span>
                )
              )}
            </div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-rose-500/20 ring-1 ring-rose-500/30">
                <Award className="w-8 h-8 text-rose-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Achievements</h3>
                <p className="text-rose-200/80">Recognition & Certifications</p>
              </div>
            </div>
            <ul className="space-y-3 mt-4">
              {[
                "Aviatrix Certified Multicloud Network Associate",
                "LFEL1009: Getting Started with OpenTofu",
                "JLPT N5 Certified",
                "SKF Scholar Recipient"
              ].map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(251,113,133,0.6)] group-hover/item:scale-125 transition-transform" />
                  <span className="text-slate-300 leading-tight group-hover/item:text-white transition-colors underline-offset-4 decoration-rose-500/30 font-medium">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
