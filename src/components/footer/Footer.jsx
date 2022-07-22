import React from "react";
import "./footer.css";
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return <footer>


    <a href="#header" className="footer__logo">MANOJ</a>
    <ul className="parmalinks">
      <li><a href="#header">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="footer__socials">

      <a href="https://facebook.com"><BsFacebook /></a>
      <a href="https://www.instagram.com/manojgawade24"><BsInstagram /></a>
      <a href="https://twitter.com"><BsTwitter /></a>
    </div>
    <div className="footer__copyright">
      <small>
        &copy; Manoj Gawade. All rights reserved
      </small>
    </div>
  </footer >;
};

export default Footer;
