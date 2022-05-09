import React from 'react';

interface ModalContext {
  openModal: MouseEventHandler<HTMLButtonElement>;
  closeModal: Function;
};

const ModalCtx = React.createContext<ModalContext | null>(null);

export default ModalCtx;
