import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../../Assets/Images/SolutionOverview/image.png'
import '../../Assets/Styles/Solution/SolutionOverview.css'
const Section3 = () => {
    return (
        <>
            <Container fluid>
                <Row className="position-relative m-0 mt-3 px-4">
                    <Col xs={12} sm={6} md={8} lg={8} xl={8} xxl={8} className='mt-4'>
                        <h1 className="fw-bolder textheading">
                            We are pioneers for <span className='highlight'>your success</span>
                        </h1>
                        <p >Whether you need a reliable standard product or an individual special solution - we make your problem ours! As a project partner, we also take on the equipment of research laboratories, series machines or individual projects.</p>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <img src={Image} className="w-75" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section3
