import { AxiosResponse, AxiosError } from 'axios';

import { ActionType } from '../../types/store/actionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';
import { Employee } from './../../types/components/employees';

import { employeesActionTypes } from './../actionTypes/employeesActionTypes';
import { fetchStart, fetchEnd, fetchFailure } from './loadingActionCreators';
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
      console.log(res);

      dispatch(addEmployee(newEmployee));
    } catch (error) {
      console.error(error);
      dispatch(fetchFailure(error as AxiosError));
    } finally {
      dispatch(fetchEnd());
    }
  };
};