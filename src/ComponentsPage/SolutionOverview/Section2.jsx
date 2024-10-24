import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SolutionCardImg from '../../Assets/Images/SolutionOverview/SolutionCardImg.png';
import '../../Assets/Styles/Solution/SolutionOverview.css';

const Section2 = () => {
    const [SolutionAppCard, setSolutionAppCard] = useState([]);
    const [visible, setVisible] = useState(3);

    useEffect(() => {
        axios.get("implemented/get")
            .then((response) => {
                setSolutionAppCard(response.data.responseData);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const truncateText = (text, limit) => {
        if (!text) return "No description available.";
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    const showMoreItems = () => {
        setVisible(SolutionAppCard.length);
    };

    const showLessItems = () => {
        setVisible(3);
    };

    return (
        <Container fluid>
            <h1 className="fw-bold text-center textheading pt-5">
                We have already <span className='highlight'>implemented these solutions</span>
            </h1>
            <Row className="position-relative mb-5 px-lg-4">
                {SolutionAppCard.slice(0, visible).map((member) => (
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} className="pt-4" key={member.id}>
                        <Card className="rounded-5 h-100 cardshadows d-flex flex-column">
                            <Card.Img variant="top" src={member.img} alt={member.name} className="pt-3 px-3 rounded-5" />
                            <Card.Body className="d-flex flex-column" style={{ minHeight: '250px' }}>
                                <h6 className="fw-bolder fs-4 text-uppercase mb-2" style={{ minHeight: '80px', maxHeight: '80px', overflow: 'hidden' }}>
                                    {member.title}
                                </h6>
                                <Card.Text className="text-justify text-capitalize lh-sm flex-grow-1 mb-0" style={{ minHeight: '120px', maxHeight: '120px', overflow: 'hidden' }}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: truncateText(member.desc, 200),
                                        }}
                                    />
                                </Card.Text>
                            </Card.Body>
                            <div className="d-flex justify-content-end pb-3 pe-4 mt-auto">
                                <Link to={`/solutiondetails/${member.id}`} state={{ solutionItem: member }}>
                                    <Button className="rounded-5 border-3 border-0 px-3 py-2 border fw-medium learn_more">
                                        Learn more
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="d-flex justify-content-center pt-3">
                {visible < SolutionAppCard.length ? (
                    <Button onClick={showMoreItems} className="rounded-5 border-3 border-0 px-4 py-2 learn_more">
                        Load more
                    </Button>
                ) : (
                    <Button onClick={showLessItems} className="rounded-5 border-3 border-0 px-4 py-2 learn_more">
                        Show less
                    </Button>
                )}
            </div>
        </Container>
    );
};

export default Section2;
