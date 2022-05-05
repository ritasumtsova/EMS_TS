import React, { useState } from 'react';
import { Navigate } from 'react-router';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
} from 'reactstrap';

import AuthAPI from '../../../API/Auth';
import './Login.scss';

const Login: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await AuthAPI.login(login, password)
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
    <Container className="Login__wrapper">
      <Container className="Login__wrapper-inner">
        <h1>Login Form</h1>
        <Form
          className="Login__wrapper-inner-form"
          onSubmit={submitLogin}
        >
          <FormGroup>
            <Input
              type="text"
              name="login"
              id="login"
              placeholder="Login"
              value={login}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" size="lg">Login</Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Login;
