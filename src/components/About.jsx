import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Container from '../container/Container';
import { FaHeart, FaBrain, FaUsers, FaChartLine, FaLightbulb, FaCode, FaRocket, FaMagic } from 'react-icons/fa';

const About = () => {
    const data = usePortfolioData();

    if (!data || !data.about) return null;

    const { about } = data;
    const skillCategories = Array.isArray(data?.skills) ? data.skills : [];

    const strengthIcons = {
        'Analytical Thinking': FaBrain,
        'Problem Solving': FaChartLine,
        'Team Collaboration': FaUsers,
        'Adaptability': FaHeart,
    };

    const interestIcons = {
        'UI/UX Design': FaMagic,
        'Open Source Contribution': FaCode,
        'Tech Blogging': FaRocket,
        'Football': FaHeart,
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="about" className="py-20 bg-base-200">
            <Container>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Learn more about my journey, interests, and what drives me
                        </p>
                    </motion.div>

                    {/* Main Description Card */}
                    <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                        <div className="card bg-base-100 shadow-2xl border border-base-300 overflow-hidden">
                            <div className="card-body p-8 md:p-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                                        <FaCode className="text-white text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-base-content mb-3">
                                            My Story
                                        </h3>
                                        <div className="space-y-4">
                                            <p className="text-base text-base-content/80 leading-relaxed">
                                                {about.intro}
                                            </p>
                                            <p className="text-base text-base-content/80 leading-relaxed">
                                                {about.longDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interests and Strengths Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Interests Card */}
                        <motion.div 
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden group"
                        >
                            <div className="card-body p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FaHeart className="text-primary text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary">My Interests</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {about.interests.map((interest, index) => {
                                        const Icon = interestIcons[interest] || FaLightbulb;
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.1, y: -3 }}
                                                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-full hover:border-primary/40 transition-all cursor-default"
                                            >
                                                <Icon className="text-primary text-sm" />
                                                <span className="text-sm font-medium text-base-content">{interest}</span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Strengths Card */}
                        <motion.div 
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden group"
                        >
                            <div className="card-body p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FaChartLine className="text-secondary text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary">Core Strengths</h3>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    {about.strengths.map((strength, index) => {
                                        const Icon = strengthIcons[strength] || FaLightbulb;
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ x: -30, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                whileHover={{ x: 5, backgroundColor: "rgba(var(--p), 0.05)" }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center gap-3 p-4 rounded-xl bg-base-200 hover:bg-base-300 transition-all cursor-pointer group/item"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                                    <Icon className="text-white text-sm" />
                                                </div>
                                                <span className="font-semibold text-base-content flex-1">{strength}</span>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                                    className="h-1 bg-gradient-to-r from-secondary to-primary rounded-full"
                                                />
                                            </motion.div>
                                        );
                                    })}
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