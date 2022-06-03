import { modalNames } from '../../types/components/modals';
import { openModal } from './modalsActionCreators';
import { AxiosResponse, AxiosError } from 'axios';

import { ActionType } from '../../types/store/actionTypes';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';
import { Department, Departments } from '../../types/components/departments';

import { departmentsActionTypes } from '../actionTypes/departmentsActionTypes';
import { fetchStart, fetchEnd, fetchFailure } from './loadingActionCreators';
import DepartmentsAPI from '../../API/Departments';
import SuccessModal from '../../components/SuccessModal/SuccessModal';
import FailureModal from '../../components/FailureModal/FailureModal';

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

    const modalContentSuccess = {
      name: modalNames.SUCCESS,
      title: 'Success!',
      modalForm: <SuccessModal />
    };

    const modalContentFailure = {
      name: modalNames.FAILURE,
      title: 'Error',
      modalForm: <FailureModal />
    };

    try {
      const res: AxiosResponse<Department> = await DepartmentsAPI.addDepartment(data);
      const newDepartment: Department = res.data;

      dispatch(addDepartment(newDepartment));
      dispatch(openModal(modalNames.SUCCESS, modalContentSuccess));
    } catch (error) {
      dispatch(fetchFailure(error as AxiosError));
      dispatch(openModal(modalNames.FAILURE, modalContentFailure));
    } finally {
      dispatch(fetchEnd());
    }
  };
};
