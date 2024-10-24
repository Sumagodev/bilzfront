import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import contactus from '../../Assets/Images/ContactUs/contactus.png';
import '../../Assets/Styles/ContactUs.css';
import contact from '../../Assets/Images/ContactUs/cantacticon.png'
import location from '../../Assets/Images/ContactUs/locationicon.png'
import inbox from '../../Assets/Images/ContactUs/inboxicon.png'
import { useDropzone } from 'react-dropzone';
import { IoRefresh } from "react-icons/io5";
import map from '../../Assets/Images/ContactUs/map.png'

const Section2 = () => {
  const [socialLinks, setsocialLinks] = useState([]);

  useEffect(() => {
    axios
      .get("/Social/get")
      .then((response) => {
        setsocialLinks(response.data.responseData);
      })
      .catch((error) => {
        console.error("There was an error fetching the social media links!", error);
      });
  }, []);

  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [solution, setSolution] = useState('');
  const [street, setStreet] = useState('');
  const [person_name, setPersonName] = useState('');
  const [surname, setSurname] = useState('');
  const [zip, setZip] = useState('');
  const [place, setPlace] = useState('');
  const [email, setEmail] = useState('');
  const [land, setLand] = useState('');
  const [msg, setMsg] = useState('');
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState('');
  const [errors, setErrors] = useState({});

  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }

  const refreshCaptcha = () => {
    setCaptchaValue(generateCaptcha());
    setInputCaptcha('');
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const [img, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': [], 'image/jpeg': [], 'image/png': [] },
    maxSize: 25 * 1024 * 1024, // 25MB max file size
  });

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!company.trim()) {
      errors.company = 'Company is required';
      isValid = false;
    }
    if (!phone.trim()) {
      errors.phone = 'Phone No. is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
      isValid = false;
    }
    if (!solution.trim()) {
      errors.solution = 'Solution is required';
      isValid = false;
    }
    if (!street.trim()) {
      errors.street = 'Street is required';
      isValid = false;
    }
    if (!person_name.trim()) {
      errors.person_name = 'Name is required';
      isValid = false;
    }
    if (!surname.trim()) {
      errors.surname = 'Surname is required';
      isValid = false;
    }
    if (!zip.trim()) {
      errors.zip = 'Zipcode is required';
      isValid = false;
    }
    if (!place.trim()) {
      errors.place = 'Place is required';
      isValid = false;
    }
    if (!email.trim()) {
      errors.email = 'Email Id is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid Email Id address';
      isValid = false;
    }
    if (!land.trim()) {
      errors.land = 'Land is required';
      isValid = false;
    }
    if (!msg.trim()) {
      errors.msg = 'Message is required';
      isValid = false;
    }
    if (!captchaValue.trim) {
      errors.captcha = 'Please complete the CAPTCHA';
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append('company', company);
        formData.append('phone', phone);
        formData.append('solution', solution);
        formData.append('street', street);
        formData.append('person_name', person_name);
        formData.append('surname', surname);
        formData.append('zip', zip);
        formData.append('place', place);
        formData.append('email', email);
        formData.append('land', land);
        formData.append('msg', msg);

        if (img) {
          formData.append('img', img);
        }

        const response = await axios.post('contact_us/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          setCompany('');
          setPhone('');
          setSolution('');
          setStreet('');
          setPersonName('');
          setSurname('');
          setZip('');
          setPlace('');
          setEmail('');
          setLand('');
          setMsg('');
          setFile(null);
          setCaptchaValue(null);
          setErrors({});
          alert('Thank you! We will connect with you soon.');
        } else {
          console.log('Failed to submit data.');
        }
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center py-5 py-lg-5 px-lg-4">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> {/* Centered container on larger screens */}
            <div className="ContactForm">
              <div className="form p-0 p-lg-0 m-md-0 rounded-5 d-flex flex-column flex-lg-row justify-content-around">
                <div className="contact-info p-3 p-lg-5 rounded-5 w-lg-50">
                  <h1 className="text-white fw-bolder">Contact</h1>

                  <h3 className="text-white fw-semibolder">
                    We are <span className="highlight">here</span> for you
                  </h3>

                  <p className="text-white">
                    Are you interested in one of our products, are you looking for a concrete solution for a machine installation, or do you have general questions about our company? Please fill out the form. We will get back to you as soon as possible.
                  </p>

                  <h5 className="text-white pt-5">
                    Bilz Machine House <span className="highlight">(India) Pvt Ltd</span>
                  </h5>

                  <div>
                    <Row className="align-items-center text-white mb-2">
                      <Col xs={2} md={2}><img src={location} className="img-fluid" alt="location-icon" /></Col>
                      <Col>
                        <strong>Works:</strong>{socialLinks[0]?.work}
                      </Col>
                    </Row>
                    <Row className="align-items-center text-white mb-2">
                      <Col xs={2} md={2}></Col>
                      <Col>
                        <strong>Corporate Office:</strong> {socialLinks[0]?.address}
                      </Col>
                    </Row>
                  </div>

                  <div className="pt-3">
                    <Row className="align-items-center text-white mb-2">
                      <Col xs={2} md={2}><img src={contact} className="img-fluid" alt="contact-icon" /></Col>
                      <Col>
                        <a href="tel:+919822395213" className="text-white text-decoration-none">+91 9822395213</a>
                      </Col>
                    </Row>

                    <Row className="align-items-center text-white mb-2">
                      <Col xs={2} md={2}></Col>
                      <Col>
                        <a href="tel:+919922994859" className="text-white text-decoration-none">+91 9922994859</a>
                      </Col>
                    </Row>

                    <Row className="align-items-center text-white mb-2">
                      <Col xs={2} md={2}></Col>
                      <Col>
                        <a href="tel:+919011038385" className="text-white text-decoration-none">+91 9011038385</a>
                      </Col>
                    </Row>
                  </div>

                  <div className="pt-3">
                    <Row className="align-items-center text-white mb-2">
                      <Col xs={2} md={2}><img src={inbox} className="img-fluid" alt="inbox-icon" /></Col>
                      <Col>
                        <a href="mailto:info@antivibrations.com" className="text-white text-decoration-none">
                          info@antivibrations.com
                        </a>
                      </Col>
                    </Row>

                    <Row className="align-items-center text-white mb-2">
                      <Col xs={2} md={2}></Col>
                      <Col>
                        <a href="mailto:bilzindia@gmail.com" className="text-white text-decoration-none">
                          bilzindia@gmail.com
                        </a>
                      </Col>
                    </Row>
                  </div>
                  <div className="mt-4">
                    <Row className="align-items-center m-0">
                      <Col xs={12} md={5} className="d-flex justify-content-center justify-content-md-end p-0 mb-3 mb-md-0">
                        <Button
                          href="https://www.google.com/maps/dir/W+-+82+(A,+MIDC+Ambad,+Nashik,+Maharashtra+422010/@19.9622736,73.6570328,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bddecafbfffffff:0x266f680022566c86!2m2!1d73.7394345!2d19.9622926?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                          className="text-white btn-map rounded-5 m-1 fw-bolder"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={map} className="img-fluid me-" width={30} alt="Map" />
                          Work
                        </Button>
                      </Col>

                      <Col xs={12} md={7} className="d-flex justify-content-center justify-content-md-start p-0">
                        <Button
                          href="https://www.google.com/maps/place/d,+118,+MIDC+Ambad,+Nashik,+Maharashtra+422010/@19.9539438,73.7270289,17z/data=!3m1!4b1!4m5!3m4!1s0x3bddecb5ccff18d3:0xffa5840d1966e961!8m2!3d19.9539438!4d73.7270289?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                          className="text-white btn-map1 rounded-5 m-1 fw-bolder"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={map} className="img-fluid me-2" width={30} alt="Map" />
                          Corporate 
                        </Button>
                      </Col>
                    </Row>

                    <img src={contactus} alt="Contact Us" width="100%" className="mt-4 img-fluid" />
                  </div>

                </div>
                <div className="contact-form p-lg-5">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Company"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                        {errors.company && <span className="error text-danger">{errors.company}</span>}
                      </Col>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Telephone"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && <span className="error text-danger">{errors.phone}</span>}
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Salutation"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={solution}
                          onChange={(e) => setSolution(e.target.value)}
                        />
                        {errors.solution && <span className="error text-danger">{errors.solution}</span>}
                      </Col>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Street"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                        />
                        {errors.street && <span className="error text-danger">{errors.street}</span>}
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Name"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={person_name}
                          onChange={(e) => setPersonName(e.target.value)}
                        />
                        {errors.person_name && <span className="error text-danger">{errors.person_name}</span>}
                      </Col>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Surname"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
                        />
                        {errors.surname && <span className="error text-danger">{errors.surname}</span>}
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Zipcode"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                        />
                        {errors.zip && <span className="error text-danger">{errors.zip}</span>}
                      </Col>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Place"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={place}
                          onChange={(e) => setPlace(e.target.value)}
                        />
                        {errors.place && <span className="error text-danger">{errors.place}</span>}
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Email"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error text-danger">{errors.email}</span>}
                      </Col>
                      <Col xs={12} md={6} className="mb-3"> {/* Add margin-bottom for spacing */}
                        <Form.Control
                          placeholder="Land"
                          className='shadows text-dark'
                          style={{ borderRadius: "20px", color: "#C9C9C9" }}
                          value={land}
                          onChange={(e) => setLand(e.target.value)}
                        />
                        {errors.land && <span className="error text-danger">{errors.land}</span>}
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Message"
                          className='shadows text-dark'
                          style={{
                            borderRadius: "50px",
                            backgroundColor: "#ffff",
                            color: "#C9C9C9",
                          }}
                          value={msg}
                          onChange={(e) => setMsg(e.target.value)}
                        />
                        {errors.msg && <span className="error text-danger">{errors.msg}</span>}
                      </Col>
                    </Row>

                    <Form.Group className="mt-4">
                      <p className='ps-4 text-black'><span className='fw-bold'>Upload:</span> If possible, please include a dimensioned sketch or provide a CAD model.</p>
                    </Form.Group>

                    <Row className='mb-2'>
                      <Col>
                        <div
                          {...getRootProps()}
                          className={`rounded-4 px-5 py-5 shadows text-dark text-center ${isDragActive ? 'bg-light border-primary' : 'bg-white border'}`}
                          style={{ borderStyle: 'dashed', borderWidth: '2px' }}
                        >
                          <input {...getInputProps()} />
                          {img ? (
                            <p>{img.name}</p>
                          ) : (
                            <p className="mb-0 text-dark" style={{ cursor: 'pointer' }}>
                              Drag a file (Allowed File Types: pdf, jpeg, png; Maximum: 25MB)
                            </p>
                          )}
                        </div>
                      </Col>
                    </Row>

                    <Form.Group className="mt-4 text-black">
                      <Form.Check type="checkbox" label="Send a copy to me" />
                      <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                    </Form.Group>

                    {/* <Row className="text-center mt-4">
                      <Col className='d-flex justify-content-md-center'>
                        <p style={{ color: '#719F3D' }}>Please enter the characters from the picture.</p>
                      </Col>
                    </Row> */}


                    <Row className="text-center mt-lg-4">
                      <Col xs={12} md={6} className="mb-3 ps-md-5">
                        <Form.Control
                          type="text"
                          placeholder="Enter CAPTCHA"
                          value={inputCaptcha}
                          onChange={handleCaptchaChange}
                          className="mt-3 rounded-5"
                          style={{ height: '48px' }}
                        />
                        {errors.captcha && <p className="text-danger">{errors.captcha}</p>}
                      </Col>
                      <Col xs={12} md={5} className="mb-3 pt-2 d-flex justify-content-start">
                        <Button
                          className="rounded-5 btn-captch text-dark mt-2 w-100 d-flex align-items-center justify-content-between"
                          variant="primary"
                          onClick={refreshCaptcha}
                          style={{ height: '48px' }}
                        >
                          <span>{captchaValue}</span>
                          <IoRefresh style={{ marginLeft: 'auto' }} />
                        </Button>
                      </Col>
                    </Row>



                    <Row className="text-center mt-4">
                      <Col>
                        {/* <Button className="mx-2 px-4 rounded-5 btn-UD" variant="secondary">Upload <img src={upload} className='ps-3' width={'50px'} /></Button> */}
                        <Button className="mx-2 px-5 py-2 ps-5 text-center rounded-5 btn-UD" variant="primary" onClick={handleSubmit}>Submit</Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Section2;
