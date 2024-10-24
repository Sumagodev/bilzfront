import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NewsBanner from '../ComponentsPage/Banner/NewsBanner';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Assets/Styles/News.css';

const News = () => {
    const [Usenews, setNews] = useState([]);

    useEffect(() => {
        axios.get("News1/get")
            .then((response) => {
                setNews(response.data.responseData || []); // Ensure it's an array
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    // Helper function to strip HTML tags
    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const truncateText = (text, limit) => {
        if (!text) return "No description available.";
        const strippedText = stripHtml(text); // Remove HTML tags
        const words = strippedText.split(' '); // Split text into words
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + "..."; // Join back to string after the limit
        }
        return strippedText; // Return original text if within the limit
    };

    return (
        <>
            <NewsBanner />
            <Container fluid className='NewCard'>
                <Row className="px-3 py-5">
                    {Usenews
                        .filter((newsItem) => newsItem.isActive)
                        .map((newsdata, index) => (
                            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className='pt-3' key={index}>
                                <Card className="rounded-5 cardshadow ">
                                    <Card.Img variant="top" src={newsdata.img || '/path/to/default/image.png'} alt={newsdata.title} className="px-3 py-3 rounded-5" />
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-uppercase">{newsdata.title}</Card.Title>
                                        <Card.Text>
                                            {truncateText(newsdata.desc, 30)}
                                        </Card.Text>
                                    </Card.Body>
                                    <div className="d-flex justify-content-end pb-3 pe-4">
                                        <Link
                                            to={`/newsdetails/${newsdata.id}`}
                                            state={{ newsdataItem: newsdata }}
                                        >
                                            <Button className="rounded-5 border-3 border-0 px-3 py-2 border fw-medium learn_more">
                                                Learn more
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    );
};

export default News;
