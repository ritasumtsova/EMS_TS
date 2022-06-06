import { AxiosResponse, AxiosError } from 'axios';
import { ActionType } from '../../types/store/actionTypes';
import { employeesActionTypes } from './../actionTypes/employeesActionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';
import {
  modalNames,
  modalContentSuccess,
  modalContentFailure
} from '../../types/components/modals';
import { Employee } from './../../types/components/employees';
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
      console.log(res);

      dispatch(addEmployee(newEmployee));
      dispatch(openModal(modalNames.SUCCESS, modalContentSuccess));
      dispatch(openModal(modalNames.FAILURE, modalContentFailure));
    } catch (error) {
      console.error(error);
      dispatch(fetchFailure(error as AxiosError));
    } finally {
      dispatch(fetchEnd());
    }
  };
};