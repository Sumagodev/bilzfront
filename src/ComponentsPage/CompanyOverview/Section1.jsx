import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Assets/Styles/CompanyOverview.css';

const Section1 = () => {
    return (
        <Container fluid className="backgroundsection1">
            <Row className="px-3 px-md-5 vecoter">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mx-auto text-start">
                    <h2 className="text-white pt-5 fw-semibold">Bilz Vibration Technology AG</h2>
                    <h1 className="text-white pt-4 fw-bolder">Wherever vibrations cause disturbance</h1>
                    <p className="text-white">
                        In the field of vibration technology, we offer solutions for vibration isolation, vibration damping and machine installation. We, Bilz Vibration Technology AG, are market leaders, especially in the field of air spring technology. We are suppliers for mechanical and plant engineering, for the automotive and semiconductor industries and their suppliers. What's more: our customers come from all areas of industry and research - in fact from anywhere where disruptive vibrations need to be eliminated. We develop and sell our products and special services for vibration isolation for them at our Leonberg location. Quality made in Germany. No matter what industry, we find effective and cost-efficient solutions for almost any vibration-related problem.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Section1;
