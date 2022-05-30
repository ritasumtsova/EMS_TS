import { FormInitState } from "../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export const formsSelector = (state: rootState): FormInitState => state.forms;