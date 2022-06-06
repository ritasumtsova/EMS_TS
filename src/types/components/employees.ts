export interface Employee {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  userName?: string;
}

export interface UpdateEmployee {
  departmentId: string;
  employeeId: string;
  email: string;
  firstName: string;
  lastName: string;
}
