import React, { useEffect, useState } from "react";
import "../Styles/nav.css";
import close from "../assets/icon-close.svg";
import hamburger from "../assets/icon-hamburger.svg";
import logo from "../assets/logo.svg";

const Nav = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isNav, setNav] = useState(false);

  const handleBellClick = () => {
    setIsHamburger(!isHamburger);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsHamburger(false);
      if (window.innerWidth < 925) {
        setNav(false);
      } else if (window.innerWidth > 925) {
        setNav(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul
        className={`ul-box ${
          window.innerWidth <= 925 ? (isNav || !isHamburger ? "hide" : "") : ""
        }`}
      >
        <li className="nav-list" aria-label="Home">
          Home
        </li>
        <li className="nav-list" aria-label="About">
          About
        </li>
        <li className="nav-list" aria-label="Contact">
          Contact
        </li>
        <li className="nav-list" aria-label="Blog">
          Blog
        </li>
        <li className="nav-list" aria-label="Careers">
          Careers
        </li>
      </ul>
      <button
        className="nav-request"
        aria-label={isHamburger ? "Close navigation" : "Request Invite"}
      >
        Request Invite
      </button>

      <div
        role="button"
        aria-label="Toggle Navigation"
        onClick={handleBellClick}
      >
        {!isHamburger ? (
          <img src={hamburger} alt="hamburger icon" className="hamburger" />
        ) : (
          <img src={close} alt="close icon" className="closeIcon" />
        )}
      </div>
    </nav>
  );
};

export default Nav;
