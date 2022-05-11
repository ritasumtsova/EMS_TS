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
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  title,
  isOpen,
  closeModal,
  children,
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
        <Button color="primary" disabled type="submit">Save</Button>
        <Button onClick={closeModal} color="danger">Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalWindow;
