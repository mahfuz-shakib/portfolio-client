import React from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";
import Container from "../container/Container";
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from "react-icons/fa";

const Footer = () => {
  const data = usePortfolioData();

  if (!data) return null;

  const { userInfo, socialLinks } = data;

  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    facebook: FaFacebook,
  };

  const currentYear = new Date().getFullYear();

  return (
    <section>
      <footer className="bg-[#15152054] py-12 border-t border-base-content/10 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
        <Container>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-32">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-base-content/70">
                © {currentYear} {userInfo.name}. All rights reserved.
              </p>
              {/* <p className="text-sm text-base-content/50 flex items-center justify-center md:justify-start gap-1 mt-1">
                Made with <FaHeart className="text-red-500" /> using React & Tailwind CSS
              </p> */}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
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
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-base-100 hover:bg-primary transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-base-content group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </Container>
      </footer>
    </section>
  );
};

export default Footer;
