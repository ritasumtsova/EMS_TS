import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute: React.FC = () => {
  return !localStorage.getItem('TOKEN')
    ? <Navigate to="/" />
    : <Outlet />;
};

export default PrivateRoute;
