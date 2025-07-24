// Core Imports
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

// Bootstrap Components
import { Container, Col, Row } from "react-bootstrap";

// Assets and Icons
import Logo from "../assets/images/logo/logo-light.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const { pathname } = useLocation();

  const [activePage, setActivePage] = useState({
    home: "",
    rmc: "",
    contact: "",
  });

  const currentYear = new Date().getFullYear();

  // Update active mobile footer menu tab based on path
  useEffect(() => {
    const path = pathname;

    setActivePage({
      home: path === "/" ? "active" : "",
      rmc: path === "/rmc" ? "active" : "",
      contact: path === "/contact" ? "active" : "",
    });

    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id="footer">
      <Container>
        <Row className="justify-content-lg-between justify-content-center">
          {/* === Logo & Social Icons === */}
          <Col className="col-12 col-md-4 col-lg-3 text-center mb-4 mb-md-0">
            <img src={Logo} alt="RMC Pro Logo" className="img-fluid mb-3" />
            <div className="social">
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="mx-2"><Link to="#"><InstagramIcon /></Link></li>
                <li className="mx-2"><Link to="#"><FacebookIcon /></Link></li>
                <li className="mx-2"><Link to="#"><YouTubeIcon /></Link></li>
                <li className="mx-2"><Link to="#"><TwitterIcon /></Link></li>
              </ul>
            </div>
          </Col>

          {/* === Quick Links === */}
          <Col className="col-12 col-md-4 col-lg-2 mb-4 mb-md-0 px-xl-5">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><h6><a href="/">Home</a></h6></li>
              <li><h6><a href="#">Company</a></h6></li>
              <li><h6><a href="#">RMC</a></h6></li>
              <li><h6><a href="#">Gallery</a></h6></li>
              <li><h6><a href="#">Contact Us</a></h6></li>
            </ul>
          </Col>

          {/* === Contact Information === */}
          <Col className="col-12 col-md-4 col-lg-3 px-xl-5">
            <h5>Contact Us</h5>
            <p><RoomIcon /> 123 Tech Park, Ta. Richmond,<br />Dist. Greater London,<br />United Kingdom – SW1A 1AA</p>
            <p><LocalPhoneIcon /> <a href="tel:+911234567890">+91 12345 67890</a></p>
            <p><EmailIcon /> <a href="mailto:info@rmcpro.com">info@rmcpro.com</a></p>
          </Col>

          {/* === Google Map Embed === */}
          <Col className="col-12 col-md-5 col-lg-3">
            <h5>Google Map</h5>
            <iframe
              title="RMC Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.978014612501!2d-121.94509168469229!3d37.54826927980085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc7e3c3b7e7c1%3A0x6f8a645f82fa4b78!2s789%20Innovation%20Dr%2C%20Fremont%2C%20CA%2094538%2C%20USA!5e0!3m2!1sen!2sin!4v1718278912937!5m2!1sen!2sin"
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
            <p>&copy; {currentYear} RMC Pro. All rights reserved.</p>
          </Col>
          <Col md={4} className="copyright links text-md-end">
            <p>
              <a href="#">Privacy Policy</a> | <a href="#">Sitemap</a>
            </p>
          </Col>
        </Row>
      </Container>

      {/* === Mobile Sticky Footer Menu === */}
      <div className="d-block d-md-none menu-footer">
        <Row className="p-3">
          <Col className="b-right text-center">
            <Link to="/" className={activePage.home}>Home</Link>
          </Col>
          <Col className="b-right text-center">
            <Link to="#" className={activePage.rmc}>RMC</Link>
          </Col>
          <Col className="text-center">
            <Link to="#" className={activePage.contact}>Contact Us</Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
