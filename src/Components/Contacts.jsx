// 📁 Contact.jsx
import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard"; // Adjust path if needed
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tight"
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <Mail className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-semibold">
                    prachisukre@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <Phone className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+91 9960196774</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <MapPin className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-semibold">Pune, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/prachisukre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full flex items-center justify-center hover:scale-110 hover:bg-indigo-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/PrachiSukreSS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full flex items-center justify-center hover:scale-110 hover:bg-indigo-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassmorphismCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-300 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500/50 focus:outline-none focus:border-sky-400 focus:bg-slate-800/80 transition-colors duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500/50 focus:outline-none focus:border-sky-400 focus:bg-slate-800/80 transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500/50 focus:outline-none focus:border-sky-400 focus:bg-slate-800/80 transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="relative overflow-hidden group w-full px-8 py-4 bg-sky-600/80 border border-sky-400/30 text-white rounded-xl font-bold hover:scale-[1.02] transform transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </GlassmorphismCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
