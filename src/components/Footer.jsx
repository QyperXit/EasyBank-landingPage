import React from "react";
import "../Styles/footer.css";
import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
  iconYoutube,
  logoBottom,
} from "../assets/index.js";

const Footer = () => {
  return (
    <footer aria-label="Page Footer">
      <div className="socials">
        <img
          className="footer-logo"
          src={logoBottom}
          alt="logo"
          aria-hidden="true"
        />
        <div className="social-link" aria-label="Social Media Links">
          <i className="fab fa-facebook icon-media" aria-label="Facebook"></i>
          <i className="fab fa-youtube icon-media" aria-label="Youtube"></i>
          <i className="fab fa-twitter icon-media" aria-label="Twitter"></i>
          <i className="fab fa-pinterest icon-media" aria-label="Pinterest"></i>
          <i className="fab fa-instagram icon-media" aria-label="Instagram"></i>
        </div>
      </div>

      <div className="footer-info">
        <ul aria-label="About Us, Contact, and Blog Links">
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ul aria-label="Careers, Support, and Privacy Policy Links">
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="invite-footer">
        <button className="footer-invite" aria-label="Request Invite Button">
          Request Invite
        </button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
