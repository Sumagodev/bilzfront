import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import delivery1 from "../../Assets/Images/SolutionOverview/delivery 1.png"
import delivery2 from "../../Assets/Images/SolutionOverview/delivery 2.png"
import delivery3 from "../../Assets/Images/SolutionOverview/delivery 3.png"
import delivery4 from "../../Assets/Images/SolutionOverview/delivery 4.png"
import delivery7 from "../../Assets/Images/SolutionOverview/delivery 7.png"
import delivery6 from "../../Assets/Images/SolutionOverview/delivery 6.png"
import '../../Assets/Styles/Solution/SolutionOverview.css'
const Section1 = () => {
  const Solution = [
    {
      title: 'Mechanical/Plant Engineering',
      bgColor: '#02546D',
      image: delivery1
    },
    {
      title: 'Industrial Measurement Technology',
      bgColor: '#4BBABE',
      image: delivery2
    },
    {
      title: 'Semiconductor',
      bgColor: '#88BE4B',
      image: delivery3
    },
    {
      title: 'Pharmaceuticals',
      bgColor: '#4BBABE',
      image: delivery7
    },
    {
      title: 'Construction',
      bgColor: '#88BE4B',
      image: delivery6
    },
    {
      title: 'Research',
      bgColor: '#02546D',
      image: delivery4
    },
  ]
  return (
    <>
      <Container fluid>
        <h1 className="fw-bold text-center textheading pt-5 pb-4">
          We will also find <span className='highlight'>your solution!</span>
        </h1>

        <Row className="position-relative mx-lg-5 px-lg-5 mb-3">
          {Solution.map((item, index) => (
            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className='py-2' >
              <Card className="rounded-4 cardshadow py-2 px-0" style={{height:"300px"}}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <div
                    className="rounded-circle cardimgcircle cardshadow d-flex justify-content-center align-items-center"
                    style={{
                      width: '140px',
                      height: '140px',
                      backgroundColor: item.bgColor,
                    }}
                  >
                    <img src={item.image} className='img-fluid' width={80} />
                   
                  </div>
                  <Card.Title className='text-center fw-bolder pt-3'>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Section1
