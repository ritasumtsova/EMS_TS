import { all } from 'redux-saga/effects';
import { authSaga } from './auth/authSaga';
import { departmentsSaga } from './departments/departmentsSaga';
import { employeesSaga } from './employees/employeesSaga';


export function* rootSaga() {
  yield all([authSaga(), departmentsSaga(), employeesSaga()]);
}