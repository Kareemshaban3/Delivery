/** @format */

import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
export default function Footer() {
  return (
    <>
      <div id="footer" className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae alias ea reprehenderit molestias mollitia amet, quisquam ducimus quam esse.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+20-010-30-70-7552</li>
                        <li>Contact@tomato.com</li>                        
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyRight">
                copyRight 2024 @ Tomato.com - All rights reserved. - 
            </p>
      </div>
    </>
  );
}
