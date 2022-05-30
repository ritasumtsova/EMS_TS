import { ActionType } from '../../types/store/actionTypes';
import { formsActionTypes } from '../actionTypes/formsActionTypes';
import { FormInitState } from '../../types/store/initStateInterfaces';

const initState: FormInitState = {
  name: '',
  description: ''
};

const formsReducer = (state: FormInitState = initState, action: ActionType) => {
  switch(action.type) {
    case formsActionTypes.CHANGE_DEPARTMENT_NAME:
      return {
        ...state,
        name: action.payload
      };

    case formsActionTypes.CHANGE_DEPARTMENT_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      };

    default:
      return state;
  }
};

export default formsReducer;
