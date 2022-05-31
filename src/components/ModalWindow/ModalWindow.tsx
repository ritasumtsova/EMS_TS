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
import { formsSelector } from '../../store/selectors/formsSelectors';
import { Department } from '../../types/components/departments';

const ModalWindow: React.FC = () => {
  const { content, modalsStack } = useSelector(modalsSelector);
  const currentModalContent = content.at(-1);
  const { name, description } = useSelector(formsSelector);

  const dispatch = useDispatch();

  let formData: Department | null = null;
  const submitHandler = () => {
    formData = {
      name,
      description
    }
    console.log(formData);
    dispatch(currentModalContent?.submitHandler(name, description));
  }

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
          onClick={submitHandler}
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
