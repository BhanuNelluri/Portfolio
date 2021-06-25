import React from 'react';
import './projects.css';
import { Link } from 'react-scroll';
import { HiChevronDoubleUp } from 'react-icons/hi'
import MemoriesProject from '../../images/MemoriesProject.png';
import yelpcamp from '../../images/yelpcamp.png';

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
                        <div className="InfoHeader">MemoriesProject</div>
                        <div className="matter">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum sit nemo, obcaecati natus voluptates dolores ex molestiae libero modi! Ducimus laudantium nemo modi explicabo assumenda natus rem dolorum quam.lorem
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum sit nemo, obcaecati natus voluptates dolores ex molestiae libero modi! Ducimus laudantium nemo modi explicabo assumenda natus rem dolorum quam.lorem
                        </div>
                    </div>
                    <div className="projectImage">
                        <img className="image" src={yelpcamp} alt="YelpCamp"></img>
                    </div>
                </div>
                <div className="projectFooter">
                    <a href="https://yelpcamp-application02.herokuapp.com/" className="visit">VISIT</a>
                    <a href="https://github.com/BhanuNelluri/YelpCamp_Project" className="github">GITHUB</a>
                </div>
                <div className="project1">
                    <div className="projectInfo">
                        <div className="InfoHeader">IITG Stack overflow</div>
                        <div className="matter">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum sit nemo, obcaecati natus voluptates dolores ex molestiae libero modi! Ducimus laudantium nemo modi explicabo assumenda natus rem dolorum quam.lorem
                        </div>
                    </div>
                    <div className="projectImage">
                        <h2>Comming Soon!</h2>
                    </div>
                </div>
                <div className="projectFooter1">
                    <a className="visit">VISIT</a>
                    <a className="github">GITHUB</a>
                </div>
            </div>
        </div>
    )
}
