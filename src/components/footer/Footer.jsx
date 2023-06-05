import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Ratings, Reviews, and Where to Watch the Best Movies & TV Shows.
                </div>
               
                <div className="socialIcons">
                <a href="https://www.facebook.com/rozzer.cr/">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                </a>
                <a href="https://www.instagram.com/_rozzer_/">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                </a>
                   
                <a href="https://github.com/atanu16">
                   <span className="icon">
                        <FaGithub />
                    </span>
                </a> 
                <a href="https://www.linkedin.com/in/atanu-bera-544ba6228/">
                <span className="icon">
                        <FaLinkedin />
                    </span>
                </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
