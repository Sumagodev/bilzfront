import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Assets/Styles/Solution/SolutionOverview.css';
import MailIcon from '../../Assets/Images/SolutionOverview/92.png'

const Section5 = () => {
    return (
        <Container fluid className='p-md-3'>
            <Row className="footerenqury mb-5  d-flex justify-content-center align-items-center" style={{ height: '20rem' }}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start">
                        <h1 className="text-light fs-2 fs-md-1 m-3 textheading fw-bolder">Contact us</h1>
                        <button className="d-flex justify-content-between align-items-center border-0 rounded-pill fs-6 fs-md-5 call-btn mt-3 mt-md-0">
                            <a href="mailto:info@antivibrations.com" className="text-decoration-none text-dark">
                                <span className="fw-medium">MAIL NOW</span>
                                <img
                                    src={MailIcon}
                                    className="rounded-circle rounded-circle22 ms-2 ms-md-3"
                                    alt="Mail Icon"
                                />
                            </a>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Section5;
