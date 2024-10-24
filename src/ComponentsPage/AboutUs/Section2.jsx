import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import vision from '../../Assets/Images/AboutUs/vision.png';
import mission from '../../Assets/Images/AboutUs/mission.png';
import ourvalue from '../../Assets/Images/AboutUs/ourvalue.png';
import '../../Assets/Styles/AboutUs.css';
import axios from 'axios';

const Section2 = () => {
  const [About, setAbout] = useState([]);

  useEffect(() => {
    axios.get("About/get")
      .then((response) => {
        console.log(response.data);
        setAbout(response.data.responseData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <Container fluid className='py-3 pb-5'>
      <Row className="d-flex justify-content-start p-0">
        {About.length > 0 ? (
          <>
            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
              <Card className="border-0 card-fixed-height">
                <Card.Body className="rounded-4 Ourvalue cardshadow text-start">
                  <h3 className="fw-bolder textheading text-center text-uppercase">{About[2]?.name}</h3>
                  <div dangerouslySetInnerHTML={{ __html: About[2]?.company_Name || '' }} />
                </Card.Body>
                <div className="card-icon-container image-center-mobile">
                  <img src={ourvalue} className="cardicon" alt="Our Value" />
                </div>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
              <Card className='border-0 card-fixed-height'>
                <Card.Body className='rounded-4 mission cardshadow text-start'>
                  <h3 className="fw-bolder textheading text-center text-mission text-uppercase">{About[1]?.name}</h3>
                  <div className='text-white' dangerouslySetInnerHTML={{ __html: About[1]?.company_Name || '' }} />
                </Card.Body>
                <div className="card-icon-container image-center-mobile">
                  <img src={mission} className='cardicon' alt="Mission" />
                </div>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
              <Card className='text-center border-0 card-fixed-height'>
                <Card.Body className='rounded-4 vision cardshadow text-start'>
                  <h3 className="fw-bolder textheading text-center text-vision text-uppercase">{About[0]?.name}</h3>
                  <div className='text-white' dangerouslySetInnerHTML={{ __html: About[0]?.company_Name || '' }} />
                </Card.Body>
                <div className="card-icon-container image-center-mobile">
                  <img src={vision} className='cardicon' alt="Vision" />
                </div>
              </Card>
            </Col>
          </>
        ) : (
          <h3 className="text-center">Loading...</h3>
        )}
      </Row>
    </Container>
  )
}

export default Section2;
