import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-chevron-up"></i>
        </div>
      )}
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="p-0">
        <Card body style={{ backgroundColor: "#05313E" }} className="p-0 m-0">
          <span className="d-flex justify-content-center text-white">
            Copyright &copy; {new Date().getFullYear()} | Bilz Designed by Sumago with
            <Link to="https://sumagoinfotech.com/" style={{ textDecoration: 'none' }}>❤️</Link> From Nashik
          </span>
        </Card>
      </Col>
    </>
  );
}

export default Footer;