import React from 'react';
import Navbar from '../components/Navbar';
import MyInfo from '../components/MyInfo';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <MyInfo />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;