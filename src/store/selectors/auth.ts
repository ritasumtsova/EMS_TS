import { rootState } from '../../types/store/rootStateType';

export function authSelector(state: rootState) {
  return state.auth;
}
