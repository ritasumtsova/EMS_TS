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
import { fetchLogin } from '../../../store/actionCreators/authActionCreators';
import { authSelector } from '../../../store/selectors/auth';
import { loadingSelector } from '../../../store/selectors/loadingSelectors';

import NotFound from '../NotFound/NotFound';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

import './Login.scss';
import { UserData } from '../../../types/components/auth';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { token } = useSelector(authSelector);
  const { errorMessage, loading } = useSelector(loadingSelector);

  const dispatch = useDispatch<AppThunkDispatch>();

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData: UserData = {
      userName,
      password
    };
    
    dispatch(fetchLogin(userData));
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
              value={userName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
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
