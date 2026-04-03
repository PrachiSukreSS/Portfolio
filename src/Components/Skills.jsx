import React from "react";
import { Code, Database, Zap, Terminal } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8 text-sky-400" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS"],
      color: "from-sky-500 to-blue-500",
      shadow: "shadow-[0_0_15px_rgba(14,165,233,0.4)]"
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8 text-amber-400" />,
      skills: ["Node.js", "FastAPI", "MongoDB", "MySQL", "SQL"],
      color: "from-amber-500 to-orange-500",
      shadow: "shadow-[0_0_15px_rgba(245,158,11,0.4)]"
    },
    {
      title: "Programming Languages",
      icon: <Terminal className="w-8 h-8 text-lime-400" />,
      skills: ["C++", "Python", "Java", "JavaScript"],
      color: "from-lime-500 to-emerald-500",
      shadow: "shadow-[0_0_15px_rgba(132,204,22,0.4)]"
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="w-8 h-8 text-fuchsia-400" />,
      skills: ["Docker", "GitHub Actions", "Linux", "AWS", "Git"],
      color: "from-fuchsia-500 to-rose-500",
      shadow: "shadow-[0_0_15px_rgba(217,70,239,0.4)]"
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tight"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>

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
