import { Employee } from './../components/employees';
import { Departments, Department } from '../components/departments';
import { Auth } from '../components/auth';
import { ModalWindowContent } from '../components/modals';

export interface DepartmentsInitState {
  departments: null | Departments;
}

export interface DepartmentInitState {
  department: null | Department;
}

export interface AuthInitState {
  token: null | Auth;
}

export interface ModalsInitState {
  modalsStack: string[];
  content: ModalWindowContent[];
  open: boolean;
}

export interface LoadingInitState {
  loading: boolean;
  errorMessage: string;
}

export interface EmployeesInitState {
  employees: null | Employee[];
}
