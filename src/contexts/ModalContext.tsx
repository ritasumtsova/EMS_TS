import React from 'react';

export interface AddButtonProps {
  title: string;
  children: React.FC;
}

export interface ModalContext {
  openModal: (modalConfig: AddButtonProps) => void;
  closeModal: () => void;
};

export const Context = React.createContext<ModalContext | null>(null);

