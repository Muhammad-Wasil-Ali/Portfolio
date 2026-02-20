import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import gymImg from "../assets/bicep.jpeg";

const Hobbies = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const hobbies = [
    {
      title: "Gym & Fitness",
      description: "I love hitting the gym daily to stay fit and energized. Fitness is not just a routine, it's a lifestyle.",
      icon: "💪",
    },
    {
      title: "AI/ML & Tech",
      description: "Always exploring new technologies, frameworks, and AI concepts. Passionate about building intelligent systems.",
      icon: "🤖",
    },
    {
      title: "Gaming",
      description: "I enjoy gaming as a way to unwind and challenge my problem-solving skills in interactive environments.",
      icon: "🎮",
    },
    {
      title: "Problem Solving",
      description: "I enjoy tackling complex problems and finding elegant solutions to real-world challenges.",
      icon: "🧩",
    },
  ];

  return (
    <section
      id="hobbies"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Hobbies & Interests
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <p className="text-gray-400 mt-4">Things I'm passionate about beyond coding</p>
        </motion.div>

        {/* Main Grid: Left Image, Right Hobby Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Left - Gym Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
            className="relative min-h-96 sm:min-h-[480px] rounded-xl overflow-hidden glass-effect border border-gray-700 shadow-lg bg-gray-900 flex items-center justify-center"
          >
            <motion.img
              src={gymImg}
              alt="Gym and Fitness"
              className="w-full h-full object-contain p-4"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
            <motion.div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-gray-100 text-sm sm:text-base font-medium">
                Consistent training & disciplined lifestyle
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Hobby Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-3 h-fit lg:sticky lg:top-24"
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                }}
                className="glass-effect p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-3xl flex-shrink-0 mt-1"
                  >
                    {hobby.icon}
                  </motion.span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
