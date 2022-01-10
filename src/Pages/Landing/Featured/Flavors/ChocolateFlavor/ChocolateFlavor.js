import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FlavorCakeCard from "../FlavorCakeCard/FlavorCakeCard";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const ChocolateFlavor = () => {
    const [chocoCakes, setChocoCakes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/flavor/Chocolate`)
            .then(res => res.json())
            .then(data => setChocoCakes(data));
    }, []);

    return (
        <div>
            <Container>
                <Slider {...settings}>
                    {
                        chocoCakes.map(cake => <FlavorCakeCard
                            key={cake._id}
                            cake={cake}
                        ></FlavorCakeCard>)
                    }
                </Slider>
            </Container>
        </div>
    );
};

export default ChocolateFlavor;