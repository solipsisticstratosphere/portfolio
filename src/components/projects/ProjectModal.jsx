import React, { memo } from "react";
import * as ReactMotion from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  modalBackdropAnimation,
  modalContentAnimation,
} from "../../constants/animations";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ProjectModal = memo(({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <ReactMotion.AnimatePresence>
      {isOpen && (
        <ReactMotion.motion.div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial={modalBackdropAnimation.initial}
          animate={modalBackdropAnimation.animate}
          exit={modalBackdropAnimation.exit}
          transition={modalBackdropAnimation.transition}
          onClick={onClose}
        >
          <ReactMotion.motion.div
            className="bg-gray-800 bg-opacity-90 rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl shadow-purple-500/20 border border-gray-700"
            initial={modalContentAnimation.initial}
            animate={modalContentAnimation.animate}
            exit={modalContentAnimation.exit}
            transition={modalContentAnimation.transition}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                {project.title}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="modal-slider mb-6">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="w-full rounded-lg overflow-hidden shadow-lg shadow-black/30"
                  style={{ height: "400px" }}
                  preventClicks={false}
                  onClick={() => false}
                >
                  {[1, 2, 3, 4].map((num) => (
                    <SwiperSlide key={num}>
                      <img
                        src={`/screenshots/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}-${num}.png`}
                        alt={`${project.title} screenshot ${num}`}
                        className="w-full h-full object-contain bg-gray-900"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/1200x800/1f2937/6366f1?text=${encodeURIComponent(
                            project.title
                          )}`;
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">
                  Technologies used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 bg-opacity-80 text-pink-400 text-xm rounded-full border border-pink-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl inline-flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
                >
                  <ExternalLink size={16} /> Visit Website
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-pink-500/50 text-pink-400 hover:text-pink-300 rounded-xl inline-flex items-center gap-2 hover:border-pink-500 transition-all duration-300"
                >
                  <FaGithub size={16} /> View Code
                </a>
              </div>
            </div>
          </ReactMotion.motion.div>
        </ReactMotion.motion.div>
      )}
    </ReactMotion.AnimatePresence>
  );
});

export default ProjectModal;
