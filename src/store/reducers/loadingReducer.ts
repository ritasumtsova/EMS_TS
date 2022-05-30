import { loadingActionTypes } from '../actionTypes/loadingActionTypes';
import { ActionType } from '../../types/store/actionTypes';
import { LoadingInitState } from '../../types/store/initStateInterfaces';

const initState: LoadingInitState = {
  loading: false,
  errorMessage: ''
};

const loadingReducer = (state: LoadingInitState = initState, action: ActionType) => {
  switch(action.type) {
    case loadingActionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      };

    case loadingActionTypes.FETCH_END:
      return {
        ...state,
        loading: false
      };

    case loadingActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default loadingReducer;