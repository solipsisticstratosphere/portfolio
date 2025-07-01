import React, { useMemo } from "react";

const AnimatedBackground = () => {
  const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
      color:
        i % 5 === 0
          ? "#ec4899"
          : i % 5 === 1
          ? "#8b5cf6"
          : i % 5 === 2
          ? "#6366f1"
          : i % 5 === 3
          ? "#2dd4bf"
          : "#0ea5e9",
    }));
  };

  const particles = useMemo(() => generateParticles(15), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-60">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 10px ${particle.color}`,
            filter: "blur(1px)",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-indigo-950/50 to-indigo-950/80" />
    </div>
  );
};

export default AnimatedBackground;
