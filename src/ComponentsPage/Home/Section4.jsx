import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../Assets/Styles/Home.css'
import Img4 from '../../Assets/Images/Home/Section4Img.png'

const Section4 = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="p-0 pt-lg-5 m-0">
                        <img src={Img4} className='img-fluid  w-100'/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section4
