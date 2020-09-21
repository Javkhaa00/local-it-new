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
            <div className="contact--text-wrapper">
                <span className="contacts--text-wrapper--us">CONTACT US</span>
                <span className="contacts--text-wrapper--title">Get In Touch</span>
                <span className="contacts--text-wrapper--desc">
                    Consectetur adipiscing elit, sed do eiusmod temport incididunt ut labore et dolor temprt incididunt ut labore dolore magna.
                </span>
                {/* <div className="contacts--text-wrappers">
                    <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="fontawesome" />
                    <span className="contacts--texts">+1 878 878 7878</span>
                </div>
                <div className="contacts--text-wrappers" style={{ paddingBottom: "12px" }}>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="fontawesome" />
                    <span className="contacts--texts">info@email.com</span>
                </div>
                <div className="contacts--text-wrappers" style={{ paddingBottom: "36px" }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="fontawesome" style={{ paddingRight: "26px" }} />
                    <span className="contacts--texts">1750 13th St, Boulder, CO 80302</span>
                </div> */}
            </div>
        </div>
    )
}

export default Contact;