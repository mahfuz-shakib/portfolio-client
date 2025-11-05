import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaDownload } from "react-icons/fa";
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

  const typingStrings = ["Frontend Developer", "React Developer", "UI/UX Enthusiast", "Problem Solver"];

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
      className="min-h-screen flex items-center justify-center pt-20 bg-[url('/alwaysGre.png')]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="gri grid-cols-1 lg:grid-cols-2 flex flex-col-reverse lg:flex-row justify-between  gap-12 lg:gap-48 items-center"
        >
          {/* Left Side - Text Content */}
          <div className="space-y-8 px-2 lg:px-0">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-block px- py-2 bg-primay/10 borde border-primary/20 rounded-full"
              >
                <span className="text-primar text-2xl font-semibold">Hi, I'm</span>
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-[32px] md:text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {userInfo.name}
                  </span>
                </h1>

                <div className="h-16 md:h-20 flex items-center">
                  <h2 className="text-xl md:text-3xl font-bold text-base-content/80">
                    I'm a{" "}
                    <span className="text-primary">
                      <TypingEffect texts={typingStrings} typingSpeed={100} eraseSpeed={50} delayBetween={1500} />
                    </span>
                  </h2>
                </div>
              </div>

              {/* <p className="text-xl text-base-content/70 leading-relaxed">{userInfo.tagline}</p> */}
            </motion.div>

            {/* Location and Email */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-base-content/60">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-fuchsia-800" />
                <span>{userInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-purple-600" />
                <span>{userInfo.email}</span>
              </div>
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

            
          </div>

          {/* Right Side - Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {/* Profile Image */}
              <div className="relative w-68 h-72 md:w-96 md:h-[396px] rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src={userInfo.profileImage}
                  alt={userInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x400?text=Profile%20Image";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyInfo;
