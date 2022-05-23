import { AuthInitState } from "./../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export const authSelector = (state: rootState): AuthInitState => state.auth;
