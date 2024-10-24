import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Assets/Styles/AboutUs.css';
import AboutUsBackground from '../../Assets/Images/AboutUs/Aboutus.jpg';
import MobAboutUs from '../../Assets/Images/AboutUs/mobabout.jpg';
import axios from 'axios';

const Section1 = () => {
  const [Useabout, setAbout] = useState([]);

  useEffect(() => {
    axios.get("home_about/get")
      .then((response) => {
        setAbout(response.data.responseData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <Container fluid>
      {/* Desktop */}
      <Row className="d-none d-lg-block position-relative">
        <img src={AboutUsBackground} className='img-fluid p-0' style={{ marginTop: '-5px' }} alt="About Us Background" />
        <Col lg={11} className="text-white position-absolute ps-lg-4 my-lg-5" style={{ top: '-4%', transform: 'translateX(4%)' }}>
          <h1 className="textheading fw-bolder">
            about <span className="highlight">us</span>
          </h1>
          <div className='ps-lg-4'>
            <div dangerouslySetInnerHTML={{ __html: Useabout[0]?.description }}></div>
          </div>
        </Col>
      </Row>

      {/* Mobile */}
      <Row className="d-lg-none position-relative">
        <img src={MobAboutUs} className='img-fluid p-0' style={{ marginTop: '-5px' }} alt="Mobile About Us" />
        <Col xs={12} className="text-white position-absolute ps-lg-4 my-lg-5 mobc" style={{  }}>
          <h1 className="textheading fw-bolder">
            about <span className="highlight">us</span>
          </h1>
          <div className='overflow-container'>
            <div className='ps-lg-4' style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <div dangerouslySetInnerHTML={{ __html: Useabout[0]?.description }}></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section1;
