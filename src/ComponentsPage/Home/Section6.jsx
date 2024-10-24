import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Assets/Styles/Home.css'
// import OurServiceImg from '../../Assets/Images/Home/OurService/OurServiceImg.png'
import axios from 'axios';
const Section6 = () => {
    // Vibration analysis
    const [UseService, setService] = useState([]);

    // Vibration measurement
    const [Analysis, setAnalysis] = useState([]);

    // Vibration measurement
    useEffect(() => {
        axios.get("testimonial/get")
            .then((response) => {
                setService(response.data.responseData);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    // Vibration analysis
    useEffect(() => {
        axios.get("v_analysis/get")
            .then((response) => {
                setAnalysis(response.data.responseData);
                // console.log(response.data.responseData[0]);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <>
            <Container fluid className="py-5">
                <Row>
                    <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
                        <h1 className="fw-bold textheading">
                            Our <span className="highlight">Service</span>
                        </h1>
                        <h3 className="fw-semibold w-50 pt-2">
                            Vibration Measurement <span className="fw-light">And</span> Vibration Analysis
                        </h3>
                        <p className="py-4">
                            {/* At blitz, we see ourselves not only as a manufacturer of vibration isolation products, but also as a planning partner and service provider. Before selecting the appropriate isolators, a vibration measurement is often required, which we would be happy to carry out professionally for you. */}
                            {UseService[0]?.review}
                        </p>

                    </Col>

                    <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
                        <div className="d-flex justify-content-center align-items-start">
                            <img src={UseService[0]?.img} className="img-fluid h-50" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        
                    <h1 className="fw-bold pt-lg-5 textheading">
                            Vibration Measurement At The <span className="text-heading fw-bolder highlight">Installation Site</span>
                        </h1>
                        <p className="py-4 me-lg-5">
                            {/* A current example of the need for vibration analysis is the storage of high-precision 3D measuring machines and other testing, measuring, or grinding machines. As a rule, vibration measurements must be carried out for such machines at the planned installation site. This ensures that existing floor vibrations do not exceed the permissible values.
                            For this purpose, the vibration accelerations are recorded within a given frequency spectrum (1-100 Hz). Since a simple total value measurement would only provide insufficient information about the exact environmental conditions, the force-displacement signals are evaluated using a Fast Fourier Analyzer, which displays the corresponding measured value (vibration acceleration in g) for each frequency in the spectrum.
                            If the disturbances (vibration radiation) are outside the permissible range, we can use our PC calculation software to determine the appropriate vibration isolation. */}
                            {Analysis[0]?.description}
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Section6
