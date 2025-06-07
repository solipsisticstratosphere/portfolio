import React from "react";

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-indigo-500 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-40 w-96 h-96 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      <div className="absolute bottom-40 right-40 w-96 h-96 rounded-full bg-cyan-500 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000" />
    </div>
  );
};

export default GeometricBackground;
