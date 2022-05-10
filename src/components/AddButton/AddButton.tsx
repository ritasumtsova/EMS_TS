import React, { useContext } from 'react';
import { Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Context } from '../../contexts/ModalContext';
import './AddButton.scss';

interface AddButtonProps {
  title: string;
  modalForm: React.FC;
}

const AddButton: React.FC<AddButtonProps> = ({ title, modalForm }) => {
  const openModalHandler = () => {
    const appContext = useContext(Context);

    appContext!.openModal({
      title,
      children: modalForm,
    });
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
