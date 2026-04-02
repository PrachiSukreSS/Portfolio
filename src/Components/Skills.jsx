import React from "react";
import { Code, Database, Zap } from "lucide-react"; // 🧠 Lucide icons
import GlassmorphismCard from "../Components/GlassmorphismCard";
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      skills: ["Node.js", "FastAPI", "MongoDB", "MySQL", "SQL"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-green-400" />,
      skills: ["C++", "Python", "Java", "JavaScript"],
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      skills: ["Docker", "GitHub Actions", "Linux", "AWS", "Git"],
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <GlassmorphismCard
              key={index}
              className="p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-white/5 rounded-lg text-gray-300 text-sm"
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
