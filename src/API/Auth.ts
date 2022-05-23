import { AxiosResponse } from 'axios';

import { Auth } from '../types/components/auth';

const axios = require('axios');

const AuthAPI = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
  }),

  login(userName: string, password: string): Promise<AxiosResponse<Auth>> {
    return AuthAPI.CONFIG.post('user/login', {
      userName,
      password,
    });
  },
};

export default AuthAPI;
