import { AxiosResponse, AxiosError } from 'axios';
import { ActionType } from '../../types/store/actionTypes';
import { employeesActionTypes } from './../actionTypes/employeesActionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';
import { addEmployeeContent, deleteEmployeeContent, failureContent } from './../../types/components/modalsContent';
import { modalNames } from '../../types/components/modals';
import { Employee, EmployeeIds } from './../../types/components/employees';
import { fetchStart, fetchEnd, fetchFailure } from './loadingActionCreators';
import { openModal } from './modalsActionCreators';
import EmployeesAPI from '../../API/Employees';

export const addEmployee = (newEmployee: Employee): ActionType => {
  return {
    type: employeesActionTypes.ADD_EMPLOYEE,
    payload: newEmployee
  }
};

export const addEmployeeThunk = (data: Employee): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());

    try {
      const res: AxiosResponse<Employee> = await EmployeesAPI.addEmployee(data);
      const newEmployee: Employee = res.data;

      dispatch(addEmployee(newEmployee));
      dispatch(openModal(modalNames.SUCCESS, addEmployeeContent));
    } catch (error) {
      dispatch(fetchFailure(error as AxiosError));
      dispatch(openModal(modalNames.FAILURE, failureContent));
    } finally {
      dispatch(fetchEnd());
    }
  };
};

export const deleteEmployee = (data: EmployeeIds): ActionType => {
  return {
    type: employeesActionTypes.DELETE_EMPLOYEE,
    payload: data
  }
};

export const deleteEmployeeThunk = (data: EmployeeIds): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());

    try {
      const res: AxiosResponse = await EmployeesAPI.deleteEmployee(data);
      console.log(res);

      dispatch(deleteEmployee(data));
      dispatch(openModal(modalNames.SUCCESS, deleteEmployeeContent));
    } catch (error) {
      console.error(error);
      dispatch(fetchFailure(error as AxiosError));
      dispatch(openModal(modalNames.FAILURE, failureContent));
    } finally {
      dispatch(fetchEnd());
    }
  };
};