// Footer.js

import React from 'react';
import './Footer.css';
import FooterLinks from '../assets/Footer-links.png';
import logo from '../assets/Logo.png';

function Footer() {
    return (
        <>
            <div className='footer-main'>
                <img src={logo} alt="Footer-Logo" className="logo" />

                <div className="home">
                    <ul>
                        <li>home</li>
                        <li>Profile</li>
                        <li>Reports</li>
                        <li>Insights</li>
                    </ul>

                </div>

                <div className="margin-right-div">
                    <ul>
                        <li>Information centre</li>
                        <li>Terms & conditions</li>
                        <li>privacy policy</li>

                    </ul>
                </div>

                <div className="copyright">
                    <img src={FooterLinks} alt="Links" />
                    <p>©2022 wealth properties.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
