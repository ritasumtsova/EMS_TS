import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { openModal } from '../../store/actionCreators/modalsActionCreators';
import './AddButton.scss';

interface AddButtonProps {
  name: string;
  title: string;
  modalForm: JSX.Element;
  submitHandler: any;
}

const AddButton: React.FC<AddButtonProps> = ({ name, title, modalForm, submitHandler }) => {
  const dispatch = useDispatch();

  const modalContent = {
    name,
    title,
    modalForm,
    submitHandler
  };

  const openModalHandler = () => {
    dispatch(openModal(name!, modalContent));
  };

  return (
    <Col className="AddButton" xs="4">
      <Button
        className="AddButton__btn"
        color="success"
        size="lg"
        block
        onClick={openModalHandler}
      >
        <span>
          {title}
        </span>
        <span className="AddButton__btn-icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </Button>
    </Col>
  );
};

export default AddButton;
