import { ActionType } from '../../types/store/actionTypes';
import { modalsActionTypes } from '../actionTypes/modalsActionTypes';
import { ModalsInitState } from "../../types/store/initStateInterfaces";

const initState: ModalsInitState = {
  isOpen: false,
  content: null
};

const modalsReducer = (state: ModalsInitState = initState, action: ActionType) => {
  switch(action.type) {
    case modalsActionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        content: action.payload
      };

    case modalsActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      };

    default:
      return state;
  }
};

export default modalsReducer;
