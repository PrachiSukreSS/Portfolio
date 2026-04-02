// 📁 Navigation.jsx
import React, { useState } from "react";
import { scrollToSection } from "../utils/scrollUtils";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="backdrop-blur-xl bg-[#1a103c]/70 border border-violet-500/20 shadow-[0_8px_32px_0_rgba(100,90,200,0.2)] rounded-full px-6 py-3 transition-all duration-300">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            PS
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1 bg-white/5 rounded-full px-2 py-1">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 rounded-full text-violet-100 hover:text-fuchsia-300 transition-colors duration-300 text-sm font-semibold tracking-wide"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-violet-200 hover:text-fuchsia-400 transition-colors duration-300 z-50 p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
        
        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden border-t border-violet-500/20 pt-4"
            >
              <div className="flex flex-col space-y-2 pb-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        scrollToSection(item.toLowerCase());
                        setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 rounded-xl text-violet-200 hover:bg-violet-500/20 hover:text-fuchsia-300 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
