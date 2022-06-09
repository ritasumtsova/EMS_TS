import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { openModal } from '../../store/actionCreators/modalsActionCreators';
import { ModalWindowContent } from '../../types/components/modals';

const EditButton: React.FC<ModalWindowContent> = ({
  name,
  title,
  modalForm,
  departmentId,
  employeeId,
}) => {
  const dispatch = useDispatch();

  const modalContent = {
    name,
    title,
    modalForm,
    departmentId,
    employeeId
  };

  const openModalHandler = () => {
    dispatch(openModal(name!, modalContent));
  };

  return (
    <Button
      className="EditButton__btn"
      color="primary"
      onClick={openModalHandler}
    >
      Edit
    </Button>
  );
};

export default EditButton;
