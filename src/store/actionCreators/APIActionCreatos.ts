import { ActionType } from '../../types/store/actionTypes';
import { APIActionTypes } from '../actionTypes/APIActionTypes';

export const fetchStart = (): ActionType => {
  return {
    type: APIActionTypes.FETCH_START,
  };
};

export const fetchFailure = (errorMessage: string): ActionType => {
  return {
    type: APIActionTypes.FETCH_FAILURE,
    payload: errorMessage
  };
};
