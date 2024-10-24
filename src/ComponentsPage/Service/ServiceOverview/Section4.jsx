import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ServiceBackgroundImg4 from '../../../Assets/Images/ServiceOverview/Service4.png';
import '../../../Assets/Styles/Service/ServiceOverview.css';

const Section4 = () => {
    return (
        <>
            <Container fluid>
                <Row className='pb-5'>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="position-relative p-0">
                        <img src={ServiceBackgroundImg4} className="img-fluid w-100" alt="Service Background" />
                        <div className="mc-desk1 teal-pill mob-teal-pill position-absolute cardshadow w-sm-100 w-md-75 w-lg-100 top-50 start-50 translate-middle rounded-pill">
                            <h1 className='pb-lg-2 mob-text pt-lg-1 mt-lg-5 mx-lg-5 mt-sm-4 mx-sm-5 pt-4 pt-sm-2 mx-sm-3 pt-md-0 fw-bolder textheading text-start'>You can rely on our service</h1>
                            <p className='text-start mob-p1 mx-lg-5 mx-sm-5 mt-sm-1'>
                                We want you to be completely satisfied. It is very important to us to support you with our expertise
                                from planning to installation and beyond. We have a broad sales and service network so that we can
                                provide customers all over the world with the best possible service.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Section4;
