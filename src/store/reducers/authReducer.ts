import { ActionType } from '../../types/store/actionTypes';
import { authActionTypes } from '../actionTypes/authActionTypes';
import { AuthInitState } from "../../types/store/initStateInterfaces";

const initState: AuthInitState = {
  loading: false,
  token: null,
  errorMessage: ''
};

const authReducer = (state: AuthInitState = initState, action: ActionType) => {
  switch(action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        loading: true
      };

    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
        errorMessage: ''
      };

    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        token: null,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;