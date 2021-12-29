import React from 'react';
import { Container } from "react-bootstrap";

const NotFound = () => {
    return (
        <div className="my-5">
            <Container>
                <div className="text-center">
                    <p>Error 404!</p>
                    <p>Page not found</p>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;