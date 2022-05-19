import { departmentsActionTypes } from "../../store/actionTypes/departmentsActionTypes";
import { departmentActionTypes } from "../../store/actionTypes/departmentActionTypes";
import { Departments, Department } from '../components/departments';

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

interface FETCH_DEPARTMENT {
  type: departmentActionTypes.FETCH_DEPARTMENT;
}

interface FETCH_DEPARTMENT_SUCCESS {
  type: departmentActionTypes.FETCH_DEPARTMENT_SUCCESS;
  payload: Department | null;
}

interface FETCH_DEPARTMENT_FAILURE {
  type: departmentActionTypes.FETCH_DEPARTMENT_FAILURE;
  payload: string;
}

export type ActionType =
  FETCH_DEPARTMENTS
  | FETCH_DEPARTMENTS_SUCCESS
  | FETCH_DEPARTMENTS_FAILURE
  | FETCH_DEPARTMENT
  | FETCH_DEPARTMENT_SUCCESS
  | FETCH_DEPARTMENT_FAILURE;
