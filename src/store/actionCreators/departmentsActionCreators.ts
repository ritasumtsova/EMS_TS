import { AxiosError, AxiosResponse } from 'axios';
import { ActionType } from '../../types/store/actionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/generalStateTypes';
import { departmentsActionTypes } from './../actionTypes/departmentsActionTypes';
import { Departments } from './../../types/components/departments';
import DepartmentsAPI from '../../API/Departments';

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

export const fetchDepartmentsThunk = (): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchDepartments());

    try {
      const res: AxiosResponse<Departments> = await DepartmentsAPI.getDepartments();
      const departments: Departments = res.data;

      dispatch(fetchDepartmentsSuccess(departments));
    } catch (err) {
      const error = err as AxiosError;
      const errorMsg: string = error.message;

      dispatch(fetchDepartmentsFailure(errorMsg));
    };
  };
};