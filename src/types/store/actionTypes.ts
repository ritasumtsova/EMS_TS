import { formsActionTypes } from './../../store/actionTypes/formsActionTypes';
import { loadingActionTypes } from '../../store/actionTypes/loadingActionTypes';
import { departmentsActionTypes } from '../../store/actionTypes/departmentsActionTypes';
import { departmentActionTypes } from '../../store/actionTypes/departmentActionTypes';
import { authActionTypes } from '../../store/actionTypes/authActionTypes';
import { modalsActionTypes } from '../../store/actionTypes/modalsActionTypes';
import { Departments, Department } from '../components/departments';
import { Auth } from './../components/auth';
import { ModalWindowContent } from './../components/modals';

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

interface LOGIN {
  type: authActionTypes.LOGIN;
  payload: Auth;
}

interface OPEN_MODAL {
  type: modalsActionTypes.OPEN_MODAL;
  payload: ModalWindowContent;
}

interface CLOSE_MODAL {
  type: modalsActionTypes.CLOSE_MODAL;
  payload: ModalWindowContent;
}

interface OPEN_MODAL {
  type: modalsActionTypes.OPEN_MODAL;
  payload: ModalWindowContent;
}

interface CLOSE_MODAL {
  type: modalsActionTypes.CLOSE_MODAL;
  payload: ModalWindowContent;
}

interface CHANGE_DEPARTMENT_NAME {
  type: formsActionTypes.CHANGE_DEPARTMENT_NAME;
  payload: string;
}

interface CHANGE_DEPARTMENT_DESCRIPTION {
  type: formsActionTypes.CHANGE_DEPARTMENT_DESCRIPTION;
  payload: string;
}

export type ActionType =
  FETCH_START
  | FETCH_END
  | FETCH_FAILURE
  | FETCH_DEPARTMENTS
  | FETCH_DEPARTMENT_BY_ID
  | ADD_DEPARTMENT
  | LOGIN
  | OPEN_MODAL
  | CLOSE_MODAL
  | CHANGE_DEPARTMENT_NAME
  | CHANGE_DEPARTMENT_DESCRIPTION;