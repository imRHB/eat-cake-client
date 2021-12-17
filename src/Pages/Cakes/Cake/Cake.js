import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cake = (props) => {
    const { _id, name, price } = props.cake;
    return (
        <Col>
            <Card className="text-center">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                </Card.Body>
                <Link to={`/cakes/${_id}`}>
                    <Button>Details</Button>
                </Link>
            </Card>
        </Col >
    );
};

export default Cake;