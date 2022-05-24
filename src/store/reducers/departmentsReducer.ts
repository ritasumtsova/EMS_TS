import { ActionType } from '../../types/store/actionTypes';
import { departmentsActionTypes } from '../actionTypes/departmentsActionTypes';
import { DepartmentsInitState } from "../../types/store/initStateInterfaces";

const initState: DepartmentsInitState = {
  loading: false,
  departments: null,
  // departmentInfo: null,
  errorMessage: ''
};

const departmentsReducer = (state: DepartmentsInitState = initState, action: ActionType) => {
  switch(action.type) {
    case departmentsActionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      };

    case departmentsActionTypes.FETCH_DEPARTMENTS:
      return {
        ...state,
        loading: false,
        departments: action.payload,
        errorMessage: ''
      };

    case departmentsActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        departments: null,
        errorMessage: action.payload
      };

    case departmentsActionTypes.ADD_DEPARTMENT:
      return {
        ...state,
        loading: false,
        department: action.payload,
        errorMessage: ''
      };

    default:
      return state;
  }
};

export default departmentsReducer;
