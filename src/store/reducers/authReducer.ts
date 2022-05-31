import { ActionType } from '../../types/store/actionTypes';
import { authActionTypes } from '../actionTypes/authActionTypes';
import { AuthInitState } from '../../types/store/initStateInterfaces';

const initState: AuthInitState = {
  token: null,
};

const authReducer = (state: AuthInitState = initState, action: ActionType) => {
  switch(action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        token: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;