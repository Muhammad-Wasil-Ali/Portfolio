import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { FiMail, FiPhone } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const Contacts = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: SiGithub,
      url: "https://github.com/Muhammad-Wasil-Ali",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      url: "https://www.linkedin.com/in/muhammad-wasil-web-developer/",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: SiInstagram,
      url: "https://www.instagram.com/wasil_ali__?igsh=Mmc4MDRrM2Fkamww",
      color: "hover:text-pink-500",
    },
  ];

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: "dev.wasilali0@gmail.com",
      href: "mailto:dev.wasilali0@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Contact",
      value: "Let's Connect",
      href: "mailto:dev.wasilali0@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-96 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={method.href}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-xl text-center group cursor-pointer hover:border-blue-500 transition-all"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-1">
                  {method.label}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-center text-gray-400 mb-6">Follow Me</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`glass-effect p-4 rounded-full ${social.color} transition-colors hover:scale-110`}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* CTA message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="glass-effect p-8 rounded-xl text-center border-l-4 border-blue-500"
        >
          <p className="text-gray-300 mb-4">
            Whether you have a project idea, want to collaborate, or just want
            to say hi, drop me a message!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:dev.wasilali0@gmail.com"
            className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Send Me an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
