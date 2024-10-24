
import { Container, Row, Col, Button } from 'react-bootstrap'
import Product1 from '../../Assets/Images/ProductDetail/Product1.png'
import Product2 from '../../Assets/Images/ProductDetail/Product2.png'
import Product from '../../Assets/Images/ProductDetail/Product.png'
import Card from 'react-bootstrap/Card';
import { FaChevronDown } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import { useNavigate, useParams } from "react-router-dom";

import axios from 'axios';






const Section1 = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3, 
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



    const [isOpen, setIsOpen] = useState(false);
    const id = localStorage.getItem('categoryid')
    const subid = localStorage.getItem('subproductid')
    // Toggle accordion state

    // State to manage the selected content
    const [openAccordionId, setOpenAccordionId] = useState(null);

    // Toggle function to open/close accordion items
    const toggleAccordion = (id) => {
        setOpenAccordionId(openAccordionId === id ? null : id);
    };
    // Function to handle content change

    const navigate = useNavigate();


    const [products, setProducts] = useState([]);
    const [productimges, setProductImages] = useState(null);
    const [ProductCard, setProductCard] = useState(null);
    const [Accardian, setAccardian] = useState([]);
    const [tabDetails, settabDetails] = useState([])
    // Function to fetch all products (if needed for other functionality)
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('/productName/get');
            setProducts(response.data.responseData);
        } catch (error) {
            console.error('Error fetching all products:', error);
        }
    };

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
    const fetchProductDetails = async (id) => {
        try {
            const response = await axios.get(`/productName/getdetails/${id}`);
            setProductCard(response.data);
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


        fetchProductDetails(id);


        // Call the combined fetch function
    }, [id]);
    // Combined useEffect to call all API functions when the component mounts or `id` changes
    useEffect(() => {

        fetchAllProducts();
        fetchProductImages(id);
        fetchProductDetails(id);
        fetchAccardianDetails(id, subid);
        fetchtabDetails(id, subid)
        fetchProductDetails1(id)
        // Call the combined fetch function
    }, [id, subid]);
    return (
        <>
            <Container fluid className='ProductBAckgroundImg p-0'>
                {/* Product Image Section */}
                {productimges ? (
                    <img src={`https://api.antivibrations.com/${productimges.img}`} style={{ marginTop: "30px" }} alt="Product Image" className="img-fluid" />
                ) : (
                    <p>No data available for product image.</p> // Show message if no image is available
                )}
                <Row className='d-flex justify-content-center'>

                    <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
                        <Card className='rounded-5 cardshadow'>
                            <Row>
                                {
                                    ProductCard && (
                                        <>
                                            <Col xs={12} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-center mb-md-0'>
                                                <img src={`https://api.antivibrations.com/${ProductCard.img}`} alt="Product" className='img-fluid' />
                                            </Col>
                                            <Col xs={12} sm={6} md={6} lg={7} xl={7} xxl={7} className='px-5 px-md-0'>
                                                <h1 className='py-3 textheading fw-bolder'>
                                                    Insulation <span className='highlight'>{ProductCard.title}</span>
                                                </h1>
                                                <ul className='pe-md-5 pt-4'>
                                                    <li>
                                                        {ProductCard.description}
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
                        {/* <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
                            {selectedContent === 'description' && (
                                <Card className='px-lg-5 px-4 py-5 rounded-5 my-5 cardborders cardshadow' id="description">
                                    <h1 className='textheading'>
                                        General information on mechanical level <span className='highlight'>control systems</span>
                                    </h1>
                                    <Card.Body>
                                        <ul>
                                            <li>The delivery is made as a complete set with 3 control valves and all necessary hose connections and connectors for 4 air springs. All components are of course also available individually as spare parts.</li>
                                            <li>In the LCV variant, the air volume flow can be reduced using the throttle valve if the control system tends to overshoot. A throttle valve can also be installed optionally in the PVM variant.</li>
                                            <li>In addition to our standard solutions listed here, we also offer special variants with regard to material, flow, accuracy and restoring force.</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            )}

                            {selectedContent === 'technical-data' && (
                                <Card className='px-lg-5 px-4 py-5 rounded-5 my-5 cardborders cardshadow' id="technical-data">
                                    <h1 className='textheading'>
                                        Technical Data <span className='highlight'>for Control Systems</span>
                                    </h1>
                                    <Card.Body>
                                        <ul>
                                            <li>Input Voltage: 230V AC</li>
                                            <li>Max Pressure: 10 bar</li>
                                            <li>Flow Rate: 200 l/min</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            )}

                            {selectedContent === 'general-info' && (
                                <Card className='px-lg-5 px-4 py-5 rounded-5 my-5 cardborders cardshadow' id="general-info">
                                    <h1 className='textheading'>
                                        General Information <span className='highlight'>About Systems</span>
                                    </h1>
                                    <Card.Body>
                                        <ul>
                                            <li>These systems ensure precision and reliability in mechanical operations.</li>
                                            <li>Suitable for various industrial applications.</li>
                                            <li>Robust design for long-term usage.</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            )}
                        </Col> */}
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
                        {/* <div className="custom-accordion my-2 p-lg-1 ">
                            <div
                                className={`custom-accordion-header cardshadow ${isOpen ? 'active' : ''}`}
                                onClick={toggleAccordion}
                                tabIndex={0}
                            >Function of the valves
                                <FaChevronDown className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
                            </div>
                            <div className={`custom-accordion-body ${isOpen ? 'show' : ''}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div> */}
                        {/* <div className="custom-accordion p-lg-1">
                            <div
                                className={`custom-accordion-header shadow ${isOpen ? 'active' : ''}`}
                                onClick={toggleAccordion}
                                tabIndex={0}
                            >interpretation
                                <FaChevronDown className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
                            </div>
                        </div> */}
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
                                    {item.description} {/* Accordion content from JSON */}
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
                    {/* <Row className="px-lg-4 mx-lg-4">
                        {ProductCard1.filter((a) => a.id != subid).map((member, index) => (
                            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="pt-lg-3">
                                <Card className="rounded-5 h-100 cardshadow">
                                    <Card.Img variant="top" src={`https://api.antivibrations.com/${member.img}`} alt={member.name} className="px-3 pt-3" />
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-uppercase">{member.name}</Card.Title>
                                        <Card.Text>{member.title}</Card.Text>
                                    </Card.Body>
                                    <div className="d-flex justify-content-end pb-3 pe-4">
                                        <Button className="rounded-5 border-3 border-0 px-3 py-2 border learn_more" onClick={() => {navigate(`/ProductDetail/${member.slug}`);localStorage.setItem('subproductid',member.id)}}>
                                            Learn more
                                        </Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row> */}
                    <Slider {...settings}>
                        {ProductCard1.filter((a) => a.id !== subid).map((member, index) => (
                            <div key={index}>
                                <Card className="rounded-5 h-100 cardshadow m-1">
                                    <Card.Img variant="top" src={`https://api.antivibrations.com/${member.img}`} alt={member.name} className="px-3 pt-3" />
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-uppercase">{member.name}</Card.Title>
                                        <Card.Text>{member.title}</Card.Text>
                                    </Card.Body>
                                    <div className="d-flex justify-content-end pb-3 pe-4">
                                        <Button className="rounded-5 border-3 border-0 px-3 py-2 border learn_more" onClick={() => { navigate(`/ProductDetail/${member.slug}`); localStorage.setItem('subproductid', member.id); }}>
                                            Learn more
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </>
        </>
    )
}

export default Section1
