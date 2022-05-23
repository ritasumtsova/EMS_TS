import { Departments } from '../components/departments';

export interface DepartmentsInitState {
  loading: boolean;
  departments: null | Departments;
  errorMsg: string;
}
