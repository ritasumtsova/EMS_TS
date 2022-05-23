import { rootState } from '../../types/store/rootStateType';

export function departmentSelector(state: rootState) {
  return state.department;
}
