import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { closeModal, closeAllModals } from '../../store/actionCreators/modalsActionCreators';

interface MessageModalProps {
  title: string;
}

const MessageModal: React.FC<MessageModalProps> = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>{title}</p>
      <Button color="primary" onClick={() => dispatch(closeModal())}>OK</Button>
      <Button color="secondary" onClick={() => dispatch(closeAllModals())}>Close all</Button>
    </>
  )
};

export default MessageModal;
