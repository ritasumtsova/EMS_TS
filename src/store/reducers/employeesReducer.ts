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

    case employeesActionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees?.filter((employee) => {
          return employee._id !== action.payload.employeeId
        })
      };

    default:
      return state;
  }
};

export default employeesReducer;
