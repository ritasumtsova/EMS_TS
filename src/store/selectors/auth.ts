import { AuthInitState } from "./../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export function authSelector(state: rootState): AuthInitState {
  return state.auth;
}
