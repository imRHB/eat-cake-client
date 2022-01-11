import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import styles from './Login.module.css';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

const Login = () => {
    const [userData, setUserData] = useState({});

    const { user, loginWithWmailAndPassword, loginWithGoogle, logout } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        e.preventDefault();

        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData);
        console.log(field, value);
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
                                    <p className="text-center my-3">or</p>
                                </div>

                                <div className="text-center fs-3 my-4">
                                    <p onClick={handleGoogleSignIn} className="bg-light rounded-3 fa-icon">{googleIcon}</p>
                                    {/* <p onClick={signInUsingGithub} className="bg-light rounded-3 fa-icon">{githubIcon}</p> */}
                                </div>
                            </div>
                        }

                        {
                            user?.email && <div className="text-center fs-3 my-5">
                                <img src={user.photoURL} style={{ width: '64px' }} alt="" />
                                <p className="fs-3 my-4 fw-bold text-success">{user.displayName} <span className="fs-5 fw-light text-dark"><small>(curresnt user)</small></span></p>
                                <button onClick={logout} className="btn btn-outline-success">Logout</button>
                            </div>
                        }

                        {
                            !user?.email && <div className="fs-6">
                                {/* <p className="">Forget password? <Link className={`{${styles.defLink}}`} to="/reset-password">Reset password</Link>.</p> */}
                                <p className="">New user? <Link className={`${styles.defLink}`} to="/register">Registration</Link> is free and easy.</p>
                            </div>
                        }
                    </div>
                </div>
            </Container>

            {/* <Container>
                <div className={`${styles.loginForm}`}>
                    {
                        user?.email ? <>
                            <div className="my-3">
                                <div>
                                    <img src={user.photoURL} alt="" style={{ width: '72px', borderRadius: '4px' }} />
                                </div>

                                <div className="my-3">
                                    <h3>{user.displayName}</h3>
                                    <p><small>{user.email}</small></p>
                                </div>
                            </div>

                            <div>
                                <Button
                                    variant="dark"
                                    onClick={logout}
                                >
                                    Logout
                                </Button>
                            </div>
                        </>
                            :
                            <>
                                <div>
                                    <h2 className="fw-bold mb-5">EAT CAKE</h2>
                                </div>

                                <Button
                                    variant="secondary"
                                    onClick={handleGoogleSignIn}
                                    className="my-3"
                                ><span
                                    className="me-4"
                                >{googleIcon}</span>
                                    Sign In with Google
                                </Button>
                            </>
                    }
                </div>
            </Container> */}
        </div>
    );
};

export default Login;