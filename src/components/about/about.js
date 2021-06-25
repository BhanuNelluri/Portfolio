import React from 'react';
import './about.css';
import { Link } from 'react-scroll';
import { HiChevronDoubleUp } from 'react-icons/hi'
import image1 from '../../images/developer.png'
import image2 from '../../images/bhanu.png'

export default function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutNav">
                <h3 className="aboutH">About Me</h3>
                <Link to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    className="aboutNavBtn"><HiChevronDoubleUp /></Link>
            </div>
            <div className="aboutContent">
                <div className="education">
                    <div className="profile">
                        <img src={image2} alt="image" />
                    </div>
                    <div className="aboutme">
                        <div>
                            Hi! I’m Bhanu Nelluri, a full-stack web developer and Undergraduate Student at <span>Indian Institute of Technology, Guwahati</span>. After doing Competitive programming for almost 2 years with some advanced Data Structures and algorithms, I’ve decided to take the leap to pursue a career in web applications. I can say that starting my carrer in development side has been the best decision I have ever made in my life. I love to learn new technologies and flex my creativity to create amazing things.
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="techskills">
                        <h2>Technical Skills </h2>
                        <div>
                            <span>Languages : </span>JavaScript, Java, C++, C
                        </div>
                        <div>
                            <span>Frontend : </span> React, Redux, HTML, CSS, Bootstrap,Material-UI,DOM
                        </div>
                        <div>
                            <span>Backend : </span> Node.js, Express,MongoDB,RESTful API,OAuth,Passport.js
                        </div>
                        <div>
                            <span>DevOps : </span>Heroku,Git,GitHub,npm
                        </div>
                        <div>
                            <span>Tools : </span> VScode,Postman,Figma
                        </div>
                    </div>
                    <div className="image">
                        <img src={image1} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
