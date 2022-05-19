import { departmentsActionTypes } from "../../store/actionTypes/departmentsActionTypes";
import { Departments } from '../components/departments';

interface FETCH_DEPARTMENTS {
  type: departmentsActionTypes.FETCH_DEPARTMENTS;
}

interface FETCH_DEPARTMENTS_SUCCESS {
  type: departmentsActionTypes.FETCH_DEPARTMENTS_SUCCESS;
  payload: Departments | null;
}

interface FETCH_DEPARTMENTS_FAILURE {
  type: departmentsActionTypes.FETCH_DEPARTMENTS_FAILURE;
  payload: string;
}

export type ActionType = FETCH_DEPARTMENTS | FETCH_DEPARTMENTS_SUCCESS | FETCH_DEPARTMENTS_FAILURE;
