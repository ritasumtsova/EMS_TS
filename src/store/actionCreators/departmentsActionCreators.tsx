import { ActionType } from '../../types/store/actionTypes';
import { Department, Departments, DepartmentsLimit, EditDepartment } from '../../types/components/departments';
import { departmentsActionTypes } from './../actionTypes/departmentsActionTypes';

export const getDepartments = (): ActionType => {
  return {
    type: departmentsActionTypes.GET_DEPARTMENTS,
  };
};

export const fetchDepartments = (departments: Departments): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_DEPARTMENTS,
    payload: departments
  };
};

export const getDepartmentsByName = (name: string): ActionType => {
  return {
    type: departmentsActionTypes.GET_DEPARTMENTS_BY_NAME,
    payload: name
  };
};

export const getDepartmentsByLimit = (data: DepartmentsLimit): ActionType => {
  return {
    type: departmentsActionTypes.GET_DEPARTMENTS_BY_LIMIT,
    payload: data
  };
};

export const fetchDepartmentsByLimit = (data: Departments): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_DEPARTMENTS_BY_LIMIT,
    payload: data
  };
};

export const fetchDepartmentsByName = (departments: Departments): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_DEPARTMENTS_BY_NAME,
    payload: departments
  };
};

export const addDepartment = (department: Department): ActionType => {
  return {
    type: departmentsActionTypes.ADD_DEPARTMENT,
    payload: department
  }
};

export const fetchNewDepartment = (newDepartment: Department): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_NEW_DEPARTMENT,
    payload: newDepartment
  }
};

export const editDepartment = (department: EditDepartment): ActionType => {
  return {
    type: departmentsActionTypes.EDIT_DEPARTMENT,
    payload: department
  }
};

export const fetchUpdatedDepartment = (updatedDepartment: Department): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_UPDATED_DEPARTMENT,
    payload: updatedDepartment
  };
};

export const deleteDepartment = (id: string): ActionType => {
  return {
    type: departmentsActionTypes.DELETE_DEPARTMENT,
    payload: id
  }
};

export const fetchDeletedDepartment = (id: string): ActionType => {
  return {
    type: departmentsActionTypes.FETCH_DELETED_DEPARTMENT,
    payload: id
  }
};
