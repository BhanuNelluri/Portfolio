import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { TimelineLite, Power3 } from 'gsap';

export default function Navbar({ isOpen, setIsOpen }) {
    const [scrollNav, setScrollNav] = useState(false);
    let Line1 = useRef(null);
    let Line2 = useRef(null);
    let Line3 = useRef(null);



    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }


    var t1 = new TimelineLite();
    const toggle = () => {

        setIsOpen(!isOpen);
        setScrollNav(!scrollNav);
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    useEffect(() => {
        if (isOpen) {
            t1.to(Line1, 0.2, { rotateZ: "-45deg", translateY: "8px", ease: Power3.easeOut })
                .to(Line2, 0, { opacity: "0", ease: Power3.easeOut })
                .to(Line3, 0.2, { rotateZ: "45deg", translateY: "-8px", ease: Power3.easeOut })
        } else {
            t1.to(Line1, 0.1, { rotateZ: "0deg", translateY: "0px", ease: Power3.easeOut })
                .to(Line2, 0.1, { opacity: "1", ease: Power3.easeOut })
                .to(Line3, 0.1, { rotateZ: "-0deg", translateY: "0px", ease: Power3.easeOut })
        }
    }, [isOpen]);

    return (
        <div className="Nav"  >
            <div className="NavbarContainer">
                <LinkS to='home' className="NavLogo"
                    onClick={() => setIsOpen(false)}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    B
                </LinkS>
                <LinkR onClick={toggle} className="MobileIcon">
                    <div ref={el => Line1 = el} className="Line1"></div>
                    <div ref={el => Line2 = el} className="Line1"></div>
                    <div ref={el => Line3 = el} className="Line1"></div>
                </LinkR>
                <div className="NavMenu">
                    <div className="NavItem">
                        <LinkS className="NavLinks" to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        >About</LinkS>
                    </div>
                    <div className="NavItem">
                        <LinkS className="NavLinks" to='Projects'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Projects</LinkS>
                    </div>
                    <div className="NavItem">
                        <LinkS className="NavLinks" to='Contact'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Contact</LinkS>
                    </div>
                    <div className="NavItem">
                        <LinkS className="NavLinks" to='resume'
                        >Resume</LinkS>
                    </div>
                </div>
            </div>
        </div >
    )
}
