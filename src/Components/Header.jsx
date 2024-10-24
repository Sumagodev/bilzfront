import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Card, ListGroup, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { FaTimes, FaBars, FaAngleRight } from 'react-icons/fa';
import '../Assets/Styles/Header.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Image Imports
import Home from '../Assets/Images/Header/Home.png';
import Product from '../Assets/Images/Header/product.png';
import Application from '../Assets/Images/Header/application.png';
import Service from '../Assets/Images/Header/service.png';
import Aboutus from '../Assets/Images/Header/aboutus.png';
import News from '../Assets/Images/Header/news.png';
import Career from '../Assets/Images/Header/career.png';
import Distributers from '../Assets/Images/Header/distrubuters.png';
import Download from '../Assets/Images/Header/download.png';
import Contact from '../Assets/Images/Header/conatct.png';
import Submenu from '../Assets/Images/Header/sub-meun.png';
import Facebook from '../Assets/Images/Header/facebook.png';
import youtube from '../Assets/Images/Header/youtube.png';
import instagram from '../Assets/Images/Header/instagram.png';
import Linkedin from '../Assets/Images/Header/linkedin.png';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Close Offcanvas on route change
  useEffect(() => {
    setShowSidebar(false);
  }, [location]);

  return (
    <div className="sidebar-container">
      {/* Mobile/Tablet Toggle Button */}
      <Button
        variant="light"
        onClick={toggleSidebar}
        className="d-lg-none"
        style={{ position: 'fixed', zIndex: 2, top: '10px', right: '10px', background: 'transparent', color: '#FFF' }}
      >
        {showSidebar ? <FaTimes size={24} /> : <FaBars size={24} />}
      </Button>

      {/* Desktop Sidebar */}
      <Row>
        <Col xs={12} lg={3} className="d-none d-lg-block">
          <div className="frame-child52"></div>
          <Card
            className="sidebar-card"
            style={{
              width: '20.4rem',
              position: 'fixed',
              backgroundColor: '#02546D',
              zIndex: 1,
              top: '12px',
              height: '97vh',
              left: '4px',
              padding: '25px',
              borderRadius: '20px',
            }}
          >
            <SidebarContent openDropdown={openDropdown} handleDropdownToggle={handleDropdownToggle} />
          </Card>
        </Col>
      </Row>

      {/* Mobile/Tablet Offcanvas Sidebar */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} className="d-lg-none" style={{ backgroundColor: '#02546D' }}>
        <Offcanvas.Header closeButton style={{ color: '#FFF' }}>
          <Offcanvas.Title style={{ color: 'white' }}></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent openDropdown={openDropdown} handleDropdownToggle={handleDropdownToggle} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

// Sidebar content is reused for both desktop and mobile views
function SidebarContent({ openDropdown, handleDropdownToggle }) {
  const [socialLinks, setsocialLinks] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("/Social/get")
      .then((response) => {
        setsocialLinks(response.data.responseData);
        // console.log("sdsd",response.data.responseData);
      })
      .catch((error) => {
        console.error("There was an error fetching the social media links!", error);
      });
  }, []);

  useEffect(() => {
    axios.get('/productName/get')
      .then((response) => {
        setProducts(response.data.responseData);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);
  return (
    <>
      <ListGroup className="scroll scroll2">
        {/* <SidebarNavItem to="/" label="Home" iconClass="fa-home" onClick={() => window.scrollTo(0, 0)} /> */}
        <h5>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Home image */}
            <img
              src={Home}
              className="img-fluid"
              alt="Home"
              style={{ marginRight: '14px', width: '20px' }}
            />
            Home
          </NavLink>
        </h5>

        <hr style={{ color: 'white', borderTop: '2px solid' }} />

        <h5>
          <NavLink
            to="#"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link ' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Home image */}
            <img
              src={Product}
              className="img-fluid"
              alt="Home"
              style={{ marginRight: '10px', width: '25px' }}
            />
            Product
          </NavLink>
        </h5>

        {/* <SidebarNavItem to="/Product" imgSrc={Product} label="Product" iconClass="fa-box" onClick={() => window.scrollTo(0, 0)} /> */}
        <hr style={{ color: 'white', borderTop: '2px solid' }} />

        <ListGroup className="product-list ms-4">
          {
            products.map((a) => {
              return (
                <>
                  <h5 onClick={()=>navigate(`/Product/${a.id}`)}>
                    <NavLink
                      
                      className={({ isActive }) =>
                        isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
                      }
                      style={{ color: 'white', display: 'flex', alignItems: 'center' }}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <img
                        src={Submenu}
                        className="img-fluid"
                        alt="Leveling Elements"
                        style={{ marginRight: '10px', width: '9px' }}
                      />
                     {a.productName}
                    </NavLink>
                  </h5>
                </>
              )
            })
          }


          {/* <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Leveling Elements"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Leveling elements
            </NavLink>
          </h5>

          <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Precision Wedge Shoes"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Precision wedge shoes
            </NavLink>
          </h5>

          <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Horizontal Elements"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Horizontal elements
            </NavLink>
          </h5>

          <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Air Springs"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Air springs
            </NavLink>
          </h5>

          <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Mechanical Level Control Systems"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Mechanical level control systems
            </NavLink>
          </h5>

          <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Electronic Level Control Systems"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Electronic level control systems
            </NavLink>
          </h5>

          <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Active Vibration Isolation"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Active vibration isolation
            </NavLink>
          </h5>

          <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Table Platforms"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Table platforms
            </NavLink>
          </h5>
          <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Electronic level control systems"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Electronic level control systems
            </NavLink>
          </h5>
          <h5>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={Submenu}
                className="img-fluid"
                alt="Active vibration isolation"
                style={{ marginRight: '10px', width: '9px' }}
              />
              Active vibration isolation
            </NavLink>
          </h5> */}
        </ListGroup>


        <hr style={{ color: 'white', borderTop: '2px solid' }} />

        <DropdownNavItem
          title={
            <NavLink
              to="#"  // Link for the main "Service" item
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link ' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '-40px' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              {/* Display Service image */}
              <img
                src={Service}
                className="img-fluid"
                alt="Service"
                style={{ marginRight: '10px', width: '25px' }}
              />
              Service
            </NavLink>
          }
          isOpen={openDropdown === 'tablePlatforms'}  // Adjusted dropdown state key
          onToggle={() => handleDropdownToggle('tablePlatforms')}
          onClick={() => window.scrollTo(0, 0)}
        >
          {/* Submenu items with image and link */}
          <NavLink
            to="/Service"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '28px', marginTop: '20px' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Submenu image */}
            <img
              src={Submenu}
              className="img-fluid"
              alt="Service"
              style={{ marginRight: '10px', width: '9px' }}
            />
            Services
          </NavLink>

          <NavLink
            to="/ServiceOverview"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '28px', marginTop: '20px' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Submenu image */}
            <img
              src={Submenu}
              className="img-fluid"
              alt="Service Overview"
              style={{ marginRight: '10px', width: '9px' }}
            />
            Service Overview
          </NavLink>
        </DropdownNavItem>


        <hr style={{ color: 'white', borderTop: '2px solid' }} />

        <DropdownNavItem
          title={
            <NavLink
              to="#"  // Link for the main "Service" item
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '-40px' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              {/* Display Service image */}
              <img
                src={Application}
                className="img-fluid"
                alt="Service"
                style={{ marginRight: '10px', width: '25px' }}
              />
              Application
            </NavLink>
          }
          isOpen={openDropdown === 'tablePlatforms1'}  // Adjusted dropdown state key
          onToggle={() => handleDropdownToggle('tablePlatforms1')}
          onClick={() => window.scrollTo(0, 0)}
        >
          {/* Submenu items with image and link */}
          <NavLink
            to="/SolutionApplication"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '28px', marginTop: '20px' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Submenu image */}
            <img
              src={Submenu}
              className="img-fluid"
              alt="Application Overview"
              style={{ marginRight: '10px', width: '9px' }}
            />
            Application
          </NavLink>
          <NavLink
            to="/SolutionOverview"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '28px', marginTop: '20px' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Submenu image */}
            <img
              src={Submenu}
              className="img-fluid"
              alt="Application Overview"
              style={{ marginRight: '10px', width: '9px' }}
            />
            Application Overview
          </NavLink>
        </DropdownNavItem>

        <hr style={{ color: 'white', borderTop: '2px solid' }} />

        <DropdownNavItem
          title={
            <NavLink
              to="#"  // Link for the main "Service" item
              className={({ isActive }) =>
                isActive ? 'text-decoration-none link ' : 'text-decoration-none link'
              }
              style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '-36px' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              {/* Display Service image */}
              <img
                src={Aboutus}
                className="img-fluid"
                alt="Service"
                style={{ marginRight: '8px', width: '25px' }}
              />
              About Us
            </NavLink>
          }
          isOpen={openDropdown === 'tablePlatforms2'}  // Adjusted dropdown state key
          onToggle={() => handleDropdownToggle('tablePlatforms2')}
          onClick={() => window.scrollTo(0, 0)}
        >
          {/* Submenu items with image and link */}
          <NavLink
            to="/AboutUs"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '28px', marginTop: '20px' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Submenu image */}
            <img
              src={Submenu}
              className="img-fluid"
              alt="About Us"
              style={{ marginRight: '10px', width: '9px' }}
            />
            About Us
          </NavLink>
          <NavLink
            to="/CompanyOverview"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '28px', marginTop: '20px' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Submenu image */}
            <img
              src={Submenu}
              className="img-fluid"
              alt="Company Overview"
              style={{ marginRight: '10px', width: '9px' }}
            />
            Company Overview
          </NavLink>
        </DropdownNavItem>

        <hr style={{ color: 'white', borderTop: '2px solid' }} />

        <h5>
          <NavLink
            to="/News"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center', marginLeft: '6px' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Home image */}
            <img
              src={News}
              className="img-fluid"
              alt="Home"
              style={{ marginRight: '11px', width: '20px' }}
            />
            News
          </NavLink>
        </h5>

        {/* <SidebarNavItem to="/News" imgSrc={News} label="News" iconClass="fa-newspaper" onClick={() => window.scrollTo(0, 0)} /> */}
        <hr style={{ color: 'white', borderTop: '2px solid' }} />

        <h5>
          <NavLink
            to="/JobOpportunity"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Home image */}
            <img
              src={Career}
              className="img-fluid"
              alt="Home"
              style={{ marginRight: '10px', width: '26px' }}
            />
            Career
          </NavLink>
        </h5>

        {/* <SidebarNavItem to="/JobOpportunity" imgSrc={Career} label="Career" iconClass="fa-briefcase" onClick={() => window.scrollTo(0, 0)} /> */}
        <hr style={{ color: 'white', borderTop: '2px solid' }} />

        <h5>
          <NavLink
            to="/ServiceDownloadPdf"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Home image */}
            <img
              src={Download}
              className="img-fluid"
              alt="Home"
              style={{ marginRight: '10px', width: '28px' }}
            />
            Download
          </NavLink>
        </h5>

        {/* <SidebarNavItem to="/ServiceDownloadPdf" imgSrc={Download} label="Download" iconClass="fa-download" onClick={() => window.scrollTo(0, 0)} /> */}
        <hr style={{ color: 'white', borderTop: '2px solid' }} />

        <h5>
          <NavLink
            to="/ContactUs"
            className={({ isActive }) =>
              isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
            }
            style={{ color: 'white', display: 'flex', alignItems: 'center' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            {/* Display Home image */}
            <img
              src={Contact}
              className="img-fluid"
              alt="Home"
              style={{ marginRight: '7px', width: '32px' }}
            />
            Contact
          </NavLink>
        </h5>

        {/* <SidebarNavItem to="/ContactUs" imgSrc={Contact} label="Contact Us" iconClass="fa-envelope" onClick={() => window.scrollTo(0, 0)} /> */}
        <hr style={{ color: 'white', borderTop: '2px solid' }} />
      </ListGroup>

      {/* Fixed Follow Us Section */}
      <div className="fixed-follow-us" style={{ position: 'sticky', bottom: 0, backgroundColor: '#02546D', background: 'transparent' }}>
        <div className="text-center pt-2">
          <p className="d-flex justify-content-center fixed-follow-us mt-2 fw-normal fs-4 text" style={{ color: 'white', background: 'transparent' }}>Follow Us On</p>
          {socialLinks.map((socialLink) => {
            return (
              <div key={socialLink.id} className="d-inline-block">
                <a variant="link" href={socialLink.facebook} target="_blank" rel="noopener noreferrer">
                  <img src={Facebook} className="img-fluid" style={{ marginRight: '10px', width: '20px' }} alt="Facebook" />
                </a>
                <a variant="link" href={socialLink.instagram} target="_blank" rel="noopener noreferrer">
                  <img src={instagram} className="img-fluid" style={{ marginRight: '10px', width: '30px' }} alt="Instagram" />
                </a>
                <a variant="link" href={socialLink.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={Linkedin} className="img-fluid" style={{ marginRight: '10px', width: '20px' }} alt="LinkedIn" />
                </a>
                <a variant="link" href={socialLink.youtube} target="_blank" rel="noopener noreferrer">
                  <img src={youtube} className="img-fluid" style={{ marginRight: '10px', width: '30px' }} alt="YouTube" />
                </a>
              </div>
            )
          })}
        </div>
      </div>

    </>
  );
}

// SidebarNavItem Component for cleaner JSX
const SidebarNavItem = ({ to, imgSrc, label, iconClass }) => (
  <h5>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'text-decoration-none link active-link' : 'text-decoration-none link'
      }
      style={{ color: 'white' }}
    >
      <img src={imgSrc} className="img-fluid" style={{ marginRight: '15px', width: '25px' }} />
      {label}
    </NavLink>
  </h5>
);

// DropdownNavItem Component for dropdown links with arrow
const DropdownNavItem = ({ title, imgSrc, children, isOpen, onToggle, iconClass }) => (
  <div>
    <h5 className="d-flex align-items-center text-white" onClick={onToggle} style={{ cursor: 'pointer' }}>
      <i className={`fa ${iconClass} img-fluid`} style={{ marginRight: '15px', width: '25px' }} aria-hidden="true"></i>
      {title}
      <FaAngleRight style={{ marginLeft: 'auto', transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} />
    </h5>
    {isOpen && <div className="dropdown-content">{children}</div>}
  </div>
);

export default Header;
