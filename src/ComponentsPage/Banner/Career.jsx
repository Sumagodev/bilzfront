import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../Assets/Styles/Mainbanner.css'
const Career = () => {
  return (
    <>
    <Container fluid>
        <Row className="justify-content-center" style={{ marginTop: '80px' }}>
            <Col xs={12} className="p-0">
                <div className="banner-image Careerbanner-img" fluid>
                    {/* <div className="position-absolute banner-text text-start" style={{ left: '10em' }}>
                        <h1 className="fw-bolder text-white p-0 m-0" style={{ lineHeight: '1' }}>Bilz</h1>
                        <h3 className="text-white p-0 m-0">
                            Machine House (India) Pvt Ltd
                        </h3>
                    </div> */}
                </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Career