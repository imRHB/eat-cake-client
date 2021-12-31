import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cake from "../../../Cakes/Cake/Cake";

const angleDblRight = <FontAwesomeIcon icon={faAngleDoubleRight} />;

const FeaturedCakes = () => {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cake')
            .then(res => res.json())
            .then(data => setCakes(data.slice(0, 6)));
    }, []);

    return (
        <div>
            <Container>
                <h2 className="text-center my-5 fw-bold">Top Selling</h2>

                <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-5">
                    {
                        cakes.map(cake => <Cake
                            key={cake._id}
                            cake={cake}
                        ></Cake>)
                    }
                </Row>

                <Container className="my-5 text-center">
                    <Link to="/cake">
                        <Button variant="primary">
                            Explore More <span className="ms-2">{angleDblRight}</span>
                        </Button>
                    </Link>
                </Container>
            </Container>
        </div>
    );
};

export default FeaturedCakes;