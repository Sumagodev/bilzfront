import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../Assets/Styles/Solution/SolutionApplication.css';
import SolutionBanner from '../../ComponentsPage/Banner/SolutionBanner';
import axios from 'axios';
import { Link } from 'react-router-dom';

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const SolutionApplication = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [applicationCat, setApplicationCat] = useState([]);
  const [useApplication, setUseApplication] = useState([]);
  const [allApplications, setAllApplications] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    axios
      .get('ServiceName/get')
      .then((response) => {
        setApplicationCat(response.data.responseData);
      })
      .catch((error) => {
        console.error('Error fetching the application categories:', error);
      });
    fetchAllApplications();
  }, []);

  const fetchAllApplications = () => {
    axios
      .get('ServiceDetail/get')
      .then((response) => {
        setUseApplication(response.data.responseData);
        setAllApplications(response.data.responseData);
      })
      .catch((error) => {
        console.error('Error fetching all applications:', error);
      });
  };

  const handleSelect = (eventKey, productId) => {
    setActiveLink(eventKey);
    if (allApplications) {
      const catFilter = allApplications.filter((item) => item.ServiceName.title === eventKey);
      setUseApplication(catFilter);
      setIsFiltered(true); // Show the "Show All Applications" button after filtering
    }
  };

  const handleReset = () => {
    setUseApplication(allApplications);
    setIsFiltered(false); // Hide the "Show All Applications" button when reset
    setActiveLink(null);
  };

  const applicationChunks = chunkArray(applicationCat, 4);

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const truncateText = (text, limit) => {
    if (!text) return 'No description available.';
    const strippedText = stripHtml(text);
    const words = strippedText.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return strippedText;
  };

  return (
    <>
      <SolutionBanner />
      <Container fluid className="bg-SolutionApplication pt-2 pb-5">
        {applicationChunks.map((chunk, chunkIndex) => (
          <Row key={chunkIndex} className="justify-content-center mb-3">
            <Col xs={12}>
              <div className="d-flex justify-content-between application-tab">
                <Navbar variant="light" expand="lg" className="navbar-custom w-100">
                  <Nav
                    className="mx-auto d-flex justify-content-center align-items-center fw-bolder"
                    activeKey={activeLink}
                  >
                    {chunk.map((item, index) => (
                      <React.Fragment key={item.id}>
                        <Nav.Link
                          eventKey={item.title}
                          className={`text-white ${activeLink === item.title ? 'active-link' : ''} cardtitle text-uppercase nav-link-custom 
            fs-6 fs-md-5 fs-lg-4 px-3`}
                          onClick={() => handleSelect(item.title, item.productId)}
                        >
                          {item.title}
                        </Nav.Link>

                        {/* Conditionally render the separator only if it's not the last item */}
                        {index < chunk.length - 1 && (
                          <span className="mx-2 text-white">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </Nav>
                </Navbar>
              </div>
            </Col>
          </Row>
        ))}

        <Row>
          {useApplication.length > 0 ? (
            useApplication.map((a) => (
              <Col xs={12} sm={6} md={6} lg={4} key={a.id} className="pt-4">
                <Card
                  className="rounded rounded-5 h-100 cardshadow"
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Img
                    variant="top"
                    src={a.img}
                    alt={a.name}
                    className="pt-3 px-3 rounded-5"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold text-uppercase">{a.title}</Card.Title>
                    <Card.Text className="text-justify text-capitalize lh-sm">
                      {truncateText(a.description, 30)}
                    </Card.Text>
                  </Card.Body>
                  <div className="d-flex justify-content-end pb-3 pe-4">
                    <Link
                      to={`/solutionapplicationdetails/${a.id}`}
                      state={{ applicationItem: a }}
                    >
                      <Button className="rounded-5 border-3 border-0 px-3 py-2 border fw-medium learn_more">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center pt-4">
              <p>No data available. Please select a category.</p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default SolutionApplication;
