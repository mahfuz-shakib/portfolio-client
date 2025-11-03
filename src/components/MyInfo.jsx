import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaDownload, FaCode, FaRocket, FaPalette } from "react-icons/fa";
import { usePortfolioData } from "../hooks/usePortfolioData";
import TypingEffect from "./TypingEffect";

const MyInfo = () => {
  const data = usePortfolioData();

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const { userInfo, socialLinks } = data;
  
  const typingStrings = [
    "Frontend Developer",
    "React Developer",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    facebook: FaFacebook,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 bg-gradient-to-br from-base-100 via-base-100 to-base-200 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full backdrop-blur-sm"
              >
                <FaCode className="text-primary animate-pulse" />
                <span className="text-primary font-semibold">{userInfo.role}</span>
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
                    {userInfo.name}
                  </span>
                </h1>
                
                <div className="h-16 md:h-20 flex items-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-base-content/80">
                    I'm a <span className="text-primary"><TypingEffect strings={typingStrings} /></span>
                  </h2>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-base-content/70 leading-relaxed max-w-lg">
                {userInfo.tagline}
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 p-6 bg-base-200/50 backdrop-blur-sm rounded-2xl border border-base-300"
            >
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <FaCode className="text-primary text-2xl" />
                </div>
                <div className="text-2xl font-bold text-base-content">2+</div>
                <div className="text-xs text-base-content/60 uppercase tracking-wide">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <FaRocket className="text-secondary text-2xl" />
                </div>
                <div className="text-2xl font-bold text-base-content">10+</div>
                <div className="text-xs text-base-content/60 uppercase tracking-wide">Projects</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <FaPalette className="text-accent text-2xl" />
                </div>
                <div className="text-2xl font-bold text-base-content">100%</div>
                <div className="text-xs text-base-content/60 uppercase tracking-wide">Creative</div>
              </div>
            </motion.div>

            {/* Location and Email */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-base-content/60">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>{userInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <span>{userInfo.email}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href={userInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg gap-2 group"
              >
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
              <a href="#contact" className="btn btn-outline btn-lg">
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon.toLowerCase()];
                if (!Icon) return null;

                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-base-300 hover:bg-primary transition-colors group"
                  >
                    <Icon className="w-6 h-6 text-base-content group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {/* Profile Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={userInfo.profileImage}
                  alt={userInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400?text=Profile+Image";
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/20 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl"
              >
                <FaCode className="text-white text-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyInfo;
