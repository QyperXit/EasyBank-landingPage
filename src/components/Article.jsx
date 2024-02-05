import React from "react";
import "../Styles/article.css";
import {
  imageConfetti,
  imageCurrency,
  imagePlane,
  imageRestaurant,
} from "../assets/index.js";

const Article = () => {
  return (
    <section className="article-section" aria-label="Latest Articles Section">
      <h1 aria-label="Latest Articles Title">Latest Articles</h1>
      <div className="article-list" aria-label="List of Articles">
        <div className="article" aria-label="Article 1">
          <div className="image-container">
            <img
              src={imageCurrency}
              alt="picture of notes of money"
              aria-hidden="true"
            />
          </div>
          <div>
            <div className="review">
              <span className="author" aria-label="Author">
                By Claire Robinson
              </span>
              <h3 aria-label="Article Title">
                Receive money in any currency with no fees
              </h3>
              <p aria-label="Article Description">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
        </div>

        <div className="article" aria-label="Article 2">
          <div className="image-container">
            <img
              src={imageRestaurant}
              alt="picture of food in a restaurant"
              aria-hidden="true"
            />
          </div>
          <div>
            <div className="review">
              <span className="author" aria-label="Author">
                By Wilson Hutton
              </span>
              <h3 aria-label="Article Title">
                Treat yourself without worrying about money
              </h3>
              <p aria-label="Article Description">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
        </div>

        <div className="article" aria-label="Article 3">
          <div className="image-container">
            <img
              src={imagePlane}
              alt="picture of a airplane wing"
              aria-hidden="true"
            />
          </div>
          <div>
            <div className="review">
              <span className="author" aria-label="Author">
                By Wilson Hutton
              </span>
              <h3 aria-label="Article Title">
                Take your Easybank card wherever you go
              </h3>
              <p aria-label="Article Description">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
        </div>

        <div className="article" aria-label="Article 4">
          <div className="image-container">
            <img src={imageConfetti} alt="img of confetti" aria-hidden="true" />
          </div>
          <div>
            <div className="review">
              <span className="author" aria-label="Author">
                By Claire Robinson
              </span>
              <h3 aria-label="Article Title">
                Our invite-only Beta accounts are now live!
              </h3>
              <p aria-label="Article Description">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
