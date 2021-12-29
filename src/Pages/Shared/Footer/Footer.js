import React from 'react';
import { Link } from "react-router-dom";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { faFacebookSquare, faInstagram, faLinkedin, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';

const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

const Footer = () => {

    return (
        <div className={`${'py-5'} ${styles.footerArea}`}>
            <Container>
                <Row xs={1} sm={1} md={2} lg={2} xl={4} className="g-4">
                    <Col>
                        <h3 className="d-flex align-items-center fw-bold text-secondary">
                            EAT CAKE
                        </h3>

                        <div className="d-flex align-items-center">
                            <div>
                                <p className="fs-4">{map}</p>
                            </div>

                            <div className="ms-3">
                                <p>H#00 (o<sup>th</sup> Floor), Road #00.
                                    <br />
                                    New DOHS, Dhanmondi,
                                    Dhaka, Bangaldesh
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <h4 className="fw-bold">Explore</h4>
                            <Nav className={`${'flex-column'} ${styles.nav}`}>
                                <Link to="/home">Home</Link>
                                <Link to="/cake">Cake</Link>
                            </Nav>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <h4 className="fw-bold">Quick Links</h4>
                            <Nav className={`${'flex-column'} ${styles.nav}`}>
                                <Link to="#">Quick Links</Link>
                                <Link to="#">Corporate Sales</Link>
                                <Link to="#">Contact</Link>
                                <Link to="#">Our Blog</Link>
                            </Nav>

                            <Nav className="my-3">
                                <Nav.Item>
                                    <Nav.Link href="https://www.facebook.com/" target="_blank">{facebook}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="https://www.instagram.com/" target="_blank">{instagram}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="https://twitter.com/" target="_blank">{twitter}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="https://www.youtube.com/" target="_blank">{youtube}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="https://www.linkedin.com/" target="_blank">{linkedin}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>

                    <Col>
                        <h4 className="fw-bold">About Us</h4>
                        <p>Eat Cake understand that the small things in life make the biggest impact. That is why we believe that every important occasion, event and moment should be marked by the delicious cake.</p>
                    </Col>
                </Row>

                <div className="my-4 text-center">
                    <p className="text-mute"><small>Copyright 2021, Eat Cake</small></p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;