import { all } from 'redux-saga/effects';
import { authSaga } from './auth/authSaga';
import { departmentsSaga } from './departments/departmentsSaga';


export function* rootSaga() {
  yield all([authSaga(), departmentsSaga()]);
}