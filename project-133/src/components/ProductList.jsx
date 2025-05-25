import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
