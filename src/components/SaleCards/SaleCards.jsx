import React from "react";
import "./SaleCards.css";

const SaleCards = () => {
  return (
    <div className="sales-cards-main">
      <div className="sales-cards-container">
        <img src="/assets/Images/card1.jpg" alt="" />
        <span>$3.99 lb with Prime: Organic Heirloom Tomatoes</span>
      </div>
      <div className="sales-cards-container">
        <img src="/assets/Images/card2.jpg" alt="" />
        <span>
          20% off with Prime: Sustainable Wild Caught King Salmon Fillets
        </span>
      </div>
      <div className="sales-cards-container">
        <img src="/assets/Images/card3.jpg" alt="" />
        <span>
          $2.99 lb with Prime: Organic Black, Red and Green Seedless Grapes
        </span>
      </div>
      <div className="sales-cards-container">
        <img src="/assets/Images/card4.jpg" alt="" />
        <span>Every Friday: $12 ea Any Large Hot 1-Topping Pizza</span>
      </div>
    </div>
  );
};

export default SaleCards;
