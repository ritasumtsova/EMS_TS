import { AxiosResponse, AxiosError } from 'axios';

import { ActionType } from '../../types/store/actionTypes';
import { Department } from './../../types/components/departments';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';

import { fetchStart, fetchFailure } from './APIActionCreatos';
import { departmentActionTypes } from './../actionTypes/departmentActionTypes';
import DepartmentsAPI from '../../API/Departments';

export const fetchDepartmentById = (department: Department): ActionType => {
  return {
    type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID,
    payload: department
  };
};

export const fetchDepartmentByIdThunk = (id: string): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());

    try {
      const res: AxiosResponse<Department> = await DepartmentsAPI.getDepartmentInfo(id);
      const department: Department = res.data;

      dispatch(fetchDepartmentById(department));
    } catch (err) {
      const error = err as AxiosError;
      const errorMessage: string = error.message;

      dispatch(fetchFailure(errorMessage));
    };
  };
};
