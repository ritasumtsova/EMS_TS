import { LoadingInitState } from "./../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export const loadingSelector = (state: rootState): LoadingInitState => state.loading;