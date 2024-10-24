import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ExhibitionImg from '../../Assets/Images/Home/Exhibition/ExhibitionImg.png';
import ProductImg from '../../Assets/Images/Home/Product.png';
import Slider from "react-slick";
import '../../Assets/Styles/Home.css';
import { useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import righticon from '../../Assets/Images/Home/righticon.png'

const ProductRange = [
    {
        name: 'Insulation plate type B6',
        title: 'Extremely heavy-duty insulation plate with the highest level of level consistency. For very heavy and long-bed machines.',
        image: ExhibitionImg
    },
    {
        name: 'Insulation plate type B7',
        title: 'Heavy-duty insulation plate designed for longer applications.',
        image: ExhibitionImg
    },
];

const Section3 = () => {
    const navigate = useNavigate();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 2, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000, 
        arrows: false, 
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <Container fluid>
                <Row className="px-lg-5 px-md-4 px-3 pt-5">
                    <Col xs={12} className='text-start'>
                        <h2 className="fw-semibold text-capitalize textheading">
                            Unrivalled <span className="highlight text-capitalize">product range</span>
                        </h2>
                        <p className="pt-3">
                            Our products cover almost all applications in industry and research: from simple insulation panels for vibration isolation to leveling elements for vibration-isolated machine installation to vibration-isolated laboratory tables. We are the only manufacturer that offers you the entire product range. We develop and manufacture all our products at our headquarters in Leonberg near Stuttgart. And to ensure that the processes in your production or laboratory run smoothly, we ensure that our products are available and have short delivery times.
                        </p>
                    </Col>
                </Row>

                <Row className="ProductBackgroundWithImage m-0 py-5 p-0">
                    <Col xs={12} sm={12} md={6} lg={3} className="mb-5 pt-1 m-0 p-0">
                        <img src={ProductImg} className="w-100 pt-lg-5 mt-lg-5" alt="Product" />
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={9} className='p-0 m-0'>
                        <Slider {...sliderSettings}>
                            {ProductRange.map((product, index) => (
                                <div key={index}>
                                    <Card className="rounded-5 cardshadow5 h-100 m-lg-2">
                                        <Card.Img variant="top" src={product.image} alt={product.name} className="px-3 pt-3" />
                                        <Card.Body>
                                            <Card.Title className="fw-bolder text-uppercase">{product.name}</Card.Title>
                                            <Card.Text className='p-lg-3'>{product.title}</Card.Text>
                                        </Card.Body>
                                        <div className="d-flex justify-content-end pb-3 pe-4">
                                            <Button className="rounded-5 border-3 border-0 px-3 py-2 learn_more" onClick={() => navigate("/ProductDetail")}>
                                                Learn more
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>

                <Row style={{marginTop:'-25px'}}>
                    <Col xs={12} className='d-flex justify-content-end'>
                        <img src={righticon} className='img-fluid' style={{width: '50px'}} onClick={() => navigate("/Product")}/>
                        {/* <Button className="border-5 border-0 px-3 righticon1" onClick={() => navigate("/ProductDetail")}>
                            <BsArrowRightShort  className='righticon'/>
                        </Button> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Section3;
