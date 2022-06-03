import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { modalsSelector } from '../../store/selectors/modals';

const ModalWindow: React.FC = () => {
  const { content, open } = useSelector(modalsSelector);
  const currentModalContent = content.at(-1);

  return (
    <Modal
      centered
      backdrop
      isOpen={open}
    >
      <ModalHeader>
        {currentModalContent?.title}
      </ModalHeader>
      <ModalBody>
        {currentModalContent?.modalForm}
      </ModalBody>
    </Modal>
  );
};

export default ModalWindow;
