import { AxiosError, AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  const fakeAuth = (): void => {
    setIsAuth(true);
    localStorage.setItem('TOKEN', 'TOKEN');
  };

  if (isAuth) {
    return <Navigate to="/departments" />;
  }

  return (
    <>
      <h1>Login page</h1>
      <button onClick={fakeAuth} type="button">fake auth</button>
    </>
  );
};

export default Login;
