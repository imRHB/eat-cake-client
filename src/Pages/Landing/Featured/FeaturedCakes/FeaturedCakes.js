import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cake from "../../../Cakes/Cake/Cake";

const angleDblRight = <FontAwesomeIcon icon={faAngleDoubleRight} />;

const FeaturedCakes = () => {
    const [cakes, setCakes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('https://eat-cake-server.herokuapp.com/cake')
            .then(res => res.json())
            .then(data => {
                setCakes(data.slice(0, 6));
                setLoading(false);
            });
    }, []);

    return (
        <div className="py-5">
            <Container>
                <h2 className="text-center my-5 fw-bold">Top Selling</h2>

                {
                    loading ? <Container style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Spinner animation="grow" variant="secondary" size="sm" className="mx-1" />
                        <Spinner animation="grow" variant="primary" size="sm" className="mx-1" />
                        <Spinner animation="grow" variant="warning" size="sm" className="mx-1" />
                    </Container>
                        :
                        <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-5">
                            {
                                cakes.map(cake => <Cake
                                    key={cake._id}
                                    cake={cake}
                                ></Cake>)
                            }
                        </Row>
                }

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