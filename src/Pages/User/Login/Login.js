import React from 'react';
import { Button, Container } from "react-bootstrap";
// import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";

const Login = () => {
    const { loginWithGoogle } = useFirebase();

    return (
        <div className="my-5">
            <Container>
                <Button variant="primary" onClick={loginWithGoogle}>
                    Sign In with Google
                </Button>
            </Container>
        </div>
    );
};

export default Login;