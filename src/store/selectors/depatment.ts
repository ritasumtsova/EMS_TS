import { DepartmentInitState } from "./../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export function departmentSelector(state: rootState): DepartmentInitState {
  return state.department;
}
