// Experience.jsx
import { Code, Users } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";

const Experience = () => (
  <section id="experience" className="py-20 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 md:text-right">
              <GlassmorphismCard className="p-6">
                <div className="flex items-center gap-3 mb-4 md:justify-end">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">
                    Web Team Member
                  </h3>
                </div>
                <p className="text-cyan-400 font-semibold mb-2">
                  Coding Club, RSCOE
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  July 2024 - Present
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Collaborated on developing the club's official website using
                  ReactJS with a space-themed UI. Assisted in the development of
                  an admin panel and integrated APIs for enhanced functionality.
                </p>
              </GlassmorphismCard>
            </div>
            <div className="w-8 h-8 bg-cyan-400 rounded-full border-4 border-slate-900 z-10 flex-shrink-0"></div>
            <div className="md:w-1/2"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2"></div>
            <div className="w-8 h-8 bg-purple-400 rounded-full border-4 border-slate-900 z-10 flex-shrink-0"></div>
            <div className="md:w-1/2">
              <GlassmorphismCard className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">
                    Event Management Team
                  </h3>
                </div>
                <p className="text-purple-400 font-semibold mb-2">
                  Coding Club, RSCOE
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  July 2024 - July 2025
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Worked on automation project for checking location
                  availability for conducting events. Streamlined event
                  management processes and improved operational efficiency.
                </p>
              </GlassmorphismCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
