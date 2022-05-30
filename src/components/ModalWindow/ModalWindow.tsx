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
  const { isOpen, content, activeModals } = useSelector(modalsSelector);
  const { name, description } = useSelector(formsSelector);
  const dispatch = useDispatch();
  // console.log(content?.title);

  const submitHandler = () => {
    let formData: Department | null = null;

    if (content?.title) {
      formData = {
        name,
        description
      }
    }
    console.log(formData);

    dispatch(content?.submitHandler(formData));
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
        <Button
          onClick={submitHandler}
          color="primary"
          type="submit"
        >
          Save
        </Button>
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
