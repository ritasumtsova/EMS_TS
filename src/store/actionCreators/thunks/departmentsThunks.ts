import { AxiosError, AxiosResponse } from 'axios';
import { AppThunk, AppThunkDispatch } from '../../../types/store/appThunkTypes';
import { fetchStart, fetchDepartments, fetchFailure, addDepartment } from '../departmentsActionCreators';
import { fetchDepartmentById, fetchDepartmentByIdSuccess, fetchDepartmentByIdFailure } from '../departmentActionCreators';
import { Departments, Department } from '../../../types/components/departments';
import DepartmentsAPI from '../../../API/Departments';

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

export const fetchDepartmentThunk = (id: string): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchDepartmentById());

    try {
      const res: AxiosResponse<Department> = await DepartmentsAPI.getDepartmentInfo(id);
      const department: Department = res.data;

      dispatch(fetchDepartmentByIdSuccess(department));
    } catch (err) {
      const error = err as AxiosError;
      const errorMessage: string = error.message;

      dispatch(fetchDepartmentByIdFailure(errorMessage));
    };
  };
};

export const addDepartmentThunk = (name: string, description: string): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());

    try {
      const res: AxiosResponse<Department> = await DepartmentsAPI.addDepartment(name, description);
      const department: Department = res.data;

      dispatch(addDepartment(department));
    } catch (err) {
      const error = err as AxiosError;
      const errorMessage: string = error.message;

      dispatch(fetchFailure(errorMessage));
    };
  };
};

