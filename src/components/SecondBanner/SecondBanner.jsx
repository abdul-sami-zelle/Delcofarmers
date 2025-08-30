import React from "react";
import "./SecondBanner.css";

const SecondBanner = () => {
  return (
    <div className="second-banner-main">
      <div className="second-banner-container">
        <img src="/assets/Images/second-hero-bg.jpeg" alt="Hero Image" />
        <div className="second-Banner-promo">
          <h1>
            Summer’s last <br />
            hurrah: Labor Day <br />
            savings.
          </h1>
          <p>
            Summer’s swan song is the sweet melody of savings. Head outside with
            deals on hot dogs, burgers, shrimp skewers, sweet treats and more.
          </p>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
