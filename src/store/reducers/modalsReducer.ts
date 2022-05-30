import { ActionType } from '../../types/store/actionTypes';
import { modalsActionTypes } from '../actionTypes/modalsActionTypes';
import { ModalsInitState } from "../../types/store/initStateInterfaces";

const initState: ModalsInitState = {
  isOpen: false,
  content: null,
  activeModals: [],
};

const modalsReducer = (state: ModalsInitState = initState, action: ActionType) => {
  switch(action.type) {
    case modalsActionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        content: action.payload,
        activeModals: [
          ...state.activeModals,
          action.payload
        ]
      };

    case modalsActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: state.activeModals.filter((modal) => {
          return modal.title !== action.payload.title
        }).length > 0
        ? true
        : false,
        content: state.activeModals.at(-2),
        activeModals: state.activeModals.filter((modal) => {
          return modal.title !== action.payload.title
        })
      };

    default:
      return state;
  }
};

export default modalsReducer;
