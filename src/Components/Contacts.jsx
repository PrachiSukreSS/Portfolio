// 📁 Contact.jsx
import React, { useState } from "react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import GlassmorphismCard from "../Components/GlassmorphismCard";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success / error
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/mqegyzjb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
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
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Get In Touch
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology. Feel free to reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-full flex items-center justify-center">
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
                <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-semibold">
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/prachisukre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <p className="text-white font-semibold">PrachiSukre</p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/PrachiSukreSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                  <Github className="w-6 h-6" />
                </a>
                <p className="text-white font-semibold">PrachiSukreSS</p>
              </div>
            </div>
          </motion.div>

          {/* FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">

                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Your Message..."
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white"
                  ></textarea>
                </div>

                {/* STATUS MESSAGE */}
                {status === "success" && (
                  <p className="text-green-400 text-center">
                    Message sent successfully
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-center">
                    Something went wrong
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-sky-600 text-white rounded-xl font-bold"
                >
                  {loading ? "Sending..." : "Send Message"}
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