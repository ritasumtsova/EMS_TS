import { AxiosResponse } from 'axios';

import { Department, Departments, EditDepartment } from '../types/components/departments';

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

  addDepartment(data: Department): Promise<AxiosResponse<Department>> {
    return DepartmentsAPI.CONFIG.post('/department', {
      name: data.name,
      description: data.description
    });
  },

  editDepartment(data: EditDepartment): Promise<AxiosResponse<Department>> {
    return DepartmentsAPI.CONFIG.patch(`/department/${data._id}`, {
      description: data.description
    });
  },
};

export default DepartmentsAPI;
