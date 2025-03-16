import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Code,
  User,
  Briefcase,
  PenTool,
  Mail,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Server,
  Database,
  Globe,
  Layers,
  Eye,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const skills = [
    { name: "React", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "Express", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 78 },
    { name: "GraphQL", level: 60 },
  ];

  const projects = [
    {
      title: "Learn Lingo",
      description:
        "A full-featured language learning platform connecting students with professional instructors through smart search, personalized profiles, a favorites system, and secure Firebase-powered authentication.",
      technologies: ["React", "Redux", "Vite", "React Hook Form", "Firebase"],
      demoLink: "https://learn-lingo-nu-ten.vercel.app/",
      repoLink: "https://github.com/solipsisticstratosphere/LearnLingo",
    },
    {
      title: "Travel Trucks",
      description:
        "An online platform for discovering camper vans, featuring intuitive filters for selecting vehicles by type, location, and amenities, along with detailed specifications, user reviews, a favorites list, and a convenient booking form.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      demoLink: "https://travel-trucks-navy.vercel.app/",
      repoLink: "https://github.com/solipsisticstratosphere/TravelTrucks",
    },
    {
      title: "Read Journey",
      description:
        "A sophisticated web platform that transforms your reading experience with personal library management, reading progress tracking, tailored book recommendations, and a seamless, secure interface powered by MongoDB and React.",
      technologies: [
        "React",
        "Node.js",
        "Redux",
        "MongoDB Atlas",
        "Express",
        "AWS S3",
        "Cloudinary",
      ],
      demoLink: "https://read-journey-umber.vercel.app/register",
      repoLink: "https://github.com/solipsisticstratosphere/ReadJourney",
    },
    {
      title: "Finance Manager",
      description:
        "A full-featured web application designed to help users effectively analyze and control their personal finances. With a sleek and intuitive interface, users can manage expenses, track income, and gain valuable insights into their financial health.",
      technologies: [
        "React",
        "Redux",
        "MongoDB",
        "Google OAuth",
        "Monobank API",
        "TensorFlow.js",
        "Node.js",
        "Express",
        "Recharts",
      ],
      demoLink: "https://finance-manager-front.vercel.app/landing",
      repoLink:
        "https://github.com/solipsisticstratosphere/FinanceManager-front",
    },
    {
      title: "Napkin-mini",
      description:
        "A powerful web application that transforms text descriptions into interactive visualizations, featuring text preprocessing, relationship parsing, and dynamic graph generation with ReactFlow, powered by microservices and Axios for seamless API integration.",
      technologies: [
        "React",
        "Microservices Architecture",
        "React Flow",
        "Axios",
        "Node.js",
        "Express",
        "Blob",
      ],
      demoLink: "https://napkin-mini.vercel.app/",
      repoLink: "https://github.com/solipsisticstratosphere/Napkin-mini",
    },
  ];

  const Hero = () => (
    <motion.div
      className="min-h-screen flex flex-col justify-center px-8 md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "linear-gradient(135deg, #121212 0%, #1e1e1e 100%)",
        boxShadow: "inset 0 0 100px rgba(79, 70, 229, 0.1)",
      }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
          Full Stack Developer
        </h1>
        <h2 className="text-3xl md:text-4xl text-gray-400 mb-6">
          Building complex web applications from server to client
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
          I develop scalable and high-performance applications using modern
          JavaScript stack: React, MongoDB, Node.js, and Express.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md flex items-center gap-2"
            onClick={() => setActiveSection("contact")}
          >
            <Mail size={18} /> Contact Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-md flex items-center gap-2"
            onClick={() => setActiveSection("projects")}
          >
            <Briefcase size={18} /> View Projects
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

  const About = () => (
    <motion.div
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-12">
          <User className="text-indigo-500" size={32} />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
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

          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-200">
              My experience includes:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-indigo-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Developing full-stack applications using React, Node.js,
                  Express, and MongoDB
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-indigo-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Designing and optimizing NoSQL databases and creating
                  efficient APIs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-indigo-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Integrating third-party APIs and services (payment systems,
                  authentication, cloud storage)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-indigo-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Developing responsive interfaces using modern frameworks and
                  libraries
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-indigo-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300">
                  Implementing data fetching and state management in React
                  applications
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight
                  className="text-indigo-500 mt-1 flex-shrink-0"
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
      </motion.div>
    </motion.div>
  );

  const Projects = () => (
    <motion.div
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-12">
          <Briefcase className="text-indigo-500" size={32} />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 shadow-lg shadow-indigo-500/10"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-center text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-center text-gray-500 mb-2">
                    Technologies used:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-indigo-900 bg-opacity-50 text-indigo-300 text-xs rounded-full border border-indigo-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-3 mt-4">
                  <button
                    className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    <Eye size={14} /> View Preview
                  </button>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={24} className="text-gray-200" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
  const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
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
          <div className="p-4">
            <img
              src={`/screenshots/${project.title
                .toLowerCase()
                .replace(/\s+/g, "-")}.png`}
              alt={`${project.title} screenshot`}
              className="w-full h-auto rounded"
              onError={(e) => {
                e.target.src = "/api/placeholder/800/500";
                e.target.alt = "Screenshot not available";
              }}
            />
            <div className="mt-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md inline-flex items-center gap-2 mr-4"
              >
                <ExternalLink size={16} /> Visit Website
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-indigo-500 text-indigo-400 hover:text-indigo-300 rounded-md inline-flex items-center gap-2"
              >
                <FaGithub size={16} /> View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };
  const Skills = () => (
    <motion.div
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-12">
          <PenTool className="text-indigo-500" size={32} />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
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
                <motion.div
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
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 1.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
              Technology Stack
            </h3>
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 rounded-lg border border-gray-700">
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
                      <stop offset="0%" stopColor="#8b5cf6" />
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
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-lg border border-gray-700">
                  <Server size={16} className="text-indigo-500" />
                  <span className="text-gray-300">RESTful API</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-lg border border-gray-700">
                  <Database size={16} className="text-indigo-500" />
                  <span className="text-gray-300">MongoDB</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-lg border border-gray-700">
                  <Layers size={16} className="text-indigo-500" />
                  <span className="text-gray-300">Microservices</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-lg border border-gray-700">
                  <Globe size={16} className="text-indigo-500" />
                  <span className="text-gray-300">WebSockets</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-lg border border-gray-700">
                  <Code size={16} className="text-indigo-500" />
                  <span className="text-gray-300">Docker</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-lg border border-gray-700">
                  <Server size={16} className="text-indigo-500" />
                  <span className="text-gray-300">AWS/Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const Contact = () => (
    <motion.div
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-10">
          <Mail className="text-indigo-500" size={32} />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
            Contact
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-center mb-10 text-gray-300">
            Interested in working together? Feel free to reach out through any
            of these channels:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="mailto:klimyarik13@gmail.com"
              className="flex items-center gap-4 p-6 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg border border-gray-700 hover:border-indigo-700 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Mail size={24} className="text-indigo-500" />
              <div>
                <h3 className="font-semibold text-gray-200">Email</h3>
                <p className="text-gray-400">klimyarik13@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://t.me/nosebl33d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg border border-gray-700 hover:border-indigo-700 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <MessageSquare size={24} className="text-indigo-500" />
              <div>
                <h3 className="font-semibold text-gray-200">Telegram</h3>
                <p className="text-gray-400">@nosebl33d</p>
              </div>
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/solipsisticstratosphere"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
              className="p-3 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-full shadow-lg border border-gray-700 hover:border-indigo-600 transition-all duration-300"
            >
              <FaGithub size={24} className="text-indigo-500" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/klimenko-yaroslav/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
              className="p-3 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-full shadow-lg border border-gray-700 hover:border-indigo-600 transition-all duration-300"
            >
              <FaLinkedin size={24} className="text-indigo-500" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-gray-100 min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-gray-800 shadow-lg shadow-black/20 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveSection("hero")}
              style={{ cursor: "pointer" }}
            >
              <span className="text-indigo-500">FullStack</span>
              <span className="text-gray-200">Dev</span>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveSection("about")}
                className={`${
                  activeSection === "about"
                    ? "text-indigo-400"
                    : "text-gray-400"
                } hover:text-indigo-400 transition-colors duration-300`}
              >
                About Me
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className={`${
                  activeSection === "projects"
                    ? "text-indigo-400"
                    : "text-gray-400"
                } hover:text-indigo-400 transition-colors duration-300`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection("skills")}
                className={`${
                  activeSection === "skills"
                    ? "text-indigo-400"
                    : "text-gray-400"
                } hover:text-indigo-400 transition-colors duration-300`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveSection("contact")}
                className={`${
                  activeSection === "contact"
                    ? "text-indigo-400"
                    : "text-gray-400"
                } hover:text-indigo-400 transition-colors duration-300`}
              >
                Contact
              </button>
            </nav>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-gray-400"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </header>

      <main className="pt-16">{renderSection()}</main>
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} FullStack Developer Portfolio. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
