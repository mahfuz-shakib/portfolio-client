import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Container from '../container/Container';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const data = usePortfolioData();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    if (!data) return null;

    const { userInfo, socialLinks } = data;

    const iconMap = {
        github: FaGithub,
        linkedin: FaLinkedin,
        facebook: FaFacebook,
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend
        toast.success('Thank you for your message! I will get back to you soon.', {
            position: 'top-right',
            autoClose: 3000,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
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
        <section id="contact" className="py-20 bg-base-200">
            <Container>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-12 lg:max-w-5xl lg:mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Get In <span className="text-primary">Touch</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Let's discuss how I can help bring your ideas to life
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                                <p className="text-base-content/70 leading-relaxed">
                                    I'm always open to discussing new opportunities, interesting projects, 
                                    or just having a chat about technology and development.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <FaEnvelope className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a href={`mailto:${userInfo.email}`} className="text-primary hover:underline">
                                            {userInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <FaMapMarkerAlt className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-base-content/70">{userInfo.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="font-semibold mb-4">Follow Me</h4>
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
                                                className="w-12 h-12 flex items-center justify-center rounded-full bg-base-100 hover:bg-primary transition-colors group"
                                            >
                                                <Icon className="w-6 h-6 text-base-content group-hover:text-white transition-colors" />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl">
                                <div className="card-body mx-auto w-sm">
                                    <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                                    
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Name</span>
                                        </label><br/>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="input input-bordered w-full"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label><br/>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="input input-bordered w-full"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Subject</span>
                                        </label><br/>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="input input-bordered"
                                            placeholder="Subject"
                                        />
                                    </div> */}

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Message</span>
                                        </label><br/>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="textarea textarea-bordered h-24 w-full"
                                            placeholder="Your message here..."
                                        />
                                    </div>

                                    <div className="form-control mt-6 text-right">
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
            <ToastContainer />
        </section>
    );
};

export default Contact;