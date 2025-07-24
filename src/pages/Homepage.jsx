// ========================
// Core Imports
// ========================
import React from 'react';
import { Link } from 'react-router-dom';

// ========================
// Components
// ========================
import Slider from '../components/Slider';
import Sliders from '../components/Sliders';

// ========================
// Assets
// ========================
import About from '../assets/images/about-rmc-pro.webp';
import Vehicle1 from '../assets/images/vehicle-1.svg';
import Vehicle2 from '../assets/images/vehicle-2.svg';

// ========================
// Libraries
// ========================
import { Container, Col, Row } from 'react-bootstrap';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Marquee from 'react-fast-marquee';

// ========================
// Data
// ========================
import { benefits } from '../Benefits';

// ========================
// Homepage Component
// ========================
const Homepage = () => {
  return (
    <div>
      {/* ========== Hero Sliders ========== */}
      <Slider />
      <Sliders />

      {/* ========== About Us Section ========== */}
      <section className="entry pb-unset">
        <Container>
          <Row>
            {/* Left Column: About Image */}
            <Col md={5}>
              <img 
                src={About} 
                alt="About RMC Pro" 
                className="img-fluid my-auto" 
              />
              <div className="info">
                <h4><span>14</span> Years of Experience</h4>
              </div>
            </Col>

            {/* Right Column: Text Content */}
            <Col md={7}>
              <h2>About Us</h2>
              <h3>We Are The Leader In Ready Mix Concrete Manufacturing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates
                nostrum dolores voluptatibus, natus consequatur distinctio rerum! Fugiat accusamus
                autem a. Ipsum, repellat inventore. Accusantium quia, temporibus minima fugit
                laborum ipsum consequuntur alias maiores quisquam sit nostrum possimus mollitia ut,
                deserunt, nihil ab voluptate est harum consectetur illo at. Qui!
              </p>
              <Link to="/company" className="btn btn-primary">
                Know More <ArrowRightAltIcon />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========== Moving Marquee - Left to Right ========== */}
      <Marquee direction="left" className="mt-2" gradientWidth={10}>
        <img src={Vehicle1} alt="Vehicle moving left" />
      </Marquee>

      {/* ========== RMC Benefits Section ========== */}
      <section className="section-bg bg-1">
        <Container className="py-md-4">
          <div className="text-center">
            <h2>RMC BENEFITS</h2>
            <h3 className="type-2">Benefits Of Ready Mixed Concrete Over Site Mixed Concrete</h3>
          </div>

          <Row>
            {benefits.map((benefit, index) => (
              <Col md={6} key={index}>
                <div className="benefits">
                  <img src={benefit.icon} alt={benefit.name} />
                  <h4>{benefit.name}</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: benefit.description.substring(0, 105) + '...',
                    }}
                  />
                  <Link to="#">Read More</Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* ========== Moving Marquee - Right to Left ========== */}
        <Marquee direction="right" className="mt-2" gradientWidth={10}>
          <img src={Vehicle2} alt="Vehicle moving right" />
        </Marquee>
      </section>
    </div>
  );
};

export default Homepage;
