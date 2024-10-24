import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import StaticDynamicImg from '../../Assets/Images/Service/StaticDynamicImg.png'
import Formwork from '../../Assets/Images/Service/Formwork.png'
import Shaker from '../../Assets/Images/Service/Shaker.png'
import FEManalyses from '../../Assets/Images/Service/FEManalyses.png'
import SectionImg2 from '../../Assets/Images/Service/SectionImg2.png';
import '../../Assets/Styles/Service/Service.css'
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
                        <h2 className="fw-bold textheading px-lg-5 display-5 display-md-2">
                            Vibration analysis <span className='highlight fw-bolder display-5 display-md-2'>with geophones</span>
                        </h2>
                        <p className='py-4 text-justify px-lg-5'>
                            Here, vibrations in the lower frequency range are analyzed using a highly sensitive geophone. The geophone can record vibration velocities of less than 0.01 µm/s in the range of 0.2 to 30 Hz. Precise vibration measurements are necessary for optimal and customer-specific design, particularly in the semiconductor and nanotech industries and for high-precision 3D measuring machines.
                        </p>
                    </Col>
                </Row>

                <Row className='further_analyses px-lg-4'>
                    <h1 className="fw-bold textheading display-5 display-md-2">
                        Further <span className="highlight fw-bolder display-5 display-md-2">analyses</span>
                    </h1>


                    {Further.map((a) => (
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                            <Card className='rounded-4 cardborders cardshadow furthercard' style={{ width: '18rem', height: '12rem' }}>
                                <Card.Body className='mt-lg-4 mx-1 d-flex justify-content-center align-items-center'>
                                    {/* <img src={StaticDynamicImg} className='img-fluid h-75' alt="Static and dynamic calculations" /> */}
                                    <img src={a.img} className='img-fluid h-75' alt="Static and dynamic calculations" />
                                </Card.Body>
                            </Card>
                            <div className='d-flex justify-content-center'>
                                <div className='pt-3'>
                                    <p className='text-wrap text-center fs-6' style={{ width: '10rem' }}>
                                        <span className='fs-6 fw-bolder'>{a.name}</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    )
}

export default Section3