import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from "react-rating";
import { Card } from "react-bootstrap";
import styles from './Testimonial.module.css';

const userIcon = <FontAwesomeIcon icon={faUser} />;

const Testimonial = (props) => {
    const { name, img, comment, rating } = props.review;

    return (
        <Card className={`${'mx-3 my-4 p-4 border-1 rounded-3'} ${styles.testimonialCard}`}>
            <div className="d-flex align-items-center">
                <div className={`${styles.testimonialTitle}`}>
                    {
                        img ? <img src={img} alt="" style={{ width: '26px', borderRadius: '50%' }} />
                            :
                            <Card.Title><span className="fw-bold">{userIcon}</span></Card.Title>
                    }
                </div>

                <div className="ms-3">
                    <Card.Title><span className="fw-bold">{name}</span></Card.Title>
                </div>
            </div>

            <Card.Body className="px-0">
                <Card.Text className={`${'m-0'} ${styles.testimonialComment}`}>
                    {comment}
                </Card.Text>

                <Card.Text className={`${styles.testimonialRating}`}>
                    <Rating
                        readonly
                        initialRating={rating}
                        emptySymbol="far fa-star text-warning ms-1 p-0"
                        fullSymbol="fas fa-star text-warning ms-1 p-0"
                    ></Rating>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Testimonial;