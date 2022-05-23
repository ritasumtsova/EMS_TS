import { Departments, Department } from '../components/departments';
import { Auth } from '../components/auth';

export interface DepartmentsInitState {
  loading: boolean;
  departments: null | Departments;
  errorMessage: string;
}

export interface DepartmentInitState {
  loading: boolean;
  department: null | Department;
  errorMessage: string;
}

export interface AuthInitState {
  loading: boolean;
  token: null | Auth;
  errorMessage: string;
}
