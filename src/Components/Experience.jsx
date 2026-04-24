import React from "react";
import { Code, Users, Server, Briefcase } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Team Member",
    company: "Coding Club, RSCOE",
    duration: "Oct 2024 - Dec 2025",
    description: "Contributed to development of coding club website using React and REST APIs with a space-themed UI. Assisted in developing an admin panel and integrating APIs.",
    icon: Code,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400"
  },
  {
    role: "Full Stack Developer Intern",
    company: "EduSkills Academy",
    duration: "Apr 2025 - Jun 2025",
    description: "Developed MERN stack applications with API integration and database connectivity. Assisted in debugging, testing, and deployment of web applications.",
    icon: Briefcase,
    color: "text-teal-400",
    bgColor: "bg-teal-400"
  },
  {
    role: "DevOps Lead",
    company: "Coding Club, RSCOE",
    duration: "Aug 2025 - Present",
    description: "Set up CI/CD pipelines to automate build and deployment workflows. Wrote Python automation scripts for operational tasks and system monitoring. Managed Linux environments and version control using Git.",
    icon: Server,
    color: "text-blue-400",
    bgColor: "bg-blue-400"
  }
  /* {
     role: "Event Management Team",
     company: "Coding Club, RSCOE",
     duration: "Jul 2024 - Oct 2024",
     description: "Worked on an automation project for checking location availability for conducting events. Streamlined event management processes and improved operational efficiency.",
     icon: Users,
     color: "text-slate-400",
     bgColor: "bg-slate-400"
   }
 
 */
];
const Experience = () => (
  <section id="experience" className="py-20 px-4 relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-center mb-20 text-white tracking-tighter"
      >
        Experience
      </motion.h2>

      <div className="relative">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-sky-500 to-indigo-600 rounded-full opacity-50"
        />
        <div className="space-y-12 relative z-10">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center gap-8 group"
              >
                {isEven ? (
                  <>
                    <motion.div
                      className="md:w-1/2 md:text-right w-full"
                      whileHover={{ scale: 1.02, rotateY: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <GlassmorphismCard className="p-6 shadow-lg shadow-sky-500/5 group-hover:shadow-sky-500/20 transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-5 md:justify-end">
                          <div className={`p-2.5 rounded-xl border border-current opacity-70 ${exp.color}`}>
                            <exp.icon className="w-5 h-5 bg-transparent" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        </div>
                        <p className={`${exp.color} font-bold mb-2 tracking-wide`}>{exp.company}</p>
                        <p className="text-slate-500 text-sm mb-5 font-semibold">{exp.duration}</p>
                        <p className="text-slate-300 leading-relaxed font-medium">{exp.description}</p>
                      </GlassmorphismCard>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.5, bounce: 0.6 }}
                      className={`w-8 h-8 ${exp.bgColor} rounded-full border-4 border-slate-900 z-10 flex-shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.5)]`}
                    />
                    <div className="md:w-1/2 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 hidden md:block"></div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.5, bounce: 0.6 }}
                      className={`w-8 h-8 ${exp.bgColor} rounded-full border-4 border-slate-900 z-10 flex-shrink-0 hidden md:block shadow-[0_0_15px_rgba(56,189,248,0.5)]`}
                    />
                    <motion.div
                      className="md:w-1/2 w-full"
                      whileHover={{ scale: 1.02, rotateY: 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <GlassmorphismCard className="p-6 shadow-lg shadow-sky-500/5 group-hover:shadow-sky-500/20 transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-5">
                          <div className={`p-2.5 rounded-xl border border-current opacity-70 ${exp.color}`}>
                            <exp.icon className="w-5 h-5 bg-transparent" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        </div>
                        <p className={`${exp.color} font-bold mb-2 tracking-wide`}>{exp.company}</p>
                        <p className="text-slate-500 text-sm mb-5 font-semibold">{exp.duration}</p>
                        <p className="text-slate-300 leading-relaxed font-medium">{exp.description}</p>
                      </GlassmorphismCard>
                    </motion.div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
