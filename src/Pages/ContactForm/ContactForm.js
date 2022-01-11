import React from 'react';
import { Button, Container, Form } from "react-bootstrap";
import styles from './ContactForm.module.css';

const ContactForm = () => {

    return (
        <div className="py-5 form-area">
            <Container>
                <h2 className="fw-bold text-center">Let Us Handle Your Program</h2>

                <Form className={`${'mx-auto my-5 text-center'} ${styles.contactForm}`}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Control type="text" placeholder="Subject" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" className="m-0" rows={5} placeholder="Your Message" required />
                    </Form.Group>

                    <Button variant="success" className="mt-3" type="submit" >
                        Send Message
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default ContactForm;