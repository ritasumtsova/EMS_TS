import React, { useState } from 'react';
import { Navigate } from 'react-router';

const Login: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  const fakeAuth = (): void => {
    setIsAuth(true);
    localStorage.setItem('TOKEN', 'TOKEN');
    console.log(isAuth);
    console.log(localStorage.getItem('TOKEN'));
  };

  if (isAuth) {
    return <Navigate to="/departments" />;
  }

  return (
    <>
      <h1>Login page</h1>
      <button onClick={fakeAuth}>fake auth</button>
    </>
  );
};

export default Login;
