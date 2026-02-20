import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {/* Left - Main content */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                What I Do
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about building AI-powered full stack applications
                using cutting-edge technologies. My expertise spans from
                designing scalable REST APIs with FastAPI & MongoDB to creating
                responsive UIs with React.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                Current Focus
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-purple-400">▹</span>
                  Building scalable REST APIs with FastAPI & MongoDB
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">▹</span>
                  Collaborating on AI/ML projects (chatbots, recommenders, AI
                  assistants)
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">▹</span>
                  Developing SaaS products using MERN or FastAPI
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">▹</span>
                  Learning Generative AI (LLMs, RAG, Agents, Fine Tuning)
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right - Additional info */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                Technical Interests
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-purple-400">▹</span>
                  FastAPI + MongoDB with Beanie ORM
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">▹</span>
                  Real-time applications & WebSockets
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">▹</span>
                  Database schema design & optimization
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl border-l-4 border-blue-500"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-3">
                Fun Fact
              </h3>
              <p className="text-gray-300 italic">
                "I overthink everything — but that's how I learn anything 😄"
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Key achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14 mb-16"
        >
          {[
            { label: "Projects", value: "10+" },
            { label: "Happy Clients", value: "5+" },
            { label: "Years Learning", value: "3+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl text-center hover:border-blue-500 transition-colors"
            >
              <p className="text-2xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Backend Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Backend Expertise
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <p className="text-gray-400 mt-3">
              Core backend technologies & skills
            </p>
          </div>

          {/* Backend Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Backend Frameworks */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-4">
                Backend Frameworks
              </h4>
              <div className="flex flex-wrap gap-3">
                {["FastAPI", "Node.js", "Express.js", "REST APIs"].map(
                  (skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                      }}
                      className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ),
                )}
              </div>
            </motion.div>

            {/* APIs & Integration */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-4">
                API & Integration
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "RESTful APIs",
                  "GraphQL",
                  "WebSockets",
                  "API Authentication",
                  "Middleware",
                  "Error Handling",
                ].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.3)",
                    }}
                    className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Databases & Storage */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-4">
                Databases & Storage
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "MongoDB",
                  "Beanie ORM",
                  "Schema Design",
                  "Query Optimization",
                  "Data Modeling",
                ].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.3)",
                    }}
                    className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* MERN Stack */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-4">
                MERN Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "MongoDB",
                  "Express.js",
                  "React",
                  "Node.js",
                  "Full Stack Integration",
                ].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.3)",
                    }}
                    className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Advanced Backend Concepts */}
            {/* <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Advanced Concepts</h4>
              <div className="flex flex-wrap gap-3">
                {["Scalability", "Concurrency", "Caching", "Rate Limiting", "Load Balancing", "Microservices", "Async Programming"].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                    className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
