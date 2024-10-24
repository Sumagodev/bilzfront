import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Assets/Styles/Service/Service.css'
import VibrationAnalysisImg from '../../Assets/Images/Service/VibrationAnalysisImg.png'
import axios from 'axios';
const Section2 = () => {
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
            <Container fluid className='servicebg'>
                <Row className='d-flex justify-content-center'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='pt-2'>
                        <h1 className="fw-bolder textheading pt-5 pb-4 text-white">
                            Vibration measurement and <span className="highlight">vibration analysis</span>
                        </h1>
                        <p className='text-white'>
                            {/* At Blitz, we see ourselves not only as a manufacturer of vibration isolation products,
                            but also as a planning partner and service provider. Before selecting the appropriate isolators,
                            a vibration measurement is often required, which we would be happy to carry out professionally for you. */}
                            {UseService[0]?.review}
                        </p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mt-5'>
                        <img src={VibrationAnalysisImg} className="img-fluid w-100 h-100" alt="Vibration Analysis" />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center pt-3'>
                    <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
                        <h1 className="fw-bolder textheading text-white">
                            Vibration Measurement At The <span className="highlight">Installation Site</span>
                        </h1>
                        <p className='text-white'>
                            {/* A current example of the need for vibration analysis is the storage of high-precision
                            3D measuring machines and other testing, measuring, or grinding machines. As a rule,
                            vibration measurements must be carried out for such machines at the planned installation site.
                            This ensures that existing floor vibrations do not exceed the permissible values. */}
                            {Analysis[0]?.description}    
                        </p>
                        {/* <p className='text-white'>
                            For this purpose, the vibration accelerations are recorded within a given frequency spectrum (1-100 Hz).
                            Since a simple total value measurement would only provide insufficient information about the exact environmental
                            conditions, the force-displacement signals are evaluated using a Fast Fourier Analyzer, which displays the corresponding
                            measured value (vibration acceleration in g) for each frequency in the spectrum.
                        </p>
                        <p className='text-white'>
                            If the disturbances (vibration radiation) are outside the permissible range, we can use our PC calculation software
                            to determine the appropriate vibration isolation.
                        </p> */}
                    </Col>
                </Row>
                
            </Container>


        </>
    )
}

export default Section2