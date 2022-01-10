import React, { useEffect, useState } from 'react';
import { Container, Row } from "react-bootstrap";
import Cake from "../Cake/Cake";

const Cakes = () => {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cake')
            .then(res => res.json())
            .then(result => setCakes(result));
    }, [])

    return (
        <div className="my-5 pb-5">
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
        </div>
    );
};

export default Cakes;