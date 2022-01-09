import React, { useEffect } from 'react';
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Cake from "../../../../Cakes/Cake/Cake";

const StrawberryFlavor = () => {
    const [strawCakes, setStrawCakes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/flavor/Strawberry`)
            .then(res => res.json())
            .then(data => setStrawCakes(data));
    }, []);

    return (
        <div>
            <Container>
                {/* <h2 className="text-center my-5 fw-bold">Available Cake</h2> */}
                <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
                    {
                        strawCakes.map(cake => <Cake
                            key={cake._id}
                            cake={cake}
                        ></Cake>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default StrawberryFlavor;