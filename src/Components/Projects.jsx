import React from "react";
import { Zap, Mail, Code, ExternalLink, Github, Cloud, Shield } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PathGenie",
    description: "Full-stack learning platform that generates personalized learning paths with automated skill analysis. Built using FastAPI backend and MongoDB integration.",
    tech: ["React", "FastAPI", "MongoDB"],
    icon: <Zap className="w-5 h-5" />,
    accent: "#0ea5e9",
    github: "https://github.com/PrachiSukreSS/Path-Gienie",
  },
  {
    title: "MailOrchestrator",
    description: "Scalable email and certificate automation engine with intelligent batching, retry logic, and robust error handling for efficient bulk communication.",
    tech: ["Python", "SMTP", "Automation"],
    icon: <Mail className="w-5 h-5" />,
    accent: "#6366f1",
    github: "https://github.com/PrachiSukreSS/Email-Automation-website",
  },
  {
    title: "LabSense AI",
    description: "Smart lab scheduling and conflict detection system with FastAPI backend, enabling automated availability checks and efficient time-slot management.",
    tech: ["Python", "FastAPI", "APIs"],
    icon: <Code className="w-5 h-5" />,
    accent: "#a855f7",
    github: "https://github.com/PrachiSukreSS/labs_data_checkd",
  },
  {
    title: "CodePipelineX",
    description: "Flask-based web application with integrated GitLab CI/CD pipeline, enabling automated deployment, version control, and seamless development workflows.",
    tech: ["Flask", "GitLab CI/CD", "Render"],
    icon: <ExternalLink className="w-5 h-5" />,
    accent: "#10b981",
    github: "https://github.com/PrachiSukreSS/Gitlab_tut",
  },
  {
    title: "TerraformVault",
    description: "Cloud infrastructure provisioning system using Terraform and OpenTofu, featuring automated state management and security group configurations.",
    tech: ["Terraform", "AWS", "OpenTofu"],
    icon: <Cloud className="w-5 h-5" />,
    accent: "#3b82f6",
    github: "https://github.com/PrachiSukreSS/TerraformVault",
  },
  {
    title: "AuthGuard Pro",
    description: "Robust authentication and authorization microservice built with FastAPI, implementing OAuth2 and JWT for secure cross-platform communication.",
    tech: ["FastAPI", "OAuth2", "JWT"],
    icon: <Shield className="w-5 h-5" />,
    accent: "#f97316",
    github: "https://github.com/PrachiSukreSS/AuthGuard-Pro",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-4 relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-1/2 left-0 w-[700px] h-[700px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-center mb-4 text-white tracking-tight"
      >
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center text-slate-400 mb-12 text-base"
      >
        A selection of things I've built — from automation tools to cloud infrastructure.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.4 }}
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="h-full flex flex-col rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm overflow-hidden group"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
            >
              {/* Thin coloured top bar */}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

              <div className="p-5 flex flex-col gap-3 flex-1">
                {/* Header row */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                    style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}44`, color: project.accent }}
                  >
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-xs font-semibold"
                      style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}30` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-slate-800/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200 w-fit"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a
          href="https://github.com/PrachiSukreSS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white border border-slate-700/60 hover:border-slate-500 rounded-lg transition-all duration-200"
        >
          <Github className="w-4 h-4" />
          All projects on GitHub
        </a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
