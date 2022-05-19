import { AxiosResponse } from 'axios';

import { Department, Departments } from '../types/components/departments';

const axios = require('axios');

const DepartmentsAPI = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN!)}`,
    },
  }),

  getDepartments(): Promise<AxiosResponse<Departments>> {
    return DepartmentsAPI.CONFIG.get('/department');
  },

  getDepartmentInfo(id: string): Promise<AxiosResponse<Department>> {
    return DepartmentsAPI.CONFIG.get(`/department/${id}`);
  },

  addDepartment(name: string, description: string): Promise<AxiosResponse<Department>> {
    return DepartmentsAPI.CONFIG.post('/department', {
      name,
      description,
    });
  },
};

export default DepartmentsAPI;
