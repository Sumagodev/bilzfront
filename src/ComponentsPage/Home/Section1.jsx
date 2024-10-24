import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import '../../Assets/Styles/Home.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Section1 = () => {
    const navigate = useNavigate();
    const [Useabout, setAbout] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false); 

    useEffect(() => {
        axios.get("home_about/get")
            .then((response) => {
                setAbout(response.data.responseData);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded); 
    };

    return (
        <Container fluid className="bg-about py-5">
            <Row className="d-flex justify-content-center">
                <Col xs={12} lg={10}>
                    <Card className="py-4 rounded-5 cardshadow p-lg-5 p-md-4 p-3 mb-5">
                        <Card.Body>
                            <h1 className="text-capitalize textheading fw-bolder pb-4">
                                <span style={{ color: '#02546D' }}>about</span> <span className="highlight">us</span>
                            </h1>
                            <p className="mx-lg-1 mx-md-4 mx-2"
                                dangerouslySetInnerHTML={{
                                    __html: isExpanded
                                        ? Useabout[0]?.description
                                        : `${Useabout[0]?.description?.slice(0, 400)}...`
                                }}>
                            </p>
                            <div className="text-end"> 
                                <Button
                                    className="learn_more rounded-5"
                                    onClick={() => navigate("/AboutUs")}
                                >
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Section1;
