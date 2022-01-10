import React from 'react';
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../../../images/details/choco-cherry.jpg';
import img2 from '../../../images/details/rainbow-sherbet.jpg';
import img3 from '../../../images/details/raspberry-sorbet.jpg';

const settings = {
    customPaging: function (i) {
        return (
            <div>
                <a href="">
                    <img src={img1} alt="" style={{ width: '100px' }} />
                </a>
            </div>
        );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Test = () => {
    return (
        <div>
            <h2>Custom Paging</h2>
            <div style={{ width: '600px' }} className="bg-light my-5">
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt="" style={{ width: '100px' }} />
                    </div>
                    <div>
                        <img src={img2} alt="" style={{ width: '100px' }} />
                    </div>
                    <div>
                        <img src={img3} alt="" style={{ width: '100px' }} />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Test;