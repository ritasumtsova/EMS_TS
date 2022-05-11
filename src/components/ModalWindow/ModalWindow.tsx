import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';

interface ModalWindowProps {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  submitHandler: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  title,
  isOpen,
  closeModal,
  children,
  submitHandler,
}) => {
  return (
    <Modal
      centered
      backdrop
      isOpen={isOpen}
    >
      <ModalHeader>
        {title}
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button onClick={submitHandler} color="primary" type="submit">Save</Button>
        <Button onClick={closeModal} color="danger">Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalWindow;
