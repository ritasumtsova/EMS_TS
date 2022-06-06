import MessageModal from "../../components/MessageModal/MessageModal";

export interface ModalWindowContent {
  name: string;
  title: string;
  modalForm:  React.ReactNode;
}

export enum modalNames {
  ADD_DEPARTMENT = 'ADD_DEPARTMENT',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  EDIT_DEPARTMENT = 'EDIT_DEPARTMENT',
  EDIT_EMPLOYEE = 'EDIT_EMPLOYEE',
  DELETE_DEPARTMENT = 'DELETE_DEPARTMENT',
  DELETE_EMPLOYEE = 'DELETE_EMPLOYEE',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
};

export const modalContentSuccess: ModalWindowContent = {
  name: modalNames.SUCCESS,
  title: 'Success!',
  modalForm: <MessageModal title="Success!"/>
};

export const modalContentFailure: ModalWindowContent = {
  name: modalNames.FAILURE,
  title: 'Error',
  modalForm: <MessageModal title="Error"/>
};
