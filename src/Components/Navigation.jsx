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
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-3xl"
    >
      <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 shadow-2xl ring-1 ring-white/5 rounded-full px-1 py-0.5 transition-all duration-300">
        <div className="flex items-center justify-center w-full">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 w-full justify-center px-1 py-1">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-sky-300 transition-colors duration-300 text-base font-bold tracking-wide"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button - Centered but relative positioned for mobile display */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-sky-400 transition-colors duration-300 z-50 p-3 mx-auto"
          >
            <div className="w-8 h-6 flex flex-col justify-between items-center">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[11px]" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[10px]" : ""}`} />
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
              className="md:hidden mt-4 overflow-hidden border-t border-slate-700/50 pt-4"
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
                    className="block w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:bg-sky-500/20 hover:text-sky-300 transition-colors duration-300 font-medium"
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
