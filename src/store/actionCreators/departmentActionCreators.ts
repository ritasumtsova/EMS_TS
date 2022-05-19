import { AxiosError, AxiosResponse } from 'axios';
import { ActionType } from '../../types/store/actionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/generalStateTypes';
import { departmentActionTypes } from './../actionTypes/departmentActionTypes';
import { Department } from './../../types/components/departments';
import DepartmentsAPI from '../../API/Departments';

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

export const fetchDepartmentThunk = (id: string): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchDepartment());

    try {
      const res: AxiosResponse<Department> = await DepartmentsAPI.getDepartmentInfo(id);
      const department: Department = res.data;

      dispatch(fetchDepartmentSuccess(department));
    } catch (err) {
      const error = err as AxiosError;
      const errorMsg: string = error.message;

      dispatch(fetchDepartmentFailure(errorMsg));
    };
  };
};