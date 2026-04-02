import React from "react";
import { motion } from "framer-motion";

const GlassmorphismCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`backdrop-blur-xl bg-[#2a1b54]/40 border border-violet-400/20 rounded-2xl shadow-[0_8px_32px_0_rgba(100,90,200,0.15)] hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.3)] hover:border-fuchsia-500/30 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassmorphismCard;
