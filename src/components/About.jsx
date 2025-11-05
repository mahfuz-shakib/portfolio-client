import React from "react";
import { motion } from "framer-motion";
import Container from "../container/Container";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { FaBrain, FaUsers, FaChartLine, FaHeart, FaLightbulb } from "react-icons/fa";

const iconMap = {
  "Analytical Thinking": FaBrain,
  "Problem Solving": FaChartLine,
  "Team Collaboration": FaUsers,
  "Adaptability": FaHeart,
};

const About = () => {
  const data = usePortfolioData();
  if (!data?.about) return null;

  const { about } = data;

  return (
    <section id="about" className="py-24">
      <Container>
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-">
            About <span className="text-primary">Me</span>
          </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>

          <p className="text-base-content/70 max-w-xl mx-auto text-lg">
            A quick glimpse into who I am, what I do & what drives me.
          </p>
        </div>

          {/* Right Story Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-5xl mx-auto"
          >
            <div className="bg-[#15152054] shadow-xl border border-purple-800 rounded-2xl p-8 hover:scale-101">
              <h3 className="text-xl font-bold mb-3">My Journey</h3>
              <p className="text-base-content/80 leading-relaxed">{about.intro}</p>
              <p className="text-base-content/80 mt-3 leading-relaxed">{about.longDescription}</p>
            </div>
          </motion.div>

        {/* Strengths + Interests */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Strengths */}
          <div className="bg-[#15152054]  shadow-lg rounded-2xl border border-purple-800 p-8 hover:scale-101">
            <h3 className="text-xl font-bold mb-5 text-secondary">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-5">
              {about.strengths.map((strength, idx) => {
                const Icon = iconMap[strength] || FaLightbulb;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full flex justify-center items-center gap-2 text-sm font-medium"
                  >
                    <Icon className="text-secondary" /> {strength}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-[#15152054] shadow-lg rounded-2xl border border-purple-800 p-8 hover:scale-101">
            <h3 className="text-xl font-bold mb-5 text-primary">Interests</h3>
            <div className="grid grid-cols-2 gap-5">
              {about.interests.map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 text-center rounded-full text-sm font-medium text-primary"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
