import { ActionType } from '../../types/store/actionTypes';
import { departmentsActionTypes } from '../actionTypes/departmentsActionTypes';
import { DepartmentsInitState } from "../../types/store/initStateInterfaces";

const initState: DepartmentsInitState = {
  departments: null,
  departmentsPerPage: 5,
  totalDepartmentsCount: 0,
  currentPage: 1,
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
        departments: action.payload?.data,
        totalDepartmentsCount: action.payload?.count,
      };

    case departmentsActionTypes.GET_DEPARTMENTS_BY_NAME:
        return {
          ...state
        };
  
    case departmentsActionTypes.FETCH_DEPARTMENTS_BY_NAME:
      return {
        ...state,
        departments: action.payload?.data.length ? action.payload : null
      };

    case departmentsActionTypes.GET_DEPARTMENTS_BY_LIMIT:
      console.log(action.payload);
      return {
        ...state,
        currentPage: action.payload.currentPage
      };

    case departmentsActionTypes.FETCH_DEPARTMENTS_BY_LIMIT:
        return {
          ...state,
          departments: action.payload,
          totalDepartmentsCount: action.payload?.count,
        };

    case departmentsActionTypes.ADD_DEPARTMENT:
      return {
        ...state,
        // departments: [...state.departments?.data!, action.payload]
      };

    case departmentsActionTypes.FETCH_NEW_DEPARTMENT:
      return {
        ...state,
        departments: [...state.departments?.data!, action.payload]
      };

    case departmentsActionTypes.EDIT_DEPARTMENT:
        return {
          ...state,
          // departments: [...state.departments?.data!, action.payload]
        };

    case departmentsActionTypes.FETCH_UPDATED_DEPARTMENT:
      const updatedDepartment = state!.departments!.data.findIndex((department) => {
        return department._id === action.payload?._id;
      });

      return {
        ...state,
        departments: state.departments?.data.splice(updatedDepartment, 1, action.payload!),
        // department: [...state.departments?.data!, action.payload]
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
