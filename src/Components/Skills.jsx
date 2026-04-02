import React from "react";
import { Code, Database, Zap, Terminal } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8 text-violet-400" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS"],
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-[0_0_15px_rgba(139,92,246,0.4)]"
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8 text-fuchsia-400" />,
      skills: ["Node.js", "FastAPI", "MongoDB", "MySQL", "SQL"],
      color: "from-fuchsia-500 to-pink-500",
      shadow: "shadow-[0_0_15px_rgba(217,70,239,0.4)]"
    },
    {
      title: "Programming Languages",
      icon: <Terminal className="w-8 h-8 text-indigo-400" />,
      skills: ["C++", "Python", "Java", "JavaScript"],
      color: "from-indigo-400 to-blue-500",
      shadow: "shadow-[0_0_15px_rgba(99,102,241,0.4)]"
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      skills: ["Docker", "GitHub Actions", "Linux", "AWS", "Git"],
      color: "from-purple-400 to-violet-500",
      shadow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]"
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <GlassmorphismCard
              key={index}
              className="p-6 text-center group"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.color} ${category.shadow} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white`}
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
                    className="px-4 py-2 border border-violet-500/20 bg-[#2a1b54]/50 rounded-xl text-violet-200 text-sm font-medium tracking-wide shadow-inner"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
