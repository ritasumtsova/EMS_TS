import { ActionType } from '../../types/store/actionTypes';
import { departmentsActionTypes } from './../actionTypes/departmentsActionTypes';
import { Departments, Department } from './../../types/components/departments';

export const fetchStart = (): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_START,
  };
};

export const fetchDepartments = (departments: Departments): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_DEPARTMENTS,
    payload: departments
  };
};

export const fetchFailure = (errorMessage: string): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_FAILURE,
    payload: errorMessage
  };
};

export const addDepartment = (department: Department): ActionType => {
  return {
    type: departmentsActionTypes.ADD_DEPARTMENT,
    payload: department
  }
};
