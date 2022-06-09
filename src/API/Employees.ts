import { AxiosResponse } from 'axios';
import { Employee, EditEmployee, EmployeeIds } from '../types/components/employees';

const axios = require('axios');

const EmployeesAPI = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN!)}`,
    },
  }),

  addEmployee(data: Employee): Promise<AxiosResponse<Employee>> {
    return EmployeesAPI.CONFIG.post(`/employee/department/${data._id}`, {
      userName: data.userName,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName
    });
  },

  editEmployee(data: EditEmployee): Promise<AxiosResponse> {
    return EmployeesAPI.CONFIG.patch(`employee/${data._id}`,
    {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName
    });
  },

  deleteEmployee(data: EmployeeIds): Promise<AxiosResponse> {
    return EmployeesAPI.CONFIG.delete(`employee/${data.employeeId}/department/${data.departmentId}`);
  },
};

export default EmployeesAPI;
