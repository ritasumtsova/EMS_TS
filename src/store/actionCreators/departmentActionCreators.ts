import { ActionType } from '../../types/store/actionTypes';
import { departmentActionTypes } from './../actionTypes/departmentActionTypes';
import { Department } from './../../types/components/departments';

export const fetchDepartment = (): ActionType => {
  return {
    type: departmentActionTypes.FETCH_DEPARTMENT,
  };
};

export const fetchDepartmentSuccess = (department: Department): ActionType => {
  return {
    type: departmentActionTypes.FETCH_DEPARTMENT_SUCCESS,
    payload: department
  };
};

export const fetchDepartmentFailure = (errorMsg: string): ActionType => {
  return {
    type: departmentActionTypes.FETCH_DEPARTMENT_FAILURE,
    payload: errorMsg
  };
};
