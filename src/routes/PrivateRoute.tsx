import React from "react";
import { Navigate, Outlet, RouteProps } from "react-router";

// DO I NEED TO HAVE AN INTERFACE HERE?
interface PrivateRouteProps extends RouteProps{

}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  return !localStorage.getItem('TOKEN')
    ? <Navigate to="/" />
    : <Outlet />;
};

export default PrivateRoute;
