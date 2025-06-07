import React, { memo } from "react";
import * as ReactMotion from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Eye, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  cardHoverAnimation,
  cardEntryAnimation,
} from "../../constants/animations";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ProjectCard = memo(({ project, index, onProjectClick }) => {
  return (
    <ReactMotion.motion.div
      key={`project-${project.title}`}
      className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300"
      whileHover={cardHoverAnimation}
      initial={cardEntryAnimation.initial}
      animate={cardEntryAnimation.animate}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      onClick={() => onProjectClick(project)}
    >
      <div className="project-preview h-48 bg-gray-900 overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full w-full"
          preventClicks={false}
          onClick={() => false}
        >
          {[1, 2, 3].map((num) => (
            <SwiperSlide key={num}>
              <img
                src={`/screenshots/${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}-${num}.png`}
                alt={`${project.title} screenshot ${num}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x500/1f2937/6366f1?text=${encodeURIComponent(
                    project.title
                  )}`;
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3 h-18">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-center text-gray-400 mb-2">
            Technologies used:
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-800 bg-opacity-60 text-pink-400 text-xs rounded-full border border-pink-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-5">
          <button
            className="flex items-center gap-1 text-pink-400 hover:text-pink-300 text-xs font-medium transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onProjectClick(project);
            }}
          >
            <Eye size={14} /> View Preview
          </button>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} /> Demo
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </ReactMotion.motion.div>
  );
});

export default ProjectCard;
