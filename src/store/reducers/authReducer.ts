import { ActionType } from '../../types/store/actionTypes';
import { authActionTypes } from '../actionTypes/authActionTypes';
import { AuthInitState } from '../../types/store/initStateInterfaces';

const initState: AuthInitState = {
  token: null,
  userData: null
};

const authReducer = (state: AuthInitState = initState, action: ActionType) => {
  switch(action.type) {
    case authActionTypes.FETCH_LOGIN:
      return {
        ...state,
        userData: action.payload
      };

    case authActionTypes.FETCH_TOKEN:
      return {
        ...state,
        token: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;