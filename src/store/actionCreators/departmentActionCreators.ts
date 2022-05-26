import { ActionType } from '../../types/store/actionTypes';
import { departmentActionTypes } from './../actionTypes/departmentActionTypes';
import { Department } from './../../types/components/departments';

export const fetchDepartmentById = (): ActionType => {
  return {
    type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID,
  };
};

export const fetchDepartmentByIdSuccess = (department: Department): ActionType => {
  return {
    type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID_SUCCESS,
    payload: department
  };
};

export const fetchDepartmentByIdFailure = (errorMessage: string): ActionType => {
  return {
    type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID_FAILURE,
    payload: errorMessage
  };
};
