import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Container from '../container/Container';

const Skills = () => {
    const data = usePortfolioData();

    if (!data || !data.skills) return null;

    const { skills } = data;

    const getIconColor = (category) => {
        const colors = {
            'Frontend': 'text-blue-500',
            'Backend': 'text-green-500',
            'Problem Solving': 'text-purple-500',
            'Tools': 'text-orange-500',
            'Other': 'text-pink-500',
        };
        return colors[category] || 'text-primary';
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

    const skillVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
            },
        },
    };

    return (
        <section id="skills" className="py-20 bg-base-200">
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
                            My <span className="text-primary">Skills</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Technologies and tools I use to bring ideas to life
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((category, index) => (
                            <motion.div
                                key={category.category}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
                            >
                                <div className="card-body">
                                    <h3 className={`card-title ${getIconColor(category.category)}`}>
                                        {category.category}
                                    </h3>
                                    <div className="divider my-2"></div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                variants={skillVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                                                className="badge badge-lg badge-outline hover:badge-primary transition-colors cursor-default"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
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

export default Skills;