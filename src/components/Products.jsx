import React from 'react';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    originalPrice: 'Rp 3.500.000',
    discount: '-30%',
    image: '/images/syltherine.jpg'
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    image: '/images/leviosa.jpg'
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    originalPrice: 'Rp 14.000.000',
    discount: '-50%',
    image: '/images/lolito.jpg'
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    isNew: true,
    image: '/images/respira.jpg'
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
    image: '/images/grifo.jpg'
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 'Rp 150.000',
    isNew: true,
    image: '/images/muggo.jpg'
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 'Rp 7.000.000',
    originalPrice: 'Rp 14.000.000',
    discount: '-50%',
    image: '/images/pingky.jpg'
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
    isNew: true,
    image: '/images/potty.jpg'
  }
];

const Products = () => {
  return (
    <section className="products">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-card-inner">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount && <span className="discount">{product.discount}</span>}
                {product.isNew && <span className="new-tag">New</span>}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <div className="price-section">
                  <span className="price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                </div>
              </div>
              <div className="product-actions">
                <button className="add-to-cart">Add to cart</button>
                <div className="action-buttons">
                  <button className="share">Share</button>
                  <button className="compare">Compare</button>
                  <button className="like">Like</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="show-more">Show More</button>
    </section>
  );
};

export default Products; 