import { ActionType } from '../../types/store/actionTypes';
import { modalsActionTypes } from './../actionTypes/modalsActionTypes';
import { ModalWindowContent } from './../../types/components/modals';

export const openModal = (name: string, payload: ModalWindowContent): ActionType => {
  return {
    type: modalsActionTypes.OPEN_MODAL,
    name,
    payload
  };
};

export const closeModal = (): ActionType => {
  return {
    type: modalsActionTypes.CLOSE_MODAL,
  };
};

export const closeAllModals = (): ActionType => {
  return {
    type: modalsActionTypes.CLOSE_ALL_MODALS,
  };
};
