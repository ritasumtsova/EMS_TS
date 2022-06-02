import { AppThunk } from './../store/appThunkTypes';
import { Department } from './departments';

export interface ModalWindowContent {
  name: string;
  title: string;
  modalForm:  React.ReactNode;
  submitHandler?: (data: Department) => AppThunk;
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
