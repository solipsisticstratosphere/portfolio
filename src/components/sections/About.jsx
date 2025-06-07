import React from "react";
import * as ReactMotion from "framer-motion";
import { User, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <ReactMotion.motion.div
      className="flex flex-col justify-center px-8 md:px-16 py-24"
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
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-12">
          <User className="text-indigo-400" size={32} />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-4 text-gray-300">
              I am a Junior Full Stack developer with a focus on building modern
              web applications. My expertise lies in the MERN stack (MongoDB,
              Express, React, Node.js), with experience in developing both
              small-scale projects and gaining practical knowledge through
              coursework and personal projects.
            </p>
            <p className="text-lg mb-4 text-gray-300">
              My approach revolves around learning to design robust and scalable
              backend architecture while ensuring a responsive and intuitive
              user interface. I aim to follow Clean Code principles and
              gradually improve my understanding of security and performance
              optimization.
            </p>
            <p className="text-lg text-gray-300">
              In addition to my core development work, I actively explore new
              technologies like Next.js and TypeScript, create pet projects, and
              participate in team-based projects to enhance my skills.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-xl shadow-purple-500/5">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-200">
              My experience includes:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-pink-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Developing full-stack applications using React, Node.js,
                  Express, and MongoDB
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-pink-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Designing and optimizing NoSQL databases and creating
                  efficient APIs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-pink-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Integrating third-party APIs and services (payment systems,
                  authentication, cloud storage)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-pink-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Developing responsive interfaces using modern frameworks and
                  libraries
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-pink-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Implementing data fetching and state management in React
                  applications
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-pink-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Implementing best practices for security and performance
                  optimization
                </span>
              </li>
            </ul>
          </div>
        </div>
      </ReactMotion.motion.div>
    </ReactMotion.motion.div>
  );
};

export default About;
