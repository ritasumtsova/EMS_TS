import { ActionType } from '../../types/store/actionTypes';
import { Auth, UserData } from '../../types/components/auth';
import { authActionTypes } from '../actionTypes/authActionTypes';

export const fetchToken = (auth: Auth): ActionType => {
  return {
    type: authActionTypes.FETCH_TOKEN,
    payload: auth
  };
};

export const fetchLogin = (userData: UserData): ActionType => {
  return {
    type: authActionTypes.FETCH_LOGIN,
    payload: userData
  };
};
