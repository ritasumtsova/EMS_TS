import { ActionType } from '../../types/store/ActionTypes';
import { authActionTypes } from '../actionTypes/authActionTypes';
import { Auth } from '../../types/components/auth';

export const login = (): ActionType => {
  return {
    type: authActionTypes.LOGIN,
  };
};

export const loginSuccess = (auth: Auth): ActionType => {
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    payload: auth
  };
};

export const loginFailure = (errorMsg: string): ActionType => {
  return {
    type: authActionTypes.LOGIN_FAILURE,
    payload: errorMsg
  };
};
