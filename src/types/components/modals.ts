export interface ModalWindowContent {
  name: string;
  title: string;
  modalForm:  React.ReactNode;
}

export enum modalNames {
  ADD_DEPARTMENT = 'ADD_DEPARTMENT',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  EDIT_DEPARTMENT = 'EDIT_DEPARTMENT',
  EDIT_EMPLOYEE = 'EDIT_EMPLOYEE',
  DELETE_DEPARTMENT = 'DELETE_DEPARTMENT',
  DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
};
