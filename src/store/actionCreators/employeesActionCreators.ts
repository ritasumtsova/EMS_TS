import { AxiosResponse, AxiosError } from 'axios';
import { ActionType } from '../../types/store/actionTypes';
import { employeesActionTypes } from './../actionTypes/employeesActionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';
import { addEmployeeContent, editEmployeeContent, failureContent } from './../../types/components/modalsContent';
import { modalNames } from '../../types/components/modals';
import { Employee, UpdateEmployee } from './../../types/components/employees';
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

export const editEmployee = (employee: Employee): ActionType => {
  return {
    type: employeesActionTypes.EDIT_EMPLOYEE,
    payload: employee
  }
};

export const editEmployeeThunk = (data: UpdateEmployee): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());

    try {
      const res: AxiosResponse<Employee> = await EmployeesAPI.editEmployee(data);
      console.log(res);
      const department: Employee = res.data;

      dispatch(editEmployee(department));
      dispatch(openModal(modalNames.SUCCESS, editEmployeeContent));
    } catch (error) {
      console.log(error);
      dispatch(fetchFailure(error as AxiosError));
      dispatch(openModal(modalNames.FAILURE, failureContent));
    } finally {
      dispatch(fetchEnd());
    }
  };
};