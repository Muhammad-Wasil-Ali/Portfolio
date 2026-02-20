import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const GitHubStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="github-stats"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            GitHub Stats
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        {/* GitHub Stats Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8"
        >
          {/* Stats card 1 */}
          <div className="glass-effect p-6 rounded-xl flex justify-center overflow-x-auto">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Muhammad-Wasil-Ali&show_icons=true&theme=dark&hide_border=true"
              alt="GitHub Stats"
              className="w-full max-w-2xl"
            />
          </div>

          {/* Stats card 2 */}
          <div className="glass-effect p-6 rounded-xl flex justify-center overflow-x-auto">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=Muhammad-Wasil-Ali&theme=dark&hide_border=true"
              alt="GitHub Streak"
              className="w-full max-w-2xl"
            />
          </div>

          {/* Stats card 3 */}
          <div className="glass-effect p-6 rounded-xl flex justify-center overflow-x-auto">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Muhammad-Wasil-Ali&layout=compact&theme=dark&hide_border=true"
              alt="Top Languages"
              className="w-full max-w-2xl"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Check out more of my work on GitHub
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Muhammad-Wasil-Ali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Visit GitHub Profile
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

export default GitHubStats;
