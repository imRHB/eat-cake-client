import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(false);
    const { title, img, description } = blog;

    useEffect(() => {
        setLoading(true);

        fetch(`https://eat-cake-server.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
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
                                <h1 className="bg-light fs-3 my-3 p-2 rounded-3 fw-bold text-dark">{title}</h1>
                                <div className="rounded-3" style={{ position: 'sticky', top: '100px' }}>
                                    <img className="img-fluid rounded-3" src={img} alt="" />
                                </div>
                            </Col>

                            <Col className="col-md-12 col-lg-8 col-xl-8">
                                <div className="bg-light rounded-3 p-4 my-3">
                                    <p>{description}</p>
                                    <p>{description}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            }
        </div>
    );
};

export default BlogDetails;