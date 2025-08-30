"use client";

import React, { useState, useRef, useEffect } from "react";
import "./SalesCarousel.css";

const products = [
  { title: "Patagonia Provisions Sardines + Beans", subtitle: "Buzz Worthy", img: "/assets/Images/slidecard1.jpg" },
  { title: "Pesto Heirloom Caprese Pizza", subtitle: "Limited Time", img: "/assets/Images/slidecard2.jpg" },
  { title: "Amylu Maple & Cherry Chicken Sausage Breakfast Bites", subtitle: "New", img: "/assets/Images/slidecard3.jpg" },
  { title: "Patagonia Provisions Sardines + Beans", subtitle: "Buzz Worthy", img: "/assets/Images/slidecard4.jpg" },
  { title: "Pesto Heirloom Caprese Pizza", subtitle: "Limited Time", img: "/assets/Images/slidecard5.jpg" },
  { title: "Amylu Maple & Cherry Chicken Sausage Breakfast Bites", subtitle: "New", img: "/assets/Images/slidecard6.jpg" },
  { title: "Amylu Maple & Cherry Chicken Sausage Breakfast Bites", subtitle: "New", img: "/assets/Images/slidecard7.jpg" },
];

const SalesCarousel = () => {
  const [index, setIndex] = useState(3);
  const [transition, setTransition] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const trackRef = useRef();


  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const slides = window.innerWidth <= 786 ? 1 : 3;
        setSlidesToShow(slides);
        setIndex(slides);
      };


      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const slides = [
    ...products.slice(-slidesToShow),
    ...products,
    ...products.slice(0, slidesToShow),
  ];

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (!transition) return;
    if (index === slides.length - slidesToShow) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slidesToShow);
      }, 500);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length - slidesToShow * 2);
      }, 500);
    }
  }, [index, slides.length, slidesToShow, transition]);

  useEffect(() => {
    if (!transition) setTransition(true);
  }, [transition]);

  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
  };

  const handleDragEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.pageX || (e.changedTouches && e.changedTouches[0].pageX);
    const diff = endX - startX.current;

    if (diff > 50) {
      prevSlide();
    } else if (diff < -50) {
      nextSlide();
    }
  };

  return (
    <div className="sales-carousel">
      <h2>Discover Our Latest & Greatest</h2>
      <p>
        Check out what’s hot and new to Whole Foods Market, including limited-time and seasonal finds.
      </p>

      <div className="carousel-container">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div
          className="carousel-viewport"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={trackRef}
            className="carousel-track"
            style={{
              transform: `translateX(-${(index * 100) / slidesToShow}%)`,
              transition: transition ? "transform 0.5s ease-in-out" : "none",
            }}
          >
            {slides.map((product, idx) => (
              <div
                className="carousel-item"
                key={idx}
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <img src={product.img} alt={product.title} />
                <div className="product-title">{product.title}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="carousel-dots">
        {products.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${
              idx === ((index - slidesToShow + products.length) % products.length)
                ? "active-dot"
                : ""
            }`}
            onClick={() => setIndex(idx + slidesToShow)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SalesCarousel;
