import React from "react";
import { Palette, Code, Zap, Mail, Github, ExternalLink } from "lucide-react";
import GlassmorphismCard from "./GlassmorphismCard"; // Adjust path if needed

const Projects = () => {
  const projects = [
    {
      title: "PathGenie",
      description:
        "Full-stack learning platform that generates personalized learning paths. Integrates FastAPI backend with MongoDB and automated skill analysis logic.",
      tech: ["React", "FastAPI", "MongoDB"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Email Automation System",
      description:
        "Automation system processing user data to send personalized emails with certificate attachments. Features batching, retry logic, and error handling.",
      tech: ["Python", "SMTP", "Automation"],
      icon: <Mail className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Lab Availability Check System",
      description:
        "Backend API service to automate checking lab availability for event scheduling, with time-slot validation and conflict detection.",
      tech: ["Python", "FastAPI", "APIs"],
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Flask Web App Deployment",
      description:
        "Python Flask web application deployed using GitLab for version control and robust CI/CD pipeline automation.",
      tech: ["Flask", "GitLab CI/CD", "Render"],
      icon: <ExternalLink className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassmorphismCard
              key={index}
              className="p-8 group hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform duration-300">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                  <Github className="w-4 h-4" />
                  Code
                </button>
              </div>
            </GlassmorphismCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/PrachiSukreSS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
