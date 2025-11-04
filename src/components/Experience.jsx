import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Container from '../container/Container';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
    const data = usePortfolioData();

    if (!data || !data.experience) return null;

    const { experience } = data;

    const formatDate = (dateString) => {
        const [year, month] = dateString.split('-');
        const date = new Date(year, month - 1);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
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
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="experience" className="py-20 bg-base-200">
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
                            Work <span className="text-primary">Experience</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            My professional journey and contributions
                        </p>
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div variants={itemVariants} className="card shadow-2xl border border-base-300/60"
                        style={{ background: 'linear-gradient(180deg, hsl(var(--b2)) 0%, hsl(var(--b1)) 100%)' }}
                    >
                        <div className="card-body p-8">
                            <div className="flex items-start gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                                        <FaBriefcase className="text-primary text-2xl" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold">{experience.role}</h3>
                                        <p className="text-xl text-primary font-semibold">{experience.company}</p>
                                    </div>

                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-base-content/70">
                                        <FaCalendarAlt />
                                        <span>
                                            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                                        </span>
                                    </div>

                                    {/* Responsibilities */}
                                    <div>
                                        <h4 className="font-semibold text-lg mb-3">Key Responsibilities:</h4>
                                        <ul className="space-y-2">
                                            {experience.responsibilities.map((responsibility, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-3 text-base-content/80"
                                                >
                                                    <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary inline-block" />
                                                    <span>{responsibility}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Experience;