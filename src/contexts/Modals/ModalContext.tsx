import React from 'react';
import { ModalWindowContext } from '../../types/components/modals';

const ModalContext = React.createContext<ModalWindowContext | null>(null);

export default ModalContext;
