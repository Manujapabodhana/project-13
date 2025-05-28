import React, { useState } from 'react';
import './Roomlnspiration.css';

const rooms = [
  {
    id: 1,
    number: '01',
    type: 'Bed Room',
    title: 'Inner Peace',
    image: 'room-1.png',
  },
  {
    id: 2,
    number: '02',
    type: 'Living Room',
    title: 'Modern Space',
    image: '/images/room-2.jpg',
  },
  {
    id: 3,
    number: '03',
    type: 'Kitchen',
    title: 'Culinary Haven',
    image: '/images/room-3.jpg',
  },
  {
    id: 4,
    number: '04',
    type: 'Office',
    title: 'Work Sanctuary',
    image: '/images/room-4.jpg',
  },
];

const RoomInspiration = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="room-inspiration">
      <div className="room-inspiration-content">
        <div className="inspiration-text">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button className="explore-more">Explore More</button>
        </div>

        <div className="slider-container">
          <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {rooms.map((room) => (
              <div key={room.id} className="slide">
                <img src={room.image} alt={room.title} />
                <div className="slide-content">
                  <div className="room-info">
                    <span className="room-number">{room.number}</span>
                    <span className="room-type">{room.type}</span>
                  </div>
                  <h3>{room.title}</h3>
                  <button className="view-more">
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="prev" onClick={prevSlide}>
              <span>←</span>
            </button>
            <div className="slider-dots">
              {rooms.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button className="next" onClick={nextSlide}>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomInspiration;