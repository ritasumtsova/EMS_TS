import * as Effects from 'redux-saga/effects';
import { put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import {
  fetchStart,
  fetchEnd,
  fetchFailure,
} from '../../actionCreators/loadingActionCreators';
import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from '../../../types/store/actionTypes';
import { addEmployeeContent, deleteEmployeeContent, failureContent } from '../../../types/components/modalsContent';
import { modalNames } from '../../../types/components/modals';
import { openModal } from '../../actionCreators/modalsActionCreators';
import EmployeesAPI from '../../../API/Employees';
import { Employee } from '../../../types/components/employees';
import { fetchDeletedEmployee, fetchNewEmployee } from '../../actionCreators/employeesActionCreators';
import { employeesActionTypes } from '../../actionTypes/employeesActionTypes';

const call: any = Effects.call;

function* addEmployeeWorker(action: ADD_EMPLOYEE) {
  yield put(fetchStart());

  try {
    const res: AxiosResponse<Employee> = yield call(EmployeesAPI.addEmployee, action.payload);
    const newEmployee: Employee = res.data;

    yield put(fetchNewEmployee(newEmployee));
    yield put (openModal(modalNames.SUCCESS, addEmployeeContent));
  } catch (error) {
    yield put(fetchFailure(error as AxiosError));
    yield put(openModal(modalNames.FAILURE, failureContent));
  } finally {
    yield put(fetchEnd());
  }
}

function* deleteEmployeeWorker(action: DELETE_EMPLOYEE) {
  yield put(fetchStart());

  try {
    yield call(EmployeesAPI.deleteEmployee, action.payload);

    yield put(fetchDeletedEmployee(action.payload.employeeId));
    yield put (openModal(modalNames.SUCCESS, deleteEmployeeContent));
  } catch (error) {
    yield put(fetchFailure(error as AxiosError));
    yield put(openModal(modalNames.FAILURE, failureContent));
  } finally {
    yield put(fetchEnd());
  }
}

export function* employeesSaga() {
  yield takeEvery(employeesActionTypes.ADD_EMPLOYEE, addEmployeeWorker);
  yield takeEvery(employeesActionTypes.DELETE_EMPLOYEE, deleteEmployeeWorker);
}