import { IDepartment } from "./departments";
import { IEmployee } from './employees';

export interface IDepartmentInfo {
  departmentInfo: IDepartment;
  employees: Array<IEmployee>;
}