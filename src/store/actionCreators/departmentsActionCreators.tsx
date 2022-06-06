import { modalNames } from '../../types/components/modals';
import { openModal } from './modalsActionCreators';
import { AxiosResponse, AxiosError } from 'axios';

import { ActionType } from '../../types/store/actionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';
import { Department, Departments } from '../../types/components/departments';
import { addDepartmentContent, failureContent } from '../../types/components/modalsContent';

import { departmentsActionTypes } from '../actionTypes/departmentsActionTypes';
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

export const addDepartment = (newDepartment: Department): ActionType => {
  return {
    type: departmentsActionTypes.ADD_DEPARTMENT,
    payload: newDepartment
  }
};

export const addDepartmentThunk = (data: Department): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());

    try {
      const res: AxiosResponse<Department> = await DepartmentsAPI.addDepartment(data);
      const newDepartment: Department = res.data;

      dispatch(addDepartment(newDepartment));
      dispatch(openModal(modalNames.SUCCESS, addDepartmentContent));
    } catch (error) {
      dispatch(fetchFailure(error as AxiosError));
      dispatch(openModal(modalNames.FAILURE, failureContent));
    } finally {
      dispatch(fetchEnd());
    }
  };
};

export const deleteDepartment = (id: string): ActionType => {
  return {
    type: departmentsActionTypes.DELETE_DEPARTMENT,
    payload: id
  }
};

export const deleteDepartmentThunk = (id: string): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());
    console.log(1);
    try {
      console.log(2);
      const res: AxiosResponse = await DepartmentsAPI.deleteDepartment(id);
      console.log(res);
      // const newDepartment: Department = res.data;

      dispatch(deleteDepartment(id));
      console.log(3);
      dispatch(openModal(modalNames.SUCCESS, addDepartmentContent));
    } catch (error) {
      console.error(error);
      dispatch(fetchFailure(error as AxiosError));
      dispatch(openModal(modalNames.FAILURE, failureContent));
    } finally {
      dispatch(fetchEnd());
    }
  };
};
