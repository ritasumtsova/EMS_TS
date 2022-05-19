import { AxiosResponse } from 'axios';

import { Employee } from '../types/components/employees';

const axios = require('axios');

const EmployeesAPI = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN!)}`,
    },
  }),

  addEmployee(data: Employee): Promise<AxiosResponse<Employee>> {
    return EmployeesAPI.CONFIG.post('/department', {
      userName: data.userName,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName
    });
  },
};

export default EmployeesAPI;
