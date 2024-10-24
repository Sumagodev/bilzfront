import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import clock from '../../../Assets/Images/ServiceOverview/Clock.png';
import clock1 from '../../../Assets/Images/ServiceOverview/Clock1.png';

const Section3 = () => {
  return (
    <>
      <Container fluid>
        <Row className='pb-3 pt-5'>
          <Col xs={12}>
            <h1 className='text-center textheading fw-bolder pb-3'>
              All-round service from a <span className='highlight'>&nbsp;single source</span>
            </h1>
            <p className='d-flex justify-content-center mx-lg-5'>
              We are a solution provider with an all-round service: from the planning phase of a project to installation, you get everything from a single source. With our global sales network, we are represented in almost every part of the world and offer our customers on-site expert advice, many services and, of course, our vibration isolation solutions.
            </p>
          </Col>
        </Row>

        <Row className='pb-3 pt-4'>
          <Col xs={12}>
            <h1 className='fw-bolder text-center textheading'>
              What makes us <span className='highlight'>&nbsp;special</span>
            </h1>
          </Col>
        </Row>

        <Row className='ServiceBackgroundImg3 d-flex justify-content-center px-3 py-5'>
          {/** Adjusted column sizes for better responsiveness */}
          <Col xs={12} sm={6} md={9} lg={4} xl={4} xxl={4} className="specialheading cardshadow mx-4 position-relative my-4 ">
            <p className='px-5 fw-bolder fs-6'><span className='highlight'>fast</span> Response Times</p>
            <div className="specialimage cardshadow rounded-circle rounded-circle1 border border-light border-5 p-2">
              <img src={clock} alt="Fast Response Times" className="img-fluid" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={9} lg={4} xl={4} xxl={4} className="specialheading cardshadow mx-4 position-relative my-4">
            <p className='px-5 fw-bolder fs-6'><span className='highlight'>High</span> Flexibility</p>
            <div className="specialimage cardshadow rounded-circle rounded-circle2 border border-light border-5 p-2">
              <img src={clock1} alt="Personal Responsibility" className="img-fluid" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={9} lg={4} xl={4} xxl={4} className="specialheading cardshadow mx-4 position-relative my-4">
            <p className='px-5 fw-bolder fs-6'><span className='highlight'>personal</span> responsibility</p>
            <div className="specialimage cardshadow rounded-circle rounded-circle3 border border-light border-5 p-2">
              <img src={clock1} alt="Reliable Organization" className="img-fluid" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={9} lg={4} xl={4} xxl={4} className="specialheading cardshadow mx-4 position-relative my-4">
            <p className='px-5 fw-bolder fs-6'><span className='highlight'>Reliable</span> Organization</p>
            <div className="specialimage cardshadow rounded-circle border rounded-circle4 border-light border-5 p-2">
              <img src={clock1} alt="Alarm Clock" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Section3;
