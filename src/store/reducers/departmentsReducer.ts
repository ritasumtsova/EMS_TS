import { ActionType } from '../../types/store/actionTypes';
import { departmentsActionTypes } from '../actionTypes/departmentsActionTypes';
import { DepartmentsInitState } from "../../types/store/initStateInterfaces";

const initState: DepartmentsInitState = {
  departments: null
};

const departmentsReducer = (state: DepartmentsInitState = initState, action: ActionType) => {
  switch(action.type) {
    case departmentsActionTypes.GET_DEPARTMENTS:
      return {
        ...state
      };

    case departmentsActionTypes.FETCH_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload
      };

    case departmentsActionTypes.ADD_DEPARTMENT:
      return {
        ...state,
        department: action.payload
      };

    case departmentsActionTypes.FETCH_NEW_DEPARTMENT:
      return {
        ...state,
        departments: [...state.departments?.data!, action.payload]
      };

    case departmentsActionTypes.DELETE_DEPARTMENT:
      return {
        ...state,
        id: action.payload
      };

    case departmentsActionTypes.FETCH_DELETED_DEPARTMENT:
      return {
        ...state,
        departments: state.departments?.data.filter((department) =>{
          return department._id !== action.payload;
        })
      }; 

    default:
      return state;
  }
};

export default departmentsReducer;
