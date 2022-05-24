import { departmentsActionTypes } from "../../store/actionTypes/departmentsActionTypes";
import { departmentActionTypes } from "../../store/actionTypes/departmentActionTypes";
import { authActionTypes } from '../../store/actionTypes/authActionTypes';
import { modalsActionTypes } from '../../store/actionTypes/modalsActionTypes';
import { Departments, Department } from '../components/departments';
import { Auth } from './../components/auth';
import { ModalWindowContent } from './../components/modals';

interface FETCH_START {
  type: departmentsActionTypes.FETCH_START;
}

interface FETCH_DEPARTMENTS {
  type: departmentsActionTypes.FETCH_DEPARTMENTS;
  payload: Departments | null;
}

interface FETCH_FAILURE {
  type: departmentsActionTypes.FETCH_FAILURE;
  payload: string;
}

interface ADD_DEPARTMENT {
  type: departmentsActionTypes.ADD_DEPARTMENT;
  payload: Department | null;
}

interface FETCH_DEPARTMENT_BY_ID {
  type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID;
}

interface FETCH_DEPARTMENT_BY_ID_SUCCESS {
  type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID_SUCCESS;
  payload: Department | null;
}

interface FETCH_DEPARTMENT_BY_ID_FAILURE {
  type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID_FAILURE;
  payload: string;
}

interface LOGIN {
  type: authActionTypes.LOGIN;
}

interface LOGIN_SUCCESS {
  type: authActionTypes.LOGIN_SUCCESS;
  payload: Auth;
}

interface LOGIN_FAILURE {
  type: authActionTypes.LOGIN_FAILURE;
  payload: string;
}

interface OPEN_MODAL {
  type: modalsActionTypes.OPEN_MODAL;
  payload: ModalWindowContent;
}

interface CLOSE_MODAL {
  type: modalsActionTypes.CLOSE_MODAL;
  payload: boolean;
}

export type ActionType =
  FETCH_START
  | FETCH_DEPARTMENTS
  | FETCH_FAILURE
  | ADD_DEPARTMENT
  | FETCH_DEPARTMENT_BY_ID
  | FETCH_DEPARTMENT_BY_ID_SUCCESS
  | FETCH_DEPARTMENT_BY_ID_FAILURE
  | LOGIN
  | LOGIN_SUCCESS
  | LOGIN_FAILURE
  | OPEN_MODAL
  | CLOSE_MODAL;