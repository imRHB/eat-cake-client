import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CakeDetails = () => {
    const { id } = useParams();

    const [cake, setCake] = useState({});
    const [ingredients, SetIngredients] = useState([]);
    const [loading, setLoading] = useState(false);

    const { _id, title, img, price, flavor, description } = cake;

    useEffect(() => {
        setLoading(true);

        fetch(`https://agile-tor-11686.herokuapp.com/cake/${id}`)
            .then(res => res.json())
            .then(result => {
                setCake(result);
                SetIngredients(result.ingredients.split(', '));
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="my-5">
            {
                loading ? <Container style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner animation="border" variant="info" />
                </Container>
                    :
                    <Container>
                        <Row xs={1} md={1} xl={2} className="g-5">
                            <Col className="col-md-12 col-lg-4 col-xl-4">
                                <div className="rounded-3" style={{ position: 'sticky', top: '100px' }}>
                                    <img className="img-fluid rounded-3" src={img} alt="" />
                                </div>
                            </Col>

                            <Col className="col-md-12 col-lg-8 col-xl-8">
                                <h1 className="fs-2 fw-bold text-info text-uppercase">{title}</h1>
                                <p className="fw-bold">Flavor: {flavor}</p>

                                <div className="bg-light rounded-3 p-4 my-4">
                                    <h4>Ingredients</h4>
                                    <ul>
                                        {
                                            ingredients.map(ingredient => <li
                                                key={ingredient}
                                            >{ingredient}</li>)
                                        }
                                    </ul>
                                </div>

                                <div className="bg-light rounded-3 p-4 my-4">
                                    <h4>Description</h4>
                                    <p>{description}</p>
                                </div>

                                <div className="d-flex align-center justify-content-between">
                                    <h3 className="fw-bold">${price}</h3>
                                    <Link to={`/place-order/${_id}`}>
                                        <Button
                                            variant="secondary"
                                        >
                                            Order Now
                                        </Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            }
        </div>
    );
};

export default CakeDetails;