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
import { modalNames } from '../../types/components/modals';
import { Department } from '../../types/components/departments';
import { AppThunkDispatch } from '../../types/store/appThunkTypes';

const ModalWindow: React.FC = () => {
  const { content, open } = useSelector(modalsSelector);
  const currentModalContent = content.at(-1);

  const dispatch = useDispatch();
  const thunkDispatch = useDispatch<AppThunkDispatch>();

  const submitHandler = () => {
    if (currentModalContent?.name === modalNames.ADD_DEPARTMENT
      && currentModalContent?.submitHandler) {
      const data: Department = {
        name,
        description
      };

      thunkDispatch(currentModalContent?.submitHandler(data));
    }
  };

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
