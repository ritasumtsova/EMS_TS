import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { closeAllModals } from '../../store/actionCreators/modalsActionCreators';

const SuccessModal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Success!</p>
      <Button color="primary" onClick={() => dispatch(closeAllModals())}>OK</Button>
    </>
  )
};

export default SuccessModal;
