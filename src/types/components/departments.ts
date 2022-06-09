import { Employee } from "./employees";

export interface Department {
  _id?: string;
  name: string;
  description: string;
  employees?: Employee[];
}

export interface Departments {
  data: Array<Department>;
  count: number;
}

export interface EditDepartment {
  _id: string;
  description: string;
}
