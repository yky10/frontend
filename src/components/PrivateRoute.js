// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ element}) {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        element
    ) : (
        <Navigate to="/" replace />
    );
}

export default PrivateRoute;
