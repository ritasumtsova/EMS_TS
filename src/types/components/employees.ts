export interface Employee {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  userName?: string;
}

export interface UpdateEmployee {
  employeeId: string;
  email: string;
  firstName: string;
  lastName: string;
}
