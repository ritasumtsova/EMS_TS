import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
} from 'reactstrap';

import { AppThunkDispatch } from '../../../types/store/appThunkTypes';
import { loginThunk } from '../../../store/actionCreators/authActionCreators';
import { authSelector } from '../../../store/selectors/auth';

import NotFound from '../NotFound/NotFound';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

import './Login.scss';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { token, errorMessage, loading } = useSelector(authSelector);

  const dispatch = useDispatch<AppThunkDispatch>();

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginThunk(login, password));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <NotFound errorMessage={errorMessage} />;
  }

  if (token?.token) {
    localStorage.setItem(process.env.REACT_APP_TOKEN!, token.token);
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
          <Button type="submit" color="primary" size="lg">Login</Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Login;
