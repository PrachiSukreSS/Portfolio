import React from "react";

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)] rounded-full opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
