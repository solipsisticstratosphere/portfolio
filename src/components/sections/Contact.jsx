import React from "react";
import * as ReactMotion from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
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
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-10">
          <Mail className="text-indigo-400" size={32} />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Contact
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-center mb-10 text-gray-300">
            Interested in working together? Feel free to reach out through any
            of these channels:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ReactMotion.motion.a
              href="mailto:klimyarik13@gmail.com"
              className="flex items-center gap-4 p-6 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
              }}
            >
              <Mail size={24} className="text-pink-500" />
              <div>
                <h3 className="font-semibold text-gray-200">Email</h3>
                <p className="text-gray-400">klimyarik13@gmail.com</p>
              </div>
            </ReactMotion.motion.a>

            <ReactMotion.motion.a
              href="https://t.me/nosebl33d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
              }}
            >
              <MessageSquare size={24} className="text-pink-500" />
              <div>
                <h3 className="font-semibold text-gray-200">Telegram</h3>
                <p className="text-gray-400">@nosebl33d</p>
              </div>
            </ReactMotion.motion.a>
          </div>

          <div className="flex justify-center gap-6">
            <ReactMotion.motion.a
              href="https://github.com/solipsisticstratosphere"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                scale: 1.1,
                boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
              }}
              className="p-3 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-full shadow-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
            >
              <FaGithub size={24} className="text-pink-500" />
            </ReactMotion.motion.a>

            <ReactMotion.motion.a
              href="https://www.linkedin.com/in/klimenko-yaroslav/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                scale: 1.1,
                boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
              }}
              className="p-3 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-full shadow-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
            >
              <FaLinkedin size={24} className="text-pink-500" />
            </ReactMotion.motion.a>
          </div>
        </div>
      </ReactMotion.motion.div>
    </ReactMotion.motion.div>
  );
};

export default Contact;
