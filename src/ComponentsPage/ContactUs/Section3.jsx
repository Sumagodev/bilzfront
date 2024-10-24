import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../Assets/Styles/ContactUs.css';
import Quickhelp from '../../Assets/Images/ContactUs/Quick help.png';
import Technicalquestion from '../../Assets/Images/ContactUs/Technical Question.png';
import Support from '../../Assets/Images/ContactUs/Support.png';

const Section3 = () => {
    return (
        <Container fluid className="Section3BackgroundImg">
            <Row className="py-5 d-flex justify-content-center">
                {/* Desktop only */}
                <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7} className='p-lg-0 me-lg-5 d-none d-lg-block mc-desk'>
                    <Card className="rounded-5 cardshadow">
                        <Card.Body className="py-lg-5 px-lg-4 d-flex flex-column justify-content-between">
                            <div>
                                <h1 className="howto text-center pt-lg-2">
                                    How to <span className="highlight">&nbsp;reach us</span>
                                </h1>
                                <p className="pb-lg-2 text-center">
                                    Here you can send us an e-mail or call us. Our employees are available from Monday to Thursday between 8:00 a.m. and 5:00 p.m., and on Friday between 8:00 a.m. and 4:00 p.m.
                                </p>
                                <div className="d-flex flex-column flex-md-row justify-content-evenly pb-4">
                                    <Button type="button" className="rounded-5 py-3 px-2 cardshadow reachus fw-bolder text-dark mb-3 mb-md-0">
                                        <a href="tel:+919822395213" className='text-dark text-decoration-none'>
                                            +91 9822395213
                                        </a>
                                    </Button>
                                    <Button type="button" className="rounded-5 py-3 px-2 cardshadow reachus fw-bolder text-dark mb-3 mb-md-0">
                                        <a href="mailto:info@antivibrations.com" className='text-dark text-decoration-none'>
                                            info@antivibrations.com
                                        </a>
                                    </Button>
                                    <Button type="button" className="rounded-5 py-3 px-2 cardshadow reachus fw-bolder text-dark">
                                        <a href="mailto:bilzindia@gmail.com" className='text-dark text-decoration-none'>
                                            bilzindia@gmail.com
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="d-flex justify-content-evenly flex-lg-row px-2 px-md-4 mt-n5 mob-c" style={{ marginTop: '-60px' }}>
                        <Button className="fs-6 z-0 cardquick mb-4 mb-md-0 mob-b">
                            <img src={Quickhelp} className="img-fluid w-25 w-md-25" alt="Quick help" />
                            <p className="fw-medium pt-3 ps-md-4 fs-5">Quick help</p>
                        </Button>
                        <Button className="fs-6 z-0 cardquick mb-4 mb-md-0 mob-b">
                            <img src={Technicalquestion} className="img-fluid w-50 w-md-25" alt="Technical Question" />
                            <p className="fw-medium ps-md-4 fs-5">Technical Question</p>
                        </Button>
                        <Button className="fs-6 z-0 cardquick mob-b">
                            <img src={Support} className="img-fluid w-50 w-md-25 " alt="Services & Support" />
                            <p className="fw-medium px-md-3 fs-5">Services & Support</p>
                        </Button>
                    </div>
                </Col>

                {/* Mobile only */}
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='p-lg-0 me-lg-5 d-lg-none'>
                    <Card className="rounded-5 cardshadow">
                        <Card.Body className="py-lg-5 px-lg-4 d-flex flex-column justify-content-between">
                            <div>
                                <h1 className="howto text-center pt-lg-2">
                                    How to <span className="highlight">&nbsp;reach us</span>
                                </h1>
                                <p className="pb-lg-2 text-center">
                                    Here you can send us an e-mail or call us. Our employees are available from Monday to Thursday between 8:00 a.m. and 5:00 p.m., and on Friday between 8:00 a.m. and 4:00 p.m.
                                </p>
                                <Row className='d-flex justify-content-center px-3 pb-5'>
                                    <Col xs={12} sm={6} md={9} lg={6} xl={6} xxl={6} className="specialheading reachus cardshadow mx-4 position-relative my-4">
                                        <Button type="button" className="rounded-5 fw-bolder text-dark bg-transparent border-0">
                                            <a href="tel:+919822395213" className="ps-4 ms-3 fs-3 textC text-dark text-decoration-none w-100 h-100">
                                                +91 9822395213
                                            </a>
                                        </Button>
                                        <div className="specialimage1 cardquick cardshadow rounded-circle border-0 p-2">
                                            <img src={Quickhelp} alt="Quick Help" className="img-fluid m-3" />
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6} md={9} lg={4} xl={4} xxl={4} className="specialheading reachus cardshadow mx-4 position-relative my-4">
                                        <Button type="button" className="rounded-5 fw-bolder text-dark bg-transparent border-0">
                                            <a href="mailto:info@antivibrations.com" className="ps-4 fs-4 textC text-dark text-decoration-none w-100 h-100">
                                                info@antivibrations.com
                                            </a>
                                        </Button>
                                        <div className="specialimage1 cardquick cardshadow rounded-circle border-0 p-2">
                                            <img src={Technicalquestion} alt="Technical Question" className="img-fluid" />
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6} md={9} lg={4} xl={4} xxl={4} className="specialheading reachus cardshadow mx-4 position-relative my-4">
                                        <Button type="button" className="rounded-5 fw-bolder text-dark bg-transparent border-0">
                                            <a href="mailto:bilzindia@gmail.com" className="ps-5 fs-3 textC text-dark text-decoration-none w-100 h-100">
                                                bilzindia@gmail.com
                                            </a>
                                        </Button>
                                        <div className="specialimage1 cardquick cardshadow rounded-circle border-0 p-2">
                                            <img src={Support} alt="Services & Support" className="img-fluid m-1" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default Section3;
