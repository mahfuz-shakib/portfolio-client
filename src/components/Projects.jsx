import React from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";
import Container from "../container/Container";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

const Projects = () => {
  const data = usePortfolioData();

  if (!data || !data.projects) return null;

  const { projects } = data;

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-base-100">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Showcasing my recent work and creative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.01 }}
                className="card bg-[#15152054] shadow-2xl transition-all overflow-hidden group border border-purple-800"
                style={{
                //   background: "linear-gradient(180deg, hsl(var(--b2)) 0%, hsl(var(--b1)) 100%)",
                  // border: '1px solid hsl(var(--bc) / .15)',
                  boxShadow: "0 10px 40px -10px hsl(var(--p) / .35)",
                }}
              >
                {/* Thumbnail */}
                <figure className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x400?text=Project%20Image";
                    }}
                  />
                  {project.isFeatured && (
                    <div className="absolute top-4 right-4 badge badge-primary gap-2 shadow-lg">
                      <FaStar />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </figure>

                {/* Card Body */}
                <div className="card-body p-6">
                  <h3 className="card-title text-2xl">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="badge badge-outline">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  {/* <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-base-content/60">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-base-content/80">
                          <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary inline-block" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}

                  {/* Action Buttons */}
                  <div className="w-full flex justify-center space-x-3 mt-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-2/5 btn btn-primary gap-2 shadow-md hover:shadow-primary/40"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-2/5 btn btn-outline btn-primary gap-2"
                    >
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
