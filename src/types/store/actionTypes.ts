import { Employee } from './../components/employees';
import { loadingActionTypes } from '../../store/actionTypes/loadingActionTypes';
import { departmentsActionTypes } from '../../store/actionTypes/departmentsActionTypes';
import { departmentActionTypes } from '../../store/actionTypes/departmentActionTypes';
import { authActionTypes } from '../../store/actionTypes/authActionTypes';
import { modalsActionTypes } from '../../store/actionTypes/modalsActionTypes';
import { Departments, Department } from '../components/departments';
import { Auth } from './../components/auth';
import { ModalWindowContent } from './../components/modals';
import { employeesActionTypes } from '../../store/actionTypes/employeesActionTypes';

interface FETCH_START {
  type: loadingActionTypes.FETCH_START;
}

interface FETCH_END {
  type: loadingActionTypes.FETCH_END;
}

interface FETCH_FAILURE {
  type: loadingActionTypes.FETCH_FAILURE;
  payload: string;
}

interface FETCH_DEPARTMENTS {
  type: departmentsActionTypes.FETCH_DEPARTMENTS;
  payload: Departments | null;
}

interface FETCH_DEPARTMENT_BY_ID {
  type: departmentActionTypes.FETCH_DEPARTMENT_BY_ID;
  payload: Department | null;
}

interface ADD_DEPARTMENT {
  type: departmentsActionTypes.ADD_DEPARTMENT;
  payload: Department | null;
}

interface DELETE_DEPARTMENT {
  type: departmentsActionTypes.DELETE_DEPARTMENT;
  payload: string;
}

interface LOGIN {
  type: authActionTypes.LOGIN;
  payload: Auth;
}

interface OPEN_MODAL {
  type: modalsActionTypes.OPEN_MODAL;
  name: string;
  payload: ModalWindowContent;
}

interface CLOSE_MODAL {
  type: modalsActionTypes.CLOSE_MODAL;
}

interface CLOSE_ALL_MODALS {
  type: modalsActionTypes.CLOSE_ALL_MODALS;
}

interface ADD_EMPLOYEE {
  type: employeesActionTypes.ADD_EMPLOYEE;
  payload: Employee | null;
}

export type ActionType =
  FETCH_START
  | FETCH_END
  | FETCH_FAILURE
  | FETCH_DEPARTMENTS
  | FETCH_DEPARTMENT_BY_ID
  | ADD_DEPARTMENT
  | DELETE_DEPARTMENT
  | LOGIN
  | OPEN_MODAL
  | CLOSE_MODAL
  | CLOSE_ALL_MODALS
  | ADD_EMPLOYEE;