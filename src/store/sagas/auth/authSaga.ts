import * as Effects from 'redux-saga/effects';
import { put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import AuthAPI from '../../../API/Auth';
import {
  fetchStart,
  fetchEnd,
  fetchFailure,
} from '../../actionCreators/loadingActionCreators';
import { fetchToken } from './../../actionCreators/authActionCreators';
import { authActionTypes } from '../../actionTypes/authActionTypes';
import { FETCH_LOGIN } from './../../../types/store/actionTypes';
import { Auth } from '../../../types/components/auth';

const call: any = Effects.call;

function* authWorker(action: FETCH_LOGIN) {
  yield put(fetchStart());
  console.log(action.payload);

  try {
    const res: AxiosResponse<Auth> = yield call(AuthAPI.login, action.payload);
    const auth: Auth = res.data;
    
    yield put(fetchToken(auth));
  } catch (error) {
    yield put(fetchFailure(error as AxiosError));
  } finally {
    yield put(fetchEnd());
  }
}

export function* authSaga() {
  yield takeEvery(authActionTypes.FETCH_LOGIN, authWorker);
}