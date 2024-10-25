import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import '../../Assets/Styles/ContactUs.css'
import Distributors from '../../Assets/Images/ContactUs/Distributors.png'
import Contact from '../../Assets/Images/ContactUs/Contact.png'
import Feedbackicon from '../../Assets/Images/ContactUs/Feedback icon.png'
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';

const Section1 = () => {

    const [showModal, setShowModal] = useState({
        distributors: false,
        contact: false,
        feedback: false,
    });

    const handleShow = (form) => {
        setShowModal({ ...showModal, [form]: true });
    };

    const handleClose = (form) => {
        setShowModal({ ...showModal, [form]: false });
    };

    // Form States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [msg, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        // Clear the error when the user types valid data
        if (e.target.value.trim()) {
            setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!name.trim()) {
            errors.name = "Name is Required";
            isValid = false;
        }
        if (!phone.trim()) {
            errors.phone = "Mobile No. is Required";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Mobile number must be exactly 10 digits";
            isValid = false;
        }
        if (!email.trim()) {
            errors.email = "Email Id is Required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid Email Id address";
            isValid = false;
        }
        if (!company_name.trim()) {
            errors.company_name = "Company Name is Required";
            isValid = false;
        }
        if (!msg.trim()) {
            errors.msg = "Message is Required";
            isValid = false;
        }
        if (!captchaValue) {
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
                const response = await axios.post("distributer/add", {
                    name,
                    email,
                    phone,
                    company_name,
                    msg,
                });
                if (response.status === 200) {
                    // Reset form fields and state after successful submission
                    setName("");
                    setEmail("");
                    setPhone("");
                    setCompanyName("");
                    setMessage("");
                    setErrors({});
                    setCaptchaValue(null); // Clear captcha value after successful submission
                    alert("Thank you, we will connect with you soon");
                }
            } catch (error) {
                console.error("Error submitting data:", error);
                const newErrors = { ...errors };

                // Check if the error is a validation error for mobile number or email
                if (error.response?.data?.message === "Validation error: Mobile number already exists.") {
                    newErrors.phone = "Phone number already exists.";
                } else if (error.response?.data?.message === "Validation error: Email already exists.") {
                    newErrors.email = "Email already exists.";
                } else {
                    newErrors.general = "Failed to submit data. Please try again later.";
                }

                setErrors(newErrors);
            }
        }
    };

    // contact 
    const validateForm1 = () => {
        let errors = {};
        let isValid = true;

        if (!name.trim()) {
            errors.name = "Name is Required";
            isValid = false;
        }
        if (!phone.trim()) {
            errors.phone = "Mobile No. is Required";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Mobile number must be exactly 10 digits";
            isValid = false;
        }
        if (!email.trim()) {
            errors.email = "Email Id is Required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid Email Id address";
            isValid = false;
        }
        if (!company_name.trim()) {
            errors.company_name = "Company Name is Required";
            isValid = false;
        }
        if (!msg.trim()) {
            errors.msg = "Message is Required";
            isValid = false;
        }
        if (!captchaValue) {
            errors.captcha = 'Please complete the CAPTCHA';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        if (validateForm1()) {
            try {
                const response = await axios.post("contact_form/add", {
                    name,
                    email,
                    phone,
                    company_name,
                    msg,
                });
                if (response.status === 200) {
                    // Reset form fields and state after successful submission
                    setName("");
                    setEmail("");
                    setPhone("");
                    setCompanyName("");
                    setMessage("");
                    setErrors({});
                    setCaptchaValue(null); // Clear captcha value after successful submission
                    alert("Thank you, we will connect with you soon");
                }
            } catch (error) {
                console.error("Error submitting data:", error);
                const newErrors = { ...errors };

                // Check if the error is a validation error for mobile number or email
                if (error.response?.data?.message === "Validation error: Mobile number already exists.") {
                    newErrors.phone = "Phone number already exists.";
                } else if (error.response?.data?.message === "Validation error: Email already exists.") {
                    newErrors.email = "Email already exists.";
                } else {
                    newErrors.general = "Failed to submit data. Please try again later.";
                }

                setErrors(newErrors);
            }
        }
    };

    // feedback 
    const validateForm2 = () => {
        let errors = {};
        let isValid = true;

        if (!name.trim()) {
            errors.name = "Name is Required";
            isValid = false;
        }
        if (!phone.trim()) {
            errors.phone = "Mobile No. is Required";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Mobile number must be exactly 10 digits";
            isValid = false;
        }
        if (!email.trim()) {
            errors.email = "Email Id is Required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid Email Id address";
            isValid = false;
        }
        if (!company_name.trim()) {
            errors.company_name = "Company Name is Required";
            isValid = false;
        }
        if (!msg.trim()) {
            errors.msg = "Message is Required";
            isValid = false;
        }
        if (!captchaValue) {
            errors.captcha = 'Please complete the CAPTCHA';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        if (validateForm2()) {
            try {
                const response = await axios.post("feedback/add", {
                    name,
                    email,
                    phone,
                    company_name,
                    msg,
                });
                if (response.status === 200) {
                    // Reset form fields and state after successful submission
                    setName("");
                    setEmail("");
                    setPhone("");
                    setCompanyName("");
                    setMessage("");
                    setErrors({});
                    setCaptchaValue(null); // Clear captcha value after successful submission
                    alert("Thank you, we will connect with you soon");
                }
            } catch (error) {
                console.error("Error submitting data:", error);
                const newErrors = { ...errors };

                // Check if the error is a validation error for mobile number or email
                if (error.response?.data?.message === "Validation error: Mobile number already exists.") {
                    newErrors.phone = "Phone number already exists.";
                } else if (error.response?.data?.message === "Validation error: Email already exists.") {
                    newErrors.email = "Email already exists.";
                } else {
                    newErrors.general = "Failed to submit data. Please try again later.";
                }

                setErrors(newErrors);
            }
        }
    };
    const [selectedState, setSelectedState] = useState('');
    const [statesdata, setStatesData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const states = [
        'Gujarat', 'Delhi NCR', 'Rest of India',
        // Add more states as needed
    ];

    const fetchAllStates = async () => {
        try {
            const response = await axios.get('/stateinfo/get');
            setStatesData(response.data.responseData);
        } catch (error) {
            console.error('Error fetching all states:', error);
        }
    };

    useEffect(() => {
        fetchAllStates();
    }, []);

    const handleStateChange = (e) => {
        const selected = e.target.value;
        setSelectedState(selected);

        // Filter statesdata based on selected state
        const filtered = statesdata.filter((item) => item.statename === selected);
        setFilteredData(filtered);
    };
    return (
        <>
            <Container fluid className='Section1BackgroundImg'>
                <Row className='mx-lg-2 py-5'>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} className='py-4'>
                        <Card className='rounded-5 px-5 distributorcard cardshadow'>
                            <Card.Body className='py-5'>
                                <h1 className='fw-bolder'>Find Your <span className='highlight'>Distributor</span></h1>
                                <p className='fw-bolder px-3'>Distributor India</p>
                                <Row>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div>
                                            <h2>Select your state</h2>
                                            <select value={selectedState} onChange={handleStateChange}>
                                                <option value="">Select a state</option>
                                                {states.map((state, index) => (
                                                    <option key={index} value={state}>
                                                        {state}
                                                    </option>
                                                ))}
                                            </select>


                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div>
                                            {filteredData.map((record) => (
                                                <div key={record.id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd" }}>
                                                    <h3>{record.company_name}</h3>
                                                    <p><strong>Phone:</strong> {record.phone}</p>
                                                    <p><strong>Location:</strong> {record.location}</p>
                                                    <p><strong>Address:</strong> {record.address}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} className='d-flex justify-content-center my-5'>
                        <Card className='distributorcard1'>
                            <ul className='my-4 pe-4 pt-4'>
                                <li className='list-group-item border-0 fw-bolder' style={{ cursor: 'pointer' }} onClick={() => handleShow('distributors')}>
                                    <img
                                        src={Distributors}
                                        className='img-fluid'
                                        alt='Distributors'
                                        // onClick={() => handleShow('distributors')}
                                        style={{ cursor: 'pointer' }}
                                    /> Distributors Form
                                </li>
                                <li className='list-group-item border-0 fw-bolder' style={{ cursor: 'pointer' }} onClick={() => handleShow('contact')}>
                                    <img
                                        src={Contact}
                                        className='img-fluid'
                                        alt='Contact'
                                        // onClick={() => handleShow('contact')}
                                        style={{ cursor: 'pointer' }}
                                    /> Contact Form
                                </li>
                                <li className='list-group-item border-0 fw-bolder' style={{ cursor: 'pointer' }} onClick={() => handleShow('feedback')}>
                                    <img
                                        src={Feedbackicon}
                                        className='img-fluid'
                                        alt='Feedback'
                                        // onClick={() => handleShow('feedback')}
                                        style={{ cursor: 'pointer' }}
                                    /> Feedback Form
                                </li>
                            </ul>
                        </Card>

                        {/* Distributors Modal */}
                        <Modal show={showModal.distributors} onHide={() => handleClose('distributors')}>
                            <Modal.Header closeButton className='bg-info modalform'>
                                <Modal.Title className='text-white'>Distributors Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name : </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name" // Add name attribute
                                            className='rounded-4'
                                            value={name}
                                            onChange={handleInputChange(setName)} // Use the new input change handler
                                        />
                                        {errors.name && <span className="error ms-2 fw-light text-danger">{errors.name}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email Id : </Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email" // Add name attribute
                                            className='rounded-4'
                                            value={email}
                                            onChange={handleInputChange(setEmail)} // Use the new input change handler
                                        />
                                        {errors.email && <span className="error ms-2 fw-light text-danger">{errors.email}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label>Mobile No. : </Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone" // Add name attribute
                                            className='rounded-4'
                                            value={phone}
                                            onChange={handleInputChange(setPhone)} // Use the new input change handler
                                        />
                                        {errors.phone && <span className="error ms-2 fw-light text-danger">{errors.phone}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="company_name">
                                        <Form.Label>Company Name : </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="company_name" // Add name attribute
                                            className='rounded-4'
                                            value={company_name}
                                            onChange={handleInputChange(setCompanyName)} // Use the new input change handler
                                        />
                                        {errors.company_name && <span className="error ms-2 fw-light text-danger">{errors.company_name}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="msg">
                                        <Form.Label>Message : </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="msg" // Add name attribute
                                            className='rounded-4'
                                            value={msg}
                                            onChange={handleInputChange(setMessage)} // Use the new input change handler
                                        />
                                        {errors.msg && <span className="error ms-2 fw-light text-danger">{errors.msg}</span>}
                                    </Form.Group>
                                    <ReCAPTCHA
                                        sitekey="6LfErR4qAAAAAHxLnCKiJKYs4SkRIy-lfQ1s2taB" // Replace with your ReCAPTCHA site key
                                        onChange={handleCaptchaChange}
                                    />
                                    {errors.captcha && <span className="error ms-2 fw-light text-danger">{errors.captcha}</span>}
                                    <div className="text-center">
                                        <Button variant="success" type="submit" style={{ background: '#82B547', border: 'none' }} className='my-4'>
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Modal.Body>
                        </Modal>


                        {/* Contact Modal */}
                        <Modal show={showModal.contact} onHide={() => handleClose('contact')}>
                            <Modal.Header closeButton className='bg-info modalform'>
                                <Modal.Title className='text-white'>Contact Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit1}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name : </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name" // Add name attribute
                                            className='rounded-4'
                                            value={name}
                                            onChange={handleInputChange(setName)} // Use the new input change handler
                                        />
                                        {errors.name && <span className="error ms-2 fw-light text-danger">{errors.name}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email Id : </Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email" // Add name attribute
                                            className='rounded-4'
                                            value={email}
                                            onChange={handleInputChange(setEmail)} // Use the new input change handler
                                        />
                                        {errors.email && <span className="error ms-2 fw-light text-danger">{errors.email}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label>Mobile No. : </Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone" // Add name attribute
                                            className='rounded-4'
                                            value={phone}
                                            maxLength={10}
                                            minLength={10}
                                            onChange={handleInputChange(setPhone)} // Use the new input change handler
                                        />
                                        {errors.phone && <span className="error ms-2 fw-light text-danger">{errors.phone}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="company_name">
                                        <Form.Label>Company Name : </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="company_name" // Add name attribute
                                            className='rounded-4'
                                            value={company_name}
                                            onChange={handleInputChange(setCompanyName)} // Use the new input change handler
                                        />
                                        {errors.company_name && <span className="error ms-2 fw-light text-danger">{errors.company_name}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="msg">
                                        <Form.Label>Message : </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="msg" // Add name attribute
                                            className='rounded-4'
                                            value={msg}
                                            onChange={handleInputChange(setMessage)} // Use the new input change handler
                                        />
                                        {errors.msg && <span className="error ms-2 fw-light text-danger">{errors.msg}</span>}
                                    </Form.Group>
                                    <ReCAPTCHA
                                        sitekey="6LfErR4qAAAAAHxLnCKiJKYs4SkRIy-lfQ1s2taB" // Replace with your ReCAPTCHA site key
                                        onChange={handleCaptchaChange}
                                    />
                                    {errors.captcha && <span className="error ms-2 fw-light text-danger">{errors.captcha}</span>}
                                    <div className="text-center">
                                        <Button variant="success" type="submit" style={{ background: '#82B547', border: 'none' }} className='my-4'>
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Modal.Body>
                        </Modal>


                        {/* Feedback Modal */}
                        <Modal show={showModal.feedback} onHide={() => handleClose('feedback')}>
                            <Modal.Header closeButton className='bg-info modalform'>
                                <Modal.Title className='text-white'>Feedback Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit2}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name : </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name" // Add name attribute
                                            className='rounded-4'
                                            value={name}
                                            onChange={handleInputChange(setName)} // Use the new input change handler
                                        />
                                        {errors.name && <span className="error ms-2 fw-light text-danger">{errors.name}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email Id : </Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email" // Add name attribute
                                            className='rounded-4'
                                            value={email}
                                            onChange={handleInputChange(setEmail)} // Use the new input change handler
                                        />
                                        {errors.email && <span className="error ms-2 fw-light text-danger">{errors.email}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label>Mobile No. : </Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone" // Add name attribute
                                            className='rounded-4'
                                            value={phone}
                                            maxLength={10}
                                            minLength={10}
                                            onChange={handleInputChange(setPhone)} // Use the new input change handler
                                        />
                                        {errors.phone && <span className="error ms-2 fw-light text-danger">{errors.phone}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="company_name">
                                        <Form.Label>Company Name : </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="company_name" // Add name attribute
                                            className='rounded-4'
                                            value={company_name}
                                            onChange={handleInputChange(setCompanyName)} // Use the new input change handler
                                        />
                                        {errors.company_name && <span className="error ms-2 fw-light text-danger">{errors.company_name}</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="msg">
                                        <Form.Label>Message : </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="msg" // Add name attribute
                                            className='rounded-4'
                                            value={msg}
                                            onChange={handleInputChange(setMessage)} // Use the new input change handler
                                        />
                                        {errors.msg && <span className="error ms-2 fw-light text-danger">{errors.msg}</span>}
                                    </Form.Group>
                                    <ReCAPTCHA
                                        sitekey="6LfErR4qAAAAAHxLnCKiJKYs4SkRIy-lfQ1s2taB" // Replace with your ReCAPTCHA site key
                                        onChange={handleCaptchaChange}
                                    />
                                    {errors.captcha && <span className="error ms-2 fw-light text-danger">{errors.captcha}</span>}
                                    <div className="text-center">
                                        <Button variant="success" type="submit" style={{ background: '#82B547', border: 'none' }} className='my-4'>
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Modal.Body>
                        </Modal>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section1
