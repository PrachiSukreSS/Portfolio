import React from "react";

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)] rounded-full opacity-10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${6 + Math.random() * 6}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
