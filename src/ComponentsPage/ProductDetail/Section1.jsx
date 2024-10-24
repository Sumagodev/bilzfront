
import { Container, Row, Col, Button } from 'react-bootstrap'
import Product1 from '../../Assets/Images/ProductDetail/Product1.png'
import Product2 from '../../Assets/Images/ProductDetail/Product2.png'
import Product from '../../Assets/Images/ProductDetail/Product.png'
import Card from 'react-bootstrap/Card';
import { FaChevronDown } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';


import { useNavigate, useParams } from "react-router-dom";

import axios from 'axios';

const Section1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const id = localStorage.getItem('categoryid')
    const subid = localStorage.getItem('subproductid')
    console.log(subid)
    // Toggle accordion state

    // State to manage the selected content
    const [openAccordionId, setOpenAccordionId] = useState(null);

    // Toggle function to open/close accordion items
    const toggleAccordion = (id) => {
        setOpenAccordionId(openAccordionId === id ? null : id);
    };
    // Function to handle content change

    const navigate = useNavigate();


    const [productimges, setProductImages] = useState(null);
    const [ProductCard, setProductCard] = useState([]);
    const [Accardian, setAccardian] = useState([]);
    const [tabDetails, settabDetails] = useState([])
    // Function to fetch all products (if needed for other functionality)


    // Function to fetch the product image by ID
    const fetchProductImages = async (id) => {
        try {
            const response = await axios.get(`/productName/get/${id}`);
            setProductImages(response.data);
        } catch (error) {
            console.error('Error fetching product images:', error);
        }
    };

    // Function to fetch product card details by ID
    const fetchProductDetails = async (subid) => {
        try {
            const response = await axios.get(`/productName/getProductDetailsByProductsubId/${subid}`);
            setProductCard(response.data); // Ensure that response.data is in the expected format
        } catch (error) {
            console.error('Error fetching product details:', error);
            setProductCard([]); // Reset state if error occurs
        }
    };

    const fetchAccardianDetails = async (id, subid) => {
        try {
            const response = await axios.get(`/Product_data2/getProductDetailsByProductsubId/${id}/${subid}`);
            setAccardian(response.data);
        } catch (error) {
            console.error('Error fetching product details:', error);
            setAccardian([]); // Reset state if error occurs

        }
    };
    const [selectedContent, setSelectedContent] = useState(tabDetails[0]?.title);
    const handleContentChange = (content) => {
        setSelectedContent(content);
    };
    const fetchtabDetails = async (id, subid) => {
        try {
            const response = await axios.get(`/Product_data/getProductDetailsByProductAndSubProductId/${id}/${subid}`);
            settabDetails(response.data);
            if (response.data.length > 0) {
                setSelectedContent(response.data[0].title); // Initialize with the first item's title
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
            settabDetails([]); // Reset state if error occurs

        }
    };
    const [ProductCard1, setProductCard1] = useState([]);
    const fetchProductDetails1 = async (id, subid) => {
        try {
            const response = await axios.get(`/productName/getdetails/${id}`);
            // Filter the response data before setting it in the state
            const filteredProducts = response.data.filter((product) => product.id !== subid);
            setProductCard1(filteredProducts);
        } catch (error) {
            console.error('Error fetching product details:', error);
            setProductCard1([]); // Reset state if error occurs
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await Promise.all([

                fetchAccardianDetails(id, subid),
                fetchtabDetails(id, subid),
                fetchProductDetails(subid),

            ]);
            setLoading(false);
        };

        fetchData();
    }, [id, subid]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await Promise.all([

                fetchProductImages(id),
                fetchProductDetails1(id)
            ]);
            setLoading(false);
        };

        fetchData();
    }, [id, subid]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Container fluid className='ProductBAckgroundImg pt-5'>
                {/* Product Image Section */}
                {productimges ? (
                    <img src={`https://api.antivibrations.com/${productimges.img}`} alt="Product Image" className="img-fluid" />
                ) : (
                    <p>No data available for product image.</p> // Show message if no image is available
                )}
                <Row className='d-flex justify-content-center'>

                    <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
                        <Card className='rounded-5 cardshadow'>
                            <Row>

                                {
                                    ProductCard.map((ProductCard) => {
                                        return (
                                            <>
                                                <Col xs={12} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-center mb-md-0'>
                                                    <img src={`https://api.antivibrations.com/${ProductCard.img}`} alt="Product" className='img-fluid' />
                                                </Col>
                                                <Col xs={12} sm={6} md={6} lg={7} xl={7} xxl={7} className='px-5 px-md-0'>
                                                    <h1 className='py-3 textheading fw-bolder'>
                                                        Insulation <span className='highlight'>{ProductCard.title}</span>
                                                    </h1>
                                                    <ul className='pe-md-5 pt-4'>

                                                        <li dangerouslySetInnerHTML={{ __html: ProductCard.description }}>

                                                        </li>
                                                    </ul>
                                                    <div className='py-3 px-4'>
                                                        <Button variant="outline-dark" className='py-2 px-4 rounded-5'>
                                                            Read More
                                                        </Button>
                                                    </div>
                                                </Col>

                                            </>
                                        )
                                    })
                                }
                                <Col sm={12} md={12} lg={12} xl={12} xxl={12} className='d-flex justify-content-center'>
                                    <div className="cardborders py-3 w-75 rounded-5 d-flex flex-column flex-md-row justify-content-evenly align-items-center" style={{ position: 'relative', top: '40px' }}>
                                        {tabDetails.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.slug}`}
                                                onClick={() => handleContentChange(item.title)}
                                                className="text-white text-decoration-none fs-6 mb-3 mb-md-0"
                                            >
                                                {item.title}
                                            </a>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        {/* <Col sm={12} md={12} lg={12} xl={12} xxl={12} className='d-flex justify-content-center'>
                            <div className="cardborders py-3 w-75 rounded-5 d-flex flex-column flex-md-row justify-content-evenly align-items-center" style={{ position: 'relative', top: '40px' }}>
                                <a href="#description" onClick={() => handleContentChange('description')} className="text-white text-decoration-none fs-6 mb-3 mb-md-0">Description</a>
                                <a href="#technical-data" onClick={() => handleContentChange('technical-data')} className="text-white text-decoration-none fs-6 mb-3 mb-md-0">Technical Data</a>
                                <a href="#general-info" onClick={() => handleContentChange('general-info')} className="text-white text-decoration-none fs-6">General Info</a>
                            </div>
                        </Col> */}
                        <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
                            {tabDetails.map((item) =>
                                selectedContent === item.title ? (
                                    <Card key={item.id} className='px-lg-5 px-4 py-5 rounded-5 my-5 cardborders cardshadow' id={item.slug}>
                                        <h1 className='textheading'>
                                            {item.title} <span className='highlight'>Information</span>
                                        </h1>
                                        <Card.Body>
                                            <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </Card.Body>
                                    </Card>
                                ) : null
                            )}
                        </Col>

                    </Col>


                    <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
                        {Accardian.map((item) => (
                            <div className="custom-accordion my-2 p-lg-1" key={item.id}>
                                {/* Accordion Header */}
                                <div
                                    className={`custom-accordion-header cardshadow ${openAccordionId === item.id ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(item.id)}
                                    tabIndex={0}
                                >
                                    {item.title} {/* Accordion title from JSON */}
                                    <FaChevronDown className={`arrow-icon ${openAccordionId === item.id ? 'rotate' : ''}`} />
                                </div>

                                {/* Accordion Body */}
                                <div className={`custom-accordion-body ${openAccordionId === item.id ? 'show' : ''}`}>
                                    {/* {item.description} Accordion content from JSON */}

                                    <img src={item.description} alt="" />
                                </div>
                            </div>
                        ))}
                    </Col>
                    {/* </Row>
                <Row className="d-flex justify-content-center"> */}
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-4 pe-5 d-flex justify-content-center'>
                        <img src={Product1} className="img-fluid" alt="Product 1" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-4 pt-5 mt-5'>
                        <img src={Product2} className="img-fluid" alt="Product 2" />
                    </Col>
                </Row>
            </Container>
            <>
                <Container fluid className='bg-similarproduct pb-5' >
                    <Row className='mx-lg-4 px-lg-4'>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <h1 className='fw-bolder textheading' style={{ marginTop: '-0px' }}>similar <span className='highlight'>product</span></h1>
                        </Col>
                    </Row>
                    <Row className="px-lg-4 mx-lg-4">
                        {ProductCard1.filter((a) => a.id != subid).map((member, index) => (
                            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="pt-lg-3">
                                <Card className="rounded-5 h-100 cardshadow">
                                    <Card.Img variant="top" src={`https://api.antivibrations.com/${member.img}`} alt={member.name} className="px-3 pt-3" />
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-uppercase">{member.name}</Card.Title>
                                        <Card.Text>{member.title}</Card.Text>
                                    </Card.Body>
                                    <div className="d-flex justify-content-end pb-3 pe-4">
                                        <Button className="rounded-5 border-3 border-0 px-3 py-2 border learn_more" onClick={() => { navigate(`/ProductDetail/${member.slug}`); localStorage.setItem('subproductid', member.id) }}>
                                            Learn more{member.id}
                                        </Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        </>
    )
}

export default Section1
