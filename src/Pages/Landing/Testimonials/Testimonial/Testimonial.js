import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from "react-bootstrap";
import styles from './Testimonial.module.css';

const userIcon = <FontAwesomeIcon icon={faUser} />;

const Testimonial = (props) => {
    const { name, comment } = props.review;

    return (
        <Card className={`${'mx-3 p-4 border-1 rounded-3'} ${styles.testimonialCard}`}>
            <div className="d-flex align-items-center">
                <div className={`${styles.testimonialTitle}`}>
                    <Card.Title><span className="fw-bold">{userIcon}</span></Card.Title>
                </div>

                <div className="ms-3">
                    <Card.Title><span className="fw-bold">{name}</span></Card.Title>
                </div>
            </div>

            <Card.Body className={`${'p-0'} ${styles.testimonialComment}`}>
                <Card.Text className="my-4">
                    {comment}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Testimonial;