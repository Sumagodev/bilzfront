import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import StaticDynamicImg from '../../Assets/Images/CompanyOverview/StaticDynamicImg.png'
import Formwork from '../../Assets/Images/CompanyOverview/Formwork.png'
import Shaker from '../../Assets/Images/CompanyOverview/Shaker.png'
import FEManalyses from '../../Assets/Images/CompanyOverview/FEManalyses.png'
import axios from 'axios';
const Section3 = () => {

    // Further analysis
    const [Further, setFurther] = useState([]);

    // Further analysis
    useEffect(() => {
        axios.get("Further/get")
            .then((response) => {
                setFurther(response.data.responseData);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <>
            <Container fluid className='pt-5 pb-5'>
                <Row>

                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <h2 className="fw-bold textheading px-5">
                            Vibration analysis <span className='highlight'>with geophones</span>
                        </h2>
                        <p className='py-4 text-justify px-5'>
                            Here, vibrations in the lower frequency range are analyzed using a highly sensitive geophone. The geophone can record vibration velocities of less than 0.01 µm/s in the range of 0.2 to 30 Hz. Precise vibration measurements are necessary for optimal and customer-specific design, particularly in the semiconductor and nanotech industries and for high-precision 3D measuring machines .Further analyses
                        </p>
                    </Col>
                </Row>

                <Row className='further_analyses px-4'>
                    <h1 className="fw-bold textheading">
                        Further <span className='highlight'>analyses</span>
                    </h1>
                    {Further.map((a) => (
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>

                        <Card className='mt-4 mx-1 rounded-4 cardborders cardshadow' style={{ width: '18rem', height: '12rem' }}>
                            <Card.Body className='d-flex justify-content-center align-items-center'>
                                {/* <img src={StaticDynamicImg} className='img-fluid h-75' alt="Static and dynamic calculations" /> */}
                                <img src={a.img} className='img-fluid h-75' alt="Static and dynamic calculations" />
                            </Card.Body>
                        </Card>
                        <div>
                            <Col xs={12} className='d-flex justify-content-start'>
                                <div className='pt-3 px-3'>
                                    {/* <h5 className='text-wrap fs-6 mx-1'><span className='fs-6 fw-bolder'>Static and dynamic</span> calculations including simulation</h5> */}
                                    <h5 className='text-wrap fs-6 mx-1'><span className='fs-6 fw-bolder'>{a.name}</span></h5>
                                </div>
                            </Col>
                        </div>
                    </Col>
                    ))}
                    {/* <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <Card className='mt-4 mx-1 rounded-4 cardborders cardshadow' style={{ width: '18rem', height: '12rem' }}>
                            <Card.Body className='d-flex justify-content-center align-items-center'>
                                <img src={Formwork} className='img-fluid h-75' alt="Formwork and reinforcement plans" />
                            </Card.Body>
                        </Card>
                        <Row>
                            <Col xs={12} className='d-flex justify-content-start'>
                                <div className='pt-3 px-3'>
                                    <h5 className='text-wrap fs-6'><span className='fs-6 fw-bolder'>Formwork and reinforcement</span> plans for spring foundations</h5>
                                </div>
                            </Col>
                        </Row>
                    </Col> */}

                    {/* <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <Card className='mt-4 mx-1 rounded-4 cardborders cardshadow' style={{ width: '18rem', height: '12rem' }}>
                            <Card.Body className='d-flex justify-content-center align-items-center'>
                                <img src={Shaker} className='img-fluid h-75' alt="Shaker test bench" />
                            </Card.Body>
                        </Card>
                        <Row>
                            <Col xs={12} className='d-flex justify-content-start'>
                                <div className='pt-3 px-3'>
                                    <h5 className='text-wrap fs-6' style={{ width: '18rem' }}>Shaker test bench <span className='fs-6 fw-bolder'>and dynamic tension-compression testing machine</span> 50 kN (0-100 Hz)</h5>
                                </div>
                            </Col>
                        </Row>
                    </Col> */}

                    {/* <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <Card className='mt-4 mx-1 rounded-4 cardborders cardshadow' style={{ width: '18rem', height: '12rem' }}>
                            <Card.Body className='d-flex justify-content-center align-items-center'>
                                <img src={FEManalyses} className='img-fluid h-50' alt="FEM analyses" />
                            </Card.Body>
                        </Card>
                        <Row>
                            <Col xs={12} className='d-flex justify-content-start'>
                                <div className='pt-3 px-3'>
                                    <h5 className='text-wrap fs-6' style={{ width: '18rem' }}>FEM analyses</h5>
                                </div>
                            </Col>
                        </Row>
                    </Col> */}
                </Row>

            </Container>
        </>
    )
}

export default Section3
