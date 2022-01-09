import React, { useEffect, useState } from 'react';
import { Container, Row } from "react-bootstrap";
import Cake from "../../../../Cakes/Cake/Cake";

const BlackForestFlavor = () => {
    const [bfCakes, setBfCakes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/flavor/Black-Forest`)
            .then(res => res.json())
            .then(data => setBfCakes(data));
    }, []);

    return (
        <div>
            <Container>
                {/* <h2 className="text-center my-5 fw-bold">Available Cake</h2> */}
                <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
                    {
                        bfCakes.map(cake => <Cake
                            key={cake._id}
                            cake={cake}
                        ></Cake>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default BlackForestFlavor;