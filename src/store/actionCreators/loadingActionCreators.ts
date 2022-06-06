import { AxiosError } from 'axios';
import { ActionType } from '../../types/store/actionTypes';
import { loadingActionTypes } from '../actionTypes/loadingActionTypes';

export const fetchStart = (): ActionType => {
  console.log('fetch start');
  return {
    type: loadingActionTypes.FETCH_START,
  };
};

export const fetchEnd = (): ActionType => {
  return {
    type: loadingActionTypes.FETCH_END,
  };
};

export const fetchFailure = (error: AxiosError): ActionType => {
  const errorMessage: string = error.message;
  
  return {
    type: loadingActionTypes.FETCH_FAILURE,
    payload: errorMessage
  };
};
