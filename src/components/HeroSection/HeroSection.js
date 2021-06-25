import React, { useState } from 'react';
import './HeroSection.css'
import Video from '../../video/video.mp4';
import { MdKeyboardArrowRight as ArrowRight, MdArrowForward as ArrowForward } from 'react-icons/md'
import { Button } from '../Elements/ButtonElement';

export default function HeroSection() {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <div className="HeroContainer">
            <div className="HeroBg">
                <video className="VideoBg" autoPlay loop muted src={Video} type="video/mp4" />
            </div>
            <div className="HeroContent">
                <div className="HeroH1">
                    Welcome to my Portfolio
                </div>
                <div className="HeroP">
                    My name is <span>Bhanu Nelluri.</span> I'm a fullStack web developer
                </div>
                <div className="HeroBtnWrapper">
                    <Button to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get Started {!hover ? <ArrowRight className="icon" /> : <ArrowForward className="icon" />}
                    </Button>
                </div>
            </div>
        </div>
    )
}
