import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../Assets/Styles/JobOpportunity.css';
import internship from '../../Assets/Images/JobOpportunity/internship.png';
import jop from '../../Assets/Images/JobOpportunity/jop.png';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import ReCAPTCHA from 'react-google-recaptcha';


const Section3 = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [file, setFile] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [msg, setMsg] = useState('');
  const [img, setImg] = useState('');

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': [], 'image/jpeg': [], 'image/png': [] },
    maxSize: 25 * 1024 * 1024, // 25MB max file size
  });

  const openTab = (tabName) => {
    setActiveTab(tabName);
    setErrors({});
  };

  const validateField = (field, value) => {
    let error = '';

    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          error = 'Name can only contain letters';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Mobile No. is required';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Mobile number must be exactly 10 digits';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email Id is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Invalid Email Id address';
        }
        break;
      case 'position':
        if (!value.trim()) {
          error = 'City is required';
        }
        break;
      case 'msg':
        if (!value.trim()) {
          error = 'Message is required';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));

    return error;
  };

  const validateForm = () => {
    const formErrors = {
      name: validateField('name', name),
      phone: validateField('phone', phone),
      email: validateField('email', email),
      position: validateField('position', position),
      msg: validateField('msg', msg),
      captcha: captchaValue ? '' : 'Please complete the CAPTCHA',
    };

    setErrors(formErrors);
    return !Object.values(formErrors).some((error) => error);
  };

  const handleFieldChange = (setter, field) => (e) => {
    const value = e.target.value;
    setter(value);
    validateField(field, value); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('position', position);
        formData.append('msg', msg);

        if (file) {
          formData.append('img', file); 
        }

        const response = await axios.post('apply_now/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          console.log('Submitted data:', response.data);

          setName('');
          setPhone('');
          setEmail('');
          setPosition('');
          setMsg('');
          setFile(null);
          setCaptchaValue(null); 
          setErrors({});

          setIsSubmitted(false); 
          alert('Thank you! We will connect with you soon.');
        }
      } catch (error) {
        console.error('Error submitting data:', error.response || error);
      }
    } else {
      setIsSubmitted(true);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        captcha: '', 
      }));
    }
  };
  { isSubmitted && !captchaValue && <span className="error text-danger">Please complete the CAPTCHA</span> }

  const validateForm1 = () => {
    const formErrors = {
      name: validateField('name', name),
      phone: validateField('phone', phone),
      email: validateField('email', email),
      position: validateField('position', position),
      msg: validateField('msg', msg),
      captcha: captchaValue ? '' : 'Please complete the CAPTCHA',
    };

    setErrors(formErrors);
    return !Object.values(formErrors).some((error) => error);
  };

  const handleFieldChange1 = (setter, field) => (e) => {
    const value = e.target.value;
    setter(value);
    validateField(field, value); 
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setIsSubmitted(true); 
    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('position', position);
        formData.append('msg', msg);

        if (file) {
          formData.append('img', file); 
        }

        const response = await axios.post('apply_now/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          console.log('Submitted data:', response.data);

          setName('');
          setPhone('');
          setEmail('');
          setPosition('');
          setMsg('');
          setFile(null);
          setCaptchaValue(null); 

          setErrors({});

          setIsSubmitted(false); 
          alert('Thank you! We will connect with you soon.');
        }
      } catch (error) {
        console.error('Error submitting data:', error.response || error);
      }
    } else {
      setIsSubmitted(true);
    }
  };

  const handleCaptchaChange1 = (value) => {
    setCaptchaValue(value);
    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        captcha: '', 
      }));
    }
  };
  { isSubmitted && !captchaValue && <span className="error text-danger">Please complete the CAPTCHA</span> }

  return (
    <Container fluid>
      <Row className="mt-5 px-md-5 mb-3 pb-5" id="skills">
        <Col xs={12} className="mySkills">
          <h1 className="mx-5 my-4 fw-bolder textheading">
            Apply <span className="highlight">Now</span>
          </h1>
          <div id="skillsContainer" className="cardshadow">
            <div className="tab">
              <button
                className={`tabLinks ${activeTab === 'tab1' ? 'active' : ''}`}
                onClick={() => openTab('tab1')}
              >
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <img src={internship} className="img-fluid ps-3" alt="Internship" />
                  <h4 className="ms-4 mb-0">INTERNSHIP</h4>
                </div>
              </button>
              <span className="separator text-white mx-3">|</span>
              <button
                className={`tabLinks ${activeTab === 'tab2' ? 'active' : ''}`}
                onClick={() => openTab('tab2')}
              >
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <img src={jop} className="img-fluid" alt="Job" />
                  <h4 className="ms-3 mb-0">Job</h4>
                </div>
              </button>
            </div>

            {/* Form for Internship */}
            {activeTab === 'tab1' && (
              <form onSubmit={handleSubmit}>
                <div id="tab1" className="tabContent p-3 p-md-5">
                  <Row className="mb-3">
                    <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        className="rounded-5 px-3 py-2 shadows"
                        value={name}
                        onChange={handleFieldChange(setName, 'name')}
                      />
                      {errors.name && <span className="error text-danger">{errors.name}</span>}
                    </Col>
                    <Col xs={12} sm={6}>
                      <Form.Control
                        type="text"
                        placeholder="Mobile Number"
                        className="rounded-5 px-3 py-2 shadows"
                        value={phone}
                        onChange={handleFieldChange(setPhone, 'phone')}
                      />
                      {errors.phone && <span className="error text-danger">{errors.phone}</span>}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="rounded-5 px-3 py-2 shadows"
                        value={email}
                        onChange={handleFieldChange(setEmail, 'email')}
                      />
                      {errors.email && <span className="error text-danger">{errors.email}</span>}
                    </Col>
                    <Col xs={12} sm={6}>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        className="rounded-5 px-3 py-2 shadows"
                        value={position}
                        onChange={handleFieldChange(setPosition, 'position')}
                      />
                      {errors.position && <span className="error text-danger">{errors.position}</span>}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        className="rounded-4 px-4 py-3 align-top shadows"
                        value={msg}
                        onChange={handleFieldChange(setMsg, 'msg')}
                        rows={4}
                      />
                      {errors.msg && <span className="error text-danger">{errors.msg}</span>}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <div
                        {...getRootProps()}
                        className={`rounded-4 px-4 py-4 shadows text-center ${isDragActive ? 'bg-light border-primary' : 'bg-white border'
                          }`}
                        style={{ borderStyle: 'dashed', borderWidth: '2px' }}
                      >
                        <input {...getInputProps()} />
                        {file ? (
                          <p>{file.name}</p>
                        ) : (
                          <p className="mb-0 pe-auto" style={{ cursor: "pointer" }}>
                            Drag a file (Allowed File Types: pdf, jpeg, png; Maximum: 25MB)
                          </p>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <ReCAPTCHA
                        sitekey="6LdKjlwqAAAAAMM4PV64krFdtNiannAhVkCmzXbH" 
                        onChange={handleCaptchaChange}
                      />
                      {errors.captcha && <p className='text-danger'>{errors.captcha}</p>}
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="primary"
                      className="mt-4 rounded-pill learn_more btnsubmit py-2 px-4"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {activeTab === 'tab2' && (
              <form onSubmit={handleSubmit1}>
                <div id="tab2" className="tabContent p-3 p-md-5">
                  <Row className="mb-3">
                    <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        className="rounded-5 px-3 py-2 shadows"
                        value={name}
                        onChange={handleFieldChange(setName, 'name')}
                      />
                      {errors.name && <span className="error text-danger">{errors.name}</span>}
                    </Col>
                    <Col xs={12} sm={6}>
                      <Form.Control
                        type="text"
                        placeholder="Mobile Number"
                        className="rounded-5 px-3 py-2 shadows"
                        value={phone}
                        onChange={handleFieldChange(setPhone, 'phone')}
                      />
                      {errors.phone && <span className="error text-danger">{errors.phone}</span>}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="rounded-5 px-3 py-2 shadows"
                        value={email}
                        onChange={handleFieldChange(setEmail, 'email')}
                      />
                      {errors.email && <span className="error text-danger">{errors.email}</span>}
                    </Col>
                    <Col xs={12} sm={6}>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        className="rounded-5 px-3 py-2 shadows"
                        value={position}
                        onChange={handleFieldChange(setPosition, 'position')}
                      />
                      {errors.position && <span className="error text-danger">{errors.position}</span>}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        className="rounded-4 px-4 py-3 align-top shadows"
                        value={msg}
                        onChange={handleFieldChange(setMsg, 'msg')}
                        rows={4}
                      />
                      {errors.msg && <span className="error text-danger">{errors.msg}</span>}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <div
                        {...getRootProps()}
                        className={`rounded-4 px-4 py-4 shadows text-center ${isDragActive ? 'bg-light border-primary' : 'bg-white border'
                          }`}
                        style={{ borderStyle: 'dashed', borderWidth: '2px' }}
                      >
                        <input {...getInputProps()} />
                        {file ? (
                          <p>{file.name}</p>
                        ) : (
                          <p className="mb-0" style={{ cursor: "pointer" }}>
                            Drag a file (Allowed File Types: pdf, jpeg, png; Maximum: 25MB)
                          </p>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <ReCAPTCHA
                        sitekey="6LdKjlwqAAAAAMM4PV64krFdtNiannAhVkCmzXbH" // Replace with your actual site key
                        onChange={handleCaptchaChange}
                      />
                      {errors.captcha && <p className='text-danger'>{errors.captcha}</p>}
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="primary"
                      className="mt-4 rounded-pill learn_more btnsubmit py-2 px-4"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section3;
