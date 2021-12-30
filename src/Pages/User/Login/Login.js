import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Button, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import styles from './Login.module.css';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

const Login = () => {
    const { loginWithGoogle } = useFirebase();

    return (
        <div className="my-5 text-center">
            <Container>
                <div className={`${styles.loginForm}`}>
                    <Button
                        variant="secondary"
                        onClick={loginWithGoogle}
                        className="my-3"
                    ><span
                        className="me-4"
                    >{googleIcon}
                        </span> Continue with Google</Button>

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