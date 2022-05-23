import { DepartmentInitState } from "./../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export const departmentSelector = (state: rootState): DepartmentInitState => state.department;
