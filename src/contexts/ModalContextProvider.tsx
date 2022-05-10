import React, { useState } from 'react';

import { Context } from './ModalContext';
import ModalWindow from '../components/ModalWindow/ModalWindow';

export interface ModalContextProviderConfig {
  title: string;
  children: JSX.Element;
}

const ModalContextProvider: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setContent] = useState({});

  const openModal = (modalConfig: ModalContextProviderConfig) => {
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
    <Context.Provider value={valueModalProvider}>
      {isOpen
        && (
        <ModalWindow isOpen={isOpen} title={modalContent?.title} closeModal={closeModal}>
          {modalContent?.children}
        </ModalWindow>
      )}
      {children}
    </Context.Provider>
  );
};

export default ModalContextProvider;
