import React from 'react';
import './BrowseRange.css';

const categories = [
  {
    id: 1,
    name: 'Dining',
    image: 'dining.png',
  },
  {
    id: 2,
    name: 'Living',
    image: '/images/living.jpg',
  },
  {
    id: 3,
    name: 'Bedroom',
    image: '/images/bedroom.jpg',
  }
];

const BrowseRange = () => {
  return (
    <section className="browse-range">
      <div className="browse-range-content">
        <h2>Browse The Range</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;