import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-main">
      <div className="banner-container">
        <img src="/assets/Images/hero-bg.jpeg" alt="Hero Image" />
        <div className="Banner-promo">
          <h1>
            20% off Lean <br />
            Ground Beef
          </h1>
          <p>
            Save with Prime on no-antibiotics-ever 80% Lean Ground Beef for
            beefed-up spaghetti night or robust burgers.
          </p>
          <button>Explore Sales</button>
          <span>Valid 8/27 – 9/2/25. Restrictions apply.</span>
        </div>
      </div>
      <div className="small-banner-main">
        <div className="small-banner-container">
          <span>
            Grocery Pickup <br /> & Delivery
          </span>

            <img
              src="/assets/Images/small-banner1.png"
              alt="Hero Small Banner"
            />
        </div>
        <div className="small-banner-container">
          <span>Cafe</span>
            <img
              src="/assets/Images/coffee.jpg"
              alt="Hero Small Banner"
            />
        </div>
        <div className="small-banner-container">
          <span>Bakery</span>
            <img
              src="/assets/Images/bakery.jpg"
              alt="Hero Small Banner"
            />
        </div>
        <div className="small-banner-container">
          <span>Kitchen/Deli</span>
            <img
              src="/assets/Images/kitchen.jpg"
              alt="Hero Small Banner"
            />
        </div>
      </div>
    </div>
  );
};

export default Banner;
