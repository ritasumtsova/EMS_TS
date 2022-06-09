import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import DepartmentsAPI from '../../../API/Departments';
import {
  fetchStart,
  fetchEnd,
  fetchFailure,
} from '../../actionCreators/loadingActionCreators';
import { departmentsActionTypes } from '../../actionTypes/departmentsActionTypes';
import { Department, Departments,  } from '../../../types/components/departments';
import { fetchDepartments, fetchNewDepartment, fetchUpdatedDepartment } from '../../actionCreators/departmentsActionCreators';
import { GET_DEPARTMENT_BY_ID, ADD_DEPARTMENT, EDIT_DEPARTMENT } from '../../../types/store/actionTypes';
import { fetchDepartmentById } from '../../actionCreators/departmentActionCreators';
import { departmentActionTypes } from '../../actionTypes/departmentActionTypes';
import { modalNames } from '../../../types/components/modals';
import { addDepartmentContent, editDepartmentContent, failureContent } from '../../../types/components/modalsContent';
import { openModal } from '../../actionCreators/modalsActionCreators';

const callEffect: any = call;

function* getDepartmentsWorker() {
  yield put(fetchStart());

  try {
    const res: AxiosResponse<Departments> = yield callEffect(DepartmentsAPI.getDepartments);
    const departments: Departments = res.data;

    yield put(fetchDepartments(departments));
  } catch (error) {
    yield put(fetchFailure(error as AxiosError));
  } finally {
    yield put(fetchEnd());
  }
}

function* getDepartmentByIdWorker(action: GET_DEPARTMENT_BY_ID) {
  yield put(fetchStart());

  try {
    const res: AxiosResponse<Department> = yield callEffect(DepartmentsAPI.getDepartmentInfo, action.payload);
    const department: Department = res.data;

    yield put(fetchDepartmentById(department));
  } catch (error) {
    yield put(fetchFailure(error as AxiosError));
  } finally {
    yield put(fetchEnd());
  }
}

function* addDepartmentWorker(action: ADD_DEPARTMENT) {
  yield put(fetchStart());

  try {
    const res: AxiosResponse<Department> = yield callEffect(DepartmentsAPI.addDepartment, action.payload);
    const newDepartment: Department = res.data;

    yield put(fetchNewDepartment(newDepartment));
    yield put (openModal(modalNames.SUCCESS, addDepartmentContent));
  } catch (error) {
    yield put(fetchFailure(error as AxiosError));
    yield put(openModal(modalNames.FAILURE, failureContent));
  } finally {
    yield put(fetchEnd());
  }
}

function* editDepartmentWorker(action: EDIT_DEPARTMENT) {
  yield put(fetchStart());

  try {
    const res: AxiosResponse<Department> = yield callEffect(DepartmentsAPI.editDepartment, action.payload);
    const updatedDepartment: Department = res.data;

    yield put(fetchUpdatedDepartment(updatedDepartment));
    yield put (openModal(modalNames.SUCCESS, editDepartmentContent));
  } catch (error) {
    yield put(fetchFailure(error as AxiosError));
    yield put(openModal(modalNames.FAILURE, failureContent));
  } finally {
    yield put(fetchEnd());
  }
}

export function* departmentsSaga() {
  yield takeEvery(departmentsActionTypes.GET_DEPARTMENTS, getDepartmentsWorker);
  yield takeEvery(departmentActionTypes.GET_DEPARTMENT_BY_ID, getDepartmentByIdWorker);
  yield takeEvery(departmentsActionTypes.ADD_DEPARTMENT, addDepartmentWorker);
  yield takeEvery(departmentsActionTypes.EDIT_DEPARTMENT, editDepartmentWorker);
}