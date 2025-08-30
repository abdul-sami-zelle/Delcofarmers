"use client";

import React, { useEffect, useState } from "react";
import "./Header.css";
import { SlLocationPin } from "react-icons/sl";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdArrowForwardIos } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  const [showLocation, setShowLocation] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 50) {
          setShowLocation(false);
        } else {
          setShowLocation(true);
        }
        setLastScroll(currentScroll);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScroll]);

  return (
    <div className="Header-main">
      {/* ------------ Desktop Header ------------ */}
      <div className="first-header-main">
        <div className="first-header-container">
          <div className="header-logo">
            <img src="/assets/Images/delco-white-logo.png" alt="" />
          </div>
          <div className="header-input">
            <input type="text" placeholder="Search In-Store Products" />
            <IoSearchOutline color="#004E36" size={20} />
          </div>
          <div className="location-main">
            <span>
              <SlLocationPin color="#ffff" size={22} />
            </span>
            <div className="name-location">
              <p>Delco Farmers Market</p>
              <span>Find a Store</span>
            </div>
          </div>
          <div className="location-main">
            <RiAccountCircleLine color="#ffff" size={22} />
            <span className="sign-in">Log In</span>
          </div>
          <div className="location-main">
            <FiShoppingCart color="#ffff" size={22} />
            <span className="cart">Cart</span>
          </div>
        </div>
      </div>

      {/* ------------ Mobile Header ------------ */}
      <div className="mobile-header-container">
        <div className="mobile-header-first-subcontainer">
          <RxHamburgerMenu
            color="#ffff"
            size={24}
            onClick={() => setSidebarOpen(true)}
            className="hamburger-icon"
          />
          <div className="header-logo">
            <img src="/assets/Images/delco-white-logo.png" alt="" />
          </div>
          <div className="mobile-sign-in">
            <div className="mobile-location-main">
              <VscAccount color="#ffff" size={24} />
              <FiShoppingCart color="#ffff" size={24} />
            </div>
          </div>
        </div>
        <div className="mobile-header-input">
          <input type="text" placeholder="Search In-Store Products" />
          <IoSearchOutline color="#004E36" size={20} />
        </div>
      </div>

      <div
        className={`mobile-header-second-container ${
          showLocation ? "show" : "hide"
        }`}
      >
        <div className="mobile-location-main">
          <div className="mobile-location">
            <SlLocationPin color="#2E2D2B" size={20} />
            <div className="mobile-name-location">
              <p>Delco Farmers Market</p>
              <span>Find a Store</span>
            </div>
          </div>
          <MdArrowForwardIos color="#004e36" size={15} />
        </div>
      </div>

      {/* ------------ Desktop Second Menu ------------ */}
      <div className="second-header-main">
        <div className="second-header-container">
          <span>Order Groceries</span>
          <span>Cafe</span>
          <span>Bakery</span>
          <span>Kitchen/Deli</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
      </div>

      {/* ------------ Mobile Sidebar ------------ */}
      <div className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar">
          <IoClose
            className="close-btn"
            size={28}
            color="#fff"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="sidebar-logo">
            <img src="/assets/Images/delco-white-logo.png" alt="logo" />
          </div>
          <div className="sidebar-links">
            <span>Order Groceries</span>
            <span>Cafe</span>
            <span>Bakery</span>
            <span>Kitchen/Deli</span>
            <span>About Us</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
