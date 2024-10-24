import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const Banners = () => {
  const [index, setIndex] = useState(0);
  const [carrousel, setCarrousel] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Fetch Carrousel data on component mount
  useEffect(() => {
    axios.get("carrousel/get")
      .then((response) => {
        setCarrousel(response.data.responseData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <Container>
      <Row >
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='p-0 m-0 pt-5'>
          <Carousel activeIndex={index} onSelect={handleSelect} slide={false} interval={2000}>
            {carrousel.map((item, idx) => (
              <Carousel.Item key={idx} style={{marginTop: '32px'}}>
                <img text={`Slide ${idx + 1}`} src={item.img} className='img-fluid'/>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Banners;
