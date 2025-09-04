// Core Imports
import React from "react";
import { Link } from "react-router-dom";

// Bootstrap Components
import { Container, Col, Row } from "react-bootstrap";

// Assets and Icons
//import Logo from "../assets/images/logo/logo-light.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer">
      <Container>
        <Row className="justify-content-lg-between justify-content-center">
          {/* === Logo & Social Icons === */}
          <Col className="col-12 col-md-4 col-lg-3 text-center mb-4 mb-md-0">
            {/*  <img src={Logo} alt="RMC Pro Logo" className="img-fluid mb-3" /> */}
            <div className="social">
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="mx-2">
                  <Link to="#">
                    <InstagramIcon />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="#">
                    <FacebookIcon />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="#">
                    <YouTubeIcon />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="#">
                    <TwitterIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* === Contact Information === */}
          <Col className="col-12 col-md-4 col-lg-3 px-xl-5">
            <h5>Contact Us</h5>
            <p>
              <RoomIcon /> 101 Waterloo Road,
              <br />
              Wolverhampton,
              <br />
              United Kingdom – WV1 4QU
            </p>
            <p>
              <LocalPhoneIcon /> <a href="tel:+911234567890">+44 7440 128797</a>
            </p>
            <p>
              <EmailIcon />{" "}
              <a href="mailto:info@rmcpro.com">ogonnalyndangwu@gmail.com</a>
            </p>
          </Col>

          {/* === Google Map Embed === */}
          <Col className="col-12 col-md-5 col-lg-3">
            <h5>Google Map</h5>
            <iframe
              title="Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.805198191343!2d-2.124486723210694!3d52.58797043289266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709bb28fd26013%3A0xd19d3da9a8f03a74!2s101%20Waterloo%20Rd%2C%20Wolverhampton%20WV1%204QU%2C%20UK!5e0!3m2!1sen!2suk!4v1736012800000!5m2!1sen!2suk"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Col>
        </Row>

        {/* === Divider Line === */}
        <hr />

        {/* === Footer Bottom Row === */}
        <Row>
          <Col md={8} className="copyright">
            <p>&copy; {currentYear}. All rights reserved.</p>
          </Col>
          <Col md={4} className="copyright links text-md-end">
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
              <Link to="/sitemap">Sitemap</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
