// ========================
// Core Imports
// ========================
import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

// ========================
// Components
// ========================
import Slider from "../components/Slider";
import Sliders from "../components/Sliders";

// ========================
// Libraries
// ========================
import { Container, Col, Row } from "react-bootstrap";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
//import Marquee from "react-fast-marquee";

// ========================
// Data
// ========================
//import { benefits } from "../Benefits";
import { profile } from "../ActorsProfile";
import { pictures } from "../Pictures";

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
              <div className="image-slider">
                <Carousel
                  controls={true}
                  indicators={true}
                  interval={3000}
                  fade
                >
                  {pictures.map((pic) => (
                    <Carousel.Item key={pic.id}>
                      <img
                        className="d-block w-100 slider-img"
                        src={pic.url}
                        alt={pic.alt || "slider image"}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </Col>

            {/* Right Column: Text Content */}
            <Col md={7}>
              <h3>
                A wealthy Nigerian entrepreneur, admired for his generosity and
                smile, battles the hidden wounds of a childhood trauma that
                never healed.
              </h3>
              <p>
                Cracks in the Light is more than a film—it is a conversation
                starter. By exploring themes of masculinity, trauma, and mental
                health stigma in Nigeria, the story gives voice to silent
                struggles too often dismissed or hidden. It asks its audience to
                look deeper, to recognize that smiles can mask scars, and to
                confront the urgent need for empathy and awareness in our
                communities.
              </p>
              <Link to="/drama" className="btn btn-primary">
                Watch the Trailer
                <ArrowRightAltIcon />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========== Moving Marquee - Left to Right ========== */}
      {/* <Marquee direction="left" className="mt-2" gradientWidth={10}>
        <img src={Vehicle1} alt="Vehicle moving left" />
      </Marquee> */}

      {/* ========== RMC Benefits Section ========== */}
      <section className="section-bg bg-1">
        <Container className="py-md-4">
          <div className="text-center">
            {/*  <h2>RMC BENEFITS</h2> */}
            <h3 className="type-2">The Faces Behind the Story</h3>
          </div>

          <Row>
            {profile.map((actor, index) => (
              <Col md={6} key={index}>
                <div className="actor-card">
                  <div className="actor-icon">
                    <img src={actor.icon} alt={actor.name} />
                  </div>
                  <div className="actor-details">
                    <h4>{actor.name}</h4>
                    <h6>{actor.role}</h6>
                    <p>
                      <strong>Background:</strong> {actor.background}
                    </p>
                    <p>
                      <strong>Experience:</strong> {actor.experience}
                    </p>
                    <p>
                      <strong>Hobbies:</strong> {actor.hobbies}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
