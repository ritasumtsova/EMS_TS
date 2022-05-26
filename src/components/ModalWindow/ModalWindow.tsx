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
import { closeModal } from '../../store/actionCreators/modalsActionCreators';

const ModalWindow: React.FC = () => {
  const { isOpen, content } = useSelector(modalsSelector);

  const dispatch = useDispatch();

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
        <Button disabled color="primary" type="submit">Save</Button>
        <Button onClick={() => dispatch(closeModal(isOpen))} color="danger">Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalWindow;
