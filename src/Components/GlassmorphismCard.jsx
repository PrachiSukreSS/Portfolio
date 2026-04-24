import React from "react";
import { motion } from "framer-motion";

const GlassmorphismCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`backdrop-blur-xl bg-slate-900/80 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 hover:border-sky-500/40 transition-all duration-300 overflow-hidden relative group ${className}`}
    >
      {/* Subtle inner highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default GlassmorphismCard;
