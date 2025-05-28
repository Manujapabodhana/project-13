import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    image: '/testimonial-1.jpg',
    rating: 5,
    review: 'Amazing quality furniture! The craftsmanship is exceptional and the delivery was prompt. Highly recommend Furniro for anyone looking for premium furniture.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Homeowner',
    image: '/testimonial-2.jpg',
    rating: 5,
    review: 'Furniro transformed our living space completely. The furniture pieces are not only beautiful but also very functional. Great customer service too!'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Architect',
    image: '/testimonial-3.jpg',
    rating: 4,
    review: 'Professional quality furniture with modern designs. Perfect for contemporary homes. The online shopping experience was smooth and hassle-free.'
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <div className="testimonials-header">
          <h2>What Our Customers Say</h2>
          <p>Hear from our satisfied customers about their experience with Furniro</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.review}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Furniture Collections</p>
          </div>
          <div className="stat">
            <h3>4.9</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Quality Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
