import React from 'react';
import './ShopBanner.css';

const ShopBanner = () => {
  return (
    <div className="shop-banner">
      
      <div className="banner-content">
        <h2>👗 Start Your Fashion Shop Today</h2>
        
        <p>
          Sell clothes, shoes & accessories to thousands of buyers in Ghana
        </p>

        <div className="banner-buttons">
          <button className="primary-btn">Create Your Shop</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      <div className="floating-icons">
        <span>👗</span>
        <span>👟</span>
        <span>🧥</span>
        <span>👜</span>
      </div>

    </div>
  );
};

export default ShopBanner;