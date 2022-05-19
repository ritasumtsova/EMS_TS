import { Departments, Department } from '../components/departments';

export interface DepartmentsInitState {
  loading: boolean;
  departments: null | Departments;
  errorMsg: string;
}

export interface DepartmentInitState {
  loading: boolean;
  department: null | Department;
  errorMsg: string;
}
