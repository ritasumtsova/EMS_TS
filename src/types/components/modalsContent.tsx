import MessageModal from "../../components/MessageModal/MessageModal";
import {
  ModalWindowContent,
  modalNames,
  modalTitles,
  modalMessages
} from "./modals";

export const addDepartmentContent: ModalWindowContent = {
  name: modalNames.SUCCESS,
  title: modalTitles.ADD_DEPARTMENT,
  modalForm: <MessageModal message={modalMessages.ADD_DEPARTMENT}/>
};

export const editDepartmentContent: ModalWindowContent = {
  name: modalNames.SUCCESS,
  title: modalTitles.EDIT_DEPARTMENT,
  modalForm: <MessageModal message={modalMessages.EDIT_DEPARTMENT}/>
};

export const deleteDepartmentContent: ModalWindowContent = {
  name: modalNames.SUCCESS,
  title: modalTitles.DELETE_DEPARTMENT,
  modalForm: <MessageModal message={modalMessages.DELETE_DEPARTMENT}/>
};

export const addEmployeeContent: ModalWindowContent = {
  name: modalNames.SUCCESS,
  title: modalTitles.ADD_EMPLOYEE,
  modalForm: <MessageModal message={modalMessages.ADD_EMPLOYEE}/>
};

export const editEmployeeContent: ModalWindowContent = {
  name: modalNames.SUCCESS,
  title: modalTitles.EDIT_EMPLOYEE,
  modalForm: <MessageModal message={modalMessages.EDIT_EMPLOYEE}/>
};

export const deleteEmployeeContent: ModalWindowContent = {
  name: modalNames.SUCCESS,
  title: modalTitles.DELETE_EMPLOYEE,
  modalForm: <MessageModal message={modalMessages.DELETE_EMPLOYEE}/>
};

export const failureContent: ModalWindowContent = {
  name: modalNames.FAILURE,
  title: modalTitles.FAILURE,
  modalForm: <MessageModal message={modalMessages.FAILURE}/>
};