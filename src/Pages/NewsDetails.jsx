import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useLocation, useParams } from 'react-router-dom';  
import axios from 'axios';

const NewsDetails = () => {
    const location = useLocation();  
    const { id } = useParams();  
    const [newsdataItem, setNewsdataItem] = useState(location.state?.newsdataItem || null); 

    useEffect(() => {
        
        if (!newsdataItem) {
            axios.get(`/News1/${id}`)  
                .then((response) => {
                    setNewsdataItem(response.data.responseData);
                })
                .catch((error) => {
                    console.error("There was an error fetching the data!", error);
                });
        }
    }, [newsdataItem, id]);


    if (!newsdataItem) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Loading...</h2>
                        <p>Fetching the exhibition details...</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <>
            <Container fluid>
                <Row className='pt-5'>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='d-flex justify-content-center px-5 py-5 w-100'>
                        <img src={newsdataItem.img} style={{width:'80%'}} className='img-fluid px-4 px-5' alt={newsdataItem.title} />
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                        <Card className="rounded-5 cardshadow">
                            <h1 className='fw-bolder d-flex justify-content-center pt-5'>
                                {newsdataItem.title} 
                            </h1>
                            <Card.Body className='px-lg-5 pb-lg-5'>
                                <p dangerouslySetInnerHTML={{ __html: newsdataItem.desc }}></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default NewsDetails;
