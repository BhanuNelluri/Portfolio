import React, { useEffect, useRef } from 'react';
import './Sidebar.css';
import { Link as LinkS } from 'react-scroll'
import { TimelineLite, Power3 } from 'gsap';

export default function Sidebar({ setIsOpen }) {
    let about = useRef(null);
    let projects = useRef(null);
    let contact = useRef(null);
    let resume = useRef(null);

    var t1 = new TimelineLite();

    useEffect(() => {
        t1.from(about, 0.3, { opacity: 0, x: 80, ease: Power3.easeOut, delay: 0.3 })
            .from(projects, 0.3, { opacity: 0, x: 80, ease: Power3.easeOut, delay: 0.2 })
            .from(contact, 0.3, { opacity: 0, x: 80, ease: Power3.easeOut })
            .from(resume, 0.3, { opacity: 0, x: 80, ease: Power3.easeOut })
    }, [])

    return (
        <div className="Sidebar">
            <div className="SidebarMenu">
                <div className="SidebarItem"
                    ref={el => about = el}>
                    <LinkS onClick={() => setIsOpen(false)} className="SidebarLinks" to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >About</LinkS>
                </div>
                <div className="SidebarItem"
                    ref={el => projects = el}>
                    <LinkS onClick={() => setIsOpen(false)} className="SidebarLinks" to='Projects'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >Projects</LinkS>
                </div>
                <div className="SidebarItem"
                    ref={el => contact = el}>
                    <LinkS onClick={() => setIsOpen(false)} className="SidebarLinks" to='Contact'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >Contact</LinkS>
                </div>
                <div className="SidebarItem"
                    ref={el => resume = el}>
                    <LinkS onClick={() => setIsOpen(false)} className="SidebarLinks" to='resume'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >Resume</LinkS>
                </div>
            </div>
        </div>
    )
}
