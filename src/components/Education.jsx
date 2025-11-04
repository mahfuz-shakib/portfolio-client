import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Container from '../container/Container';
import { FaGraduationCap, FaCalendarAlt, FaTrophy } from 'react-icons/fa';

const Education = () => {
    const data = usePortfolioData();

    if (!data || !data.education || !data.certifications) return null;

    const { education, certifications } = data;

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
        <section id="education" className="py-20 bg-base-100">
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
                            Education & <span className="text-primary">Certifications</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Education */}
                        <motion.div variants={itemVariants} className="card shadow-2xl bg-[#15152054] border  border-gray-700 hover:scale-101"
                            // style={{ background: 'linear-gradient(180deg, hsl(var(--b2)) 0%, hsl(var(--b1)) 100%)' }}
                        >
                            <div className="card-body p-8">
                                <div className="flex items-start gap-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                                            <FaGraduationCap className="text-primary text-2xl" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-3">
                                        <h3 className="text-xl font-bold">{education.degree}</h3>
                                        <p className="text-lg text-primary font-semibold">
                                            {education.institution}
                                        </p>
                                        
                                        <div className="flex items-center gap-2 text-base-content/70">
                                            <FaCalendarAlt />
                                            <span>
                                                {education.startYear} - {education.endYear}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <FaTrophy className="text-warning" />
                                            <span className="font-semibold">CGPA: {education.cgpa}</span>
                                        </div>

                                        <p className="text-base-content/80 pt-2">
                                            {education.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div variants={itemVariants} className="card shadow-2xl bg-[#15152054] border border-gray-700 hover:scale-101"
                            // style={{ background: 'linear-gradient(180deg, hsl(var(--b2)) 0%, hsl(var(--b1)) 100%)' }}
                        >
                            <div className="card-body p-8">
                                <h3 className="text-xl font-bold mb-6">Certifications</h3>
                                <div className="space-y-4">
                                    {certifications.map((cert, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
                                        >
                                            <h4 className="font-semibold text-lg">{cert.name}</h4>
                                            <p className="text-primary font-medium">{cert.issuer}</p>
                                            <p className="text-sm text-base-content/70">{cert.date}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Education;