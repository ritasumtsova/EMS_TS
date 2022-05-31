import { ActionType } from '../../types/store/actionTypes';
import { modalsActionTypes } from '../actionTypes/modalsActionTypes';
import { ModalsInitState } from "../../types/store/initStateInterfaces";

const initState: ModalsInitState = {
  modalsStack: [],
  content: [],
};

const modalsReducer = (state: ModalsInitState = initState, action: ActionType) => {
  switch(action.type) {
    case modalsActionTypes.OPEN_MODAL:
      return {
        ...state,
        modalsStack: [...state.modalsStack, action.name],
        content: [...state.content, action.payload],
      };

    case modalsActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalsStack: state.modalsStack.slice(0, -1),
        content: state.content.slice(0, -1),
      };

    default:
      return state;
  }
};

export default modalsReducer;
