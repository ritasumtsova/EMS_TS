import { departmentsActionTypes } from "../../store/actionTypes/departmentsActionTypes";
import { departmentActionTypes } from "../../store/actionTypes/departmentActionTypes";
import { authActionTypes } from '../../store/actionTypes/authActionTypes';
import { Departments, Department } from '../components/departments';
import { Auth } from './../components/auth';

interface FETCH_DEPARTMENTS {
  type: departmentsActionTypes.FETCH_DEPARTMENTS;
}

interface FETCH_DEPARTMENTS_SUCCESS {
  type: departmentsActionTypes.FETCH_DEPARTMENTS_SUCCESS;
  payload: Departments | null;
}

interface FETCH_DEPARTMENTS_FAILURE {
  type: departmentsActionTypes.FETCH_DEPARTMENTS_FAILURE;
  payload: string;
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

export type ActionType =
  FETCH_DEPARTMENTS
  | FETCH_DEPARTMENTS_SUCCESS
  | FETCH_DEPARTMENTS_FAILURE
  | FETCH_DEPARTMENT_BY_ID
  | FETCH_DEPARTMENT_BY_ID_SUCCESS
  | FETCH_DEPARTMENT_BY_ID_FAILURE
  | LOGIN
  | LOGIN_SUCCESS
  | LOGIN_FAILURE;