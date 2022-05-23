import { DepartmentsInitState } from "./../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export const departmentsSelector = (state: rootState): DepartmentsInitState => state.departments;
