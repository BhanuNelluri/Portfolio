import React, { useEffect, useRef } from 'react';
import About from '../about/about';
import Contact from '../contact/contact';
import HeroSection from '../HeroSection/HeroSection';
import Projects from '../projects/projects';
import './Home.css';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../SideBar.js/Sidebar';
import Footer from '../footer/footer';
import Resume from '../resume/resume';
import { HiOutlineMail } from 'react-icons/hi';
import { ImGithub } from 'react-icons/im';
import { SiLinkedin } from 'react-icons/si';
import { ParallaxProvider } from 'react-scroll-parallax';
import img1 from '../../images/img1.jpg';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ParallaxProvider>
            <div className="home">
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
                {isOpen && <Sidebar setIsOpen={setIsOpen} />}
                <div className="Contactlinks">
                    <a href="mailto:bhanunelluri0829@gmail.com" className="links"> <HiOutlineMail /></a>
                    <a href="https://github.com/BhanuNelluri" className="links"> <ImGithub /></a>
                    <a href="https://www.linkedin.com/in/bhanu-nelluri-9b99341b0/" className="links"> <SiLinkedin /></a>
                </div>
                <div className="HomeContainer">
                    <div id="HeroSection"><HeroSection /></div>
                    <div id="about"> <About /></div>
                    <div id="Projects"><Projects /></div>
                    <div id="resume"><Resume imgsrc={img1}
                        height="500px" /></div>
                    <div id="Contact"><Contact /></div>
                </div>
                <Footer />
            </div>
        </ParallaxProvider>
    )

}
