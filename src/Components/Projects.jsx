import React from "react";
import { Zap, Mail, Code, ExternalLink, Github } from "lucide-react";
import GlassmorphismCard from "./GlassmorphismCard";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "PathGenie",
      description:
        "Full-stack learning platform that generates personalized learning paths. Integrates FastAPI backend with MongoDB and automated skill analysis logic.",
      tech: ["React", "FastAPI", "MongoDB"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      shadow: "shadow-[0_0_20px_rgba(14,165,233,0.4)]"
    },
    {
      title: "Email Automation System",
      description:
        "Automation system processing user data to send personalized emails with certificate attachments. Features batching, retry logic, and error handling.",
      tech: ["Python", "SMTP", "Automation"],
      icon: <Mail className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      shadow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]"
    },
    {
      title: "Lab Availability Check System",
      description:
        "Backend API service to automate checking lab availability for event scheduling, with time-slot validation and conflict detection.",
      tech: ["Python", "FastAPI", "APIs"],
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-rose-500",
      shadow: "shadow-[0_0_20px_rgba(168,85,247,0.4)]"
    },
    {
      title: "Flask Web App Deployment",
      description:
        "Python Flask web application deployed using GitLab for version control and robust CI/CD pipeline automation.",
      tech: ["Flask", "GitLab CI/CD", "Render"],
      icon: <ExternalLink className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      shadow: "shadow-[0_0_20px_rgba(16,185,129,0.4)]"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tight"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassmorphismCard className="p-8 group h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} ${project.shadow} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-sm font-medium tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="relative overflow-hidden group flex items-center gap-2 px-5 py-2.5 bg-sky-600/80 text-white rounded-xl shadow-[0_4px_15px_rgba(14,165,233,0.2)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.4)] transform transition-all duration-300 font-semibold border border-sky-400/30">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
                    <ExternalLink className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">View Project</span>
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-600/50 bg-[#0f172a]/50 text-sky-200 rounded-xl hover:bg-slate-700/50 hover:border-sky-400/50 transition-all duration-300 font-semibold group">
                    <span className="absolute inset-0 rounded-xl ring-2 ring-sky-400/50 scale-110 opacity-0 group-hover:animate-ping" />
                    <Github className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Code</span>
                  </button>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/PrachiSukreSS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 border border-slate-600/50 text-sky-300 rounded-full font-bold hover:bg-slate-700/50 hover:text-sky-200 hover:border-sky-400/50 transition-all duration-300 relative group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
            <Github className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
