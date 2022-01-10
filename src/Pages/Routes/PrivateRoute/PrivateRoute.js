import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    let location = useLocation();

    return user.emai ? children : <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;