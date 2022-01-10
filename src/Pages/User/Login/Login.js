import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Button, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import styles from './Login.module.css';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

const Login = () => {
    const { user, loginWithGoogle, logout } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        loginWithGoogle(location, navigate);
    };

    return (
        <div className="my-5 text-center">
            <Container>
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
                            <Button
                                variant="secondary"
                                onClick={handleGoogleSignIn}
                                className="my-3"
                            ><span
                                className="me-4"
                            >{googleIcon}</span>
                                Sign In with Google
                            </Button>
                    }

                    {/* <p>Don't have an account? <Link
                        to="/register"
                        className="user-toggle">
                        Create an account
                    </Link>
                    </p> */}
                </div>
            </Container>
        </div>
    );
};

export default Login;