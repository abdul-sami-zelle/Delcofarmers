import React from "react";
import "./ThirdBanner.css";

const ThirdBanner = () => {
  return (
    <div className="third-banner-main">
      <div className="third-banner-container">
        <img src="/assets/Images/third-hero-bg.jpg" alt="Hero Image" />
        <div className="third-Banner-promo">
          <h1>
            Unlimited grocery <br />
            delivery with Prime <br />
            for $9.99/mo.
          </h1>
          <p>
            Prime members can now get all their groceries delivered from Whole
            Foods Market and Amazon Fresh with one monthly subscription. Start
            your free 30-day trial today.
          </p>
          <button>Start free 30-day trial</button>
          <span>Subject to order minimum. Cancel anytime.</span>
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
