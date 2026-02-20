import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -15,
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      }}
      className="glass-effect rounded-xl overflow-hidden group hover:border-blue-500 transition-all duration-300 cursor-pointer"
    >
      {/* Project image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <motion.div
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/20 group-hover:text-white/40 transition-all">
          {project.icon || "💻"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.5)" }}
              className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 flex-wrap">
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: "0 5px 15px rgba(75, 85, 99, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-all text-sm font-medium shadow-md"
          >
            <FiGithub size={16} />
            Code
          </motion.a>

          {project.live && (
            <motion.a
              whileHover={{ scale: 1.08, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-sm font-medium shadow-md"
            >
              <FiExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
