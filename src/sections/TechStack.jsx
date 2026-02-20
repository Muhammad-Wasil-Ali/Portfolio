import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const TechStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const techCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61dafb" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "React Native", icon: TbBrandReactNative, color: "#61dafb" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06b6d4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "FastAPI", icon: SiPython, color: "#009688" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#00ed64" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
        { name: "Python", icon: SiPython, color: "#3776ab" },
        { name: "C++", icon: SiCplusplus, color: "#00599c" },
      ],
    },
    {
      title: "Deployment",
      skills: [
        { name: "Vercel", icon: SiVercel, color: "#ffffff" },
        { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Tech Stack
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <p className="text-gray-400 mt-4">Technologies I work with daily</p>
        </motion.div>

        {/* Tech categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-gray-300 mb-6">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              >
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: `0 0 20px ${skill.color}40`,
                      }}
                      className="glass-effect p-6 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer group hover:border-gray-700 transition-all"
                    >
                      <Icon
                        size={40}
                        color={skill.color}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <p className="text-gray-300 text-sm text-center font-medium">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
