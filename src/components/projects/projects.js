import React from 'react';
import './projects.css';
import { Link } from 'react-scroll';
import { HiChevronDoubleUp } from 'react-icons/hi'
import MemoriesProject from '../../images/MemoriesProject.png';
import yelpcamp from '../../images/yelpcamp.png';
import stackoverflow from '../../images/stackoverflow.png'

export default function Projects() {
    return (
        <div className="projectContainer">
            <div className="projectNav">
                <h3 className="projectH">Projects</h3>
                <Link to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    className="projectNavBtn"><HiChevronDoubleUp /></Link>
            </div>
            <div className="projectsModule">
                <div className="project1">
                    <div className="projectInfo">
                        <div className="InfoHeader">IITG Stack overflow</div>
                        <div className="matter">
                            <div className="matterContent">People can post general,tech related or any sort of queries on the home feed provided with a search bar to search across all the previous questions based on keywords and other users will be able to answer those queries</div>
                            <h4 className="stackH">Tech Stack</h4>
                            <ul className="techlist">
                                <li>React</li>
                                <li>Redux</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                    <div className="projectImage">
                        <img className="image" src={stackoverflow} alt="StackOverCloned"></img>
                    </div>
                </div>
                <div className="projectFooter">
                    <a href="https://stack-over-cloned.netlify.app" className="visit">VISIT</a>
                    <a href="https://github.com/BhanuNelluri/StackOverCloned" className="github">GITHUB</a>
                </div>
                <div className="project1">
                    <div className="projectInfo">
                        <div className="InfoHeader">MemoriesProject</div>
                        <div className="matter">
                            <div className="matterContent">A Social Media Platform where People can share there memories in the form of posts and it is provided with a search bar to search across all the previous posts based on keywords and tags other users will be able to like your posts</div>
                            <h4 className="stackH">Tech Stack</h4>
                            <ul className="techlist">
                                <li>React</li>
                                <li>Redux</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Material-UI</li>
                            </ul>
                        </div>
                    </div>
                    <div className="projectImage">
                        <img className="image" src={MemoriesProject} alt="MemoriesProject"></img>
                    </div>
                </div>
                <div className="projectFooter">
                    <a href="https://recollecting-memories.netlify.app/" className="visit">VISIT</a>
                    <a href="https://github.com/BhanuNelluri/Memories_Project" className="github">GITHUB</a>
                </div>
                <div className="project1">
                    <div className="projectInfo">
                        <div className="InfoHeader">YelpCamp</div>
                        <div className="matter">
                            <div className="matterContent">It is a Platform for people who love travelling and camping in places. Here you can find the camp details posted by different users and you can see the camp location in the map and also you can see different users reviews on that camps.</div>
                            <h4 className="stackH">Tech Stack</h4>
                            <ul className="techlist">
                                <li>ejs</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Passport</li>
                                <li>Mapbox</li>
                            </ul>
                        </div>
                    </div>
                    <div className="projectImage">
                        <img className="image" src={yelpcamp} alt="YelpCamp"></img>
                    </div>
                </div>
                <div className="projectFooter1">
                    <a href="https://yelpcamp-application02.herokuapp.com/" className="visit">VISIT</a>
                    <a href="https://github.com/BhanuNelluri/YelpCamp_Project" className="github">GITHUB</a>
                </div>

            </div>
        </div>
    )
}
