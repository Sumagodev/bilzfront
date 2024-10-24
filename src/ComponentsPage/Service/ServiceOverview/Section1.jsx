import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import produkte from '../../../Assets/Images/ServiceOverview/produkte.png';

const Section1 = () => {
  return (
    <Container fluid>
      <Row className="ServiceBackgroundImg1 d-flex justify-content-center">
        <Col xs={12} lg={9} className="p-lg-5 position-relative">
          <img src={produkte} className="img-fluid w-100 service-product mob-img" alt="Product" />
          <div className="position-absolute hero-text mob-hero text-start text-white w-75 ps-lg-5">
            <h1 className="textheading mob-textheading ">
              SERVICE, TECHNICAL SUPPORT AND{' '}
              <span className="highlight">MAINTENANCE</span>
            </h1>
            <p className="pt-lg-4 pt-3 mob-p">
              Welcome to the Bilz service area for vibration isolation! Here you
              will find our services: on-site analysis, planning, installation,
              and commissioning as well as spare parts and maintenance.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
