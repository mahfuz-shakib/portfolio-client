import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Container from '../container/Container';
import { FaCode } from 'react-icons/fa';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiLeetcode,
    SiCodeforces,
    SiGit,
    SiFigma,
    SiNpm,
    SiPostman
} from 'react-icons/si';

const Skills = () => {
    const data = usePortfolioData();

    if (!data || !data.skills) return null;

    const { skills } = data;

    const iconMap = {
        'HTML': SiHtml5,
        'CSS': SiCss3,
        'JavaScript': SiJavascript,
        'React': SiReact,
        'Tailwind CSS': SiTailwindcss,
        'Framer Motion': SiFramer,
        'DaisyUI': SiTailwindcss,
        'Node.js': SiNodedotjs,
        'Express.js': SiExpress,
        'MongoDB': SiMongodb,
        'Firebase': SiFirebase,
        'LeetCode': SiLeetcode,
        'Codeforces': SiCodeforces,
        'Git': SiGit,
        'VS Code': FaCode,
        'Figma': SiFigma,
        'NPM': SiNpm,
        'Postman': SiPostman,
    };

    const brandColors = {
        'HTML': '#E34F26',
        'CSS': '#1572B6',
        'JavaScript': '#F7DF1E',
        'React': '#61DAFB',
        'Tailwind CSS': '#38BDF8',
        'Framer Motion': '#E10098',
        'DaisyUI': '#1AD1A5',
        'Node.js': '#339933',
        'Express.js': '#000000',
        'MongoDB': '#47A248',
        'Firebase': '#FFCA28',
        'LeetCode': '#FFA116',
        'Codeforces': '#1F8ACB',
        'Git': '#F05032',
        'VS Code': '#007ACC',
        'Figma': '#F24E1E',
        'NPM': '#CB3837',
        'Postman': '#FF6C37',
    };

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

                    {/* Category-wise Skill Sections */}
                    <div className="space-y-8">
                        {skills.map((category, cIdx) => (
                            <motion.div key={category.category} variants={itemVariants} className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-bold text-base-content">{category.category}</h3>
                                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"/>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                                    {category.skills.map((skill, sIdx) => {
                                        const Icon = iconMap[skill] || FaCode;
                                        const color = brandColors[skill] || 'hsl(var(--p))';
                                        const soft = `${color}20`;
                                        return (
                                            <motion.div
                                                key={`${category.category}-${skill}`}
                                                variants={itemVariants}
                                                whileHover={{ y: -6, scale: 1.03 }}
                                                className="card bg-base-100 shadow-lg hover:shadow-2xl border border-base-300/60 transition-all"
                                            >
                                                <div className="card-body items-center text-center p-4 md:p-5">
                                                    <div
                                                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3"
                                                        style={{ backgroundColor: soft }}
                                                    >
                                                        <Icon style={{ color }} className="text-2xl md:text-3xl" />
                                                    </div>
                                                    <h4 className="font-semibold text-sm md:text-base text-base-content/90">
                                                        {skill}
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
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