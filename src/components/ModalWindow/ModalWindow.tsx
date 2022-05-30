import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';

import { modalsSelector } from '../../store/selectors/modals';
import { openModal, closeModal } from '../../store/actionCreators/modalsActionCreators';
import EmployeeForm from '../EmployeeForm/EmployeeForm';

const ModalWindow: React.FC = () => {
  const { isOpen, content, activeModals } = useSelector(modalsSelector);

  const dispatch = useDispatch();

  const modalContent = {
    title: 'test modal in modal',
    modalForm: <EmployeeForm />
  };

  const fakeOpenModalHandler = () => {
    dispatch(openModal(modalContent));
  };

  return (
    <Modal
      centered
      backdrop
      isOpen={isOpen}
    >
      <ModalHeader>
        {content?.title}
      </ModalHeader>
      <ModalBody>
        {content?.modalForm}
      </ModalBody>
      <ModalFooter>
        <Button onClick={fakeOpenModalHandler} color="primary" type="submit">Save</Button>
        <Button
          onClick={() => dispatch(closeModal(activeModals[activeModals.length - 1]))}
          color="danger"
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalWindow;
