import { ActionType } from '../../types/store/actionTypes';
import { Department } from './../../types/components/departments';
import { departmentActionTypes } from './../actionTypes/departmentActionTypes';

export const getDepartmentById = (id: string): ActionType => {
  return {
    type: departmentActionTypes.GET_DEPARTMENT_BY_ID,
    payload: id
  };
};

export const fetchDepartmentById = (department: Department): ActionType => {
  return {
    type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID,
    payload: department
  };
};
