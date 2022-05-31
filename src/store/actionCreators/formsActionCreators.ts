import { ActionType } from '../../types/store/actionTypes';
import { formsActionTypes } from '../actionTypes/formsActionTypes';

export const changeDepartmentName = (name: string): ActionType => {
  return {
    type: formsActionTypes.CHANGE_DEPARTMENT_NAME,
    payload: name
  };
};

export const changeDepartmentDescripton = (descrition: string): ActionType => {
  return {
    type: formsActionTypes.CHANGE_DEPARTMENT_DESCRIPTION,
    payload: descrition
  };
};
