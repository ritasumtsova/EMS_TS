import { IEmployee } from "./employees";

export interface IDepartment {
  _id: string;
  name: string;
  description: string;
  employees?: IEmployee[];
}

// export interface IDepartmentInfo {
//   data: IDepartment;
// }

export interface IDepartments {
  data: Array<IDepartment>;
}
