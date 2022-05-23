import { DepartmentsInitState } from "./../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export function departmentsSelector(state: rootState): DepartmentsInitState {
  return state.departments;
}
