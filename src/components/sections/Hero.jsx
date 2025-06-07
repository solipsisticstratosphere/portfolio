import React from "react";
import * as ReactMotion from "framer-motion";
import { Mail, Briefcase } from "lucide-react";
import {
  buttonHoverAnimation,
  buttonTapAnimation,
} from "../../constants/animations";

const Hero = () => {
  return (
    <ReactMotion.motion.div
      className="min-h-screen flex flex-col justify-center px-8 md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        boxShadow: "inset 0 0 150px rgba(129, 140, 248, 0.2)",
      }}
    >
      <ReactMotion.motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
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
          <ReactMotion.motion.a
            href="#contact"
            whileHover={buttonHoverAnimation}
            whileTap={buttonTapAnimation}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl flex items-center gap-2 shadow-lg shadow-purple-500/20"
          >
            <Mail size={18} /> Contact Me
          </ReactMotion.motion.a>
          <ReactMotion.motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(129, 140, 248, 0.3)",
            }}
            whileTap={buttonTapAnimation}
            className="px-6 py-3 border border-indigo-500 text-indigo-300 rounded-xl flex items-center gap-2 backdrop-blur-sm bg-indigo-900/10"
          >
            <Briefcase size={18} /> View Projects
          </ReactMotion.motion.a>
        </div>
      </ReactMotion.motion.div>
    </ReactMotion.motion.div>
  );
};

export default Hero;
