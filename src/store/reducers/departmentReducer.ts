import { ActionType } from '../../types/store/actionTypes';
import { departmentActionTypes } from '../actionTypes/departmentActionTypes';
import { DepartmentInitState } from "../../types/store/initStateInterfaces";

const initState: DepartmentInitState = {
  loading: false,
  department: null,
  errorMsg: ''
};

const departmentReducer = (state: DepartmentInitState = initState, action: ActionType) => {
  switch(action.type) {
    case departmentActionTypes.FETCH_DEPARTMENT:
      return {
        ...state,
        loading: true
      };

    case departmentActionTypes.FETCH_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        department: action.payload,
        errorMsg: ''
      };

    case departmentActionTypes.FETCH_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        department: null,
        errorMsg: action.payload
      };

    default:
      return state;
  }
};

export default departmentReducer;