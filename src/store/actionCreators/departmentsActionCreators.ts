import { AxiosResponse, AxiosError } from 'axios';

import { ActionType } from '../../types/store/actionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';
import { Department, Departments } from './../../types/components/departments';

import { departmentsActionTypes } from './../actionTypes/departmentsActionTypes';
import { fetchStart, fetchEnd, fetchFailure } from './loadingActionCreators';
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
    } catch (error) {
      dispatch(fetchFailure(error as AxiosError));
    };

    dispatch(fetchEnd());
  };
};

export const addDepartment = (department: Department): ActionType => {
  return {
    type: departmentsActionTypes.ADD_DEPARTMENT,
    payload: department
  }
};

export const addDepartmentThunk = (name: string, description: string): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());

    try {
      const res: AxiosResponse<Department> = await DepartmentsAPI.addDepartment(name, description);
      const department: Department = res.data;

      dispatch(addDepartment(department));
    } catch (error) {
      dispatch(fetchFailure(error as AxiosError));
    };

    dispatch(fetchEnd());
  };
};
