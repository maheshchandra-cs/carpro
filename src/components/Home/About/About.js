import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutUs from '../../../images/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section className="about">
      <div className="text-center title">
        <h6 className="primary__color font__bold">ABOUT US</h6>
        <h2>About Our Services</h2>
      </div>
      <Container>
        <Row className="py-4 pt-5">
          <Col md={5} className="my-2">
            <img className="rounded" src={AboutUs} alt="" />
          </Col>
          <Col md={{ span: 6, offset: 1 }} className="my-2">
            <h3>Welcome To Our Service</h3>
            <p classname="justify">
            At CarPro, we pride ourselves on our commitment to customer satisfaction. We strive to provide our customers with the highest level of service, professionalism, and transparency. We believe that communication is key, and we always keep our customers informed throughout the service process.
            </p>
            <div className="icon">
              <span>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
