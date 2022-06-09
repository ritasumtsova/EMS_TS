import { ActionType } from '../../types/store/actionTypes';
import { employeesActionTypes } from '../actionTypes/employeesActionTypes';
import { EmployeesInitState } from "../../types/store/initStateInterfaces";

const initState: EmployeesInitState = {
  employees: null
};

const employeesReducer = (state: EmployeesInitState = initState, action: ActionType) => {
  switch(action.type) {
    case employeesActionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      };
    
    case employeesActionTypes.FETCH_NEW_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees!, action.payload]
      };

    case employeesActionTypes.EDIT_EMPLOYEE:
      return {
        ...state,
      };

    case employeesActionTypes.FETCH_UPDATED_EMPLOYEE:
      const updatedEmployee = state!.employees!.findIndex((employee) => {
        return employee._id === action.payload?._id;
      });
  
      return {
        ...state,
        employees: state.employees?.splice(updatedEmployee, 1, action.payload!)
      };

    case employeesActionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        data: action.payload
      };

    case employeesActionTypes.FETCH_DELETED_EMPLOYEE:
      return {
        ...state,
        employees: state.employees?.filter((employee) => {
          return employee._id !== action.payload
        })
      };

    default:
      return state;
  }
};

export default employeesReducer;
