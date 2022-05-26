import { DepartmentInitState, DepartmentsInitState } from './initStateInterfaces';


export interface DepartmentsSelector {
  departmentsInfo: DepartmentsInitState;
  departmentById: DepartmentInitState;
}
