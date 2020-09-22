import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--wrapper">
                <div className="footer--wrapper--text-wrapper">
                    <div className="footer--wrapper--text-wrapper--logo">
                        <img src="/assets/local-it-logo.png" alt="footer-logo" />
                    </div>
                    <span className="footer--wrapper--text-wrapper--desc">
                        Professionally seize cross functional meta-services rather than sticky relationships. Quickly reintermediate worldwide.
                    </span>
                    <span className="footer--wrapper--text-wrapper--copyright">
                        All Right Reserved by Infinite Solutions Copyright ©2020
                    </span>
                </div>
                <div className="footer--wrapper--link-wrapper">
                    <ul>
                        <li>
                            <span className="footer--wrapper--link-wrapper--title">Useful Links</span>
                        </li>
                        <li>Home</li>
                        <li>The App</li>
                        <li>Are you a Local Business?</li>
                        <li>Who we are?</li>
                        <li style={{visibility: "hidden"}}>HI</li>
                    </ul>
                    <ul>
                        <li>
                            <span className="footer--wrapper--link-wrapper--title">Need Help?</span>
                        </li>
                        <li>Faqs</li>
                        <li>Privacy</li>
                        <li>Policy</li>
                        <li>Support</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;