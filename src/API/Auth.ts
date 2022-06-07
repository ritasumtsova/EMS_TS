import { UserData } from './../types/components/auth';
import { AxiosResponse } from 'axios';

import { Auth } from '../types/components/auth';

const axios = require('axios');

const AuthAPI = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
  }),

  login(userData: UserData): Promise<AxiosResponse<Auth>> {
    console.log(userData);
    return AuthAPI.CONFIG.post('user/login', {
      userName: userData.userName,
      password: userData.password
    });
  },
};

export default AuthAPI;
