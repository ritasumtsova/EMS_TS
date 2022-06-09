export interface Employee {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  userName?: string;
}

export interface EditEmployee {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface EmployeeIds {
  departmentId: string;
  employeeId: string;
}
