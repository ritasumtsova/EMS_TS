import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// import ModalContext from '../../contexts/Modals/ModalContext';
import { ModalWindowContent } from '../../types/components/modals';
import './AddButton.scss';
// import { modalsSelector } from '../../store/selectors/modals';
import { openModal } from '../../store/actionCreators/modalsActionCreators';

const AddButton: React.FC<ModalWindowContent> = ({ title, modalForm, submitHandler }) => {
  // const modalContext = useContext(ModalContext);
  // const { isOpen  } = useSelector(modalsSelector);
  const modalContent = {
    title,
    modalForm,
    submitHandler
  };
  console.log(modalContent.submitHandler);
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal(modalContent))
    // modalContext!.openModal({
    //   title,
    //   modalForm,
    // });
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
