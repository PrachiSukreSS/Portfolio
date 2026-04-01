import React from "react";

const GlassmorphismCard = ({ children, className = "" }) => {
  return (
    <div
      className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassmorphismCard;
