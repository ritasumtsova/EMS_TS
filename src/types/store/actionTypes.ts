import { APIActionTypes } from "../../store/actionTypes/APIActionTypes";
import { departmentsActionTypes } from "../../store/actionTypes/departmentsActionTypes";
import { departmentActionTypes } from "../../store/actionTypes/departmentActionTypes";
import { authActionTypes } from '../../store/actionTypes/authActionTypes';
import { modalsActionTypes } from '../../store/actionTypes/modalsActionTypes';
import { Departments, Department } from '../components/departments';
import { Auth } from './../components/auth';
import { ModalWindowContent } from './../components/modals';

interface FETCH_START {
  type: APIActionTypes.FETCH_START;
}

interface FETCH_FAILURE {
  type: APIActionTypes.FETCH_FAILURE;
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
  payload: boolean;
}

export type ActionType =
  FETCH_START
  | FETCH_FAILURE
  | FETCH_DEPARTMENTS
  | FETCH_DEPARTMENT_BY_ID
  | LOGIN
  | OPEN_MODAL
  | CLOSE_MODAL;