import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cake = (props) => {
    const { _id, name, img, price } = props.cake;
    return (
        <Col>
            <Card className="text-center border-0 bg-light">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>

                    <Card.Text>
                        <Link to={`/cake/${_id}`}>
                            <Button variant="secondary">Details</Button>
                        </Link>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col >
    );
};

export default Cake;