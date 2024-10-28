import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../asset/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="Movify Logo" />
            <Link to="/">Movify</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Must-Watch</Link>
            <Link to="/">Recent Releases</Link>
            <Link to="/">Top IMDb</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
