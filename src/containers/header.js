import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Header = () => {

    const history = useHistory()

    const goHome = (section) => {
        history.push(`/?section=${section}`);
        console.log(section)
    }

    const [classActive, setClass] = useState("hamburger");
    const [menuSide, setMenu] = useState("header--nav");

    return (
        <div className="header">
            <div className="header--logo">
                <img
                    onClick={() => {
                        window.location = "/";
                    }}
                    src="/assets/local-it-logo.png" alt="logo"
                />
            </div>
            <div
                className={classActive}
                onClick={() => {
                    if (classActive === "hamburger") {
                        setClass("change");
                        setMenu("header--nav-hidden");
                    } else {
                        setClass("hamburger");
                        setMenu("header--nav");
                    }
                }}
            >
                <div className="stick" />
                <div className="stick1" />
                <div className="stick2" />
            </div>
            <nav className={menuSide}>
                <ul>
                    <li><div
                        className="nav-buttons"
                        onClick={() => goHome("start-section")} >
                        Start</div></li>
                    <li><div
                        className="nav-buttons"
                        onClick={() => goHome("theapp-section")} >
                        The app</div></li>
                    <li><div
                        className="nav-buttons"
                        onClick={() => goHome("whoweare-section")} >
                        Who we are?</div></li>
                    <li><div
                        className="nav-buttons"
                        onClick={() => goHome("contact-section")} >
                        Contact Us</div></li>
                    <li>
                        <span className="header--button">Are you a Local Business?</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;

