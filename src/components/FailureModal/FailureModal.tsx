import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { closeModal, closeAllModals } from '../../store/actionCreators/modalsActionCreators';

const FailureModal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Error</p>
      <Button color="primary" onClick={() => dispatch(closeModal())}>OK</Button>
      <Button color="secondary" onClick={() => dispatch(closeAllModals())}>Close all</Button>
    </>
  )
};

export default FailureModal;
