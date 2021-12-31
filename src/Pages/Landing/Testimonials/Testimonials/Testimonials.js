import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Testimonials</h2>

                <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-5">
                    {
                        reviews.map(review => <Testimonial
                            key={review._id}
                            review={review}
                        ></Testimonial>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;