import React from "react";
import { motion } from "framer-motion";

const GlassmorphismCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`backdrop-blur-xl bg-[#0f172a]/60 border border-slate-700/50 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(56,189,248,0.1)] hover:border-sky-500/30 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassmorphismCard;
