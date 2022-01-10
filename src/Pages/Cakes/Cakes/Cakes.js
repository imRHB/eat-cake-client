import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from "react-bootstrap";
import Cake from "../Cake/Cake";

const Cakes = () => {
    const [cakes, setCakes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('http://localhost:5000/cake')
            .then(res => res.json())
            .then(result => {
                setCakes(result);
                setLoading(false);
            });
    }, [])

    return (
        <div className="my-5 pb-5">
            {
                loading ? <Container style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner animation="grow" variant="secondary" className="mx-1" />
                    <Spinner animation="grow" variant="primary" className="mx-1" />
                    <Spinner animation="grow" variant="warning" className="mx-1" />
                </Container>
                    :
                    <Container>
                        <h2 className="text-center fw-bold text-uppercase my-5">Available Cake</h2>
                        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
                            {
                                cakes.map(cake => <Cake
                                    key={cake._id}
                                    cake={cake}
                                ></Cake>)
                            }
                        </Row>
                    </Container>
            }
        </div>
    );
};

export default Cakes;