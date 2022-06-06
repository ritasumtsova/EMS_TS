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
        employees: [...state.employees!, action.payload]
      };

    case employeesActionTypes.EDIT_EMPLOYEE:
      const updatedEmployee = state!.employees!.findIndex((employee) => {
        return employee._id === action.payload?._id;
      });
  
      return {
        ...state,
        employees: state.employees?.splice(updatedEmployee, 1, action.payload!)
      };

    default:
      return state;
  }
};

export default employeesReducer;
