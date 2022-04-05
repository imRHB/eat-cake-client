import React from 'react';
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const MakeAdmin = () => {
    const [email, setEmail] = useState({});

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };

    const handleMakeAdmin = e => {
        e.preventDefault();

        const user = { email };

        fetch('https://eat-cake-server.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    toast.success(`Admin added successfully`, {
                        position: 'bottom-left',
                        autoClose: 2000
                    })
                }
                else if (result.matchedCount) {
                    toast.warning(`User already has admin access`, {
                        position: 'bottom-left',
                        autoClose: 2000
                    })
                }
                else {
                    toast.error(`No user exists in database`, {
                        position: 'bottom-left',
                        autoClose: 2000
                    })
                }
            });

        e.target.reset();
    };

    return (
        <div>
            <ToastContainer />

            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Add New Admin</h3>
                </div>

                <Form onSubmit={handleMakeAdmin}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            onBlur={handleOnBlur}
                            style={{ maxWidth: '480px', margin: 'auto 0' }}
                            type="email"
                            placeholder="Enter Email" />
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="dark"
                    >
                        Add Admin
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default MakeAdmin;