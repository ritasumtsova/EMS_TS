import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { openModal } from '../../store/actionCreators/modalsActionCreators';

interface DeleteButtonProps {
  name: string;
  title: string;
  modalForm: JSX.Element;
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  name,
  title,
  modalForm,
  id
}) => {
  const dispatch = useDispatch();

  const modalContent = {
    name,
    title,
    modalForm,
    id
  };

  const openModalHandler = () => {
    dispatch(openModal(name!, modalContent));
  };

  return (
    <Button
      className="DeleteButton__btn"
      color="danger"
      onClick={openModalHandler}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
