import React from 'react';
import { ModalWindowContext } from '../types/modals';

const ModalContext = React.createContext<ModalWindowContext | null>(null);

export default ModalContext;
