import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CakeDetails = () => {
    const { id } = useParams();

    const [cake, setCake] = useState({});

    const { name, img, price, flavor, description, ingredients } = cake;

    useEffect(() => {
        fetch(`http://localhost:5000/cake/${id}`)
            .then(res => res.json())
            .then(result => setCake(result));
    }, [id]);

    return (
        <div>
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Cake Details</h2>

                <Row xs={1} md={1} xl={2} className="g-5">
                    <Col className="col-md-12 col-lg-6 col-xl-6">
                        <div className="rounded-3">
                            <img className="img-fluid rounded-3" src={img} alt="" />
                        </div>
                    </Col>

                    <Col className="col-md-12 col-lg-6 col-xl-6">
                        <h1 className="fs-2 fw-bold text-info text-uppercase">{name}</h1>

                        <h3 className="fs-2 fw-bold text-info text-uppercase">${price}</h3>

                        <div className="bg-light rounded-3 p-4 my-4">
                            <p>{flavor}</p>
                            <p>{description}</p>
                        </div>

                        <div className="bg-light rounded-3 p-4 my-4">
                            <p>{ingredients}</p>
                            {/* <ul>
                                {
                                    ingredients.split(', ').map(igrd => <li>{igrd}</li>)
                                }
                            </ul> */}
                        </div>

                        {/* <div className="bg-light p-4 rounded-3">
                            <h2>${price}</h2>
                            <Link to={`/place-order/${_id}`}>
                                <Button
                                    variant="success"
                                >
                                    Order Now
                                </Button>
                            </Link>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CakeDetails;