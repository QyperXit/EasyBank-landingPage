import React from "react";
import "../Styles/section.css";
import {
  iconApi,
  iconBudgeting,
  iconOnboarding,
  iconOnline,
} from "../assets/index.js";

const Section = () => {
  return (
    <section className="banking-info" aria-label="Banking Information Section">
      <div className="bank-sales-info">
        <h1 className="bank-title" aria-label="Bank Title">
          Why choose Easybank?
        </h1>
        <p className="feature-text" aria-label="Banking Features Description">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br /> Control your finances like never before.
        </p>
      </div>
      <div className="features" aria-label="Banking Features List">
        <div className="feature-list">
          <img src={iconOnline} alt="" aria-hidden="true" />
          <h2 aria-label="Feature Title">Online Banking</h2>
          <p className="feature-text text" aria-label="Feature Description">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="feature-list">
          <img src={iconBudgeting} alt="" aria-hidden="true" />
          <h2 aria-label="Feature Title">Simple Budgeting</h2>
          <p className="feature-text text" aria-label="Feature Description">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="feature-list">
          <img src={iconOnboarding} alt="" aria-hidden="true" />
          <h2 aria-label="Feature Title">Fast Onboarding</h2>
          <p className="feature-text text" aria-label="Feature Description">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="feature-list">
          <img src={iconApi} alt="" aria-hidden="true" />
          <h2 aria-label="Feature Title">Open API</h2>
          <p className="feature-text text" aria-label="Feature Description">
            Manage your savings, investments,
            <br /> pension, and much more from one account. Tracking your money
            has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
