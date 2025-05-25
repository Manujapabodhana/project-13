import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <img src="/Home1.png" alt="Modern interior with rattan chair, white cabinet, and tropical plant" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="new-arrival">New Arrival</span>
          <h1>Discover Our<br />New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="buy-now-btn">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;