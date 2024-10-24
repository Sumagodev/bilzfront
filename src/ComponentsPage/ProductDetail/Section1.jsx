import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Product1 from '../../Assets/Images/ProductDetail/Product1.png'
import Product2 from '../../Assets/Images/ProductDetail/Product2.png'
import Product from '../../Assets/Images/ProductDetail/Product.png'
import Card from 'react-bootstrap/Card';
import { FaChevronDown } from 'react-icons/fa';

const Section1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle accordion state
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
     // State to manage the selected content
     const [selectedContent, setSelectedContent] = useState('description');

     // Function to handle content change
     const handleContentChange = (content) => {
         setSelectedContent(content);
     };
    return (
        <>
            <Container fluid className='ProductBAckgroundImg pt-5'>
                <Row className='d-flex justify-content-center'>
                <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
            <Card className='rounded-5 cardshadow'>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-center mb-md-0'>
                        <img src={Product} alt="Product" className='img-fluid' />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={7} xl={7} xxl={7} className='px-5 px-md-0'>
                        <h1 className='py-3 textheading fw-bolder'>
                            Insulation <span className='highlight'>panels</span>
                        </h1>
                        <ul className='pe-md-5 pt-4'>
                            <li>
                                Mechanical-pneumatic level control systems from Bilz are an essential component for the optimal function of vibration isolation using FAEBI® and FAEBI®-HD rubber or BiAir® membrane air springs. They reliably prevent unwanted deflection of the isolators or tilting of the machine caused by load changes in a machine or system mounted with air springs.
                            </li>
                        </ul>
                        <div className='py-3 px-4'>
                            <Button variant="outline-dark" className='py-2 px-4 rounded-5'>
                                Read More
                            </Button>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={12} xl={12} xxl={12} className='d-flex justify-content-center'>
                        <div className="cardborders py-3 w-75 rounded-5 d-flex flex-column flex-md-row justify-content-evenly align-items-center" style={{ position: 'relative', top: '40px' }}>
                            <a href="#description" onClick={() => handleContentChange('description')} className="text-white text-decoration-none fs-6 mb-3 mb-md-0">Description</a>
                            <a href="#technical-data" onClick={() => handleContentChange('technical-data')} className="text-white text-decoration-none fs-6 mb-3 mb-md-0">Technical Data</a>
                            <a href="#general-info" onClick={() => handleContentChange('general-info')} className="text-white text-decoration-none fs-6">General Info</a>
                        </div>
                    </Col>
                </Row>
            </Card>

            <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
                {selectedContent === 'description' && (
                    <Card className='px-lg-5 px-4 py-5 rounded-5 my-5 cardborders cardshadow' id="description">
                        <h1 className='textheading'>
                            General information on mechanical level <span className='highlight'>control systems</span>
                        </h1>
                        <Card.Body>
                            <ul>
                                <li>The delivery is made as a complete set with 3 control valves and all necessary hose connections and connectors for 4 air springs. All components are of course also available individually as spare parts.</li>
                                <li>In the LCV variant, the air volume flow can be reduced using the throttle valve if the control system tends to overshoot. A throttle valve can also be installed optionally in the PVM variant.</li>
                                <li>In addition to our standard solutions listed here, we also offer special variants with regard to material, flow, accuracy and restoring force.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                )}
                
                {selectedContent === 'technical-data' && (
                    <Card className='px-lg-5 px-4 py-5 rounded-5 my-5 cardborders cardshadow' id="technical-data">
                        <h1 className='textheading'>
                            Technical Data <span className='highlight'>for Control Systems</span>
                        </h1>
                        <Card.Body>
                            <ul>
                                <li>Input Voltage: 230V AC</li>
                                <li>Max Pressure: 10 bar</li>
                                <li>Flow Rate: 200 l/min</li>
                            </ul>
                        </Card.Body>
                    </Card>
                )}

                {selectedContent === 'general-info' && (
                    <Card className='px-lg-5 px-4 py-5 rounded-5 my-5 cardborders cardshadow' id="general-info">
                        <h1 className='textheading'>
                            General Information <span className='highlight'>About Systems</span>
                        </h1>
                        <Card.Body>
                            <ul>
                                <li>These systems ensure precision and reliability in mechanical operations.</li>
                                <li>Suitable for various industrial applications.</li>
                                <li>Robust design for long-term usage.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                )}
            </Col>
        </Col>

                    <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
                        <div className="custom-accordion my-2 p-lg-1 ">
                            <div
                                className={`custom-accordion-header cardshadow ${isOpen ? 'active' : ''}`}
                                onClick={toggleAccordion}
                                tabIndex={0}
                            >Function of the valves
                                <FaChevronDown className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
                            </div>
                            <div className={`custom-accordion-body ${isOpen ? 'show' : ''}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <div className="custom-accordion p-lg-1">
                            <div
                                className={`custom-accordion-header shadow ${isOpen ? 'active' : ''}`}
                                onClick={toggleAccordion}
                                tabIndex={0}
                            >interpretation
                                <FaChevronDown className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
                            </div>
                        </div>
                    </Col>
                {/* </Row>
                <Row className="d-flex justify-content-center"> */}
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-4 pe-5 d-flex justify-content-center'>
                        <img src={Product1} className="img-fluid" alt="Product 1" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-4 pt-5 mt-5'>
                        <img src={Product2} className="img-fluid" alt="Product 2" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section1
