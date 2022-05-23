import { AxiosError, AxiosResponse } from 'axios';
import { AppThunk, AppThunkDispatch } from '../../../types/store/appThunkTypes';
import { fetchDepartments, fetchDepartmentsSuccess, fetchDepartmentsFailure } from '../departmentsActionCreators';
import { fetchDepartment, fetchDepartmentSuccess, fetchDepartmentFailure } from '../departmentActionCreators';
import { Departments, Department } from '../../../types/components/departments';
import DepartmentsAPI from '../../../API/Departments';

export const fetchDepartmentsThunk = (): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchDepartments());

    try {
      const res: AxiosResponse<Departments> = await DepartmentsAPI.getDepartments();
      const departments: Departments = res.data;

      dispatch(fetchDepartmentsSuccess(departments));
    } catch (err) {
      const error = err as AxiosError;
      const errorMessage: string = error.message;

      dispatch(fetchDepartmentsFailure(errorMessage));
    };
  };
};

export const fetchDepartmentThunk = (id: string): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchDepartment());

    try {
      const res: AxiosResponse<Department> = await DepartmentsAPI.getDepartmentInfo(id);
      const department: Department = res.data;

      dispatch(fetchDepartmentSuccess(department));
    } catch (err) {
      const error = err as AxiosError;
      const errorMessage: string = error.message;

      dispatch(fetchDepartmentFailure(errorMessage));
    };
  };
};

