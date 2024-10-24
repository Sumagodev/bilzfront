import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import memberImg from '../../Assets/Images/CompanyOverview/memberImg.png'
import '../../Assets/Styles/CompanyOverview.css'
const Section2 = () => {
    return (
        <>
            <Container fluid >
                <Row className='section2h pt-5'>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                        <h2 className="fw-bold textheading px-5">
                            You can rely <span className="highlight">on it</span>
                        </h2>
                        <p className="py-4 px-5 text-start">
                            Wherever you manufacture or research, our highly qualified technicians are there for you. Whether in almost all parts of the world or at our headquarters in Leonberg. You can count on us – from consulting and planning to commissioning and maintenance of your vibration-optimized system.
                        </p>

                        <h2 className="fw-bold pt-5 px-5 textheading">
                            Worldwide <span className="highlight">distribution</span>
                        </h2>
                        <p className="py-4 px-5 text-start">
                            We are based in Leonberg – and are represented all over the world through our sales network. For you, this means: competent advice on site, fast response times, and guaranteed delivery times.
                        </p>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-center align-items-center">
                        <img src={memberImg} alt="Team Member" className="img-fluid" style={{ maxHeight: '100%' }} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section2
