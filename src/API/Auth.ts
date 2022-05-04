import { AxiosResponse } from 'axios';

import { IAuth } from '../types/auth';

const axios = require('axios');

const AuthAPI = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
  }),

  login(userName: string, password: string): Promise<AxiosResponse<IAuth>> {
    return AuthAPI.CONFIG.post('user/login', {
      userName,
      password,
    });
  },
};

export default AuthAPI;
