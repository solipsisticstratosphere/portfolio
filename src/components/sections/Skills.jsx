import React from "react";
import * as ReactMotion from "framer-motion";
import { PenTool, Server, Database, Globe, Layers, Code } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { skills } from "../../data/skills";

const Skills = () => {
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
          <PenTool className="text-indigo-400" size={32} />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <ReactMotion.motion.div
                  key={index}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.1 * index, duration: 0.8 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                    <ReactMotion.motion.div
                      className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 1.2 }}
                    />
                  </div>
                </ReactMotion.motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
              Technology Stack
            </h3>
            <div className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-xl shadow-purple-500/5">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skills}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      borderColor: "#374151",
                      color: "#e5e7eb",
                    }}
                    cursor={{ fill: "rgba(50, 50, 50, 0.3)" }}
                    itemStyle={{ color: "#e5e7eb" }}
                    labelStyle={{ color: "#e5e7eb" }}
                  />
                  <Bar dataKey="level" fill="url(#colorGradient)" />
                  <defs>
                    <linearGradient
                      id="colorGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
                Specializations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm p-3 rounded-xl border border-gray-700 shadow-lg shadow-purple-500/5 hover:border-pink-500/50 transition-all duration-300">
                  <Server size={16} className="text-pink-500" />
                  <span className="text-gray-300">RESTful API</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm p-3 rounded-xl border border-gray-700 shadow-lg shadow-purple-500/5 hover:border-pink-500/50 transition-all duration-300">
                  <Database size={16} className="text-pink-500" />
                  <span className="text-gray-300">MongoDB</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm p-3 rounded-xl border border-gray-700 shadow-lg shadow-purple-500/5 hover:border-pink-500/50 transition-all duration-300">
                  <Layers size={16} className="text-pink-500" />
                  <span className="text-gray-300">Microservices</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm p-3 rounded-xl border border-gray-700 shadow-lg shadow-purple-500/5 hover:border-pink-500/50 transition-all duration-300">
                  <Globe size={16} className="text-pink-500" />
                  <span className="text-gray-300">WebSockets</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm p-3 rounded-xl border border-gray-700 shadow-lg shadow-purple-500/5 hover:border-pink-500/50 transition-all duration-300">
                  <Code size={16} className="text-pink-500" />
                  <span className="text-gray-300">Docker</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm p-3 rounded-xl border border-gray-700 shadow-lg shadow-purple-500/5 hover:border-pink-500/50 transition-all duration-300">
                  <Server size={16} className="text-pink-500" />
                  <span className="text-gray-300">AWS/Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactMotion.motion.div>
    </ReactMotion.motion.div>
  );
};

export default Skills;
