import React, { useState, useMemo } from 'react';

import ModalContext from './ModalContext';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import { ModalWindowContent } from '../types/modals';

interface ModalContentProviderProps {
  children: React.ReactNode;
}

const ModalContextProvider: React.FC<ModalContentProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ModalWindowContent | undefined>(undefined);

  const openModal = (modalConfig: ModalWindowContent) => {
    setIsOpen(true);
    setContent(modalConfig);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submitHandler = () => {
    console.log('submit handler works');
  };

  const valueModalProvider = useMemo(() => {
    return {
      openModal,
      closeModal,
      submitHandler
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {isOpen
        && (
          <ModalWindow isOpen={isOpen} title={content!.title} closeModal={closeModal} submitHandler={submitHandler}>
            {content!.modalForm}
          </ModalWindow>
        )}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
