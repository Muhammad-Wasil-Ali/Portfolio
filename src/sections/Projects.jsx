import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "E-Commerce MERN App",
      description:
        "Full-stack e-commerce platform with product catalog, shopping cart, and payment integration using Stripe.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/Muhammad-Wasil-Ali",
      live: null,
      icon: "🛒",
    },
    {
      title: "Online E-Learning Web App",
      description:
        "Comprehensive learning platform featuring video courses, assignments, progress tracking, and certificates.",
      tech: ["React", "Firebase", "Node.js", "Tailwind"],
      github: "https://github.com/Muhammad-Wasil-Ali",
      live: null,
      icon: "📚",
    },
    {
      title: "Data Structures & Algorithms in C++",
      description:
        "Educational repository with implementations of DSA concepts and interview preparation solutions.",
      tech: ["C++", "Algorithms", "Data Structures"],
      github: "https://github.com/Muhammad-Wasil-Ali",
      live: null,
      icon: "🔧",
    },
    {
      title: "FastAPI and MongoDB Schema Design",
      description:
        "REST API backend with FastAPI featuring advanced MongoDB schema patterns, validation, and best practices.",
      tech: ["FastAPI", "Python", "MongoDB", "Pydantic"],
      github: "https://github.com/Muhammad-Wasil-Ali",
      live: null,
      icon: "⚡",
    },
    {
      title: "MERN Job Portal",
      description:
        "Job search platform with job listings, user profiles, applications tracking, and employer dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Muhammad-Wasil-Ali",
      live: null,
      icon: "💼",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <p className="text-gray-400 mt-4">
            Showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Muhammad-Wasil-Ali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View More on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
