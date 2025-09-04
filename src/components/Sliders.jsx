// ======================
// Core Imports
// ======================
import React from "react";
import { Carousel } from "react-bootstrap";

// ======================
// Image Assets
// ======================
import Slider1 from "../assets/images/logo/logo 2.jpg";
import Slider2 from "../assets/images/logo/logo 2.jpg";
import Slider3 from "../assets/images/logo/logo 2.jpg";

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
            className="d-block w-100 slider-img-mobile"
            src={Slider1}
            alt="ready mix concrete delivery"
          />
          <div className="slider-overlay" />
          <Carousel.Caption className="carousal-text">
            <h2>Cracks in the Light is Short Drama</h2>
            <p className="mb-0">
              on male depression childhood trauma, and social expectations in
              contemporary society.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* ===== Slide 2 ===== */}
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img-mobile"
            src={Slider2}
            alt="batching plant in operation"
          />
          <div className="slider-overlay" />
          <Carousel.Caption>
            <h2>This drama represent</h2>
            <p className="mb-0">
              the culmination of my learning and development throughout the
              Masters in Film and Television Production program.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* ===== Slide 3 ===== */}
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img-mobile"
            src={Slider3}
            alt="construction site with rmc"
          />
          <div className="slider-overlay" />
          <Carousel.Caption>
            <h2>The aim of this drama</h2>
            <p className="mb-0">
              is to investigate the impact of unprocessed trauma on adult life.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Sliders;
