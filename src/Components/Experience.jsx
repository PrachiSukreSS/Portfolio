// Experience.jsx
import { Code, Users, Server, Briefcase } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";

const experiences = [
  {
    role: "DevOps Lead",
    company: "Coding Club, RSCOE",
    duration: "Aug 2025 - Present",
    description: "Set up CI/CD pipelines to automate build and deployment workflows. Wrote Python automation scripts for operational tasks and system monitoring. Managed Linux environments and version control using Git.",
    icon: Server,
    color: "text-violet-400",
    bgColor: "bg-violet-400"
  },
  {
    role: "Full Stack Developer Intern",
    company: "EduSkills Academy",
    duration: "Apr 2025 - Jun 2025",
    description: "Developed MERN stack applications with API integration and database connectivity. Assisted in debugging, testing, and deployment of web applications.",
    icon: Briefcase,
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-400"
  },
  {
    role: "Web Team Member",
    company: "Coding Club, RSCOE",
    duration: "Oct 2024 - Dec 2025",
    description: "Contributed to development of coding club website using React and REST APIs with a space-themed UI. Assisted in developing an admin panel and integrating APIs.",
    icon: Code,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400"
  },
  {
    role: "Event Management Team",
    company: "Coding Club, RSCOE",
    duration: "Jul 2024 - Oct 2024",
    description: "Worked on an automation project for checking location availability for conducting events. Streamlined event management processes and improved operational efficiency.",
    icon: Users,
    color: "text-violet-300",
    bgColor: "bg-violet-300"
  }
];

const Experience = () => (
  <section id="experience" className="py-20 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
        Experience
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 to-fuchsia-600 rounded-full opacity-50"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                {isEven ? (
                  <>
                    <div className="md:w-1/2 md:text-right">
                      <GlassmorphismCard className="p-6">
                        <div className="flex items-center gap-3 mb-4 md:justify-end">
                          <exp.icon className={`w-6 h-6 ${exp.color}`} />
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        </div>
                        <p className={`${exp.color} font-semibold mb-2`}>{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      </GlassmorphismCard>
                    </div>
                    <div className={`w-8 h-8 ${exp.bgColor} rounded-full border-4 border-slate-900 z-10 flex-shrink-0`}></div>
                    <div className="md:w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2"></div>
                    <div className={`w-8 h-8 ${exp.bgColor} rounded-full border-4 border-slate-900 z-10 flex-shrink-0`}></div>
                    <div className="md:w-1/2">
                      <GlassmorphismCard className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <exp.icon className={`w-6 h-6 ${exp.color}`} />
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        </div>
                        <p className={`${exp.color} font-semibold mb-2`}>{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      </GlassmorphismCard>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
