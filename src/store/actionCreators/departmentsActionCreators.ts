import { AxiosResponse, AxiosError } from 'axios';

import { ActionType } from '../../types/store/actionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';
import { Departments } from './../../types/components/departments';

import { departmentsActionTypes } from './../actionTypes/departmentsActionTypes';
import { fetchStart, fetchFailure } from './APIActionCreatos';
import DepartmentsAPI from '../../API/Departments';

export const fetchDepartments = (departments: Departments): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_DEPARTMENTS,
    payload: departments
  };
};

export const fetchDepartmentsThunk = (): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());

    try {
      const res: AxiosResponse<Departments> = await DepartmentsAPI.getDepartments();
      const departments: Departments = res.data;

      dispatch(fetchDepartments(departments));
    } catch (err) {
      const error = err as AxiosError;
      const errorMessage: string = error.message;

      dispatch(fetchFailure(errorMessage));
    };
  };
};

export const addDepartment = (department: Department): ActionType => {
  return {
    type: departmentsActionTypes.ADD_DEPARTMENT,
    payload: department
  }
};
