import { EditDepartment } from './../components/departments';
import { Employee, EditEmployee } from './../components/employees';
import { EmployeeIds } from './../components/employees';
import { loadingActionTypes } from '../../store/actionTypes/loadingActionTypes';
import { departmentsActionTypes } from '../../store/actionTypes/departmentsActionTypes';
import { departmentActionTypes } from '../../store/actionTypes/departmentActionTypes';
import { authActionTypes } from '../../store/actionTypes/authActionTypes';
import { modalsActionTypes } from '../../store/actionTypes/modalsActionTypes';
import { Departments, Department } from '../components/departments';
import { Auth, UserData } from './../components/auth';
import { ModalWindowContent } from './../components/modals';
import { employeesActionTypes } from '../../store/actionTypes/employeesActionTypes';

interface FETCH_START {
  type: loadingActionTypes.FETCH_START;
}

interface FETCH_END {
  type: loadingActionTypes.FETCH_END;
}

interface FETCH_FAILURE {
  type: loadingActionTypes.FETCH_FAILURE;
  payload: string;
}

export interface GET_DEPARTMENTS {
  type: departmentsActionTypes.GET_DEPARTMENTS;
}

interface FETCH_DEPARTMENTS {
  type: departmentsActionTypes.FETCH_DEPARTMENTS;
  payload: Departments | null;
}

export interface GET_DEPARTMENT_BY_ID {
  type: departmentActionTypes.GET_DEPARTMENT_BY_ID;
  payload: string;
}

interface FETCH_DEPARTMENT_BY_ID {
  type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID;
  payload: Department | null;
}

export interface ADD_DEPARTMENT {
  type: departmentsActionTypes.ADD_DEPARTMENT;
  payload: Department | null;
}

interface FETCH_NEW_DEPARTMENT {
  type: departmentsActionTypes.FETCH_NEW_DEPARTMENT;
  payload: Department | null;
}

export interface EDIT_DEPARTMENT {
  type: departmentsActionTypes.EDIT_DEPARTMENT;
  payload: EditDepartment | null;
}

interface FETCH_UPDATED_DEPARTMENT {
  type: departmentsActionTypes.FETCH_UPDATED_DEPARTMENT;
  payload: Department | null;
}

export interface DELETE_DEPARTMENT {
  type: departmentsActionTypes.DELETE_DEPARTMENT;
  payload: string;
}

interface FETCH_DELETED_DEPARTMENT {
  type: departmentsActionTypes.FETCH_DELETED_DEPARTMENT;
  payload: string;
}

export interface FETCH_LOGIN {
  type: authActionTypes.FETCH_LOGIN;
  payload: UserData;
}

interface FETCH_TOKEN {
  type: authActionTypes.FETCH_TOKEN;
  payload: Auth;
}

interface OPEN_MODAL {
  type: modalsActionTypes.OPEN_MODAL;
  name: string;
  payload: ModalWindowContent;
}

interface CLOSE_MODAL {
  type: modalsActionTypes.CLOSE_MODAL;
}

interface CLOSE_ALL_MODALS {
  type: modalsActionTypes.CLOSE_ALL_MODALS;
}

export interface ADD_EMPLOYEE {
  type: employeesActionTypes.ADD_EMPLOYEE;
  payload: Employee | null;
}

interface FETCH_NEW_EMPLOYEE {
  type: employeesActionTypes.FETCH_NEW_EMPLOYEE;
  payload: Employee | null;
}

export interface EDIT_EMPLOYEE {
  type: employeesActionTypes.EDIT_EMPLOYEE;
  payload: EditEmployee | null;
}

interface FETCH_UPDATED_EMPLOYEE {
  type: employeesActionTypes.FETCH_UPDATED_EMPLOYEE;
  payload: Employee | null;
}

export interface DELETE_EMPLOYEE {
  type: employeesActionTypes.DELETE_EMPLOYEE;
  payload: EmployeeIds;
}

interface FETCH_DELETED_EMPLOYEE {
  type: employeesActionTypes.FETCH_DELETED_EMPLOYEE;
  payload: string;
}

export type ActionType =
  FETCH_START
  | FETCH_END
  | FETCH_FAILURE
  | GET_DEPARTMENTS
  | FETCH_DEPARTMENTS
  | GET_DEPARTMENT_BY_ID
  | FETCH_DEPARTMENT_BY_ID
  | ADD_DEPARTMENT
  | FETCH_NEW_DEPARTMENT
  | EDIT_DEPARTMENT
  | FETCH_UPDATED_DEPARTMENT
  | DELETE_DEPARTMENT
  | FETCH_DELETED_DEPARTMENT
  | FETCH_LOGIN
  | FETCH_TOKEN
  | OPEN_MODAL
  | CLOSE_MODAL
  | CLOSE_ALL_MODALS
  | ADD_EMPLOYEE
  | FETCH_NEW_EMPLOYEE
  | EDIT_EMPLOYEE
  | FETCH_UPDATED_EMPLOYEE
  | DELETE_EMPLOYEE
  | FETCH_DELETED_EMPLOYEE;

