import React from 'react';
import './contact.css';
import { Link } from 'react-scroll';
import { HiChevronDoubleUp } from 'react-icons/hi';
import { Button } from '../Elements/ButtonElement'
import { TextField } from '@material-ui/core';
import BikeLogo from '../logo/bikelogo';
import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_oad9k9i', 'template_orcvhq8', e.target, 'user_e5VxPyxCHLYyWawvcX228')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}

export default function Contact() {

    return (
        <div className="contactContainer">
            <div className="contactNav">
                <h3 className="contactH">Contact</h3>
                <Link to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    className="contactNavBtn"><HiChevronDoubleUp /></Link>
            </div>
            <div className="contactContent">
                <div className="bikeLogo">
                    <BikeLogo width="100%" height="100%" />
                </div>
                <form className="form" onSubmit={sendEmail}>
                    <div className="input-group">
                        <TextField type="text" required fullWidth id="standard-basic" name="name" label="Name" />
                    </div>
                    <div className="input-group">
                        <TextField type="email" fullWidth required id="standard" name="email" label="Email" />
                    </div>
                    <div className="input-group">
                        <TextField
                            id="standard"
                            label="Message"
                            multiline
                            rows={5}
                            fullWidth
                            name="message"
                        />
                    </div>
                    <button className="contactBtn" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}
