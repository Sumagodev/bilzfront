import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
import '../Assets/Styles/Product.css';
import axios from 'axios';

const Product = () => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const id = localStorage.getItem('categoryid')
  const [products, setProducts] = useState([]);
  const [productimges, setProductImages] = useState(null);
  const [ProductCard, setProductCard] = useState([]);

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

  // Combined useEffect to call all API functions when the component mounts or `id` changes
  useEffect(() => {

    fetchAllProducts();
    fetchProductImages(id);
    fetchProductDetails(id);


    // Call the combined fetch function
  }, [id]); // Dependency array ensures it runs on `id` change

  return (
    <>
      {/* Product Image Section */}
      {productimges ? (
        <img src={`https://api.antivibrations.com/${productimges.img}`} alt="Product Image" style={{ marginTop: "79px" }} className="img-fluid w-100" />
      ) : (
        <p>No data available for product image.</p> // Show message if no image is available
      )}

      {/* Product Cards Section */}
      <Container fluid className='ProductsCard pt-4'>
        <Row>
          <Col xs={12}>
            <h1 className='px-lg-2 py-lg-4 fw-semibold textheading'>
              Insulation <span className="highlight">Panels</span>
            </h1>
          </Col>
        </Row>

        {ProductCard.length > 0 ? (
          <Row>
            {ProductCard.map((member, index) => (
              <Col xs={12} sm={6} md={6} lg={4} key={index} className='pt-1 pb-5 pe-3'>
                <Card className='rounded rounded-5 cardshadow' style={{ height: '450px' }}> {/* Fixed card height */}
                  <Card.Img
                    variant="top"
                    src={`https://api.antivibrations.com/${member.img}`}
                    alt={member.title}
                    className='pt-3 px-3 rounded-5'
                    style={{ height: '300px', objectFit: 'cover' }} // Fixed height for the image
                  />
                  <Card.Body style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}> {/* Ensuring content fits */}
                    <Card.Title className='fw-bold text-uppercase'>{member.title}</Card.Title>
                    <Card.Text className='text-justify text-dark lh-sm'
                      dangerouslySetInnerHTML={{ __html: member.description }}
                    />                  </Card.Body>
                  <div className="d-flex justify-content-end pb-3 pe-4">
                    <Button className="rounded-5 border-3 border-0 px-3 py-2 border fw-medium learn_more" onClick={() => { navigate(`/ProductDetail/${member.slug}`); localStorage.setItem('subproductid', member.id) }}>
                      Learn more
                    </Button>
                  </div>
                </Card>
              </Col>


            ))}
          </Row>
        ) : (
          <p>No data available for product details.</p> // Show message if no details are available
        )}
      </Container>
    </>
  );
};

export default Product;
