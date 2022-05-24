import { DepartmentsSelector } from "./../../types/store/selectorsTypes";
import { rootState } from '../../types/store/rootStateType';

export const departmentsSelector = (state: rootState): DepartmentsSelector => {
  return {
    departmentsInfo: state.departments,
    departmentById: state.department
  }
};
