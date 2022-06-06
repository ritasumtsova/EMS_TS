import { editDepartment } from './../../store/actionCreators/departmentsActionCreators';
import { Employee } from "./employees";

export interface Department {
  _id?: string;
  name: string;
  description: string;
  employees?: Employee[];
}

export interface Departments {
  data: Array<Department>;
}

export interface EditDepartment {
  _id: string;
  description: string;
}
