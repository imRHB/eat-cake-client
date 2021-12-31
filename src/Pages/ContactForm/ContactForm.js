import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <div className="py-5 form-area">
            <Container className="py-5">
                <h2 className="fw-bold text-center">Let Us Handle Your Program</h2>

                <Form className={`${'mx-auto my-5 text-center'} ${styles.contactForm}`}>
                    <Row className="mb-0">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-0">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label></Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-0">
                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                        </Form.Group>
                    </Row>

                    <Button variant="success" className="mt-3">
                        Send Message
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default ContactForm;