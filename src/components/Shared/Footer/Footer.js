import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
const Footer = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col md={6} lg={3}>
          <h3 className="links__color menu__icon primary__color">CarService</h3>
          <div className="footer__icon">
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                San Marcos TX, USA
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                carpro@gmail.com
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                +12345678910
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <h3>Customer Support</h3>
          <ul className="f__service">
            <li>Help Desk</li>
            <li>Contact us</li>
            <li>Driver Rewards</li>
            <li>Services</li>
            <li>And many more .....</li>
          </ul>
        </Col>
         <Col md={6} lg={3}>
          <h3>Our Team</h3>
          <ul className="f__service">
            <li>Pallavi Krishna Reddy</li>
            <li>Mahesh Chandra Churi</li>
            <li>Abhinay Kumar Singh</li>
            <li>Satya Anusha Chintapilli</li>
          </ul> 
  </Col> 
        <Col md={6} lg={3}>
          <h3>Working Hours</h3>
          <ul className="f__workingTime">
            <li>
              <span>Monday</span>
              <span>8.00AM - 6.00 PM</span>
            </li>
            <li>
              <span>Tuesday</span>
              <span>8.00AM - 6.00 PM</span>
            </li>
            <li>
              <span>Wednesday</span>
              <span>8.00AM - 6.00 PM</span>
            </li>
            <li>
              <span>Thursday</span>
              <span>8.00AM - 6.00 PM</span>
            </li>
            <li>
              <span>Friday</span>
              <span>8.00AM - 6.00 PM</span>
            </li>
          </ul>
        </Col>
      </Row>
     
    </Container>
  );
};

export default Footer;
