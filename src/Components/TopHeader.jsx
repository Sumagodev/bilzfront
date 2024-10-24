import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Assets/Styles/TopHeader.css'
import logo from '../Assets/Images/TopHeader/bilz_logo.png'

export const TopHeader = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="position-relative position-fixed z-1">
                        <div className="company-logo-background"></div>
                        <img className="company-img" src={logo} alt="Company Logo" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default TopHeader