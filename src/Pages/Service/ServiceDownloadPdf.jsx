import React, { useEffect, useState } from 'react';
import PDFImg from '../../Assets/Images/ServiceDownloadPdf/PDFImg.png';
import PDFicon from '../../Assets/Images/ServiceDownloadPdf/PDFicon.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../Assets/Styles/Service/Service.css';
import axios from 'axios';
import PDFBanner from '../../ComponentsPage/Banner/PDFBanner';

const ServiceDownloadPdf = () => {
  const [ServicePDF, setServicePDF] = useState([]);

  useEffect(() => {
    axios.get("Service_pdf/get")
      .then((response) => {
        setServicePDF(response.data.responseData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleDownload = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = pdfUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <PDFBanner />
      <Container fluid className="bg-pdfimg-new px-lg-5 p-lg-5 ps-lg-5">
        <Row className="mb-4 ps-3 pe-3 w-100"> 
          <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <h1 className="fs fw-bolder textheading pt-4">
              Technical data <span className="highlight">sheets</span>
            </h1>
            <p>Select the desired product group and download the appropriate data sheets in just a few steps.</p>
          </Col>
        </Row>


        {ServicePDF.map((a) => (
          <Row
            className="my-3 mx-auto cardshadow datasheet mob-datasheet justify-content-center"
            key={a.id}
          >
            <Col xs="auto" className="align-items-center">
              <img src={PDFImg} className="img-fluid cardshadow pdf-icon" alt="PDF" />
            </Col>

            <Col className="align-items-center text-center">
              <p className="mb-0 p-0 cardtext">{a.title}</p>
            </Col>

            <Col xs="auto" className="d-flex justify-content-center align-items-center">
              <Button
                className="border-0 rounded-pill px-md-3 py-2 learn_more fw-bolder"
                onClick={() => handleDownload(a.pdf)}
                target="_blank"
              >
                Download
                <img src={PDFicon} className="download-icon ms-lg-2" alt="Download Icon" />
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default ServiceDownloadPdf;
