import { ModalsInitState } from "./../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export const modalsSelector = (state: rootState): ModalsInitState => state.modals;
