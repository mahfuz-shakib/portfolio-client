import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Container from '../container/Container';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
                            >
                                {/* Thumbnail */}
                                <figure className="relative overflow-hidden">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/600x400?text=Project+Image';
                                        }}
                                    />
                                    {project.isFeatured && (
                                        <div className="absolute top-4 right-4 badge badge-primary gap-2">
                                            <FaStar />
                                            Featured
                                        </div>
                                    )}
                                </figure>

                                {/* Card Body */}
                                <div className="card-body">
                                    <h3 className="card-title text-2xl">{project.title}</h3>
                                    <p className="text-base-content/70 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 my-4">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="badge badge-primary badge-outline"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-sm uppercase tracking-wide text-base-content/60">
                                            Key Features:
                                        </h4>
                                        <ul className="space-y-1">
                                            {project.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2 text-sm text-base-content/80">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="card-actions justify-end mt-6">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary gap-2"
                                        >
                                            <FaExternalLinkAlt />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline btn-primary gap-2"
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