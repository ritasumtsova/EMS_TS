import { AxiosResponse, AxiosError } from 'axios';

import { ActionType } from '../../types/store/actionTypes';
import { Auth } from '../../types/components/auth';
import { AppThunk, AppThunkDispatch } from '../../types/store/appThunkTypes';

import { authActionTypes } from '../actionTypes/authActionTypes';
import { fetchStart, fetchEnd, fetchFailure } from './loadingActionCreators';
import AuthAPI from '../../API/Auth';

export const login = (auth: Auth): ActionType => {
  return {
    type: authActionTypes.LOGIN,
    payload: auth
  };
};

export const loginThunk = (userName: string, password: string): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(fetchStart());

    try {
      const res: AxiosResponse<Auth> = await AuthAPI.login(userName, password);
      const auth: Auth = res.data;

      dispatch(login(auth));
    } catch (error) {
      dispatch(fetchFailure(error as AxiosError));
    };

    dispatch(fetchEnd());
  };
};
