import React from "react";
import "../Styles/hero.css";
import intro from "../assets/bg-intro-desktop.svg";
import mobile from "../assets/image-mockups.png";

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero Section">
      <div className="hero-content">
        <h1 className="hero-h1" aria-label="Main Heading">
          Next generation <br /> digital banking
        </h1>
        <p className="hero-summary" aria-label="Hero Summary">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="hero-btn" aria-label="Request Invite Button">
          {" "}
          Request invite
        </button>
      </div>
      <img className="bg-intro" src={intro} alt="bg-intro" aria-hidden="true" />
      <img
        className="bg-mobile"
        src={mobile}
        alt="bg-intro"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
