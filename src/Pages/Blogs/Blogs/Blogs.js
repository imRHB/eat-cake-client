import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from "react-bootstrap";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('https://agile-tor-11686.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="my-5">
            {
                loading ? <Container style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner animation="grow" size="sm" variant="secondary" className="mx-1" />
                    <Spinner animation="grow" size="sm" variant="primary" className="mx-1" />
                    <Spinner animation="grow" size="sm" variant="warning" className="mx-1" />
                </Container>
                    :
                    <Container>
                        <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-5">
                            {
                                blogs.map(blog => <Blog
                                    key={blog._id}
                                    blog={blog}
                                ></Blog>)
                            }
                        </Row>
                    </Container>
            }
        </div>
    );
};

export default Blogs;