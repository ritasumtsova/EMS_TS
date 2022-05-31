import { ActionType } from '../../types/store/actionTypes';
import { departmentActionTypes } from '../actionTypes/departmentActionTypes';
import { DepartmentInitState } from "../../types/store/initStateInterfaces";

const initState: DepartmentInitState = {
  department: null
};

const departmentReducer = (state: DepartmentInitState = initState, action: ActionType) => {
  switch(action.type) {
    case departmentActionTypes.FETCH_DEPARTMENT_BY_ID:
      return {
        ...state,
        department: action.payload
      };

    default:
      return state;
  }
};

export default departmentReducer;