import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';  
import axios from 'axios'; 
import '../../Assets/Styles/Home.css';

const Section5 = () => {
    const [Exhibition, setExhibition] = useState([]);
    const [visible, setVisible] = useState(7); 

    useEffect(() => {
        axios.get("/exhibition/get")
            .then((response) => {
                setExhibition(response.data.responseData);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const showMoreItems = () => {
        setVisible((prevVisible) => Math.min(prevVisible + 7, Exhibition.length)); 
    };

    const showLessItems = () => {
        setVisible(7); 
    };

    return (
        <Container fluid>
            <Row>
                <h1 className='text-secondary-emphasis textheading fw-bolder pt-5 px-5'>Exhibition</h1>
                {Exhibition.slice(0, visible).map((item) => (
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="pt-3" key={item.id}>
                        <Card className="rounded-5 h-100 cardshadow">
                            <Card.Img variant="top" src={item.img} alt={item.name} className="px-3 pt-3" />
                            <Card.Body>
                                <Card.Title className="fw-bolder text-uppercase">{item.title}</Card.Title>
                                <Card.Text>{item.desc}</Card.Text>
                            </Card.Body>
                            <div className="d-flex justify-content-end pb-3 pe-4">
                                <Link 
                                    to={`/exhibition/${item.id}`}  
                                    state={{ exhibitionItem: item }}  
                                >
                                    <Button className="rounded-5 border-3 border-0 px-3 py-2 border learn_more">
                                        Learn more
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* Show Load More button only if total items are greater than 9 */}
            {Exhibition.length > 7 && (
                <div className="d-flex justify-content-center pt-5">
                    <Button 
                        onClick={showMoreItems} 
                        className="rounded-5 border-3 border-0 px-4 py-2 learn_more"
                        hidden={visible > Exhibition.length} 
                    >
                        Load more
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default Section5; 
