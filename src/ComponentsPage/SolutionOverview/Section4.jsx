import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SolutionCard from '../../Assets/Images/SolutionOverview/SolutionCard.png';
import '../../Assets/Styles/Solution/SolutionOverview.css'
const Section4 = () => {
  return (
    <Container fluid>
      <Row className="position-relative m-0">
        <Col xs={12} sm={6}>
          <Card className='my-4 mx-1 rounded-4 cardborders'>
            <Card.Body >
              <Card.Title className='py-3 textheading'>
                <h4 className='d-flex justify-content-center fw-bolder'>
                  Complete<span className='highlight'>&nbsp;solutions</span>
                </h4>
              </Card.Title>
              <Card.Text className='px-3'>
                <p className='test-justify'>
                  Our all-round, worry-free package takes the pressure off you as much as possible. We advise you comprehensively, have a holistic view with our vibration measurements and simulations and always consider all concepts. You can concentrate fully on your core business – we analyze, develop, deliver and install your solution.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6}>
          <Card className='my-4 mx-1 rounded-4 cardborders'>
            <Card.Body >
              <Card.Title className='py-3 textheading'>
                <h4 className='d-flex justify-content-center fw-bolder'>
                  Engineering<span className='highlight'>&nbsp;services</span>
                </h4>
              </Card.Title>
              <Card.Text className='px-3'>
                <p className='test-justify'>
                  Our all-round, worry-free package takes the pressure off you as much as possible. We advise you comprehensively, have a holistic view with our vibration measurements and simulations and always consider all concepts. You can concentrate fully on your core business – we analyze, develop, deliver and install your solution.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6}>
          <Card className='my-4 mx-1 rounded-4 cardborders'>
            <Card.Body >
              <Card.Title className='py-3 textheading'>
                <h4 className='d-flex justify-content-center fw-bolder'>
                  Engineering <span className='highlight'>&nbsp;services</span>
                </h4>
              </Card.Title>
              <Card.Text className='px-3'>
                <p className='test-justify pb-5'>
                  Expect maximum quality in consulting, calculations, simulations, measurements, design, etc. We offer you the economically and technically optimal solution, based on the latest findings from science and technology. We are engineers with heart and soul.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6}>
          <div>
            <img src={SolutionCard} className="w-100 rounded-5 mx-1 my-4 img-SolutionCard" alt="Solution Card" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
