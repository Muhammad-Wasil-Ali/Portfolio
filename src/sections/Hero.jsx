import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import mainProfileImg from "../assets/mainprofile.jpeg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const tagline = "Building scalable AI-driven web applications";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < tagline.length) {
        setDisplayedText(tagline.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black pt-20 pb-20"
    >
      {/* Animated background gradient */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8">
        {/* Centered Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto"
            style={{ width: 200, height: 200 }}
          >
            {/* Rotating glow circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, linear: true }}
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-[2px] opacity-60"
            >
              <div className="w-full h-full rounded-full bg-black" />
            </motion.div>

            {/* Profile Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={mainProfileImg}
              alt="Muhammad Wasil Ali"
              className="w-full h-full rounded-full object-cover relative z-10 border-2 border-gray-700 shadow-2xl"
            />

            {/* Outer rotating circle */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, linear: true }}
              className="absolute -inset-6 border border-blue-500 rounded-full opacity-30"
            />
          </motion.div>
        </motion.div>

        {/* Centered Content */}
        <div className="text-center max-w-2xl w-full">
          {/* Welcome message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-blue-400 text-sm font-medium mb-3"
          >
            Welcome to my portfolio
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2"
          >
            I'm <span className="gradient-text">Muhammad Wasil Ali</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-gray-300 mb-3"
          >
            AI-Powered Full Stack Developer
          </motion.h2>

          {/* Typed Tagline */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-400 text-sm sm:text-base min-h-6 mb-5"
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 px-2"
          >
            I specialize in creating innovative solutions with FastAPI, React, and modern web technologies. Let's collaborate to bring your ideas to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center w-full px-2 pb-10"
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <p className="text-gray-400 text-xs sm:text-sm mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div className="w-1 h-2 bg-blue-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
