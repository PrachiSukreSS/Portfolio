import React from "react";
import { Code, Database, Zap, Terminal, Server, Layers, Wrench } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8 text-sky-300" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS"],
      color: "from-sky-500 to-blue-500",
      shadow: "shadow-[0_0_15px_rgba(14,165,233,0.4)]"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-amber-300" />,
      skills: ["Node.js", "FastAPI", "Django", "Express.js"],
      color: "from-amber-500 to-orange-500",
      shadow: "shadow-[0_0_15px_rgba(245,158,11,0.4)]"
    },
    {
      title: "Programming Languages",
      icon: <Terminal className="w-8 h-8 text-lime-300" />,
      skills: ["C++", "Python", "JavaScript"],
      color: "from-lime-500 to-emerald-500",
      shadow: "shadow-[0_0_15px_rgba(132,204,22,0.4)]"
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8 text-violet-300" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
      color: "from-violet-500 to-purple-600",
      shadow: "shadow-[0_0_15px_rgba(139,92,246,0.4)]"
    },
    {
      title: "DevOps & Automation",
      icon: <Layers className="w-8 h-8 text-teal-300" />,
      skills: ["Docker", "Linux", "GitLab", "Jenkins", "Kubernetes"],
      color: "from-teal-500 to-cyan-500",
      shadow: "shadow-[0_0_15px_rgba(20,184,166,0.4)]"
    },
    {
      title: "Tools",
      icon: <Wrench className="w-8 h-8 text-rose-300" />,
      skills: ["n8n", "GitHub", "Postman", "VS Code"],
      color: "from-rose-500 to-pink-500",
      shadow: "shadow-[0_0_15px_rgba(244,63,94,0.4)]"
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-20 text-white tracking-tighter"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassmorphismCard
                className="p-6 text-center group h-full"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.color} ${category.shadow} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white border-2 border-white/20`}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{category.title}</h3>
                <div className="w-12 h-1 rounded-full mx-auto mb-6 bg-white/10 overflow-hidden">
                  <div className="h-full bg-blue-500/50 w-2/3 group-hover:w-full transition-all duration-500" />
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-2 border border-slate-700/50 bg-[#0f172a]/50 rounded-xl text-slate-300 text-sm font-medium tracking-wide shadow-inner"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
