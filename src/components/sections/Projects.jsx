import React, { useState } from "react";
import * as ReactMotion from "framer-motion";
import { Briefcase } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

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
          <Briefcase className="text-indigo-400" size={32} />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      </ReactMotion.motion.div>

      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </ReactMotion.motion.div>
  );
};

export default Projects;
