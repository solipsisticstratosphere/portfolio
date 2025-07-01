import React, { useEffect, useRef } from "react";
import { Mail, Briefcase } from "lucide-react";

const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.setAttribute("importance", "high");

      headingRef.current.getBoundingClientRect();
    }
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center px-8 md:px-16"
      style={{
        boxShadow: "inset 0 0 150px rgba(129, 140, 248, 0.2)",
        contain: "layout",
        contentVisibility: "auto",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ec4899, #8b5cf6, #6366f1)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            willChange: "transform",
            fontDisplay: "swap",
          }}
        >
          Yaroslav Klimenko - Full Stack Developer
        </h1>
        <h2 className="text-3xl md:text-4xl text-gray-300 mb-6">
          Building complex web applications from server to client
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
          I'm Yaroslav Klimenko, a Full Stack Developer focused on building
          scalable and high-performance applications using modern JavaScript
          stack: React, PostgreSQL, Next.js, Node.js, and Express.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 text-white rounded-xl flex items-center gap-2 shadow-lg"
            style={{
              background:
                "linear-gradient(to right, #ec4899, #8b5cf6, #6366f1)",
              boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.2)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Mail size={18} /> Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 text-indigo-300 rounded-xl flex items-center gap-2 backdrop-blur-sm"
            style={{
              border: "1px solid #6366f1",
              backgroundColor: "rgba(79, 70, 229, 0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Briefcase size={18} /> View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
