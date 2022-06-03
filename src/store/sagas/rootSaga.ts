import { all } from 'redux-saga/effects';
import { authSaga } from './auth/authSaga';


export function* rootSaga() {
  yield all([authSaga()]);
}