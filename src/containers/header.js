import React from 'react';

const Header = () => {

    return (
        <div className="header">
            <div className="header--wrapper">
                <div className="header--wrapper--logo">
                    <img src="/assets/local-it-logo.png" alt="header-logo"/>
                </div>
                <div className="header--wrapper--nav">
                    <ul>
                        <li><a>Start</a></li>
                        <li><a>The App</a></li>
                        <li><a>Who we are?</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Are you a Local Business?</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;

