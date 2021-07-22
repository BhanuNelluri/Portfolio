import React from 'react';
import './resume.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import { BsDownload } from 'react-icons/bs'
import { Button } from '../Elements/ButtonElement';
import { VscOpenPreview } from 'react-icons/vsc';
import bhanu from './bhanu1.pdf';

export default function Resume(props) {
    return (
        <div className="resumegrid">
            <ParallaxBanner layers={[{ image: props.imgsrc, amount: 1 }]}>
                <div className="resumeContainer">
                    <div className="resumeH">Resume</div>
                </div>
            </ParallaxBanner>
            <div className="resumeContent">
                <div className="viewbtn">
                    <a href={`${bhanu}`}
                        target="_blank"
                        className="resumebtn"
                        rel="noopener"
                    >
                        VIEW RESUME &nbsp; <VscOpenPreview />
                    </a>
                </div>
                <div className="downloadbtn">
                    <a href={`${bhanu}`}
                        download
                        className="resumebtn"
                    >
                        DOWNLOAD RESUME &nbsp; <BsDownload />
                    </a>
                </div>
            </div>
        </div >

    )
}
