import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact--wrapper">
                <div className="contact--wrapper--text-wrapper">
                    <span className="contact--wrapper--text-wrapper--us">CONTACT US</span>
                    <span className="contact--wrapper--text-wrapper--title">Get In Touch</span>
                    <span className="contact--wrapper--text-wrapper--desc">
                        Consectetur adipiscing elit, sed do eiusmod temport incididunt ut labore et dolor temprt incididunt ut labore dolore magna.
                    </span>
                    <div className="contact--wrapper--text-wrapper--icons">
                        <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="fontawesome" />
                        <span className="contact--wrapper--text-wrapper--texts">+1 878 878 7878</span>
                    </div>
                    <div className="contact--wrapper--text-wrapper--icons" >
                        <FontAwesomeIcon icon={faEnvelope} size="lg" className="fontawesome" />
                        <span className="contact--wrapper--text-wrapper--texts">info@email.com</span>
                    </div>
                    <div className="contact--wrapper--text-wrapper--icons" >
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="fontawesome" style={{ paddingRight: "30px" }} />
                        <span className="contact--wrapper--text-wrapper--texts">1750 13th St, Boulder, CO 80302</span>
                    </div>
                </div>
                <div className="contact--wrapper--phones">
                    <div className="contact--wrapper--phones--iphone" >
                        <img src="/assets/contact-pic.png" alt="phone-image" />
                    </div>
                    <div className="contact--wrapper--phones--circle1" />
                    <div className="contact--wrapper--phones--circle2" />
                </div>
            </div>
        </div>
    )
}

export default Contact;