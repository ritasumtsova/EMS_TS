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
  const { content, modalsStack } = useSelector(modalsSelector);
  const currentModalContent = content.at(-1);

  const dispatch = useDispatch();

  const isOpen = modalsStack.find((name) => {
    return name === currentModalContent?.name;
  });



  return (
    <Modal
      centered
      backdrop
      isOpen={!!isOpen}
    >
      <ModalHeader>
        {currentModalContent?.title}
      </ModalHeader>
      <ModalBody>
        {currentModalContent?.modalForm}
      </ModalBody>
      <ModalFooter>
        <Button
          disabled
          color="primary"
          type="submit"
        >
          Save
        </Button>
        <Button
          onClick={() => dispatch(closeModal())}
          color="danger"
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalWindow;
