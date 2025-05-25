import React from 'react';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Furniro</h1>
        </div>
        
        <nav className="main-nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="icon-button">
            <AiOutlineUser className="nav-icon" />
          </button>
          <button className="icon-button">
            <AiOutlineSearch className="nav-icon" />
          </button>
          <button className="icon-button">
            <AiOutlineHeart className="nav-icon" />
          </button>
          <button className="icon-button">
            <AiOutlineShoppingCart className="nav-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
