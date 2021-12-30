import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col } from "react-bootstrap";
import styles from './Testimonial.module.css';

const userIcon = <FontAwesomeIcon icon={faUser} />;

const Testimonial = (props) => {
    const { name, comment } = props.testimonial;

    return (
        <Col>
            <Card className={`${'h-100 p-4 border-0 rounded-3 testimonial-card shadow-sm'} ${styles.testimonialCard}`}>
                <div className="d-flex align-items-center">
                    <div>
                        <Card.Title><span className="fw-bold">{userIcon}</span></Card.Title>
                    </div>

                    <div className="ms-3">
                        <Card.Title><span className="fw-bold">{name}</span></Card.Title>
                    </div>
                </div>

                <Card.Body className="p-0">
                    <Card.Text className="my-4">
                        {comment}
                    </Card.Text>

                    {/* <Card.Text className="my-4">
                        {rating} <span><small>{ratingIcon}</small></span>
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Testimonial;