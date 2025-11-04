import React from "react";
import Navbar from "../components/Navbar";
import MyInfo from "../components/MyInfo";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import bg from '../assets/axiom-pattern.png';
const Home = () => {
  return (
    // <div className="relative min-h-screen w-full bg-[#0b0e1] text-white">
    //   {/* Noise Overlay */}
    //   <div
    //     className="pointer-events-none absolute inset-0 opacity-[0.9] mix-blend-overlay"
    //     style={{ backgroundImage: "url('/batthern.png')" }}
    //   />
    //   {/* Page Content */}
    //   <div className="relative z-10">
    //     <Navbar />
    //     <MyInfo />
    //     <About />
    //     <Skills />
    //     <Projects />
    //     <Experience />
    //     <Education />
    //     <Contact />
    //     <Footer />
    //   </div>
    // </div>
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
