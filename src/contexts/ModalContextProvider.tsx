import React, { useState } from 'react';

import ModalCtx from './ModalContext';
import ModalWindow from '../components/ModalWindow/ModalWindow';

const ModalContextProvider: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setContent] = useState(null);

  const openModal = (modalConfig) => {
    setIsOpen(true);
    setContent(modalConfig);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // render() {
  //   const { children } = this.props;
  //   const { modalOpened, modalContent } = this.state;
  const valueModalProvider = {
    openModal,
    closeModal,
  };

  return (
    <ModalCtx.Provider value={valueModalProvider}>
      {isOpen
        && (
        <ModalWindow isOpen={isOpen} title={modalContent?.title} closeModal={closeModal}>
          {modalContent?.children}
        </ModalWindow>
      )}
      {children}
    </ModalCtx.Provider>
  );
};

export default ModalContextProvider;
