import React, { useEffect, useState } from 'react';
import { Container, Spinner } from "react-bootstrap";
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

const BlackForestFlavor = () => {
    const [bfCakes, setBfCakes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(`https://agile-tor-11686.herokuapp.com/flavor/Black-Forest`)
            .then(res => res.json())
            .then(data => {
                setBfCakes(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {
                loading ? <Container style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner animation="grow" variant="secondary" size="sm" className="mx-1" />
                    <Spinner animation="grow" variant="primary" size="sm" className="mx-1" />
                    <Spinner animation="grow" variant="warning" size="sm" className="mx-1" />
                </Container>
                    :
                    <Container>
                        <Slider {...settings}>
                            {
                                bfCakes.map(cake => <FlavorCakeCard
                                    key={cake._id}
                                    cake={cake}
                                ></FlavorCakeCard>)
                            }
                        </Slider>
                    </Container>
            }
        </div>
    );
};

export default BlackForestFlavor;