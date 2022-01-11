import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import styles from './Register.module.css';

const Register = () => {
    const [userData, setUserData] = useState({});

    // const location = useLocation();
    const navigate = useNavigate();

    const { user, registerWithEmailAndPassword, logout } = useAuth();

    const handleOnBlur = e => {
        e.preventDefault();

        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData);
        console.log(field, value);
    };

    const handleRegister = e => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            alert('Passwords are not matched');
            return;
        }
        registerWithEmailAndPassword(userData.email, userData.password, userData.name, navigate);
    };

    /* const handleGoogleSignIn = () => {
        loginWithGoogle(location, navigate);
    }; */

    return (
        <div className="my-5">
            <div className={`${'p-5 shadow-lg rounded-3 mx-auto'} ${styles.customWidth}`}>
                {
                    !user?.email && <Form onSubmit={handleRegister}>
                        <h3 className="text-primary mb-5">Register as a new user</h3>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                onBlur={handleOnBlur}
                                type="text"
                                name="name"
                                placeholder="Enter full name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onBlur={handleOnBlur}
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onBlur={handleOnBlur}
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onBlur={handleOnBlur}
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                }

                {
                    !user?.email && <div className="fs-6 mt-3">
                        <p className="">Already have an account? <Link className={`${styles.defLink}`} to="/login">Login</Link> is very simple.</p>
                    </div>
                }

                {
                    user?.email && user?.email && <div className="text-center fs-3 my-5">
                        <img src={user.photoURL} style={{ width: '64px' }} alt="" />
                        <p className="fs-3 my-4 fw-bold text-success">{user.displayName} <span className="fs-5 fw-light text-dark"><small>(curresnt user)</small></span></p>
                        <button onClick={logout} className="btn btn-outline-success">Logout</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Register;