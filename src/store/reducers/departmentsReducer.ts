import { ActionType } from '../../types/store/actionTypes';
import { departmentsActionTypes } from '../actionTypes/departmentsActionTypes';
import { DepartmentsInitState } from "../../types/store/initStateInterfaces";

const initState: DepartmentsInitState = {
  departments: null
};

const departmentsReducer = (state: DepartmentsInitState = initState, action: ActionType) => {
  switch(action.type) {
    case departmentsActionTypes.FETCH_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload
      };

    case departmentsActionTypes.ADD_DEPARTMENT:
      return {
        ...state,
        department: [...state.departments?.data!, action.payload]
      };

    default:
      return state;
  }
};

export default departmentsReducer;
