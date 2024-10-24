import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../Assets/Styles/ContactUs.css';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Section5 = () => {
    const navigate = useNavigate();
    return (
        <Container fluid className="Section5BackgroundImg py-5">
            <Row className="px-3 px-md-5 mx-0 d-flex justify-content-center">
                <Col xs={12} md={9} className="my-3">
                    <Card className="rounded-5 h-100 cardshadow">
                        <Card.Body className="text-center">
                            <h1 className="fw-bolder textheading">Latest News</h1>
                            <h5 className="fw-bolder textheading">
                                Welcome to <span className="highlight">Bilz</span>
                            </h5>
                            <p className="px-lg-5">
                                We would like to welcome Mr. Samuel Köhle to our sales team!
                            </p>
                            <div className="d-flex justify-content-center flex-wrap">
                                <Button className="mx-lg-4 mb-2 px-4 rounded-5 shownews border-0 cardshadow">
                                    Show All News
                                </Button>
                                <Button
                                    className="mx-lg-4 mx-1 mb-2 rounded-5 readmore border-0 cardshadow"
                                    onClick={() => navigate('/News')}
                                >
                                    Read more <IoIosArrowRoundForward className="icon" />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* <Col xs={12} md={6} className="my-3">
                    <Card className="rounded-5 h-100 cardshadow">
                        <Card.Body className="text-center">
                            <h1 className="fw-bolder textheading">Trades Fairs</h1>
                            <h5 className="fw-bolder textheading">
                                Welcome to <span className="highlight">Bilz</span>
                            </h5>
                            <p className="px-lg-5">
                                SEMICON, Taipei/Republic of China (Taiwan), 04 - 06 September 2024
                            </p>
                            <div className="d-flex justify-content-center flex-wrap">
                                <Button className="mx-1 mb-2 rounded-5 shownews border-0 cardshadow">
                                    All trades fair dates
                                </Button>
                                <Button
                                    className="mx-1 mb-2 rounded-5 readmore border-0 cardshadow"
                                    onClick={() => navigate('/News')}
                                >
                                    Read more <IoIosArrowRoundForward className="icon" />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col> */}
            </Row>
        </Container>
    );
};

export default Section5;
