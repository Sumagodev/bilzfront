import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Section1 = () => {
  return (
    <>
      <Container fluid>
        <Row className='mx-4 pt-5'>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <h4 className='fw-medium'>HOW WE WORK</h4>
            <h1 className='fw-bolder textheading'>We <span className='highlight'>believe</span> in the people who <span className='highlight'>work</span> for us.</h1>
            <p className='pt-3'>We at Bilz are engineers and technicians with heart and soul, dedicated sales people, project managers who handle every order, warehouse workers who have our large warehouse fully under control and... We could go on and on. What unites us all is that we place great value on good cooperation.</p>
          </Col>
        </Row>
       </Container>
    </>
  )
}

export default Section1
