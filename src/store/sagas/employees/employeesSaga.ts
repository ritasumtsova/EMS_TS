import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import {
  fetchStart,
  fetchEnd,
  fetchFailure,
} from '../../actionCreators/loadingActionCreators';
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE } from '../../../types/store/actionTypes';
import { addEmployeeContent, editEmployeeContent, deleteEmployeeContent, failureContent } from '../../../types/components/modalsContent';
import { modalNames } from '../../../types/components/modals';
import { openModal } from '../../actionCreators/modalsActionCreators';
import EmployeesAPI from '../../../API/Employees';
import { Employee } from '../../../types/components/employees';
import { fetchDeletedEmployee, fetchNewEmployee, fetchUpdatedEmployee } from '../../actionCreators/employeesActionCreators';
import { employeesActionTypes } from '../../actionTypes/employeesActionTypes';

const callEffect: any = call;

function* addEmployeeWorker(action: ADD_EMPLOYEE) {
  yield put(fetchStart());

  try {
    const res: AxiosResponse<Employee> = yield callEffect(EmployeesAPI.addEmployee, action.payload);
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

function* editEmployeeWorker(action: EDIT_EMPLOYEE) {
  yield put(fetchStart());

  try {
    const res: AxiosResponse<Employee> = yield callEffect(EmployeesAPI.editEmployee, action.payload);
    const updatedEmployee: Employee = res.data;

    yield put(fetchUpdatedEmployee(updatedEmployee));
    yield put (openModal(modalNames.SUCCESS, editEmployeeContent));
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
    yield callEffect(EmployeesAPI.deleteEmployee, action.payload);

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
  yield takeEvery(employeesActionTypes.EDIT_EMPLOYEE, editEmployeeWorker);
  yield takeEvery(employeesActionTypes.DELETE_EMPLOYEE, deleteEmployeeWorker);
}