import React from "react";
import "./Footer.css";
import { FaArrowRightLong, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img
            src="/assets/Images/delco-white-logo.png"
            alt="Delco Farmers Market"
          />
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Shopping</h3>
            <ul>
              <li>Weekly Sales</li>
              <li>Browse In-Store</li>
              <li><a href="https://bakery.delcofarmersmarket.com">Grocery Pickup & Delivery</a></li>
              <li>Catering</li>
              <li>Shipped to You</li>
              <li>Amazon Prime at Delco Farmers</li>
              <li>Gift Cards</li>
              <li>Special Diets</li>
              <li>Tips and Ideas</li>
              <li>Order Online</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Mission in Action</h3>
            <ul>
              <li>Responsible Sourcing</li>
              <li>Quality Standards</li>
              <li>Community Giving</li>
              <li>Environmental Stewardship</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li>About Delco Food Market</li>
              <li>Our Values</li>
              <li>Departments</li>
              <li>Information and Potential Suppliers</li>
              <li>Careers</li>
              <li>Newsroom</li>
            </ul>
          </div>

          <div className="footer-column footer-help">
            <h3>Need Help?</h3>
            <a href="/">
              Visit Customer Care <FaArrowRightLong color="#ffff" size={20} />
            </a>

            <h3 className="mt-20">Connect With Us</h3>
            <div className="social-icons">
            <img src="/assets/Images/fb.png" alt="" />
            <img src="/assets/Images/x.png" alt="" />
            <img src="/assets/Images/insta.png" alt="" />
            <img src="/assets/Images/tiktok.png" alt="" />
            <img src="/assets/Images/tread.png" alt="" />
            </div>

            <button className="signup-btn">Sign up for email</button>
          </div>
        </div>
      </div>
      <div className="mobile-footer-top">
        <div className="mobile-footer-links">
          <div className="mobile-footer-column">
            <ul>
              <li>Weekly Sales</li>
              <li>Browse In-Store</li>
              <li><a href="https://bakery.delcofarmersmarket.com">Grocery Pickup & Delivery</a></li>
              <li>Catering</li>
              <li>Shipped to You</li>
              <li>Amazon Prime at Delco Farmers</li>
              <li>Gift Cards</li>
              <li>Special Diets</li>
              <li>Tips and Ideas</li>
              <li>Order Online</li>
            </ul>
          </div>

          <div className="mobile-footer-column mobile-footer-help">
            <a href="/">
              Visit Customer Care <FaArrowRightLong color="#ffff" size={20} />
            </a>
            <div className="mobile-social-icons">
            <img src="/assets/Images/fb.png" alt="" />
            <img src="/assets/Images/x.png" alt="" />
            <img src="/assets/Images/insta.png" alt="" />
            <img src="/assets/Images/tiktok.png" alt="" />
            <img src="/assets/Images/tread.png" alt="" />
              {/* <FaFacebook size={25} />
              <FaSquareXTwitter size={25} />
              <FaInstagramSquare size={25} />
              <AiFillTikTok size={25} />
              <BsFillThreadsFill size={25} /> */}
            </div>

            <button className="mobile-signup-btn">Sign up for email</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <p>Copyright 2025 Delco Farmers Market IP, Inc.</p>
          <div className="mobile-white-line">
            <span></span>
          </div>
          <span className="white-line"></span>
          <a href="">Privacy Notice</a>
          <a href="">Your Ads Privacy Choices</a>
          <a href="">Conditions of Use</a>
          <a href="">Consumer Health Data Privacy Disclosure</a>
          <a href="">Site Map</a>
          <a href="">Site Information</a>
          <a href="">Legal</a>
          <a href="">Corporate Policies</a>
        </div>
        <span className="amazon-text">
          <span>Powered by </span>
          <a
            href="https://zellesolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/Images/zelle-logo.png" alt="Zelle Solutions" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
