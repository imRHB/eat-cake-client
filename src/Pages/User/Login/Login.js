import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import styles from './Login.module.css';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

const Login = () => {
    const [userData, setUserData] = useState({});

    const { user, loginWithWmailAndPassword, loginWithGoogle, logout, loading } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        e.preventDefault();

        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData);
    };

    const handleLogin = e => {
        e.preventDefault();

        loginWithWmailAndPassword(userData.email, userData.password, location, navigate)
    };

    const handleGoogleSignIn = () => {
        loginWithGoogle(location, navigate);
    };

    return (
        <div className="my-5">
            {
                loading ? <Container style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner animation="border" variant="primary" />
                </Container>
                    :
                    <Container>
                        <div className="my-5">
                            <div className={`${'p-5 shadow-lg rounded-3 mx-auto'} ${styles.customWidth}`}>
                                {
                                    !user?.email && <Form onSubmit={handleLogin}>
                                        <h3 className="text-primary mb-5">Login as an existing user</h3>

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

                                        <Button
                                            variant="primary"
                                            type="submit"
                                        >
                                            Login
                                        </Button>
                                    </Form>
                                }

                                {
                                    !user?.email && <div>
                                        <div>
                                            <p className="text-center mt-5">or</p>
                                        </div>

                                        <div className="text-center fs-3 mb-4">
                                            <Button
                                                variant="secondary"
                                                onClick={handleGoogleSignIn}
                                                className="my-3"
                                            ><span
                                                className="me-4"
                                            >{googleIcon}</span>
                                                Sign In with Google
                                            </Button>
                                        </div>
                                    </div>
                                }

                                {
                                    user?.email && <div className="text-center fs-3 my-5">
                                        <img src={user.photoURL} style={{ width: '64px', borderRadius: '4px' }} alt="" />
                                        <p className="fs-3 my-4 fw-bold text-success">{user.displayName} <span className="fs-5 fw-light text-dark"><small>(curresnt user)</small></span></p>

                                        <Button
                                            onClick={logout}
                                            variant="dark"
                                        >
                                            Logout
                                        </Button>
                                    </div>
                                }

                                {
                                    !user?.email && <div className="fs-6">
                                        <p className="">New user? <Link className={`${styles.defLink}`} to="/register">Registration</Link> is free and easy.</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </Container>
            }

            <ToastContainer />
        </div>
    );
};

export default Login;