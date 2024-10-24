import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Corporate from '../../Assets/Images/JobOpportunity/Corporate.png'
import Working from '../../Assets/Images/JobOpportunity/Working.png'
import '../../Assets/Styles/JobOpportunity.css'

const Section2 = () => {
  const JobOpportunity = [
    {
      name: 'Corporate fitness',
      title: 'We offer corporate fitness with a personal trainer on our premises.',
      image1: Corporate
    },
    {
      name: 'Working atmosphere',
      title: 'We have a good working atmosphere treat each other with respect. We work together on varied and exciting tasks. ',
      image1: Working
    },
  ];
  return (
    <>
      <Container fluid>
        <Row className='mx-4 pt-5'>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <h1 className='fw-bolder textheading'>THIS IS WHAT WE <span className='highlight'>OFFER</span></h1>
            <p className='pt-1 fs-6'>Satisfied employees are the key to our success. We reward this with a range of benefits and voluntary additional services.</p>
          </Col>
        </Row>
        <Row className="justify-content-start px-lg-5 px-sm-0">
          {JobOpportunity.map((member, index) => (
            <Col xs={12} sm={6} md={6} lg={5} xl={5} xxl={5}>
            <div className="me-1 ms-1 h-100 pt-5 mx-md-0">
              <div className="card w-100 h-100 px-3 pt-4 z-n1 position-relativie rounded-5 cardshadow1">
                <div className="card-body d-flex flex-column">
                  <h3 className="text-dark fw-bolder">{member.name}</h3>
                  <p className="pt-3">{member.title}</p>
                </div>
              </div>
            </div>
            <div className="imgmain image-center-mobile">
              <div className="main">
                <img src={member.image1} className="img-fluid" style={{ height: '4rem', marginTop: '-1rem' }} />
              </div>
            </div>
          </Col>
          
          
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Section2
