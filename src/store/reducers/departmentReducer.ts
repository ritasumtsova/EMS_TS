import { APIActionTypes } from "./../actionTypes/APIActionTypes";
import { ActionType } from '../../types/store/actionTypes';
import { departmentActionTypes } from '../actionTypes/departmentActionTypes';
import { DepartmentInitState } from "../../types/store/initStateInterfaces";

const initState: DepartmentInitState = {
  loading: false,
  department: null,
  errorMessage: ''
};

const departmentReducer = (state: DepartmentInitState = initState, action: ActionType) => {
  switch(action.type) {
    case APIActionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      };

    case departmentActionTypes.FETCH_DEPARTMENT_BY_ID:
      return {
        ...state,
        loading: false,
        department: action.payload,
        errorMessage: ''
      };

    case APIActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        department: null,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default departmentReducer;