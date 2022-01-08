import React from 'react';
import { Carousel } from "react-bootstrap";

import slide1 from '../../../images/banner/slide-1.jpg';
import slide2 from '../../../images/banner/slide-2.jpg';
import slide3 from '../../../images/banner/slide-3.jpg';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text-dark fw-bold">Chocolate Cream Cake</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="text-dark fw-bold">Cookie Cake</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="text-dark fw-bold">Strawberry Cup Cake</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;