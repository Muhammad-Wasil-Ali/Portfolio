import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-gray-400 text-sm">
          © {currentYear} Muhammad Wasil Ali. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with React, Vite, Tailwind CSS, and Framer Motion
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
