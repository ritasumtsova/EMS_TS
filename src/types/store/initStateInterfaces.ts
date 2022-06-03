import { UserData } from './../components/auth';
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
  userData: UserData | null;
}

export interface ModalsInitState {
  modalsStack: string[];
  content: ModalWindowContent[];
  open: boolean;
}

export interface LoadingInitState {
  loading: boolean;
  errorMessage: string;
};

export interface FormInitState {
  name: string;
  description: string;
};
