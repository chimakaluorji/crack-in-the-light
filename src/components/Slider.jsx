// ======================
// Core Imports
// ======================
import React from 'react';
import { Carousel } from 'react-bootstrap';

// ======================
// Image Assets
// ======================
import Slider1 from '../assets/images/rmc-pro-ready-mixed-concrete.webp';
import Slider2 from '../assets/images/concrete-batching-plants.webp';
import Slider3 from '../assets/images/concrete-mixes-supplier-rmc-pro.webp';

// ======================
// Slider Component
// ======================
const Slider = () => {
  return (
    // Hide slider on extra-small devices (mobile)
    <div className="slider d-none d-sm-block">
      <Carousel controls={false} interval={5000} fade>

        {/* ===== Slide 1 ===== */}
        <Carousel.Item>
          <div className="slider-image-wrapper">
            <img 
              className="d-block w-100 slider-img" 
              src={Slider1} 
              alt="ready mix concrete delivery" 
            />
            <div className="slider-overlay" /> {/* Optional dark overlay */}
          </div>
          <Carousel.Caption className="carousal-text">
            <h2>Premium Quality Ready Mix Concrete</h2>
            <p className="mb-0">Delivered to your site with speed and precision.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* ===== Slide 2 ===== */}
        <Carousel.Item>
          <div className="slider-image-wrapper">
            <img 
              className="d-block w-100 slider-img" 
              src={Slider2} 
              alt="batching plant in operation" 
            />
            <div className="slider-overlay" />
          </div>
          <Carousel.Caption>
            <h2>Modern Batching Plants</h2>
            <p className="mb-0">Equipped with state-of-the-art technology.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* ===== Slide 3 ===== */}
        <Carousel.Item>
          <div className="slider-image-wrapper">
            <img 
              className="d-block w-100 slider-img" 
              src={Slider3} 
              alt="construction site with rmc" 
            />
            <div className="slider-overlay" />
          </div>
          <Carousel.Caption>
            <h2>Reliable Concrete Supply Partner</h2>
            <p className="mb-0">Trusted by contractors and builders in the region.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default Slider;
