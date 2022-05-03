import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  return !localStorage.getItem('TOKEN')
    ? <Navigate to="/" />
    : <Outlet />;
};

export default PrivateRoute;
