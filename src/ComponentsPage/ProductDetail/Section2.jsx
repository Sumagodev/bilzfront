import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import CardImg1 from '../../Assets/Images/ProductDetail/CardImg1.png'
import CardImg2 from '../../Assets/Images/ProductDetail/CardImg2.png'
import '../../Assets/Styles/ProductDetail.css'
import axios from 'axios';

const Section2 = () => {
    const id = localStorage.getItem('categoryid')

    const [ProductCard, setProductCard] = useState([]);
    const fetchProductDetails = async (id) => {
        try {
            const response = await axios.get(`/productName/getdetails/${id}`);
            setProductCard(response.data);
        } catch (error) {
            console.error('Error fetching product details:', error);
            setProductCard([]); // Reset state if error occurs

        }
    };
    useEffect(() => {


        fetchProductDetails(id);


        // Call the combined fetch function
    }, [id]);

    return (
        <>
            <Container fluid className='bg-similarproduct pb-5' >
                <Row className='mx-lg-4 px-lg-4'>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <h1 className='fw-bolder textheading' style={{ marginTop: '-0px' }}>similar <span className='highlight'>product</span></h1>
                    </Col>
                </Row>
                <Row className="px-lg-4 mx-lg-4">
                    {ProductCard.map((member, index) => (
                        <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="pt-lg-3">
                            <Card className="rounded-5 h-100 cardshadow">
                                <Card.Img variant="top"  src={`https://api.antivibrations.com/${member.img}`} alt={member.name} className="px-3 pt-3" />
                                <Card.Body>
                                    <Card.Title className="fw-bolder text-uppercase">{member.name}</Card.Title>
                                    <Card.Text>{member.title}</Card.Text>
                                </Card.Body>
                                <div className="d-flex justify-content-end pb-3 pe-4">
                                    <Button className="rounded-5 border-3 border-0 px-3 py-2 border learn_more">
                                        Learn more
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Section2
