import { AxiosResponse } from 'axios';

import { IDepartments } from '../types/departments';
import { IDepartment } from '../types/departments';

const axios = require('axios');

const DepartmentsAPI = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN!)}`,
    },
  }),

  getDepartments(): Promise<AxiosResponse<IDepartments>>{
    return DepartmentsAPI.CONFIG.get('/department');
  },

  getDepartmentInfo(id: number | string): Promise<AxiosResponse<IDepartment>> {
    return DepartmentsAPI.CONFIG.get(`/department/${id}`);
  },
};

export default DepartmentsAPI;
