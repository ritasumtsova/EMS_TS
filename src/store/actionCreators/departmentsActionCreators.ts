import { ActionType } from '../../types/store/ActionTypes';
import { departmentsActionTypes } from './../actionTypes/departmentsActionTypes';
import { Departments } from './../../types/components/departments';

export const fetchDepartments = (): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_DEPARTMENTS,
  };
};

export const fetchDepartmentsSuccess = (departments: Departments): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_DEPARTMENTS_SUCCESS,
    payload: departments
  };
};

export const fetchDepartmentsFailure = (errorMsg: string): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_DEPARTMENTS_FAILURE,
    payload: errorMsg
  };
};
