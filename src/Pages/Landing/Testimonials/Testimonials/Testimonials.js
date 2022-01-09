import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../Testimonial/Testimonial";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="my-5 py-5 bg-light">
            <Container className="pt-5">
                <h2 className="text-center fs-1 fw-bold text-secondary mb-5">Testimonials</h2>

                {/* <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-5">
                    {
                        reviews.map(review => <Testimonial
                            key={review._id}
                            review={review}
                        ></Testimonial>)
                    }
                </Row> */}
            </Container>

            <Container className="mb-5 pb-5">
                <Slider {...settings}>
                    {
                        reviews.map(review => <Testimonial
                            key={review._id}
                            review={review}
                        ></Testimonial>)
                    }
                </Slider>
            </Container>
        </div>
    );
};

export default Testimonials;