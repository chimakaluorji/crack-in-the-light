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
// Sliders Component (Mobile Only)
// ======================
const Sliders = () => {
  return (
    // Only visible on extra-small and small devices
    <div className="sliders d-sm-none">
      <Carousel controls={false} interval={5000} fade>

        {/* ===== Slide 1 ===== */}
        <Carousel.Item>
          <img 
            className="d-block w-100 slider-img" 
            src={Slider1} 
            alt="ready mix concrete delivery" 
          />
          {/* Optional dark overlay for better text contrast */}
          <div className="slider-overlay" />
          <Carousel.Caption className="carousal-text">
            <h2 className="text-center">Premium Quality Ready Mix Concrete</h2>
            <p className="mb-0 text-center">Delivered to your site with speed and precision.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* ===== Slide 2 ===== */}
        <Carousel.Item>
          <img 
            className="d-block w-100 slider-img" 
            src={Slider2} 
            alt="batching plant in operation" 
          />
          <div className="slider-overlay" />
          <Carousel.Caption>
            <h2 className="text-center">Modern Batching Plants</h2>
            <p className="mb-0 text-center">Equipped with state-of-the-art technology.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* ===== Slide 3 ===== */}
        <Carousel.Item>
          <img 
            className="d-block w-100 slider-img" 
            src={Slider3} 
            alt="construction site with rmc" 
          />
          <div className="slider-overlay" />
          <Carousel.Caption>
            <h2 className="text-center">Reliable Concrete Supply Partner</h2>
            <p className="mb-0 text-center">Trusted by contractors and builders in the region.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default Sliders;
