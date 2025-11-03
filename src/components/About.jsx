import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Container from '../container/Container';
import { FaHeart, FaBrain, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
    const data = usePortfolioData();

    if (!data || !data.about) return null;

    const { about } = data;

    const strengthIcons = {
        'Analytical Thinking': FaBrain,
        'Problem Solving': FaChartLine,
        'Team Collaboration': FaUsers,
        'Adaptability': FaHeart,
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
        <section id="about" className="py-20 bg-base-100">
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
                            About <span className="text-primary">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto"></div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-lg text-base-content/80 leading-relaxed">
                                    {about.intro}
                                </p>
                                <p className="text-lg text-base-content/80 leading-relaxed">
                                    {about.longDescription}
                                </p>
                            </div>
                        </motion.div>

                        {/* Interests and Strengths */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            {/* Interests */}
                            <div className="card bg-base-200 shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title text-primary mb-4">
                                        <FaHeart className="mr-2" />
                                        Interests
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {about.interests.map((interest, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="badge badge-lg badge-primary badge-outline"
                                            >
                                                {interest}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Strengths */}
                            <div className="card bg-base-200 shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title text-primary mb-4">Core Strengths</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {about.strengths.map((strength, index) => {
                                            const Icon = strengthIcons[strength] || FaHeart;
                                            return (
                                                <motion.div
                                                    key={index}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-center gap-3 p-3 rounded-lg bg-base-100 hover:bg-base-300 transition-colors"
                                                >
                                                    <Icon className="text-primary text-xl" />
                                                    <span className="font-medium">{strength}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default About;