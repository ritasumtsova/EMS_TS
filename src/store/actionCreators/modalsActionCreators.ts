import { ActionType } from '../../types/store/actionTypes';
import { modalsActionTypes } from './../actionTypes/modalsActionTypes';
import { ModalWindowContent } from './../../types/components/modals';

export const openModal = (modalContent: ModalWindowContent): ActionType => {
  return {
    type: modalsActionTypes.OPEN_MODAL,
    payload: modalContent
  };
};

export const closeModal = (currentModal: ModalWindowContent): ActionType => {
  return {
    type: modalsActionTypes.CLOSE_MODAL,
    payload: currentModal 
  };
};
