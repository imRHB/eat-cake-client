import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from "react-bootstrap";

const Blog = ({ blog }) => {
    const { _id, title, img, description } = blog;
    const words = description.split(' ').length;
    const timeToRead = Math.ceil(words / 250);

    return (
        <Col>
            <Card>
                <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-0">
                    <Col>
                        <Card.Img variant="top" src={img} />
                    </Col>

                    <Col>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description.slice(0, 250)} ...
                                <Link to={`/blogs/${_id}`}>
                                    <span className="mx-2">Read more</span>
                                </Link>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>

                <Card.Footer>
                    {timeToRead} minute/s to read
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Blog;