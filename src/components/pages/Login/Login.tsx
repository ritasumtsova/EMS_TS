import React, { useState } from 'react';
import { Navigate } from 'react-router';

import AuthAPI from '../../../API/Auth';

const Login: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  const fakeAuth = async () => {
    await AuthAPI.login('Admin', '0c7045ec9abc578394af1898')
      .then((res) => {
        localStorage.setItem(process.env.REACT_APP_TOKEN!, res.data.token);
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  if (isAuth) {
    return <Navigate to="/departments" />;
  }

  return (
    <>
      <h1>Login page</h1>
      <button type="button" onClick={fakeAuth}>fake auth</button>
    </>
  );
};

export default Login;
