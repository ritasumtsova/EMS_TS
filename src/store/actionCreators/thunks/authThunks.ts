import { AxiosError, AxiosResponse } from 'axios';
import { AppThunk, AppThunkDispatch } from '../../../types/store/appThunkTypes';
import { login, loginSuccess, loginFailure } from './../authActionCreators';
import { Auth } from '../../../types/components/auth';
import AuthAPI from '../../../API/Auth';

export const loginThunk = (userName: string, password: string): AppThunk => {
  return async (dispatch: AppThunkDispatch): Promise<void> => {
    dispatch(login());

    try {
      const res: AxiosResponse<Auth> = await AuthAPI.login(userName, password);
      const auth: Auth = res.data;

      dispatch(loginSuccess(auth));
    } catch (err) {
      const error = err as AxiosError;
      const errorMessage: string = error.message;

      dispatch(loginFailure(errorMessage));
    };
  };
};