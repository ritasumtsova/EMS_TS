import React, { useContext } from 'react';
import { Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import ModalContext from '../../contexts/ModalContext';
import { ModalWindowContent } from '../../types/modals';
import './AddButton.scss';

const AddButton: React.FC<ModalWindowContent> = ({ title, modalForm }) => {
  const modalContext = useContext(ModalContext);

  const openModalHandler = () => {
    modalContext!.openModal({
      title,
      modalForm,
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
