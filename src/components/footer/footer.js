import React from 'react';
import './footer.css';
import { HiOutlineMail } from 'react-icons/hi';
import { ImGithub } from 'react-icons/im';
import { SiLinkedin } from 'react-icons/si';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div>If you want to collaborate on any web applications, please feel free to reach out.</div>
                <div>I'm available for freelance projects and full-time employment</div>
            </div>
            <div className="footerLinks">
                <a href="mailto:bhanunelluri0829@gmail.com" className="item"> <HiOutlineMail /></a>
                <a href="https://github.com/BhanuNelluri" className="item"> <ImGithub /></a>
                <a href="https://www.linkedin.com/in/bhanu-nelluri-9b99341b0/" className="item"> <SiLinkedin /></a>
            </div>
        </div>
    )
}
