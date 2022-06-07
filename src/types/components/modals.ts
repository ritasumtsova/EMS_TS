import { ActionType } from './../store/actionTypes';
import { Department } from './departments';

export interface ModalWindowContent {
  name: string;
  title: string;
  modalForm:  React.ReactNode;
  submitHandler?: (data: Department) => ActionType;
}

export enum modalNames {
  ADD_DEPARTMENT = 'ADD_DEPARTMENT',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  EDIT_DEPARTMENT = 'EDIT_DEPARTMENT',
  EDIT_EMPLOYEE = 'EDIT_EMPLOYEE',
  DELETE_DEPARTMENT = 'DELETE_DEPARTMENT',
  DELETE_EMPLOYEE = 'DELETE_EMPLOYEE',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
};

export enum modalTitles {
  ADD_DEPARTMENT = 'Add department ',
  ADD_EMPLOYEE = 'Add employee ',
  EDIT_DEPARTMENT = 'Edit department',
  EDIT_EMPLOYEE = 'Edit employee',
  DELETE_DEPARTMENT = 'Delete department',
  DELETE_EMPLOYEE = 'Delete employee',
  SUCCESS = 'Success!',
  FAILURE = 'Error'
};

export enum modalMessages {
  ADD_DEPARTMENT = 'Department added',
  ADD_EMPLOYEE = 'Employee added',
  EDIT_DEPARTMENT = 'Department info changed',
  EDIT_EMPLOYEE = 'Employee info changed',
  DELETE_DEPARTMENT = 'Department deleted',
  DELETE_EMPLOYEE = 'Employee deleted',
  FAILURE = 'Something went wrong'
};
