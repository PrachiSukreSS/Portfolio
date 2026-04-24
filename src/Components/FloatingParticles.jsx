import React from "react";

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(120)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-sky-200 shadow-[0_0_8px_rgba(186,230,253,0.6)] rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0.1 + Math.random() * 0.2,
          animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
          animationDelay: `${-Math.random() * 20}s`,
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
