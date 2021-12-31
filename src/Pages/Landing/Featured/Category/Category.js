import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
// import styles from './Category.module.css';

import slide1 from '../../../../images/banner/slide-1.jpg';
import slide2 from '../../../../images/banner/slide-2.jpg';
import slide3 from '../../../../images/banner/slide-3.jpg';
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center fw-bold text-uppercase my-5">Choose from Category</h2>
                <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-4">
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Link to="/cake">
                            <img className={`${'w-100 rounded-3'}`} src={slide1} alt="" />
                        </Link>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Row className="g-3">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Link to="/cake">
                                    <img className={`${'w-100 rounded-3'}`} src={slide2} alt="" />
                                </Link>
                            </Col>

                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Link to="/cake">
                                    <img className={`${'w-100 rounded-3'}`} src={slide3} alt="" />
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Category;