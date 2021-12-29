import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cake = (props) => {
    const { _id, name, img, price } = props.cake;
    return (
        <Col>
            <Card className="text-center">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                </Card.Body>
                <Link to={`/cake/${_id}`}>
                    <Button>Details</Button>
                </Link>
            </Card>
        </Col >
    );
};

export default Cake;