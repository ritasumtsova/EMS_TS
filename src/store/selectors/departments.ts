import { rootState } from '../../types/store/rootStateType';

export function departmentsSelector(state: rootState) {
  return state.departments;
}
