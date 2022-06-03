import { ActionType } from '../../types/store/actionTypes';
import { modalsActionTypes } from '../actionTypes/modalsActionTypes';
import { ModalsInitState } from "../../types/store/initStateInterfaces";

const initState: ModalsInitState = {
  modalsStack: [],
  content: [],
  open: false
};

const modalsReducer = (state: ModalsInitState = initState, action: ActionType) => {
  switch(action.type) {
    case modalsActionTypes.OPEN_MODAL:
      return {
        ...state,
        modalsStack: [...state.modalsStack, action.name],
        content: [...state.content, action.payload],
        open: true
      };

    case modalsActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalsStack: state.modalsStack.slice(0, -1),
        content: state.content.slice(0, -1),
        open: !!(state.modalsStack.length > 1)
      };

    case modalsActionTypes.CLOSE_ALL_MODALS:
      return {
        ...state,
        modalsStack: [],
        content: [],
        open: false
      };

    default:
      return state;
  }
};

export default modalsReducer;
