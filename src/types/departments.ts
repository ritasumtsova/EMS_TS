export interface IDepartment {
  _id: string;
  name: string;
  description: string;
}

export interface IDepartments {
  data: Array<IDepartment>;
}
