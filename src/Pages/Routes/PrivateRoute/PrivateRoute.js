import React from 'react';
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    let location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    return user.emai ? children : (<Navigate to="/login" state={{ from: location }} />)
};

export default PrivateRoute;