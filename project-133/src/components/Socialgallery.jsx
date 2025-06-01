import React from 'react';
import './SocialGallery.css';

const SocialGallery = () => {
  return (
    <section className="social-gallery">
      <div className="container">
        <div className="social-gallery-header">
          <h2>Share your setup with</h2>
          <h2 className="hashtag">#FuniroFurniture</h2>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item item-1">
            <img src="/gallery/bookshelf.jpg" alt="Bookshelf with plants and decorations" />
          </div>
          
          <div className="gallery-item item-2">
            <img src="/gallery/workspace.jpg" alt="Workspace with laptop and vintage radio" />
          </div>
          
          <div className="gallery-item item-3">
            <img src="/gallery/side-tables.jpg" alt="Wooden stools with decorations" />
          </div>
          
          <div className="gallery-item item-4">
            <img src="/gallery/dining-area.jpg" alt="Dining area with table and chairs" />
          </div>
          
          <div className="gallery-item item-5">
            <img src="/gallery/bedroom.jpg" alt="Modern bedroom with beige bed" />
          </div>
          
          <div className="gallery-item item-6">
            <img src="/gallery/wooden-desk.jpg" alt="Wooden desk by brick wall" />
          </div>
          
          <div className="gallery-item item-7">
            <img src="/gallery/vintage-chair.jpg" alt="Brown vintage armchair" />
          </div>
          
          <div className="gallery-item item-8">
            <img src="/gallery/frame.jpg" alt="Empty frame and vase decoration" />
          </div>
          
          <div className="gallery-item item-9">
            <img src="/gallery/kitchen.jpg" alt="Kitchen with geometric tile backsplash" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialGallery;